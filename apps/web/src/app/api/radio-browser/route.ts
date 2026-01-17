/**
 * Radio Browser API Proxy
 * 
 * Proxies requests to the Radio Browser API to:
 * 1. Avoid CORS issues on the client
 * 2. Add caching headers
 * 3. Handle rate limiting
 * 4. Provide a consistent API interface
 */

import { NextRequest, NextResponse } from "next/server";

// Radio Browser API servers
const API_SERVERS = [
  "https://de1.api.radio-browser.info",
  "https://nl1.api.radio-browser.info",
  "https://at1.api.radio-browser.info",
];

let currentServerIndex = 0;

function getNextServer(): string {
  const server = API_SERVERS[currentServerIndex];
  currentServerIndex = (currentServerIndex + 1) % API_SERVERS.length;
  return server;
}

// Try fetching from a specific server with timeout
async function fetchWithTimeout(url: string, timeout = 5000): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "RadioGlobe/1.0 (https://radio-globe.app)",
      },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get the path from the query params
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        { error: "Missing 'path' parameter" },
        { status: 400 }
      );
    }

    // Try each server until one succeeds
    let lastError: Error | null = null;
    
    for (let i = 0; i < API_SERVERS.length; i++) {
      const baseUrl = getNextServer();
      const targetUrl = new URL(path, baseUrl);

      // Forward all other query params
      searchParams.forEach((value, key) => {
        if (key !== "path") {
          targetUrl.searchParams.append(key, value);
        }
      });

      try {
        console.log(`[Radio Browser Proxy] Trying: ${targetUrl.toString()}`);

        const response = await fetchWithTimeout(targetUrl.toString(), 5000);

        if (!response.ok) {
          console.warn(`[Radio Browser Proxy] Server ${baseUrl} returned ${response.status}`);
          lastError = new Error(`Upstream error: ${response.statusText}`);
          continue;
        }

        const data = await response.json();

        // Return with cache headers
        return NextResponse.json(data, {
          headers: {
            "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
            "X-Radio-Browser-Server": baseUrl,
          },
        });
      } catch (fetchError) {
        console.warn(`[Radio Browser Proxy] Server ${baseUrl} failed:`, (fetchError as Error).message);
        lastError = fetchError as Error;
        continue;
      }
    }

    // All servers failed - return empty array instead of error for graceful degradation
    console.error(`[Radio Browser Proxy] All servers failed. Last error:`, lastError?.message);
    return NextResponse.json([], {
      headers: {
        "Cache-Control": "public, s-maxage=60",
      },
    });
  } catch (error) {
    console.error("[Radio Browser Proxy] Error:", error);
    // Return empty array for graceful degradation
    return NextResponse.json([], {
      headers: {
        "Cache-Control": "public, s-maxage=60",
      },
    });
  }
}

// Handle POST requests (for station clicks/votes)
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        { error: "Missing 'path' parameter" },
        { status: 400 }
      );
    }

    const baseUrl = getNextServer();
    const targetUrl = new URL(path, baseUrl);

    const response = await fetch(targetUrl.toString(), {
      method: "GET", // Radio Browser uses GET even for clicks/votes
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "RadioGlobe/1.0 (https://radio-globe.app)",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("[Radio Browser Proxy] POST Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
