import { RadioStation } from "../types";
import {
  buildCityIndex,
  buildCountryIndex,
  buildGenreIndex,
  distributeStationsByCountry,
  filterStationsByCity,
  filterStationsByCountry,
  filterStationsByTag,
  searchStationsInCache,
  summarizeCountries,
  summarizeTags,
} from "./stationCacheHelpers";
import { enrichStationsWithWof } from "./location/wofEnrichmentService";
import { loadNaturalEarthCountries, loadNaturalEarthRegions } from "./location/naturalEarthService";

interface CachedStations {
  data: RadioStation[];
  timestamp: number;
  source: "file" | "fallback" | "api";
}

interface CatalogMeta {
  total: number;
  version: string | null;
  generatedAt: number | null;
}

type CacheKey = "all" |
  `country:${string}` |
  `genre:${string}` |
  `city:${string}` |
  `tag:${string}` |
  `search:${string}` |
  `region:${string}` |
  `top:${number}` |
  `progressive:${number}` |
  `global_distributed`;

function resolveApiUrl(path: string): string {
  if (typeof window !== "undefined") {
    return path;
  }

  const envBase = process.env.NEXT_PUBLIC_APP_URL
    || process.env.NEXT_PUBLIC_SITE_URL
    || process.env.NEXTAUTH_URL
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  const fallbackBase = `http://localhost:${process.env.PORT ?? "3000"}`;
  const base = envBase ?? fallbackBase;
  const normalizedBase = base.includes("://") ? base : `http://${base}`;
  return new URL(path, normalizedBase).toString();
}

/**
 * Radio discovery service that favours our server-side JSON cache before hitting the public API.
 * This reduces latency, avoids rate limits, and keeps the UI snappy even with large datasets.
 */
export class RadioDiscoveryService {
  private readonly cache = new Map<CacheKey, CachedStations>();
  private readonly meta = new Map<string, CatalogMeta>();
  private readonly cacheExpiryMs = 5 * 60 * 1000;
  private readonly cacheWarmupPromise: Promise<void>;
  private hydrated = false;

  constructor() {
    this.cacheWarmupPromise = this.hydrateFromServerCache();
  }

  /**
   * Get ALL stations from server-side cache (JSON file)
   */
  async getAllStations(): Promise<RadioStation[]> {
    await this.cacheWarmupPromise;
    const cached = this.cache.get("all");
    if (cached) {
      return cached.data;
    }
    return this.getFallbackStations();
  }

  /**
   * Force refresh the server cache
   */
  async refreshCache(): Promise<void> {
    try {
      const response = await fetch(resolveApiUrl("/api/stations/refresh"), {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to trigger cache refresh");
      }

      await this.hydrateFromServerCache(true);
    } catch (error) {
      console.warn("Failed to refresh cache:", error);
    }
  }

  /**
   * Search radio stations from Radio Browser API
   */
  async searchOnlineStations(
    query: string,
    limit: number = 50,
  ): Promise<RadioStation[]> {
    await this.cacheWarmupPromise;
    const cacheKey = `search:${query.toLowerCase()}` as CacheKey;
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      return cached.slice(0, limit);
    }

    const stations = searchStationsInCache(this.getAllCachedStations(), query);
    this.setCache(cacheKey, stations);
    return stations.slice(0, limit);
  }

  /**
   * Get stations by country from Radio Browser API
   */
  async getStationsByCountry(
    country: string,
    limit: number = 100,
  ): Promise<RadioStation[]> {
    await this.cacheWarmupPromise;
    const normalized = this.normalizeCountryKey(country);
    const cacheKey = `country:${normalized}` as CacheKey;
    const cached = this.getFromCache(cacheKey);
    const base = cached || filterStationsByCountry(this.getAllCachedStations(), normalized);
    this.setCache(cacheKey, base);
    return base.slice(0, limit);
  }

  /**
   * Get top stations globally with country-based distribution
   */
  async getTopStations(limit: number = 5000): Promise<RadioStation[]> {
    await this.cacheWarmupPromise;
    const cacheKey = `top:${limit}` as CacheKey;
    const cached = this.getFromCache(cacheKey);
    if (cached) {
      return cached;
    }

    const sorted = this.getAllCachedStations()
      .slice()
      .sort((a, b) => (b.listeners || 0) - (a.listeners || 0));

    const result = sorted.slice(0, limit);
    this.setCache(cacheKey, result);
    return result;
  }

  /**
   * Load stations with geographic distribution for better global coverage
   */
  async getGlobalStationsWithDistribution(): Promise<RadioStation[]> {
    await this.cacheWarmupPromise;
    const cacheKey = "global_distributed" as CacheKey;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const distributed = distributeStationsByCountry(this.getAllCachedStations(), 5000);

    this.setCache(cacheKey, distributed);
    return distributed;
  }

  /**
   * Get stations within a geographic region
   */
  async getStationsByRegion(
    bounds: {
      north: number;
      south: number;
      east: number;
      west: number;
    },
    limit: number = 500
  ): Promise<RadioStation[]> {
    const cacheKey = `region:${bounds.north}:${bounds.south}:${bounds.east}:${bounds.west}:${limit}` as CacheKey;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached.slice(0, limit);

    try {
      // Radio Browser doesn't have direct geographic bounds API, so we'll get by popular countries in region
      const countriesInRegion = this.getCountriesInBounds(bounds);
      const allStations: RadioStation[] = [];

      for (const country of countriesInRegion) {
        const countryStations = await this.getStationsByCountry(country, Math.floor(limit / countriesInRegion.length));
        allStations.push(...countryStations);
      }

      // Filter stations that are actually within bounds
      const stationsInBounds = allStations.filter(station => 
        station.location.lat >= bounds.south &&
        station.location.lat <= bounds.north &&
        station.location.lng >= bounds.west &&
        station.location.lng <= bounds.east
      );

      this.setCache(cacheKey, stationsInBounds);
      return stationsInBounds.slice(0, limit);
    } catch (error) {
      console.warn("Failed to fetch regional stations:", error);
      return [];
    }
  }

  /**
   * Get progressive stations based on zoom level
   */
  async getProgressiveStations(
    zoomLevel: number,
    visibleRegion?: {
      north: number;
      south: number; 
      east: number;
      west: number;
    }
  ): Promise<RadioStation[]> {
    // Adjust station count based on zoom level
    const stationCount = Math.min(2000, Math.max(100, Math.floor(zoomLevel * 300)));

    if (visibleRegion && zoomLevel > 3) {
      // High zoom - get regional stations
      return this.getStationsByRegion(visibleRegion, stationCount);
    } else {
      // Low zoom - get global top stations
      return this.getTopStations(stationCount);
    }
  }

  /**
   * Get stations by tag/genre
   */
  async getStationsByTag(
    tag: string,
    limit: number = 50,
  ): Promise<RadioStation[]> {
    const normalized = tag.trim().toLowerCase();
    const cacheKey = `tag:${normalized}` as CacheKey;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached.slice(0, limit);

    const sorted = filterStationsByTag(this.getAllCachedStations(), normalized);
    this.setCache(cacheKey, sorted);
    return sorted.slice(0, limit);
  }

  /**
   * Get stations by city from Radio Browser API
   */
  async getStationsByCity(
    city: string,
    limit: number = 50,
  ): Promise<RadioStation[]> {
    const normalized = city.trim().toLowerCase();
    const cacheKey = `city:${normalized}` as CacheKey;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached.slice(0, limit);

    const sorted = filterStationsByCity(this.getAllCachedStations(), normalized);
    this.setCache(cacheKey, sorted);
    return sorted.slice(0, limit);
  }

  /**
   * Get available countries
   */
  async getCountries(): Promise<
    Array<{ name: string; iso: string; stationcount: number }>
  > {
    await this.cacheWarmupPromise;
    return summarizeCountries(this.getAllCachedStations());
  }

  /**
   * Get available tags/genres
   */
  async getTags(): Promise<Array<{ name: string; stationcount: number }>> {
    await this.cacheWarmupPromise;
    return summarizeTags(this.getAllCachedStations());
  }

  /**
   * Map Radio Browser API response to our RadioStation format
   */
  private mapRadioBrowserStations(data: any[]): RadioStation[] {
    return data
      .filter((station) => station.url && station.name)
      .map((station, index) => {
        let lat = parseFloat(station.geo_lat) || 0;
        let lng = parseFloat(station.geo_long) || 0;

        // If no coordinates, assign default location based on country
        if (lat === 0 && lng === 0) {
          const defaultCoords = this.getDefaultCountryCoordinates(
            station.country,
          );
          lat = defaultCoords.lat + (Math.random() - 0.5) * 2; // Add small random offset
          lng = defaultCoords.lng + (Math.random() - 0.5) * 2;
        }

        return {
          id: station.stationuuid || `station-${index}`,
          name: station.name || "Unknown Station",
          url: station.url,
          location: {
            city: station.state || "Unknown",
            country: station.country || "Unknown",
            countryCode: station.countrycode || undefined,
            lat,
            lng,
          },
          genre: station.tags || station.genre || "Various",
          language: station.language || "Unknown",
          listeners: station.clickcount || 0,
          bitrate: station.bitrate || 128,
          description: station.homepage || "",
          isPublic: true,
          source: "radio-browser" as const,
        };
      })
      .filter(
        (station) => station.location.lat !== 0 || station.location.lng !== 0,
      ); // Filter out stations without coordinates
  }

  /**
   * Cache management
   */
  private wrap(data: RadioStation[], source: CachedStations["source"]): CachedStations {
    return {
      data,
      timestamp: Date.now(),
      source,
    };
  }

  private getAllCachedStations(): RadioStation[] {
    return this.cache.get("all")?.data || [];
  }

  private getFromCache(key: CacheKey): RadioStation[] | null {
    const cached = this.cache.get(key);
    if (!cached) return null;
    if (Date.now() - cached.timestamp > this.cacheExpiryMs) {
      this.cache.delete(key);
      return null;
    }
    return cached.data;
  }

  private setCache(key: CacheKey, data: RadioStation[], source: CachedStations["source"] = "file"): void {
    this.cache.set(key, this.wrap(data, source));
  }

  private async hydrateFromServerCache(force = false): Promise<void> {
    if (this.hydrated && !force) return;

    const [countries, regions] = await Promise.all([
      loadNaturalEarthCountries(),
      loadNaturalEarthRegions(),
    ]);

    try {
      const response = await fetch(resolveApiUrl("/api/stations"));
      if (!response.ok) {
        throw new Error("Failed to fetch stations from cache API");
      }

      const payload = await response.json();
      const mappedStations = this.mapRadioBrowserStations(payload.stations || []);
      const stations = await enrichStationsWithWof(mappedStations, countries, regions);
      this.setCache("all", stations, payload.cached ? "file" : "api");
      this.meta.set("all", {
        total: stations.length,
        version: payload.version ?? null,
        generatedAt: payload.timestamp ?? null,
      });

      // Precompute indexes for quicker lookups
      this.indexCountries(stations);
      this.indexGenres(stations);
      this.indexCities(stations);

      this.hydrated = true;
    } catch (error) {
      console.warn("Failed to hydrate cache:", error);
      const fallback = await enrichStationsWithWof(this.getFallbackStations(), countries, regions);
      this.setCache("all", fallback, "fallback");
    }
  }

  private indexCountries(stations: RadioStation[]): void {
    const countryIndex = buildCountryIndex(stations);
    countryIndex.forEach((list, key) => {
      this.setCache(`country:${key}` as CacheKey, list);
    });
  }

  private indexGenres(stations: RadioStation[]): void {
    const genreIndex = buildGenreIndex(stations);
    genreIndex.forEach((list, key) => {
      this.setCache(`genre:${key}` as CacheKey, list);
      this.setCache(`tag:${key}` as CacheKey, list);
    });
  }

  private indexCities(stations: RadioStation[]): void {
    const cityIndex = buildCityIndex(stations);
    cityIndex.forEach((list, key) => {
      this.setCache(`city:${key}` as CacheKey, list);
    });
  }

  /**
   * Get default coordinates for a country
   */
  private getDefaultCountryCoordinates(country: string): {
    lat: number;
    lng: number;
  } {
    const countryDefaults: { [key: string]: { lat: number; lng: number } } = {
      Germany: { lat: 51.1657, lng: 10.4515 },
      "United States": { lat: 39.8283, lng: -98.5795 },
      USA: { lat: 39.8283, lng: -98.5795 },
      "United Kingdom": { lat: 55.3781, lng: -3.436 },
      UK: { lat: 55.3781, lng: -3.436 },
      France: { lat: 46.2276, lng: 2.2137 },
      Italy: { lat: 41.8719, lng: 12.5674 },
      Spain: { lat: 40.4637, lng: -3.7492 },
      Canada: { lat: 56.1304, lng: -106.3468 },
      Australia: { lat: -25.2744, lng: 133.7751 },
      Japan: { lat: 36.2048, lng: 138.2529 },
      Brazil: { lat: -14.235, lng: -51.9253 },
      Netherlands: { lat: 52.1326, lng: 5.2913 },
      Austria: { lat: 47.5162, lng: 14.5501 },
      Switzerland: { lat: 46.8182, lng: 8.2275 },
    };

    return countryDefaults[country] || { lat: 0, lng: 0 };
  }

  /**
   * Calculate distance between two coordinates
   */
  private calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /**
   * Get countries that intersect with geographic bounds
   */
  private getCountriesInBounds(bounds: {
    north: number;
    south: number;
    east: number;
    west: number;
  }): string[] {
    // Simplified region to country mapping
    const allCountries = [
      "United States", "Canada", "Mexico", "Brazil", "Argentina", "Chile",
      "United Kingdom", "France", "Germany", "Italy", "Spain", "Netherlands",
      "Russia", "China", "Japan", "South Korea", "India", "Australia",
      "South Africa", "Egypt", "Nigeria", "Kenya"
    ];

    // For now, return all major countries. In a real implementation,
    // you'd have a proper geographic database
    return allCountries.slice(0, 8);
  }

  /**
   * Get fallback stations when API fails
   */
  private getFallbackStations(): RadioStation[] {
    // Return a small set of popular global stations as fallback
    return [
      {
        id: "fallback-bbc1",
        name: "BBC Radio 1",
        url: "http://stream.live.vc.bbcmedia.co.uk/bbc_radio_one",
        location: { city: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278 },
        genre: "Pop",
        language: "English",
        listeners: 1000000,
        source: "curated" as const
      },
      {
        id: "fallback-npr",
        name: "NPR News",
        url: "https://npr-ice.streamguys1.com/live.mp3",
        location: { city: "Washington DC", country: "United States", lat: 38.9072, lng: -77.0369 },
        genre: "News",
        language: "English", 
        listeners: 500000,
        source: "curated" as const
      }
    ];
  }

  private normalizeCountryKey(country: string): string {
    return country.trim().toLowerCase();
  }
}

// Singleton instance
export const radioDiscoveryService = new RadioDiscoveryService();
