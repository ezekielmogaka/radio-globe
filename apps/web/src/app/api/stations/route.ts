import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CACHE_FILE = path.join(process.cwd(), 'data', 'stations-cache.json');
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface CacheData {
  stations: any[];
  timestamp: number;
  version: string;
}

/**
 * GET /api/stations - Returns cached stations or fetches fresh data
 */
export async function GET() {
  try {
    // Check if cache file exists and is fresh
    if (fs.existsSync(CACHE_FILE)) {
      const cacheData: CacheData = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      const age = Date.now() - cacheData.timestamp;

      // Return cache if fresh
      if (age < CACHE_DURATION) {
        console.log(`Serving ${cacheData.stations.length} stations from cache (age: ${Math.round(age / 1000 / 60)} min)`);
        return NextResponse.json({
          stations: cacheData.stations,
          cached: true,
          timestamp: cacheData.timestamp,
          count: cacheData.stations.length,
        });
      }

      // Cache is stale, trigger background refresh but return stale data
      console.log('Cache stale, triggering background refresh...');
      refreshCacheInBackground();
      
      return NextResponse.json({
        stations: cacheData.stations,
        cached: true,
        stale: true,
        timestamp: cacheData.timestamp,
        count: cacheData.stations.length,
      });
    }

    // No cache exists, fetch fresh data
    console.log('No cache found, fetching fresh data...');
    const stations = await fetchAndCacheStations();
    
    return NextResponse.json({
      stations,
      cached: false,
      timestamp: Date.now(),
      count: stations.length,
    });
  } catch (error) {
    console.error('Error in /api/stations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stations' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/stations/refresh - Force refresh cache
 */
export async function POST() {
  try {
    console.log('Manual refresh requested...');
    const stations = await fetchAndCacheStations();
    
    return NextResponse.json({
      success: true,
      count: stations.length,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error('Error refreshing cache:', error);
    return NextResponse.json(
      { error: 'Failed to refresh cache' },
      { status: 500 }
    );
  }
}

/**
 * Fetch stations from Radio Browser API and cache to JSON file
 */
async function fetchAndCacheStations(): Promise<any[]> {
  const baseUrl = 'https://de1.api.radio-browser.info/json';
  
  console.log('Fetching stations from Radio Browser API...');
  const response = await fetch(
    `${baseUrl}/stations?limit=50000&hidebroken=true&order=clickcount&reverse=true`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch from Radio Browser API');
  }

  const stations = await response.json();
  console.log(`Fetched ${stations.length} stations from API`);

  // Ensure data directory exists
  const dataDir = path.dirname(CACHE_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Save to cache file
  const cacheData: CacheData = {
    stations,
    timestamp: Date.now(),
    version: '1.0.0',
  };

  fs.writeFileSync(CACHE_FILE, JSON.stringify(cacheData, null, 2));
  console.log(`Cached ${stations.length} stations to ${CACHE_FILE}`);

  return stations;
}

/**
 * Background refresh (non-blocking)
 */
function refreshCacheInBackground() {
  fetchAndCacheStations().catch(err => {
    console.error('Background refresh failed:', err);
  });
}
