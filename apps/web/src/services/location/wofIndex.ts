import wofIndexJson from "../../data/wof/wofIndex.json";

export interface WofIndexCountry {
  id: number;
  name: string;
  isoAlpha2: string | null;
  isoAlpha3: string | null;
  centroid: { lat: number; lng: number } | null;
  bbox: {
    minLat: number;
    minLng: number;
    maxLat: number;
    maxLng: number;
  } | null;
  population: number | null;
}

export interface WofIndexRegion {
  id: number;
  name: string;
  countryIso: string | null;
  centroid: { lat: number; lng: number } | null;
  bbox: {
    minLat: number;
    minLng: number;
    maxLat: number;
    maxLng: number;
  } | null;
  population: number | null;
}

export interface WofIndexPayload {
  generatedAt: string;
  sources: {
    countries: string;
    regions: string;
  };
  countries: Record<string, WofIndexCountry>;
  regions: Record<string, WofIndexRegion[]>;
}

const wofIndex = wofIndexJson as WofIndexPayload;

export function getCountryIndex(): Record<string, WofIndexCountry> {
  return wofIndex.countries;
}

export function getRegionsIndex(): Record<string, WofIndexRegion[]> {
  return wofIndex.regions;
}

export function getCountryByIso(isoCode?: string | null): WofIndexCountry | null {
  if (!isoCode) return null;
  const normalized = isoCode.trim().toUpperCase();
  return wofIndex.countries[normalized] ?? null;
}

export function findCountryByName(name?: string | null): WofIndexCountry | null {
  if (!name) return null;
  const normalized = name.trim().toLowerCase();
  const entries = Object.values(wofIndex.countries);
  return (
    entries.find((entry) => entry.name.toLowerCase() === normalized) ||
    entries.find((entry) => entry.name.toLowerCase().includes(normalized)) ||
    null
  );
}

export function getRegionsByCountryIso(isoCode?: string | null): WofIndexRegion[] {
  if (!isoCode) return [];
  const normalized = isoCode.trim().toUpperCase();
  return wofIndex.regions[normalized] ?? [];
}
