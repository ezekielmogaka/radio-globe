/**
 * Radio Browser API Service
 * 
 * Integrates with the free, open-source Radio Browser API (radio-browser.info)
 * This API provides access to 30,000+ radio stations worldwide with:
 * - Real-time station data
 * - Geographic information
 * - Popularity metrics
 * - Stream URLs
 * 
 * @see https://api.radio-browser.info/
 */

import { RadioStation } from "../types";

// Radio Browser API servers (they recommend using DNS round-robin)
const API_SERVERS = [
  "https://de1.api.radio-browser.info",
  "https://nl1.api.radio-browser.info", 
  "https://at1.api.radio-browser.info",
];

// Use local API proxy for CORS and caching
const USE_LOCAL_PROXY = typeof window !== "undefined";
const LOCAL_PROXY_PATH = "/api/radio-browser";

interface RadioBrowserStation {
  changeuuid: string;
  stationuuid: string;
  serveruuid: string;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  tags: string;
  country: string;
  countrycode: string;
  iso_3166_2: string;
  state: string;
  language: string;
  languagecodes: string;
  votes: number;
  lastchangetime: string;
  lastchangetime_iso8601: string;
  codec: string;
  bitrate: number;
  hls: number;
  lastcheckok: number;
  lastchecktime: string;
  lastchecktime_iso8601: string;
  lastcheckoktime: string;
  lastcheckoktime_iso8601: string;
  lastlocalchecktime: string;
  lastlocalchecktime_iso8601: string;
  clicktimestamp: string;
  clicktimestamp_iso8601: string;
  clickcount: number;
  clicktrend: number;
  ssl_error: number;
  geo_lat: number | null;
  geo_long: number | null;
  has_extended_info: boolean;
}

interface RadioBrowserCountry {
  name: string;
  iso_3166_1: string;
  stationcount: number;
}

interface RadioBrowserTag {
  name: string;
  stationcount: number;
}

interface RadioBrowserLanguage {
  name: string;
  iso_639: string;
  stationcount: number;
}

interface SearchFilters {
  name?: string;
  country?: string;
  countrycode?: string;
  state?: string;
  language?: string;
  tag?: string;
  tagList?: string[];
  codec?: string;
  bitrateMin?: number;
  bitrateMax?: number;
  hasGeoInfo?: boolean;
  isHttps?: boolean;
  order?: "name" | "url" | "homepage" | "favicon" | "tags" | "country" | "state" | "language" | "votes" | "codec" | "bitrate" | "lastcheckok" | "lastchecktime" | "clicktimestamp" | "clickcount" | "clicktrend" | "changetimestamp" | "random";
  reverse?: boolean;
  offset?: number;
  limit?: number;
  hidebroken?: boolean;
}

/**
 * Radio Browser API Service
 * Provides methods to discover and search radio stations from the global database
 */
export class RadioBrowserApiService {
  private currentServerIndex = 0;
  private readonly requestTimeout = 10000; // 10 seconds

  /**
   * Get the base URL for API requests
   */
  private getBaseUrl(): string {
    if (USE_LOCAL_PROXY && typeof window !== "undefined") {
      return LOCAL_PROXY_PATH;
    }
    return API_SERVERS[this.currentServerIndex];
  }

  /**
   * Rotate to next server on failure
   */
  private rotateServer(): void {
    this.currentServerIndex = (this.currentServerIndex + 1) % API_SERVERS.length;
  }

  /**
   * Make an API request with automatic server rotation on failure
   */
  private async apiRequest<T>(
    endpoint: string,
    params: Record<string, string | number | boolean> = {}
  ): Promise<T> {
    const maxRetries = API_SERVERS.length;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        let url: URL;

        if (USE_LOCAL_PROXY) {
          // Use our Next.js API proxy
          url = new URL(LOCAL_PROXY_PATH, window.location.origin);
          url.searchParams.append("path", endpoint);
        } else {
          // Direct API call (server-side)
          const baseUrl = this.getBaseUrl();
          url = new URL(`${baseUrl}${endpoint}`);
        }
        
        // Add query params
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            url.searchParams.append(key, String(value));
          }
        });

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.requestTimeout);

        const response = await fetch(url.toString(), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return await response.json();
      } catch (error) {
        lastError = error as Error;
        console.warn(`Radio Browser API request failed (attempt ${attempt + 1}):`, error);
        this.rotateServer();
      }
    }

    throw lastError || new Error("All API servers failed");
  }

  /**
   * Convert Radio Browser station format to our RadioStation format
   */
  private mapStation(station: RadioBrowserStation): RadioStation {
    // Generate coordinates based on country if not provided
    let lat = station.geo_lat || 0;
    let lng = station.geo_long || 0;

    // If no geo info, try to assign approximate coordinates based on country
    if (!lat && !lng && station.countrycode) {
      const coords = this.getCountryCoordinates(station.countrycode);
      lat = coords.lat + (Math.random() - 0.5) * 5;
      lng = coords.lng + (Math.random() - 0.5) * 5;
    }

    return {
      id: station.stationuuid,
      name: station.name.trim(),
      url: station.url_resolved || station.url,
      genre: station.tags?.split(",").slice(0, 3).join(", ") || "Unknown",
      language: station.language || "Unknown",
      listeners: station.clickcount || 0,
      location: {
        lat,
        lng,
        country: station.country || "Unknown",
        city: station.state || "",
        countryCode: station.countrycode,
      },
      logo: station.favicon || undefined,
      website: station.homepage || undefined,
      homepage: station.homepage || undefined,
      bitrate: station.bitrate || undefined,
      codec: station.codec || undefined,
      isOnline: station.lastcheckok === 1,
      votes: station.votes,
      clickcount: station.clickcount,
      tags: station.tags?.split(",").map(t => t.trim()).filter(Boolean),
      source: "radio-browser",
    };
  }

  /**
   * Get approximate coordinates for a country code
   */
  private getCountryCoordinates(countryCode: string): { lat: number; lng: number } {
    const countryCoords: Record<string, { lat: number; lng: number }> = {
      US: { lat: 39.8, lng: -98.5 },
      GB: { lat: 54.0, lng: -2.0 },
      DE: { lat: 51.2, lng: 10.4 },
      FR: { lat: 46.2, lng: 2.2 },
      JP: { lat: 36.2, lng: 138.3 },
      AU: { lat: -25.3, lng: 133.8 },
      BR: { lat: -14.2, lng: -51.9 },
      IN: { lat: 20.6, lng: 79.0 },
      CN: { lat: 35.9, lng: 104.2 },
      RU: { lat: 61.5, lng: 105.3 },
      CA: { lat: 56.1, lng: -106.3 },
      MX: { lat: 23.6, lng: -102.6 },
      ES: { lat: 40.5, lng: -3.7 },
      IT: { lat: 41.9, lng: 12.6 },
      NL: { lat: 52.1, lng: 5.3 },
      BE: { lat: 50.5, lng: 4.5 },
      CH: { lat: 46.8, lng: 8.2 },
      AT: { lat: 47.5, lng: 14.6 },
      SE: { lat: 60.1, lng: 18.6 },
      NO: { lat: 60.5, lng: 8.5 },
      FI: { lat: 61.9, lng: 25.7 },
      DK: { lat: 56.3, lng: 9.5 },
      PL: { lat: 51.9, lng: 19.1 },
      UA: { lat: 48.4, lng: 31.2 },
      KR: { lat: 35.9, lng: 127.8 },
      ZA: { lat: -30.6, lng: 22.9 },
      AR: { lat: -38.4, lng: -63.6 },
      CL: { lat: -35.7, lng: -71.5 },
      CO: { lat: 4.6, lng: -74.3 },
      // Default fallback
      DEFAULT: { lat: 0, lng: 0 },
    };

    return countryCoords[countryCode.toUpperCase()] || countryCoords.DEFAULT;
  }

  // ===== PUBLIC API METHODS =====

  /**
   * Search stations by name (fuzzy search)
   */
  async searchByName(name: string, limit = 100): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/byname/" + encodeURIComponent(name), {
      limit,
      hidebroken: true,
      order: "clickcount",
      reverse: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Search stations with advanced filters
   */
  async searchStations(filters: SearchFilters): Promise<RadioStation[]> {
    const params: Record<string, string | number | boolean> = {
      hidebroken: filters.hidebroken ?? true,
      order: filters.order ?? "clickcount",
      reverse: filters.reverse ?? true,
      limit: filters.limit ?? 100,
      offset: filters.offset ?? 0,
    };

    if (filters.name) params.name = filters.name;
    if (filters.country) params.country = filters.country;
    if (filters.countrycode) params.countrycode = filters.countrycode;
    if (filters.state) params.state = filters.state;
    if (filters.language) params.language = filters.language;
    if (filters.tag) params.tag = filters.tag;
    if (filters.tagList) params.tagList = filters.tagList.join(",");
    if (filters.codec) params.codec = filters.codec;
    if (filters.bitrateMin) params.bitrateMin = filters.bitrateMin;
    if (filters.bitrateMax) params.bitrateMax = filters.bitrateMax;
    if (filters.hasGeoInfo) params.has_geo_info = filters.hasGeoInfo;
    if (filters.isHttps) params.is_https = filters.isHttps;

    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/search", params);
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get top stations by click count (most popular)
   */
  async getTopStations(limit = 100): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/topclick/" + limit, {
      hidebroken: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get trending stations (highest click trend)
   */
  async getTrendingStations(limit = 50): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/topvote/" + limit, {
      hidebroken: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get recently changed/added stations
   */
  async getRecentStations(limit = 50): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/lastchange/" + limit, {
      hidebroken: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get stations by country
   */
  async getStationsByCountry(country: string, limit = 100): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/bycountry/" + encodeURIComponent(country), {
      limit,
      hidebroken: true,
      order: "clickcount",
      reverse: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get stations by country code (ISO 3166-1)
   */
  async getStationsByCountryCode(countryCode: string, limit = 100): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/bycountrycodeexact/" + countryCode.toUpperCase(), {
      limit,
      hidebroken: true,
      order: "clickcount",
      reverse: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get stations by tag/genre
   */
  async getStationsByTag(tag: string, limit = 100): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/bytag/" + encodeURIComponent(tag), {
      limit,
      hidebroken: true,
      order: "clickcount",
      reverse: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get stations by language
   */
  async getStationsByLanguage(language: string, limit = 100): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/bylanguage/" + encodeURIComponent(language), {
      limit,
      hidebroken: true,
      order: "clickcount",
      reverse: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get stations with geo coordinates
   */
  async getStationsWithGeoInfo(limit = 500): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/search", {
      has_geo_info: true,
      limit,
      hidebroken: true,
      order: "clickcount",
      reverse: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get all available countries
   */
  async getCountries(): Promise<RadioBrowserCountry[]> {
    return this.apiRequest<RadioBrowserCountry[]>("/json/countries", {
      order: "stationcount",
      reverse: true,
    });
  }

  /**
   * Get all available tags/genres
   */
  async getTags(limit = 100): Promise<RadioBrowserTag[]> {
    return this.apiRequest<RadioBrowserTag[]>("/json/tags", {
      order: "stationcount",
      reverse: true,
      limit,
    });
  }

  /**
   * Get all available languages
   */
  async getLanguages(): Promise<RadioBrowserLanguage[]> {
    return this.apiRequest<RadioBrowserLanguage[]>("/json/languages", {
      order: "stationcount",
      reverse: true,
    });
  }

  /**
   * Report a station click (helps with statistics)
   */
  async reportStationClick(stationId: string): Promise<void> {
    try {
      await this.apiRequest(`/json/url/${stationId}`);
    } catch (error) {
      console.warn("Failed to report station click:", error);
    }
  }

  /**
   * Vote for a station (increases popularity)
   */
  async voteForStation(stationId: string): Promise<boolean> {
    try {
      const result = await this.apiRequest<{ ok: boolean }>(`/json/vote/${stationId}`);
      return result.ok;
    } catch (error) {
      console.warn("Failed to vote for station:", error);
      return false;
    }
  }

  /**
   * Get stations near a location
   */
  async getStationsNearLocation(
    lat: number,
    lng: number,
    radiusKm = 500,
    limit = 50
  ): Promise<RadioStation[]> {
    // Radio Browser doesn't have direct geo-search, so we search by country
    // and filter by distance
    const allStations = await this.getStationsWithGeoInfo(500);
    
    const stationsWithDistance = allStations
      .map(station => ({
        ...station,
        distance: this.haversineDistance(lat, lng, station.location.lat, station.location.lng),
      }))
      .filter(s => s.distance <= radiusKm)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);

    return stationsWithDistance;
  }

  /**
   * Calculate distance between two points (Haversine formula)
   */
  private haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  /**
   * Discover random stations for exploration
   */
  async discoverRandomStations(limit = 20): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/search", {
      order: "random",
      limit,
      hidebroken: true,
      has_geo_info: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Get HD quality stations (high bitrate)
   */
  async getHDStations(limit = 50): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/search", {
      bitrateMin: 256,
      order: "clickcount",
      reverse: true,
      limit,
      hidebroken: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Discover stations by mood/vibe (maps moods to tags)
   */
  async discoverByMood(mood: string, limit = 30): Promise<RadioStation[]> {
    const moodToTags: Record<string, string[]> = {
      chill: ["chill", "ambient", "relax", "lounge", "easy listening"],
      energetic: ["dance", "electronic", "edm", "house", "techno"],
      focus: ["classical", "instrumental", "ambient", "study", "piano"],
      party: ["party", "hits", "top 40", "dance", "pop"],
      workout: ["workout", "gym", "electronic", "rock", "metal"],
      romantic: ["love songs", "romantic", "ballads", "soul", "r&b"],
      nostalgic: ["oldies", "80s", "70s", "90s", "classic rock"],
      world: ["world", "latin", "african", "asian", "reggae"],
      jazz: ["jazz", "smooth jazz", "blues", "swing", "bebop"],
      news: ["news", "talk", "information", "public radio"],
    };

    const tags = moodToTags[mood.toLowerCase()] || [mood];
    const allStations: RadioStation[] = [];
    
    // Fetch from multiple tags and combine
    for (const tag of tags.slice(0, 3)) {
      try {
        const stations = await this.getStationsByTag(tag, Math.ceil(limit / tags.length));
        allStations.push(...stations);
      } catch {}
    }

    // Dedupe and shuffle
    const uniqueMap = new Map(allStations.map(s => [s.id, s]));
    const unique = Array.from(uniqueMap.values());
    return this.shuffleArray(unique).slice(0, limit);
  }

  /**
   * Get stations from a specific continent
   */
  async getStationsByContinent(continent: string, limit = 100): Promise<RadioStation[]> {
    const continentCountries: Record<string, string[]> = {
      europe: ["DE", "FR", "GB", "IT", "ES", "NL", "BE", "AT", "CH", "SE", "NO", "FI", "DK", "PL", "UA", "CZ", "PT", "GR", "IE", "HU"],
      asia: ["JP", "KR", "CN", "IN", "TH", "VN", "ID", "MY", "PH", "SG", "TW", "HK", "PK", "BD", "LK"],
      africa: ["ZA", "EG", "NG", "KE", "GH", "TZ", "MA", "DZ", "TN", "UG", "ET", "SN"],
      northamerica: ["US", "CA", "MX"],
      southamerica: ["BR", "AR", "CL", "CO", "PE", "VE", "EC", "UY", "PY", "BO"],
      oceania: ["AU", "NZ", "FJ", "PG"],
    };

    const countries = continentCountries[continent.toLowerCase()] || [];
    if (countries.length === 0) return [];

    const allStations: RadioStation[] = [];
    const stationsPerCountry = Math.ceil(limit / Math.min(countries.length, 5));

    // Fetch from top 5 countries in the continent
    for (const countryCode of countries.slice(0, 5)) {
      try {
        const stations = await this.getStationsByCountryCode(countryCode, stationsPerCountry);
        allStations.push(...stations);
      } catch {}
    }

    return allStations.slice(0, limit);
  }

  /**
   * Get live sports and events stations
   */
  async getSportsStations(limit = 50): Promise<RadioStation[]> {
    const sportsTags = ["sports", "football", "soccer", "basketball", "baseball", "sports talk"];
    const allStations: RadioStation[] = [];

    for (const tag of sportsTags.slice(0, 3)) {
      try {
        const stations = await this.getStationsByTag(tag, 20);
        allStations.push(...stations);
      } catch {}
    }

    const uniqueMap = new Map(allStations.map(s => [s.id, s]));
    return Array.from(uniqueMap.values()).slice(0, limit);
  }

  /**
   * Get stations similar to a given station (by tags and country)
   */
  async getSimilarStations(station: RadioStation, limit = 20): Promise<RadioStation[]> {
    const tags = station.tags || station.genre?.split(",").map(t => t.trim()) || [];
    const allStations: RadioStation[] = [];

    // Search by primary tag
    if (tags.length > 0) {
      try {
        const byTag = await this.getStationsByTag(tags[0], 30);
        allStations.push(...byTag.filter(s => s.id !== station.id));
      } catch {}
    }

    // Search by country
    if (station.location?.country) {
      try {
        const byCountry = await this.getStationsByCountry(station.location.country, 20);
        allStations.push(...byCountry.filter(s => s.id !== station.id));
      } catch {}
    }

    const uniqueMap = new Map(allStations.map(s => [s.id, s]));
    return Array.from(uniqueMap.values()).slice(0, limit);
  }

  /**
   * Get currently playing/most active stations (recently clicked)
   */
  async getActiveNow(limit = 30): Promise<RadioStation[]> {
    const data = await this.apiRequest<RadioBrowserStation[]>("/json/stations/lastclick/" + limit, {
      hidebroken: true,
    });
    return data.map(s => this.mapStation(s));
  }

  /**
   * Smart discovery - combines multiple discovery methods
   */
  async smartDiscover(options: {
    mood?: string;
    continent?: string;
    language?: string;
    minBitrate?: number;
    limit?: number;
  } = {}): Promise<RadioStation[]> {
    const { mood, continent, language, minBitrate = 128, limit = 50 } = options;
    const allStations: RadioStation[] = [];

    // Build a diverse discovery pool
    const fetchPromises: Promise<RadioStation[]>[] = [];

    if (mood) {
      fetchPromises.push(this.discoverByMood(mood, 20));
    }
    if (continent) {
      fetchPromises.push(this.getStationsByContinent(continent, 20));
    }
    if (language) {
      fetchPromises.push(this.getStationsByLanguage(language, 20));
    }
    
    // Always add some random high-quality stations
    fetchPromises.push(this.discoverRandomStations(15));
    fetchPromises.push(this.getTrendingStations(10));

    const results = await Promise.allSettled(fetchPromises);
    
    results.forEach(result => {
      if (result.status === "fulfilled") {
        allStations.push(...result.value);
      }
    });

    // Filter by bitrate and dedupe
    const filtered = allStations.filter(s => !s.bitrate || s.bitrate >= minBitrate);
    const uniqueMap = new Map(filtered.map(s => [s.id, s]));
    return this.shuffleArray(Array.from(uniqueMap.values())).slice(0, limit);
  }

  /**
   * Shuffle array (Fisher-Yates)
   */
  private shuffleArray<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}

// Export singleton instance
export const radioBrowserApi = new RadioBrowserApiService();
