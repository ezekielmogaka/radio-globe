import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { gunzipSync } from "node:zlib";
import { parse } from "csv-parse/sync";
import { decode as bunzip2 } from "seek-bzip";

interface RawRecord {
  [key: string]: string;
}

interface BoundingBox {
  minLat: number;
  minLng: number;
  maxLat: number;
  maxLng: number;
}

interface CountryEntry {
  id: number;
  name: string;
  isoAlpha2: string | null;
  isoAlpha3: string | null;
  centroid: { lat: number; lng: number } | null;
  bbox: BoundingBox | null;
  population: number | null;
}

interface RegionEntry {
  id: number;
  name: string;
  countryIso: string | null;
  centroid: { lat: number; lng: number } | null;
  bbox: BoundingBox | null;
  population: number | null;
}

interface WofIndexPayload {
  generatedAt: string;
  sources: {
    countries: string;
    regions: string;
  };
  countries: Record<string, CountryEntry>;
  regions: Record<string, RegionEntry[]>;
}

const COUNTRY_META_URL = "https://data.whosonfirst.org/meta/wof-country-latest.csv";
const REGION_META_URL = "https://data.whosonfirst.org/meta/wof-region-latest.csv";
const OUTPUT_DIR = resolve(process.cwd(), "src/data/wof");

function toNumber(value: string | undefined): number | null {
  if (!value) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function pick(record: RawRecord, keys: string[]): string | null {
  for (const key of keys) {
    const value = record[key];
    if (value && value.trim().length > 0) {
      return value.trim();
    }
  }
  return null;
}

function toBoundingBox(record: RawRecord): BoundingBox | null {
  const minLat = toNumber(pick(record, ["min_lat", "geom:latitude_min", "min_latitude", "lbl:min_latitude", "geom:min_latitude"]));
  const maxLat = toNumber(pick(record, ["max_lat", "geom:latitude_max", "max_latitude", "lbl:max_latitude", "geom:max_latitude"]));
  const minLng = toNumber(pick(record, ["min_lon", "geom:longitude_min", "min_longitude", "lbl:min_longitude", "geom:min_longitude"]));
  const maxLng = toNumber(pick(record, ["max_lon", "geom:longitude_max", "max_longitude", "lbl:max_longitude", "geom:max_longitude"]));

  if ([minLat, maxLat, minLng, maxLng].some((value) => value === null)) {
    return null;
  }

  return {
    minLat: minLat as number,
    minLng: minLng as number,
    maxLat: maxLat as number,
    maxLng: maxLng as number,
  };
}

function parseCsv(text: string): RawRecord[] {
  return parse(text, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });
}

interface FetchOptions {
  allowEmpty?: boolean;
}

function buildCandidateUrls(url: string): string[] {
  const expanded = new Set<string>();
  expanded.add(url);
  expanded.add(`${url}.gz`);
  expanded.add(`${url}.bz2`);

  try {
    const parsed = new URL(url);
    if (parsed.hostname === "data.whosonfirst.org") {
      const path = parsed.pathname;
      const withWofPrefix = path.startsWith("/meta/")
        ? path.replace("/meta/", "/wof/meta/")
        : path;
      const fileName = path.split("/").pop() ?? "";
      const fileNameWithMeta = `meta/${fileName}`;

      const mirrorHosts = [
        "https://data.whosonfirst.org",
        "https://whosonfirst-data.s3.amazonaws.com",
      ];

      for (const host of mirrorHosts) {
        expanded.add(`${host}${withWofPrefix}`);
        expanded.add(`${host}${withWofPrefix}.gz`);
        expanded.add(`${host}${withWofPrefix}.bz2`);
        expanded.add(`${host}${path}`);
        expanded.add(`${host}${path}.gz`);
        expanded.add(`${host}${path}.bz2`);
        if (fileName) {
          expanded.add(`${host}/${fileName}`);
          expanded.add(`${host}/${fileName}.gz`);
          expanded.add(`${host}/${fileName}.bz2`);
          expanded.add(`${host}/${fileNameWithMeta}`);
          expanded.add(`${host}/${fileNameWithMeta}.gz`);
          expanded.add(`${host}/${fileNameWithMeta}.bz2`);
        }
      }

      const githubBases = [
        "https://raw.githubusercontent.com/whosonfirst-data/whosonfirst-data-admin-latest",
        "https://raw.githubusercontent.com/whosonfirst-data/whosonfirst-data",
        "https://raw.githubusercontent.com/whosonfirst-data/meta",
      ];

      const suffixes = fileName
        ? [fileName, `meta/${fileName}`, `${fileName}.bz2`, `meta/${fileName}.bz2`]
        : [];

      for (const base of githubBases) {
        for (const branch of ["main", "master"] as const) {
          for (const suffix of suffixes) {
            expanded.add(`${base}/${branch}/${suffix}`);
          }
        }
      }
    }
  } catch (error) {
    // Ignore URL parsing errors and fall back to default candidates
  }

  return Array.from(expanded);
}

async function fetchMetaCsv(url: string, options: FetchOptions = {}): Promise<{ records: RawRecord[]; sourceUrl: string }> {
  const candidateUrls = buildCandidateUrls(url);
  let lastError: unknown = null;

  for (const candidate of candidateUrls) {
    try {
      const response = await fetch(candidate);
      if (!response.ok) {
        throw new Error(`Failed to download ${candidate}: ${response.status} ${response.statusText}`);
      }

      const isGzip = candidate.endsWith(".gz") ||
        (response.headers.get("content-encoding")?.includes("gzip") ?? false);
      const isBzip = candidate.endsWith(".bz2") ||
        (response.headers.get("content-type")?.includes("bzip2") ?? false);

      let text: string;
      if (isGzip) {
        const buffer = Buffer.from(await response.arrayBuffer());
        text = gunzipSync(buffer).toString("utf8");
      } else if (isBzip) {
        const buffer = Buffer.from(await response.arrayBuffer());
        text = bunzip2(buffer).toString("utf8");
      } else {
        text = await response.text();
      }

      return { records: parseCsv(text), sourceUrl: candidate };
    } catch (error) {
      lastError = error;
    }
  }

  if (options.allowEmpty) {
    console.warn(`Unable to download ${url}. Proceeding with empty records.`);
    return { records: [], sourceUrl: "unavailable" };
  }

  throw lastError ?? new Error(`Unable to download ${url}`);
}

function buildCountryIndex(records: RawRecord[]): Record<string, CountryEntry> {
  const index: Record<string, CountryEntry> = {};

  for (const record of records) {
    const id = toNumber(record.id);
    if (!id) continue;

    const isoAlpha2 = pick(record, ["iso", "iso:country", "wof:country", "mz:iso", "iso_alpha2"]);
    const isoAlpha3 = pick(record, ["iso_alpha3", "wof:country_alpha3", "iso:country_alpha3"]);

    const centroidLat = toNumber(pick(record, ["lbl:latitude", "latitude", "geom:latitude", "geom:centroid_latitude"]));
    const centroidLng = toNumber(pick(record, ["lbl:longitude", "longitude", "geom:longitude", "geom:centroid_longitude"]));

    const population = toNumber(pick(record, ["population", "wof:population", "mz:population"]));

    if (!isoAlpha2) {
      continue; // Skip entries without ISO code to keep lookup predictable
    }

    index[isoAlpha2.toUpperCase()] = {
      id,
      name: pick(record, ["name", "wof:name", "qs_pg:placenam" ]) ?? `Country ${id}`,
      isoAlpha2: isoAlpha2.toUpperCase(),
      isoAlpha3: isoAlpha3 ? isoAlpha3.toUpperCase() : null,
      centroid:
        centroidLat !== null && centroidLng !== null
          ? { lat: centroidLat, lng: centroidLng }
          : null,
      bbox: toBoundingBox(record),
      population,
    };
  }

  return index;
}

function buildRegionIndex(records: RawRecord[]): Record<string, RegionEntry[]> {
  const index: Record<string, RegionEntry[]> = {};

  for (const record of records) {
    const id = toNumber(record.id);
    if (!id) continue;

    const countryIso = pick(record, ["iso", "wof:country", "mz:iso", "iso_country"]);
    if (!countryIso) continue;

    const centroidLat = toNumber(pick(record, ["lbl:latitude", "latitude", "geom:latitude", "geom:centroid_latitude"]));
    const centroidLng = toNumber(pick(record, ["lbl:longitude", "longitude", "geom:longitude", "geom:centroid_longitude"]));
    const population = toNumber(pick(record, ["population", "wof:population", "mz:population"]));

    const region: RegionEntry = {
      id,
      name: pick(record, ["name", "wof:name", "qs_pg:placenam"]) ?? `Region ${id}`,
      countryIso: countryIso.toUpperCase(),
      centroid:
        centroidLat !== null && centroidLng !== null
          ? { lat: centroidLat, lng: centroidLng }
          : null,
      bbox: toBoundingBox(record),
      population,
    };

    if (!index[region.countryIso]) {
      index[region.countryIso] = [];
    }

    index[region.countryIso].push(region);
  }

  // Sort regions for determinism (largest population first, fallback name)
  for (const countryIso of Object.keys(index)) {
    index[countryIso].sort((a, b) => {
      if (a.population && b.population) {
        return b.population - a.population;
      }
      if (a.population) return -1;
      if (b.population) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  return index;
}

async function buildWofIndexes(): Promise<void> {
  console.log("Downloading Who's On First metadata...");
  const [countryResult, regionResult] = await Promise.all([
    fetchMetaCsv(COUNTRY_META_URL, { allowEmpty: true }),
    fetchMetaCsv(REGION_META_URL, { allowEmpty: true }),
  ]);

  const { records: countryRecords, sourceUrl: countrySource } = countryResult;
  const { records: regionRecords, sourceUrl: regionSource } = regionResult;

  console.log(`Fetched ${countryRecords.length} countries, ${regionRecords.length} regions`);

  let previousIndex: WofIndexPayload | null = null;
  try {
    const previousContent = await readFile(resolve(OUTPUT_DIR, "wofIndex.json"), "utf8");
    previousIndex = JSON.parse(previousContent) as WofIndexPayload;
  } catch (error) {
    // Ignore when no previous file exists
  }

  const countries = countryRecords.length
    ? buildCountryIndex(countryRecords)
    : previousIndex?.countries ?? {};

  const regions = regionRecords.length
    ? buildRegionIndex(regionRecords)
    : previousIndex?.regions ?? {};

  if (!countryRecords.length) {
    console.warn("Using previously cached country index; remote CSV unavailable.");
  }

  if (!regionRecords.length) {
    console.warn("Using previously cached region index; remote CSV unavailable.");
  }

  const payload: WofIndexPayload = {
    generatedAt: new Date().toISOString(),
    sources: {
      countries: countrySource,
      regions: regionSource,
    },
    countries,
    regions,
  };

  await mkdir(OUTPUT_DIR, { recursive: true });

  const outputPath = resolve(OUTPUT_DIR, "wofIndex.json");
  await writeFile(outputPath, JSON.stringify(payload, null, 2), "utf8");

  console.log(`Wrote ${outputPath}`);
}

buildWofIndexes().catch((error) => {
  console.error("Failed to build Who's On First indexes", error);
  process.exitCode = 1;
});
