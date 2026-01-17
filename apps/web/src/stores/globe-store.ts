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

// Target for fly-to animation
export interface FlyToTarget {
  latitude: number;
  longitude: number;
  height?: number;
  duration?: number;
}

interface GlobeStore extends GlobeState {
  // Cesium-specific state
  cesiumCameraPosition?: CesiumCameraPosition;
  flyToTarget?: FlyToTarget;

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
  nextStation: () => void;
  previousStation: () => void;
  setPlaylist: (stations: RadioStation[]) => void;
  flyToStation: (station: RadioStation) => void;
  clearFlyToTarget: () => void;
}

export const useGlobeStore = create<GlobeStore>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    selectedStation: null,
    hoveredStation: null,
    cameraPosition: [0, 0, 2.5],
    isAutoRotating: true,
    markers: [],
    playlist: [],
    playlistIndex: -1,
    flyToTarget: undefined,

    // Actions
    setPlaylist: (stations) => {
      set({ playlist: stations });
    },
    
    flyToStation: (station) => {
      if (station.location?.lat && station.location?.lng) {
        set({
          flyToTarget: {
            latitude: station.location.lat,
            longitude: station.location.lng,
            height: 2000000, // 2000km altitude for good view
            duration: 2, // 2 second animation
          },
        });
      }
    },
    
    clearFlyToTarget: () => {
      set({ flyToTarget: undefined });
    },

    selectStation: (station) => {
      const state = get();
      // If manually clearing selection
      if (!station) {
        set({ selectedStation: null, playlistIndex: -1 });
        return;
      }

      // If station is already in current playlist, just update index
      const existingIndex = state.playlist.findIndex(s => s.id === station.id);
      
      let newPlaylist = state.playlist;
      let newIndex = existingIndex;

      // If station not in playlist, or playlist is empty, rebuild playlist from markers
      if (existingIndex === -1 || state.playlist.length === 0) {
        const visibleStations = state.markers
          .filter(m => m.isVisible)
          .map(m => m.station);
        
        // If the station itself isn't in visible markers (e.g. search result), add it
        const stationInMarkers = visibleStations.find(s => s.id === station.id);
         
        newPlaylist = stationInMarkers 
          ? visibleStations 
          : [station, ...visibleStations];
          
        newIndex = newPlaylist.findIndex(s => s.id === station.id);
      }

      set((state) => ({
        selectedStation: station,
        playlist: newPlaylist,
        playlistIndex: newIndex,
        markers: state.markers.map((marker) => ({
          ...marker,
          isSelected: marker.station.id === station.id,
        })),
      }));
    },

    nextStation: () => {
      const { playlist, playlistIndex } = get();
      if (playlist.length === 0) return;
      
      const nextIndex = (playlistIndex + 1) % playlist.length;
      const nextStation = playlist[nextIndex];
      get().selectStation(nextStation);
    },

    previousStation: () => {
      const { playlist, playlistIndex } = get();
      if (playlist.length === 0) return;
      
      const prevIndex = (playlistIndex - 1 + playlist.length) % playlist.length;
      const prevStation = playlist[prevIndex];
      get().selectStation(prevStation);
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
        2.02,
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
