import {
  Viewer,
  ScreenSpaceEventType,
  ScreenSpaceEventHandler,
  Math as CesiumMath,
  Cartesian3,
  ShadowMode,
  createWorldTerrainAsync,
  createWorldImageryAsync,
  IonWorldImageryStyle,
  Cesium3DTileset,
  Color,
} from "cesium";

/**
 * Configuration options for Cesium viewer
 */
export interface CesiumViewerConfig {
  animation?: boolean;
  baseLayerPicker?: boolean;
  fullscreenButton?: boolean;
  geocoder?: boolean;
  homeButton?: boolean;
  infoBox?: boolean;
  sceneModePicker?: boolean;
  selectionIndicator?: boolean;
  timeline?: boolean;
  navigationHelpButton?: boolean;
  navigationInstructionsInitiallyVisible?: boolean;
  vrButton?: boolean;
  scene3DOnly?: boolean;
  shadows?: boolean;
  terrainShadows?: ShadowMode;
}

/**
 * Default Cesium viewer configuration for radio globe
 */
export const DEFAULT_CESIUM_CONFIG: CesiumViewerConfig = {
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  sceneModePicker: false,
  selectionIndicator: false,
  timeline: false,
  navigationHelpButton: false,
  navigationInstructionsInitiallyVisible: false,
  vrButton: false,
  scene3DOnly: true,
  shadows: true,
  terrainShadows: ShadowMode.ENABLED,
};

/**
 * Creates and configures a Cesium viewer
 */
export function createCesiumViewer(
  container: HTMLElement,
  config: CesiumViewerConfig = DEFAULT_CESIUM_CONFIG,
): Viewer {
  const viewer = new Viewer(container, {
    ...config,
  });

  // Configure the scene
  viewer.scene.globe.enableLighting = true;
  viewer.scene.globe.backFaceCulling = false;
  viewer.scene.globe.baseColor = Color.fromCssColorString("#0b1120");
  if (viewer.scene.skyBox) {
    viewer.scene.skyBox.show = true;
  }
  if (viewer.scene.sun) {
    viewer.scene.sun.show = true;
  }
  if (viewer.scene.moon) {
    viewer.scene.moon.show = true;
  }
  if (viewer.scene.skyAtmosphere) {
    viewer.scene.skyAtmosphere.show = true;
  }

  // Set initial camera position (overview of Earth)
  viewer.camera.setView({
    destination: Cartesian3.fromDegrees(0, 0, 20000000), // 20,000km altitude
    orientation: {
      heading: 0,
      pitch: CesiumMath.toRadians(-90), // Look down
      roll: 0,
    },
  });

  void enhanceViewerScene(viewer);

  return viewer;
}

/**
 * Applies richer terrain, imagery, and visual effects to the viewer once available
 */
export async function enhanceViewerScene(viewer: Viewer): Promise<void> {
  try {
    const worldTerrain = await createWorldTerrainAsync();
    viewer.scene.terrainProvider = worldTerrain;
    viewer.scene.globe.depthTestAgainstTerrain = true;
    viewer.scene.globe.enableLighting = true;
    viewer.scene.globe.dynamicAtmosphereLighting = true;
    viewer.scene.globe.dynamicAtmosphereLightingFromSun = true;
  } catch (terrainError) {
    console.warn("Failed to load Cesium World Terrain. Continuing with ellipsoid.", terrainError);
  }

  try {
    const imageryProvider = await createWorldImageryAsync({
      style: IonWorldImageryStyle.AERIAL,
    });
    const layers = viewer.imageryLayers;
    layers.removeAll();
    layers.addImageryProvider(imageryProvider);
  } catch (imageryError) {
    console.warn("Failed to load high-resolution imagery. Falling back to previous provider.", imageryError);
    try {
      const fallback = await createWorldImageryAsync({
        style: IonWorldImageryStyle.AERIAL_WITH_LABELS,
      });
      const layers = viewer.imageryLayers;
      layers.removeAll();
      layers.addImageryProvider(fallback);
    } catch (fallbackError) {
      console.warn("Failed to load fallback imagery provider.", fallbackError);
    }
  }

  try {
    const osmBuildings = await Cesium3DTileset.fromIonAssetId(96188);
    viewer.scene.primitives.add(osmBuildings);
  } catch (buildingsError) {
    console.warn("Failed to load Cesium OSM Buildings. Skipping building overlay.", buildingsError);
  }

  if (viewer.scene.postProcessStages) {
    const { bloom, fxaa } = viewer.scene.postProcessStages;
    if (bloom) {
      bloom.enabled = true;
      bloom.uniforms.glowOnly = false;
      bloom.uniforms.contrast = 128;
      bloom.uniforms.brightness = -0.35;
    }
    if (fxaa) {
      fxaa.enabled = true;
    }
  }
}

/**
 * Creates event handlers for Cesium viewer interactions
 */
export function createEventHandlers(
  viewer: Viewer,
  onStationClick: (stationId: string | null) => void,
  onStationHover: (stationId: string | null) => void,
): ScreenSpaceEventHandler {
  const handler = new ScreenSpaceEventHandler(viewer.scene.canvas);

  // Click handler
  handler.setInputAction((click: any) => {
    const pickedObject = viewer.scene.pick(click.position);
    if (pickedObject && pickedObject.id && (pickedObject.id as any).station) {
      onStationClick((pickedObject.id as any).station.id);
    } else {
      onStationClick(null);
    }
  }, ScreenSpaceEventType.LEFT_CLICK);

  // Hover handler
  handler.setInputAction((movement: any) => {
    const pickedObject = viewer.scene.pick(movement.endPosition);
    if (pickedObject && pickedObject.id && (pickedObject.id as any).station) {
      onStationHover((pickedObject.id as any).station.id);
      viewer.canvas.style.cursor = "pointer";
    } else {
      onStationHover(null);
      viewer.canvas.style.cursor = "default";
    }
  }, ScreenSpaceEventType.MOUSE_MOVE);

  return handler;
}
