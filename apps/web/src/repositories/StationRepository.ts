import { IStationRepository } from "../domain/interfaces";
import { RadioStation } from "../types";
import { radioDiscoveryService } from "../services/radioDiscoveryService";

/**
 * Concrete implementation of station repository using radioDiscoveryService
 * Follows Repository pattern to abstract data access
 */
export class StationRepository implements IStationRepository {
  private cache = new Map<string, RadioStation[]>();
  private readonly cacheTimeout = 5 * 60 * 1000; // 5 minutes
  private cacheTimestamps = new Map<string, number>();

  async getStationsByRegion(region: string): Promise<RadioStation[]> {
    const cacheKey = `region:${region}`;
    
    if (this.isValidCache(cacheKey)) {
      return this.cache.get(cacheKey) || [];
    }

    try {
      // For better distribution, get diverse global stations
      const stations = await radioDiscoveryService.getGlobalStationsWithDistribution();
      this.updateCache(cacheKey, stations);
      return stations;
    } catch (error) {
      console.error(`Failed to fetch stations for region ${region}:`, error);
      return this.cache.get(cacheKey) || [];
    }
  }

  async getGlobalStationsWithDistribution(): Promise<RadioStation[]> {
    const cacheKey = 'global_distribution';
    
    if (this.isValidCache(cacheKey)) {
      return this.cache.get(cacheKey) || [];
    }

    try {
      // Use the new getAllStations method with IndexedDB caching
      const stations = await radioDiscoveryService.getAllStations();
      this.updateCache(cacheKey, stations);
      console.log(`StationRepository: Loaded ${stations.length} stations`);
      return stations;
    } catch (error) {
      console.error('Failed to fetch all stations:', error);
      // Try cache first before falling back
      const cached = this.cache.get(cacheKey);
      if (cached) return cached;
      
      // Last resort fallback
      const fallback = await radioDiscoveryService.getTopStations(5000);
      this.updateCache(cacheKey, fallback);
      return fallback;
    }
  }

  async getStationsByCountry(country: string): Promise<RadioStation[]> {
    const cacheKey = `country:${country}`;
    
    if (this.isValidCache(cacheKey)) {
      return this.cache.get(cacheKey) || [];
    }

    try {
      const stations = await radioDiscoveryService.getStationsByCountry(country);
      this.updateCache(cacheKey, stations);
      return stations;
    } catch (error) {
      console.error(`Failed to fetch stations for country ${country}:`, error);
      return this.cache.get(cacheKey) || [];
    }
  }

  async getStationsByGenre(genre: string): Promise<RadioStation[]> {
    const cacheKey = `genre:${genre}`;
    
    if (this.isValidCache(cacheKey)) {
      return this.cache.get(cacheKey) || [];
    }

    try {
      const stations = await radioDiscoveryService.getStationsByTag(genre);
      this.updateCache(cacheKey, stations);
      return stations;
    } catch (error) {
      console.error(`Failed to fetch stations for genre ${genre}:`, error);
      return this.cache.get(cacheKey) || [];
    }
  }

  async searchStations(query: string): Promise<RadioStation[]> {
    const cacheKey = `search:${query.toLowerCase()}`;
    
    if (this.isValidCache(cacheKey)) {
      return this.cache.get(cacheKey) || [];
    }

    try {
      const stations = await radioDiscoveryService.searchOnlineStations(query);
      this.updateCache(cacheKey, stations);
      return stations;
    } catch (error) {
      console.error(`Failed to search stations for query ${query}:`, error);
      return this.cache.get(cacheKey) || [];
    }
  }

  async getProgressiveStations(limit: number, offset: number): Promise<RadioStation[]> {
    const cacheKey = `progressive:${limit}:${offset}`;
    
    if (this.isValidCache(cacheKey)) {
      return this.cache.get(cacheKey) || [];
    }

    try {
      // Use zoomLevel calculation based on limit for progressive loading
      const zoomLevel = Math.max(1, Math.floor(limit / 100));
      const stations = await radioDiscoveryService.getProgressiveStations(zoomLevel);
      
      // Apply offset and limit manually since the service doesn't support it directly
      const paginatedStations = stations.slice(offset, offset + limit);
      
      this.updateCache(cacheKey, paginatedStations);
      return paginatedStations;
    } catch (error) {
      console.error(`Failed to fetch progressive stations:`, error);
      return this.cache.get(cacheKey) || [];
    }
  }

  async getPopularStations(limit: number = 50): Promise<RadioStation[]> {
    const cacheKey = `popular:${limit}`;
    
    if (this.isValidCache(cacheKey)) {
      return this.cache.get(cacheKey) || [];
    }

    try {
      const stations = await radioDiscoveryService.getTopStations(limit);
      this.updateCache(cacheKey, stations);
      return stations;
    } catch (error) {
      console.error(`Failed to fetch popular stations:`, error);
      return this.cache.get(cacheKey) || [];
    }
  }

  /**
   * Clear cache for specific key or all cache
   */
  clearCache(key?: string): void {
    if (key) {
      this.cache.delete(key);
      this.cacheTimestamps.delete(key);
    } else {
      this.cache.clear();
      this.cacheTimestamps.clear();
    }
  }

  /**
   * Get cache statistics for monitoring
   */
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }

  private isValidCache(key: string): boolean {
    const timestamp = this.cacheTimestamps.get(key);
    if (!timestamp) return false;
    
    const now = Date.now();
    return (now - timestamp) < this.cacheTimeout;
  }

  private updateCache(key: string, data: RadioStation[]): void {
    this.cache.set(key, data);
    this.cacheTimestamps.set(key, Date.now());
  }
}

// Export singleton instance
export const stationRepository = new StationRepository();