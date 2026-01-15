import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import type { GlobeState, RadioStation, StationMarker } from "../types";
import { latLngToPosition } from "../utils/coordinates";

// Cesium-compatible camera position type
export interface CesiumCameraPosition {
  longitude: number;
  latitude: number;
  height: number;
  heading?: number;
  pitch?: number;
  roll?: number;
}

interface GlobeStore extends GlobeState {
  // Cesium-specific state
  cesiumCameraPosition?: CesiumCameraPosition;

  // Actions
  selectStation: (station: RadioStation | null) => void;
  hoverStation: (station: RadioStation | null) => void;
  setCameraPosition: (position: [number, number, number]) => void;
  setCesiumCameraPosition: (position: CesiumCameraPosition) => void;
  setAutoRotating: (isAutoRotating: boolean) => void;
  addMarker: (station: RadioStation) => void;
  clearMarkers: () => void;
  removeMarker: (stationId: string) => void;
  updateMarkerVisibility: (stationId: string, isVisible: boolean) => void;
  getStationsByRegion: (region: string) => RadioStation[];
  searchStations: (query: string) => RadioStation[];
}

export const useGlobeStore = create<GlobeStore>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    selectedStation: null,
    hoveredStation: null,
    cameraPosition: [0, 0, 2.5],
    isAutoRotating: true,
    markers: [],

    // Actions
    selectStation: (station) => {
      set((state) => ({
        selectedStation: station,
        markers: state.markers.map((marker) => ({
          ...marker,
          isSelected: marker.station.id === station?.id,
        })),
      }));
    },

    hoverStation: (station) => {
      set((state) => ({
        hoveredStation: station,
        markers: state.markers.map((marker) => ({
          ...marker,
          isHovered: marker.station.id === station?.id,
        })),
      }));
    },

    setCameraPosition: (position) => {
      set({ cameraPosition: position });
    },

    setCesiumCameraPosition: (position) => {
      set({
        cesiumCameraPosition: position,
        // Also update legacy camera position for compatibility
        cameraPosition: [
          position.longitude,
          position.latitude,
          position.height,
        ],
      });
    },

    setAutoRotating: (isAutoRotating) => {
      set({ isAutoRotating });
    },

    addMarker: (station) => {
      const position = latLngToPosition(
        station.location.lat,
        station.location.lng,
      );
      const marker: StationMarker = {
        station,
        position,
        isVisible: true,
        isHovered: false,
        isSelected: false,
      };

      set((state) => ({
        markers: [
          ...state.markers.filter((m) => m.station.id !== station.id),
          marker,
        ],
      }));
    },

    clearMarkers: () => {
      set({ markers: [] });
    },

    removeMarker: (stationId) => {
      set((state) => ({
        markers: state.markers.filter((m) => m.station.id !== stationId),
      }));
    },

    updateMarkerVisibility: (stationId, isVisible) => {
      set((state) => ({
        markers: state.markers.map((marker) =>
          marker.station.id === stationId ? { ...marker, isVisible } : marker,
        ),
      }));
    },

    getStationsByRegion: (region: string) => {
      const { markers } = get();
      return markers
        .filter(
          (marker) =>
            marker.station.location.country
              .toLowerCase()
              .includes(region.toLowerCase()) ||
            marker.station.location.city
              .toLowerCase()
              .includes(region.toLowerCase()),
        )
        .map((marker) => marker.station);
    },

    searchStations: (query: string) => {
      const { markers } = get();
      const searchTerm = query.toLowerCase();
      return markers
        .filter(
          (marker) =>
            marker.station.name.toLowerCase().includes(searchTerm) ||
            marker.station.location.city.toLowerCase().includes(searchTerm) ||
            marker.station.location.country
              .toLowerCase()
              .includes(searchTerm) ||
            marker.station.genre.toLowerCase().includes(searchTerm) ||
            marker.station.language.toLowerCase().includes(searchTerm),
        )
        .map((marker) => marker.station);
    },
  })),
);

// Subscribe to state changes for analytics or side effects
useGlobeStore.subscribe(
  (state) => state.selectedStation,
  (selectedStation) => {
    if (selectedStation) {
      console.log("Station selected:", selectedStation.name);
      // Track analytics, update URL, etc.
    }
  },
);
