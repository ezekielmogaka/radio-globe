import { RadioStation } from "../types";

/**
 * Domain interfaces for repository pattern
 */
export interface IStationRepository {
  getStationsByRegion(region: string): Promise<RadioStation[]>;
  getStationsByCountry(country: string): Promise<RadioStation[]>;
  getStationsByGenre(genre: string): Promise<RadioStation[]>;
  searchStations(query: string): Promise<RadioStation[]>;
  getProgressiveStations(limit: number, offset: number): Promise<RadioStation[]>;
  getPopularStations(limit?: number): Promise<RadioStation[]>;
  getGlobalStationsWithDistribution(): Promise<RadioStation[]>;
  clearCache(key?: string): void;
}