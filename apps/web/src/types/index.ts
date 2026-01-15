export interface WofHierarchyEntry {
  id: number;
  placetype: string;
  name: string;
  bbox?: [number, number, number, number];
}

export interface WofLocationDetail {
  countryId?: number;
  regionId?: number;
  localityId?: number;
  hierarchy: WofHierarchyEntry[];
  centroid?: {
    lat: number;
    lng: number;
  };
  bbox?: {
    minLat: number;
    minLng: number;
    maxLat: number;
    maxLng: number;
  };
  countryIsoA2?: string;
  countryIsoA3?: string;
  regionIso3166?: string;
  source?: "whosonfirst" | "natural-earth";
}

export interface Location {
  lat: number;
  lng: number;
  country: string;
  city: string;
  countryCode?: string;
  timezone?: string;
  wof?: WofLocationDetail;
}

export interface RadioStation {
  id: string;
  name: string;
  location: Location;
  url: string;
  genre: string;
  language: string;
  listeners: number;
  description?: string;
  website?: string;
  logo?: string;
  tags?: string[];
  bitrate?: number;
  codec?: string;
  isOnline?: boolean;
  lastChecked?: Date;
  isPublic?: boolean;
  source?: "curated" | "radio-browser" | "local" | "api";
  clickcount?: number;
  votes?: number;
  homepage?: string;
  // Cluster support
  stationCount?: number;
  isCluster?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favoriteStations: string[];
  listeningHistory: ListeningSession[];
  preferences: UserPreferences;
}

export interface UserPreferences {
  preferredGenres: string[];
  preferredLanguages: string[];
  autoplay: boolean;
  quality: "low" | "medium" | "high";
  theme: "dark" | "light" | "auto";
}

export interface ListeningSession {
  stationId: string;
  startTime: Date;
  duration: number; // in seconds
  location?: Location;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentStation: RadioStation | null;
  volume: number;
  isMuted: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface GlobeState {
  selectedStation: RadioStation | null;
  hoveredStation: RadioStation | null;
  cameraPosition: [number, number, number];
  isAutoRotating: boolean;
  markers: StationMarker[];
}

export interface StationMarker {
  station: RadioStation;
  position: [number, number, number]; // 3D coordinates
  isVisible: boolean;
  isHovered: boolean;
  isSelected: boolean;
}

export interface SearchState {
  query: string;
  results: RadioStation[];
  isLoading: boolean;
  filters: SearchFilters;
}

export interface SearchFilters {
  genres: string[];
  countries: string[];
  languages: string[];
  minListeners?: number;
  onlineOnly: boolean;
}
