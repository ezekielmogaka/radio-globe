import type { Feature, FeatureCollection, Geometry } from "geojson";

export interface NaturalEarthFeatureProperties {
  name: string;
  isoA2?: string | null;
  isoA3?: string | null;
  iso3166_2?: string | null;
  parentA3?: string | null;
  type?: string | null;
  population?: number | null;
  source: "natural-earth";
  centroid: { lat: number; lng: number };
}

export type NaturalEarthFeature = Feature<Geometry, NaturalEarthFeatureProperties> & {
  bbox: [number, number, number, number];
};

export type NaturalEarthCollection = FeatureCollection<Geometry, NaturalEarthFeatureProperties> & {
  features: NaturalEarthFeature[];
};

const NATURAL_EARTH_BASE_PATH = "/naturalearth";
const COUNTRIES_PATH = `${NATURAL_EARTH_BASE_PATH}/admin0-countries.json`;
const REGIONS_PATH = `${NATURAL_EARTH_BASE_PATH}/admin1-regions.json`;

let countryCache: NaturalEarthCollection | null = null;
let regionCache: NaturalEarthCollection | null = null;

function normalizeCollection(parsed: NaturalEarthCollection): NaturalEarthCollection {
  return {
    ...parsed,
    features: parsed.features ?? [],
  };
}

async function fetchCollection(path: string): Promise<NaturalEarthCollection> {
  if (typeof window === "undefined") {
    const relative = path.startsWith("/") ? path.slice(1) : path;
    const [{ readFile }, { join }] = await Promise.all([
      import("node:fs/promises"),
      import("node:path"),
    ]);
    const absolutePath = join(process.cwd(), "public", relative);
    const contents = await readFile(absolutePath, "utf8");
    const parsed = JSON.parse(contents) as NaturalEarthCollection;
    return normalizeCollection(parsed);
  }

  const response = await fetch(path, { cache: "force-cache" });
  if (!response.ok) {
    throw new Error(`Failed to load Natural Earth data from ${path}: ${response.status} ${response.statusText}`);
  }

  const parsed = (await response.json()) as NaturalEarthCollection;
  return normalizeCollection(parsed);
}

export async function loadNaturalEarthCountries(): Promise<NaturalEarthCollection> {
  if (!countryCache) {
    countryCache = await fetchCollection(COUNTRIES_PATH);
  }
  return countryCache;
}

export async function loadNaturalEarthRegions(): Promise<NaturalEarthCollection> {
  if (!regionCache) {
    regionCache = await fetchCollection(REGIONS_PATH);
  }
  return regionCache;
}

function ensureFeature(feature: Feature<Geometry, NaturalEarthFeatureProperties> | null | undefined): NaturalEarthFeature | null {
  if (!feature) return null;
  const candidate = feature as NaturalEarthFeature;
  return Array.isArray(candidate.bbox) && candidate.bbox.length === 4 ? candidate : null;
}

export function findCountryFeatureByIso(isoCode: string | null | undefined): NaturalEarthFeature | null {
  if (!countryCache || !isoCode) return null;
  const normalized = isoCode.trim().toUpperCase();
  const byIsoA2 = ensureFeature(
    countryCache.features.find((feature) => feature.properties.isoA2?.toUpperCase() === normalized),
  );
  if (byIsoA2) return byIsoA2;

  return ensureFeature(
    countryCache.features.find((feature) => feature.properties.isoA3?.toUpperCase() === normalized),
  );
}

export function findRegionFeature(
  isoA2: string | null | undefined,
  iso3166_2: string | null | undefined,
): NaturalEarthFeature | null {
  if (!regionCache) return null;
  const inCountry = isoA2 ? isoA2.trim().toUpperCase() : null;
  const normalizedIso3166 = iso3166_2 ? iso3166_2.trim().toUpperCase() : null;

  const directMatch = ensureFeature(
    regionCache.features.find((feature) => {
      const props = feature.properties;
      if (normalizedIso3166 && props.iso3166_2?.toUpperCase() === normalizedIso3166) {
        return true;
      }
      if (normalizedIso3166 && props.isoA3?.toUpperCase() === normalizedIso3166) {
        return true;
      }
      return false;
    }),
  );
  if (directMatch) return directMatch;

  const fallback = ensureFeature(
    regionCache.features.find((feature) => {
      const props = feature.properties;
      if (inCountry && props.isoA2?.toUpperCase() !== inCountry) {
        return false;
      }
      return true;
    }),
  );

  return fallback;
}
