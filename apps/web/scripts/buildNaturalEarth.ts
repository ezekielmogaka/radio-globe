import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import bbox from "@turf/bbox";
const globalScope = globalThis as unknown as {
  self?: typeof globalThis;
  window?: typeof globalThis;
  navigator?: { userAgent?: string } & Record<string, unknown>;
};

if (typeof globalScope.self === "undefined") {
  globalScope.self = globalThis;
}

if (typeof globalScope.window === "undefined") {
  globalScope.window = globalThis;
}

if (typeof globalScope.navigator === "undefined") {
  globalScope.navigator = { userAgent: "node" };
} else if (!globalScope.navigator.userAgent) {
  globalScope.navigator.userAgent = "node";
}

let shpModulePromise: Promise<typeof import("shpjs")> | null = null;

function loadShpModule() {
  if (!shpModulePromise) {
    shpModulePromise = import("shpjs");
  }
  return shpModulePromise;
}

interface SanitizedProperties {
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

interface SanitizedFeature extends Feature<Geometry, SanitizedProperties> {
  bbox: [number, number, number, number];
}

const OUTPUT_DIR = resolve(process.cwd(), "public/naturalearth");
const SOURCES = {
  admin0: {
    title: "Admin 0 Countries (50m)",
    url: "https://naturalearth.s3.amazonaws.com/50m_cultural/ne_50m_admin_0_countries.zip",
    outputBaseName: "admin0-countries",
  },
  admin1: {
    title: "Admin 1 States/Provinces (50m)",
    url: "https://naturalearth.s3.amazonaws.com/50m_cultural/ne_50m_admin_1_states_provinces.zip",
    outputBaseName: "admin1-regions",
  },
} as const;

function toFeatureCollection(result: FeatureCollection<Geometry> | FeatureCollection<Geometry>[]): FeatureCollection<Geometry> {
  if (Array.isArray(result)) {
    return {
      type: "FeatureCollection",
      features: result.flatMap((collection) => collection.features),
    };
  }
  return result;
}

function ensureCentroid(box: [number, number, number, number]): { lat: number; lng: number } {
  const [minLng, minLat, maxLng, maxLat] = box;
  return {
    lat: (minLat + maxLat) / 2,
    lng: (minLng + maxLng) / 2,
  };
}

function sanitizeAdmin0(feature: Feature<Geometry>): SanitizedFeature | null {
  if (!feature.geometry) return null;
  const raw = feature.properties ?? {};
  const value = (key: string): string | null => {
    const content = raw[key];
    if (content === undefined || content === null) return null;
    return String(content).trim() || null;
  };

  const box = bbox(feature as Feature<Geometry>) as [number, number, number, number];

  const properties: SanitizedProperties = {
    name: value("NAME_EN") || value("NAME_LONG") || value("NAME") || "Unknown",
    isoA2: value("ISO_A2_EH") || value("ISO_A2") || null,
    isoA3: value("ISO_A3_EH") || value("ISO_A3") || null,
    parentA3: value("ADM0_A3") || value("SOV_A3") || null,
    type: value("TYPE") || value("TYPE_EN") || null,
    population: raw["POP_EST"] ? Number(raw["POP_EST"]) : null,
    source: "natural-earth",
    centroid: ensureCentroid(box),
  };

  return {
    type: "Feature",
    geometry: feature.geometry,
    properties,
    bbox: box,
  };
}

function sanitizeAdmin1(feature: Feature<Geometry>): SanitizedFeature | null {
  if (!feature.geometry) return null;
  const raw = feature.properties ?? {};
  const value = (key: string): string | null => {
    const content = raw[key];
    if (content === undefined || content === null) return null;
    return String(content).trim() || null;
  };

  const box = bbox(feature as Feature<Geometry>) as [number, number, number, number];

  const properties: SanitizedProperties = {
    name: value("NAME_EN") || value("NAME") || "Unknown",
    isoA2: value("ISO_A2") || value("ADM0_A2") || null,
    isoA3: value("ADM0_A3") || value("ISO_A3") || null,
    parentA3: value("ADM0_A3") || null,
    iso3166_2: value("ISO_3166_2") || value("POSTAL") || value("GN_A1_CODE") || null,
    type: value("TYPE_EN") || value("TYPE") || null,
    population: raw["GN_POP"] ? Number(raw["GN_POP"]) : null,
    source: "natural-earth",
    centroid: ensureCentroid(box),
  };

  return {
    type: "Feature",
    geometry: feature.geometry,
    properties,
    bbox: box,
  };
}

async function downloadAndSanitize(
  source: { url: string; outputBaseName: string; title: string },
  sanitizer: (feature: Feature<Geometry>) => SanitizedFeature | null,
): Promise<void> {
  console.log(`Fetching ${source.title}...`);
  const response = await fetch(source.url);
  if (!response.ok) {
    throw new Error(`Failed to download ${source.url}: ${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const { default: shp } = await loadShpModule();
  const result = await shp(arrayBuffer);
  const collection = toFeatureCollection(result);

  const sanitizedFeatures: SanitizedFeature[] = [];
  for (const feature of collection.features) {
    const sanitized = sanitizer(feature);
    if (sanitized) {
      sanitizedFeatures.push(sanitized);
    }
  }

  const payload: FeatureCollection<Geometry, SanitizedProperties> = {
    type: "FeatureCollection",
    features: sanitizedFeatures,
  };

  await mkdir(OUTPUT_DIR, { recursive: true });
  const outputPath = resolve(OUTPUT_DIR, `${source.outputBaseName}.json`);
  await writeFile(outputPath, JSON.stringify(payload), "utf8");
  console.log(`Wrote ${outputPath} (${sanitizedFeatures.length} features)`);
}

async function build(): Promise<void> {
  try {
    await downloadAndSanitize(SOURCES.admin0, sanitizeAdmin0);
    await downloadAndSanitize(SOURCES.admin1, sanitizeAdmin1);
  } catch (error) {
    console.error("Failed to build Natural Earth datasets", error);
    process.exitCode = 1;
  }
}

void build();
