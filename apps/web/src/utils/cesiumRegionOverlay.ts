import {
  Color,
  ColorMaterialProperty,
  ConstantProperty,
  GeoJsonDataSource,
  Viewer,
} from "cesium";
import type { Feature, Geometry } from "geojson";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { point } from "@turf/helpers";
import type { RadioStation } from "../types";
import {
  loadNaturalEarthCountries,
  loadNaturalEarthRegions,
  type NaturalEarthCollection,
  type NaturalEarthFeature,
  type NaturalEarthFeatureProperties,
} from "../services/location/naturalEarthService";

interface OverlayCacheEntry {
  source: GeoJsonDataSource;
}

interface OverlayDescriptor {
  key: string;
  type: "country" | "region";
  isoA2?: string;
  isoA3?: string;
  iso3166?: string;
  centroid: { lat: number; lng: number };
}

const DEFAULT_FILL = Color.fromCssColorString("#2563eb").withAlpha(0.15);
const DEFAULT_STROKE = Color.fromCssColorString("#2563eb").withAlpha(0.8);
const SECONDARY_FILL = Color.fromCssColorString("#facc15").withAlpha(0.2);
const SECONDARY_STROKE = Color.fromCssColorString("#fde047").withAlpha(0.9);

export class CesiumRegionOverlayManager {
  private viewer: Viewer;
  private cache = new Map<string, OverlayCacheEntry>();
  private activeKeys: string[] = [];
  private countryCollectionPromise: Promise<NaturalEarthCollection> | null = null;
  private regionCollectionPromise: Promise<NaturalEarthCollection> | null = null;

  constructor(viewer: Viewer) {
    this.viewer = viewer;
  }

  async highlightStation(station: RadioStation | null): Promise<void> {
    this.hideActiveSources();

    if (!station?.location.wof) {
      return;
    }

    const detail = station.location.wof;
    const centroid = detail.centroid ?? { lat: station.location.lat, lng: station.location.lng };

    const highlightQueue: Array<{ descriptor: OverlayDescriptor; fill: Color; stroke: Color }> = [];

    if (detail.countryIsoA3 || detail.countryIsoA2) {
      highlightQueue.push({
        descriptor: {
          key: `country:${detail.countryIsoA3 ?? detail.countryIsoA2 ?? detail.countryId}`,
          type: "country",
          isoA2: detail.countryIsoA2,
          isoA3: detail.countryIsoA3,
          centroid,
        },
        fill: DEFAULT_FILL,
        stroke: DEFAULT_STROKE,
      });
    }

    if (detail.regionIso3166 || detail.regionId) {
      highlightQueue.push({
        descriptor: {
          key: `region:${detail.regionIso3166 ?? detail.regionId}`,
          type: "region",
          isoA2: detail.countryIsoA2,
          iso3166: detail.regionIso3166,
          centroid,
        },
        fill: SECONDARY_FILL,
        stroke: SECONDARY_STROKE,
      });
    }

    for (const item of highlightQueue) {
      const source = await this.ensureSource(item.descriptor, item.fill, item.stroke);
      if (!source) continue;
      source.show = true;
      this.activeKeys.push(item.descriptor.key);
    }
  }

  dispose(): void {
    this.cache.forEach((entry) => {
      this.viewer.dataSources.remove(entry.source, true);
    });
    this.cache.clear();
    this.activeKeys = [];
  }

  private hideActiveSources(): void {
    for (const key of this.activeKeys) {
      const entry = this.cache.get(key);
      if (entry) {
        entry.source.show = false;
      }
    }
    this.activeKeys = [];
  }

  private async ensureSource(descriptor: OverlayDescriptor, fill: Color, stroke: Color): Promise<GeoJsonDataSource | null> {
    const cached = this.cache.get(descriptor.key);
    if (cached) {
      this.applyMaterial(cached.source, fill, stroke);
      return cached.source;
    }

    const feature = await this.findFeature(descriptor);
    if (!feature) return null;

    const collection = {
      type: "FeatureCollection" as const,
      features: [feature],
    };

    const source = await GeoJsonDataSource.load(collection, {
      stroke,
      strokeWidth: 2,
      fill,
      clampToGround: true,
    });

    this.viewer.dataSources.add(source);
    this.cache.set(descriptor.key, { source });
    return source;
  }

  private async findFeature(descriptor: OverlayDescriptor): Promise<NaturalEarthFeature | null> {
    if (descriptor.type === "country") {
      const collection = await this.ensureCountries();
      const { isoA2, isoA3, centroid } = descriptor;
      const matchByIso = collection.features.find((feature) => {
          const props = feature.properties;
          if (isoA3 && props.isoA3?.toUpperCase() === isoA3.toUpperCase()) return true;
          if (isoA2 && props.isoA2?.toUpperCase() === isoA2.toUpperCase()) return true;
          return props.name.toLowerCase() === descriptor.key.replace("country:", "").toLowerCase();
        });
      if (matchByIso && this.isNaturalEarthFeature(matchByIso)) {
        return matchByIso;
      }

      const matchByPoint = collection.features.find((feature) => {
        if (!this.isNaturalEarthFeature(feature)) {
          return false;
        }
        return this.isFeatureContainingPoint(feature, centroid.lat, centroid.lng);
      });
      if (matchByPoint && this.isNaturalEarthFeature(matchByPoint)) {
        return matchByPoint;
      }

      return null;
    }

    const collection = await this.ensureRegions();
    const { iso3166, isoA2, centroid } = descriptor;
    const matchByCode = collection.features.find(
      (feature) => iso3166 && feature.properties.iso3166_2?.toUpperCase() === iso3166.toUpperCase(),
    );
    if (matchByCode && this.isNaturalEarthFeature(matchByCode)) {
      return matchByCode;
    }

    const matchByPoint = collection.features.find((feature) => {
      if (isoA2 && feature.properties.isoA2?.toUpperCase() !== isoA2.toUpperCase()) {
        return false;
      }
      if (!this.isNaturalEarthFeature(feature)) {
        return false;
      }
      return this.isFeatureContainingPoint(feature, centroid.lat, centroid.lng);
    });
    if (matchByPoint && this.isNaturalEarthFeature(matchByPoint)) {
      return matchByPoint;
    }

    return null;
  }

  private async ensureCountries(): Promise<NaturalEarthCollection> {
    if (!this.countryCollectionPromise) {
      this.countryCollectionPromise = loadNaturalEarthCountries();
    }
    return this.countryCollectionPromise;
  }

  private async ensureRegions(): Promise<NaturalEarthCollection> {
    if (!this.regionCollectionPromise) {
      this.regionCollectionPromise = loadNaturalEarthRegions();
    }
    return this.regionCollectionPromise;
  }

  private isFeatureContainingPoint(feature: NaturalEarthFeature, lat: number, lng: number): boolean {
    const [minLng, minLat, maxLng, maxLat] = feature.bbox;
    if (lat < minLat || lat > maxLat || lng < minLng || lng > maxLng) {
      return false;
    }
    try {
      return booleanPointInPolygon(point([lng, lat]), feature as any);
    } catch (error) {
      console.warn("Failed to evaluate Natural Earth polygon", error);
      return false;
    }
  }

  private isNaturalEarthFeature(
    feature: Feature<Geometry, NaturalEarthFeatureProperties> | NaturalEarthFeature,
  ): feature is NaturalEarthFeature {
    const bbox = (feature as NaturalEarthFeature).bbox;
    return Array.isArray(bbox) && bbox.length === 4;
  }

  private applyMaterial(source: GeoJsonDataSource, fill: Color, stroke: Color): void {
    source.entities.values.forEach((entity) => {
      if (entity.polygon) {
        entity.polygon.material = new ColorMaterialProperty(fill);
        entity.polygon.outlineColor = new ConstantProperty(stroke);
        entity.polygon.outlineWidth = new ConstantProperty(2);
      }
      if (entity.polyline) {
        entity.polyline.material = new ColorMaterialProperty(stroke);
        entity.polyline.width = new ConstantProperty(2);
      }
    });
  }
}
