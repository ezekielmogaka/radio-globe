import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { point } from "@turf/helpers";
import type { Feature, Geometry } from "geojson";
import type { RadioStation, WofHierarchyEntry, WofLocationDetail } from "../../types";
import type {
  NaturalEarthCollection,
  NaturalEarthFeature,
  NaturalEarthFeatureProperties,
} from "./naturalEarthService";

interface Bounds {
  minLat: number;
  minLng: number;
  maxLat: number;
  maxLng: number;
}

function getBoundsFromFeature(feature: NaturalEarthFeature): Bounds {
  const [minLng, minLat, maxLng, maxLat] = feature.bbox;
  return {
    minLat,
    minLng,
    maxLat,
    maxLng,
  };
}

function isWithinBounds(bounds: Bounds, lat: number, lng: number): boolean {
  return lat >= bounds.minLat && lat <= bounds.maxLat && lng >= bounds.minLng && lng <= bounds.maxLng;
}

function containsPoint(feature: NaturalEarthFeature, lat: number, lng: number): boolean {
  try {
    return booleanPointInPolygon(point([lng, lat]), feature as any);
  } catch (error) {
    console.warn("Failed to evaluate Natural Earth polygon", error);
    return false;
  }
}

function ensureNaturalEarthFeature(
  feature: Feature<Geometry, NaturalEarthFeatureProperties> | NaturalEarthFeature | null | undefined,
): NaturalEarthFeature | null {
  if (!feature) return null;
  const candidate = feature as NaturalEarthFeature;
  if (Array.isArray(candidate.bbox) && candidate.bbox.length === 4) {
    return candidate;
  }
  return null;
}

function hashIdentifier(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) | 0;
  }
  return Math.abs(hash) || 1;
}

function buildHierarchyEntry(
  id: number,
  placetype: string,
  name: string,
  feature: NaturalEarthFeature,
): WofHierarchyEntry {
  const [minLng, minLat, maxLng, maxLat] = feature.bbox;
  return {
    id,
    placetype,
    name,
    bbox: [minLng, minLat, maxLng, maxLat],
  };
}

function pickCountryFeature(
  station: RadioStation,
  countries: NaturalEarthCollection,
): NaturalEarthFeature | null {
  const isoCandidates = [
    station.location.countryCode?.toUpperCase(),
  ].filter(Boolean) as string[];

  for (const iso of isoCandidates) {
    const match = countries.features.find((feature) => {
      const props = feature.properties;
      return props.isoA2?.toUpperCase() === iso || props.isoA3?.toUpperCase() === iso;
    });
    const natural = ensureNaturalEarthFeature(match);
    if (natural) {
      return natural;
    }
  }

  const name = station.location.country.trim().toLowerCase();
  if (name) {
    const byName = ensureNaturalEarthFeature(
      countries.features.find((feature) => feature.properties.name.toLowerCase() === name),
    );
    if (byName) return byName;
  }

  const { lat, lng } = station.location;
  const fallback = countries.features.find((feature) => {
      const candidate = ensureNaturalEarthFeature(feature);
      if (!candidate) {
        return false;
      }
      const bounds = getBoundsFromFeature(candidate);
      return isWithinBounds(bounds, lat, lng) && containsPoint(candidate, lat, lng);
    });

  return ensureNaturalEarthFeature(fallback);
}

function pickRegionFeature(
  station: RadioStation,
  regions: NaturalEarthCollection,
  countryFeature: NaturalEarthFeature | null,
): NaturalEarthFeature | null {
  if (!countryFeature) return null;
  const iso3166Candidate = station.location.city ? `${countryFeature.properties.isoA2}-${station.location.city}` : null;
  if (iso3166Candidate) {
    const match = ensureNaturalEarthFeature(
      regions.features.find((feature) => feature.properties.iso3166_2?.toUpperCase() === iso3166Candidate.toUpperCase()),
    );
    if (match) return match;
  }

  const { lat, lng } = station.location;
  const countryIso = countryFeature.properties.isoA2?.toUpperCase();

  const fallback = regions.features.find((feature) => {
      const props = feature.properties;
      if (countryIso && props.isoA2?.toUpperCase() !== countryIso) {
        return false;
      }
      const candidate = ensureNaturalEarthFeature(feature);
      if (!candidate) {
        return false;
      }
      const bounds = getBoundsFromFeature(candidate);
      return isWithinBounds(bounds, lat, lng) && containsPoint(candidate, lat, lng);
    });

  return ensureNaturalEarthFeature(fallback);
}

function createLocationDetail(
  country: NaturalEarthFeature | null,
  region: NaturalEarthFeature | null,
): WofLocationDetail {
  if (!country) {
    return { hierarchy: [], source: "natural-earth" };
  }

  const countryId = hashIdentifier(country.properties.isoA3 || country.properties.name);
  const hierarchy: WofHierarchyEntry[] = [
    buildHierarchyEntry(countryId, "country", country.properties.name, country),
  ];

  const detail: WofLocationDetail = {
    countryId,
    hierarchy,
    centroid: country.properties.centroid,
    bbox: getBoundsFromFeature(country),
    countryIsoA2: country.properties.isoA2 ?? undefined,
    countryIsoA3: country.properties.isoA3 ?? undefined,
    source: "natural-earth",
  };

  if (region) {
    const regionId = hashIdentifier(region.properties.iso3166_2 || region.properties.name);
    detail.regionId = regionId;
    detail.regionIso3166 = region.properties.iso3166_2 ?? undefined;
    detail.hierarchy.push(buildHierarchyEntry(regionId, "region", region.properties.name, region));
    detail.bbox = getBoundsFromFeature(region);
    detail.centroid = region.properties.centroid;
  }

  return detail;
}

export async function enrichStationsWithWof(
  stations: RadioStation[],
  countries: NaturalEarthCollection,
  regions: NaturalEarthCollection,
): Promise<RadioStation[]> {
  return stations.map((station) => {
    if (station.location.wof?.source === "natural-earth") {
      return station;
    }

    const countryFeature = pickCountryFeature(station, countries);
    const regionFeature = pickRegionFeature(station, regions, countryFeature);
    const wofDetail = createLocationDetail(countryFeature, regionFeature);

    return {
      ...station,
      location: {
        ...station.location,
        wof: wofDetail,
      },
    };
  });
}
