declare module "shpjs" {
  import type { FeatureCollection, Geometry } from "geojson";

  interface ShpOptions {
    encoding?: string;
  }

  type ShpResult = FeatureCollection<Geometry> | FeatureCollection<Geometry>[];

  export default function shp(source: ArrayBuffer | Buffer | string, options?: ShpOptions): Promise<ShpResult>;
}
