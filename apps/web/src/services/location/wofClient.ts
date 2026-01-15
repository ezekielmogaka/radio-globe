import type { Feature, FeatureCollection, GeoJsonProperties, Geometry } from "geojson";

const WOF_DATA_ORIGIN = "https://data.whosonfirst.org";

const geoJsonCache = new Map<number, Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>>();

function idToPath(id: number): string {
  const digits = id.toString();
  const segments: string[] = [];
  for (let cursor = 0; cursor < digits.length; cursor += 3) {
    segments.push(digits.slice(cursor, cursor + 3));
  }
  segments.push(id.toString());
  return segments.join("/");
}

export async function fetchWofGeoJson(id: number): Promise<Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties> | null> {
  if (geoJsonCache.has(id)) {
    return geoJsonCache.get(id) ?? null;
  }

  try {
    const path = idToPath(id);
    const url = `${WOF_DATA_ORIGIN}/${path}.geojson`;
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Failed to fetch WOF feature ${id}:`, response.status, response.statusText);
      geoJsonCache.set(id, null);
      return null;
    }

    const data = (await response.json()) as Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>;
    geoJsonCache.set(id, data);
    return data;
  } catch (error) {
    console.warn(`Failed to fetch WOF feature ${id}:`, error);
    geoJsonCache.set(id, null);
    return null;
  }
}
