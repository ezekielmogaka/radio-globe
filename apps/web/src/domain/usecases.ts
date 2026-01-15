// This file contains interfaces for the domain layer
// Concrete implementations are in the usecases directory

import { MarkerData } from "../strategies/MarkerStrategy";

/**
 * Use Case interfaces following Clean Architecture principles
 */
export interface IStationLoadingUseCase {
  loadStationsForView(zoomLevel: number): Promise<MarkerData[]>;
}

export interface IStationSelectionUseCase {
  selectStation(stationId: string, station: any): Promise<void>;
  clearSelection(): Promise<void>;
  getCurrentSelection(): { stationId: string; station: any } | null;
  hoverStation(stationId: string | null): Promise<void>;
}