import {
  Viewer,
  Entity,
  Color,
  ConstantProperty,
  BillboardGraphics,
  LabelGraphics,
  HeightReference,
  NearFarScalar,
  DistanceDisplayCondition,
  Cartesian2,
  VerticalOrigin,
  LabelStyle,
} from "cesium";
import {
  radioStationToEntity,
  getStationColor,
  getStationScale,
} from "../utils/cesiumUtils";
import type { RadioStation } from "../types";

/**
 * Manages Cesium entities for radio stations
 */
export class CesiumEntityManager {
  private entities = new Map<string, Entity>();
  private viewer: Viewer;

  constructor(viewer: Viewer) {
    this.viewer = viewer;
  }

  /**
   * Create a radio station entity with cluster support
   */
  createStationEntity(station: RadioStation): Entity {
    const stationEntity = radioStationToEntity(station);

    // Choose icon based on whether it's a cluster or individual station
    const iconImage = station.isCluster 
      ? (station.stationCount && station.stationCount > 10 
          ? "/cluster-large.svg" 
          : "/cluster-small.svg")
      : "/radio-station-icon.svg";

    const distanceFadeLimit = station.isCluster ? 6.5e6 : 3.0e6;
    const entity = this.viewer.entities.add({
      id: station.id,
      position: stationEntity.position,

      billboard: new BillboardGraphics({
        image: new ConstantProperty(iconImage),
        show: new ConstantProperty(true),
        scale: new ConstantProperty(getStationScale(station)),
        color: new ConstantProperty(Color.WHITE),
        scaleByDistance: new ConstantProperty(
          station.isCluster 
            ? new NearFarScalar(8.0e5, 2.2, 2.0e7, 0.6)
            : new NearFarScalar(6.0e5, 1.4, 1.5e7, 0.2)
        ),
        translucencyByDistance: new ConstantProperty(
          station.isCluster
            ? new NearFarScalar(8.0e5, 1.0, 2.5e7, 0.1)
            : new NearFarScalar(5.0e5, 1.0, 1.2e7, 0.05),
        ),
        distanceDisplayCondition: new ConstantProperty(
          new DistanceDisplayCondition(0.0, distanceFadeLimit),
        ),
        heightReference: new ConstantProperty(
          HeightReference.RELATIVE_TO_GROUND,
        ),
        disableDepthTestDistance: new ConstantProperty(
          Number.POSITIVE_INFINITY,
        ),
      }),

      label: new LabelGraphics({
        text: new ConstantProperty(
          station.isCluster 
            ? `${station.name}`  // Simplified cluster text to reduce clutter
            : station.name
        ),
        font: new ConstantProperty(
          station.isCluster 
            ? "bold 12pt sans-serif"  // Slightly smaller font
            : "10pt sans-serif"       // Smaller font for individual stations
        ),
        style: new ConstantProperty(LabelStyle.FILL_AND_OUTLINE),
        outlineWidth: new ConstantProperty(3), // Thicker outline for better readability
        verticalOrigin: new ConstantProperty(VerticalOrigin.BOTTOM),
        pixelOffset: new ConstantProperty(new Cartesian2(0, -40)), // Move labels higher to reduce overlap
        show: new ConstantProperty(false), // Start hidden, show only on hover/selection
        distanceDisplayCondition: new ConstantProperty(
          new DistanceDisplayCondition(0.0, station.isCluster ? 5.0e6 : 1.8e6),
        ),
        fillColor: new ConstantProperty(
          station.isCluster ? Color.YELLOW : Color.WHITE
        ),
        outlineColor: new ConstantProperty(Color.BLACK),
        scaleByDistance: new ConstantProperty(
          new NearFarScalar(8.0e5, 1.05, 1.2e7, 0.0),
        ),
        // Add collision detection to prevent overlapping labels
        disableDepthTestDistance: new ConstantProperty(Number.POSITIVE_INFINITY),
      }),
    });

    // Store station data on the entity
    (entity as any).station = station;
    this.entities.set(station.id, entity);
    
    // Request render since we're using requestRenderMode
    this.viewer.scene.requestRender();

    return entity;
  }

  /**
   * Update entity appearance based on selection/hover state
   */
  updateEntityAppearance(
    stationId: string,
    isSelected: boolean,
    isHovered: boolean,
  ): void {
    const entity = this.entities.get(stationId);
    if (!entity) return;

    const station = (entity as any).station as RadioStation;

    if (entity.billboard) {
      // Update billboard color and scale
      const color = getStationColor(station, isSelected, isHovered);
      entity.billboard.color = new ConstantProperty(
        Color.fromBytes(
          Math.round(color.red * 255),
          Math.round(color.green * 255),
          Math.round(color.blue * 255),
          Math.round(color.alpha * 255),
        ),
      );
      const newScale =
        getStationScale(station) * (isSelected ? 1.5 : isHovered ? 1.2 : 1.0);
      entity.billboard.scale = new ConstantProperty(newScale);
    }

    if (entity.label) {
      // Show label on hover or selection
      entity.label.show = new ConstantProperty(isHovered || isSelected);
    }
    
    // Request render for appearance updates
    this.viewer.scene.requestRender();
  }

  /**
   * Get entity by station ID
   */
  getEntity(stationId: string): Entity | undefined {
    return this.entities.get(stationId);
  }

  /**
   * Get all entities
   */
  getAllEntities(): Map<string, Entity> {
    return this.entities;
  }

  /**
   * Clear all entities
   */
  clearAll(): void {
    this.viewer.entities.removeAll();
    this.entities.clear();
    this.viewer.scene.requestRender();
  }

  /**
   * Remove specific entity
   */
  removeEntity(stationId: string): void {
    const entity = this.entities.get(stationId);
    if (entity) {
      this.viewer.entities.remove(entity);
      this.entities.delete(stationId);
      this.viewer.scene.requestRender();
    }
  }
}
