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

// Generate a futuristic glowing dot texture
function createGlowingDotCanvas(color: string, size: number, glow: boolean): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return canvas;

  const center = size / 2;
  const radius = size / 4;

  // Clear
  context.clearRect(0, 0, size, size);

  // Outer glow
  if (glow) {
    const gradient = context.createRadialGradient(center, center, radius, center, center, size / 2);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(center, center, size / 2, 0, Math.PI * 2);
    context.fill();
  }

  // Inner core
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2);
  context.fillStyle = '#ffffff';
  context.fill();
  
  // Colored rim
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2);
  context.lineWidth = 2;
  context.strokeStyle = color;
  context.stroke();

  return canvas;
}

const STATION_CANVAS = createGlowingDotCanvas('rgba(50, 255, 100, 0.8)', 64, true); // Neon Green
const CLUSTER_CANVAS = createGlowingDotCanvas('rgba(50, 200, 255, 0.8)', 96, true); // Neon Blue
const CITY_CANVAS = createGlowingDotCanvas('rgba(255, 100, 200, 0.8)', 80, true); // Neon Pink

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

    // Choose visual based on type
    const isCluster = station.isCluster || (station as any).type === 'cluster';
    const isCity = (station as any).type === 'city';
    
    let canvas = STATION_CANVAS;
    let labelColor = Color.WHITE;
    let scale = isCity ? 0.8 : 0.6;
    let distanceFade = 3.0e6;

    if (isCity) {
      canvas = CITY_CANVAS;
      labelColor = Color.fromCssColorString('#ff64c8');
      scale = 0.8;
      distanceFade = 8.0e6;
    } else if (isCluster) {
      canvas = CLUSTER_CANVAS;
      labelColor = Color.fromCssColorString('#32c8ff');
      scale = 1.0;
      distanceFade = 15.0e6;
    }

    const entity = this.viewer.entities.add({
      id: station.id,
      position: stationEntity.position,

      billboard: new BillboardGraphics({
        image: new ConstantProperty(canvas),
        show: new ConstantProperty(true),
        scale: new ConstantProperty(scale),
        color: new ConstantProperty(Color.WHITE),
        scaleByDistance: new ConstantProperty(
          new NearFarScalar(1.0e5, 1.5, 2.0e7, 0.2)
        ),
        translucencyByDistance: new ConstantProperty(
          new NearFarScalar(1.0e5, 1.0, 3.0e7, 0.1)
        ),
        distanceDisplayCondition: new ConstantProperty(
          new DistanceDisplayCondition(0.0, distanceFade),
        ),
        heightReference: new ConstantProperty(
          HeightReference.RELATIVE_TO_GROUND,
        ),
        disableDepthTestDistance: new ConstantProperty(
          Number.POSITIVE_INFINITY,
        ),
      }),
      
      // Floating label for futuristic feel
      point: undefined, // Disable point, use billboard

      label: new LabelGraphics({
        text: new ConstantProperty(station.name),
        font: new ConstantProperty("14px 'Saira', sans-serif"), // Futuristic font
        style: new ConstantProperty(LabelStyle.FILL),
        verticalOrigin: new ConstantProperty(VerticalOrigin.BOTTOM),
        pixelOffset: new ConstantProperty(new Cartesian2(0, -20)),
        show: new ConstantProperty(false), // Show on hover
        distanceDisplayCondition: new ConstantProperty(
          new DistanceDisplayCondition(0.0, distanceFade * 0.5), // Hide labels sooner than dots
        ),
        fillColor: new ConstantProperty(labelColor),
        outlineWidth: new ConstantProperty(0),
        scaleByDistance: new ConstantProperty(
          new NearFarScalar(1.0e5, 1.2, 1.0e7, 0.5)
        )
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
    
    // Logic to make active selection glow or pulse could go here
    if (entity.billboard) {
      const baseScale = (station as any).type === 'city' ? 0.8 : ((station as any).isCluster ? 1.0 : 0.6);
      const targetScale = isSelected ? baseScale * 1.5 : (isHovered ? baseScale * 1.3 : baseScale);
      
      entity.billboard.scale = new ConstantProperty(targetScale);
      
      // Update label visibility
      if (entity.label) {
        entity.label.show = new ConstantProperty(isHovered || isSelected);
      }
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
