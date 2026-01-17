import {
  Viewer,
  ScreenSpaceEventType,
  ScreenSpaceEventHandler,
  Math as CesiumMath,
  Cartesian3,
  ShadowMode,
  Color,
  TileMapServiceImageryProvider,
  EllipsoidTerrainProvider,
  SceneMode,
  defined,
  buildModuleUrl,
  ImageryLayer,
  createWorldImageryAsync,
  IonWorldImageryStyle,
  ArcGisMapServerImageryProvider,
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
 * Default Cesium viewer configuration - production ready
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
  shadows: false,
  terrainShadows: ShadowMode.DISABLED,
};

/**
 * Creates a production-ready Cesium viewer with stable rendering
 * Uses bundled NaturalEarthII imagery (no external dependencies = no flicker)
 */
export async function createCesiumViewer(
  container: HTMLElement,
  config: CesiumViewerConfig = DEFAULT_CESIUM_CONFIG,
): Promise<Viewer> {
  // Create hidden credit container
  const creditContainer = document.createElement("div");
  creditContainer.style.display = "none";
  document.body.appendChild(creditContainer);

  let imageryProvider;
  try {
    // Try to use Cesium World Imagery (Bing Maps Aerial) for realism
    imageryProvider = await createWorldImageryAsync({
      style: IonWorldImageryStyle.AERIAL
    });
  } catch (error) {
    console.warn("Failed to load Cesium World Imagery, falling back to ArcGIS:", error);
    // Fallback to ArcGIS World Imagery (High Res Satellite)
    imageryProvider = await ArcGisMapServerImageryProvider.fromUrl(
      "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
    );
  }

  const viewer = new Viewer(container, {
    ...config,
    baseLayerPicker: false,
    terrainProvider: new EllipsoidTerrainProvider(),
    baseLayer: new ImageryLayer(imageryProvider),
    
    // Rendering settings for stability
    // Disable requestRenderMode to prevent flickering on some devices
    requestRenderMode: false,
    targetFrameRate: 60,
    useBrowserRecommendedResolution: true,
    
    // Scene configuration
    scene3DOnly: true,
    sceneMode: SceneMode.SCENE3D,
    orderIndependentTranslucency: false,
    
    // Credits
    creditContainer: creditContainer,
    
    // WebGL context options for stable rendering
    contextOptions: {
      webgl: {
        alpha: false,
        antialias: false,
        preserveDrawingBuffer: false,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      },
    },
  });

  const scene = viewer.scene;
  
  // Disable ALL visual effects that can cause flickering
  scene.globe.enableLighting = false;
  scene.globe.showGroundAtmosphere = false;
  scene.globe.showWaterEffect = false;
  scene.globe.backFaceCulling = true;
  scene.globe.depthTestAgainstTerrain = false;
  
  // Solid background - no transparency
  scene.globe.baseColor = Color.BLACK;
  scene.backgroundColor = Color.BLACK;
  
  // Disable all sky elements
  if (scene.skyBox) scene.skyBox.show = false;
  if (scene.sun) scene.sun.show = false;
  if (scene.moon) scene.moon.show = false;
  if (scene.skyAtmosphere) scene.skyAtmosphere.show = false;
  
  // Disable atmospheric effects
  scene.fog.enabled = false;
  scene.highDynamicRange = false;
  scene.logarithmicDepthBuffer = false;
  
  // Disable ALL post-processing
  const stages = scene.postProcessStages;
  if (stages) {
    stages.fxaa.enabled = false;
    stages.ambientOcclusion.enabled = false;
    stages.bloom.enabled = false;
  }
  
  // Disable ground primitives that can flicker
  scene.groundPrimitives.show = true;
  
  // Initial camera
  viewer.camera.setView({
    destination: Cartesian3.fromDegrees(0, 20, 20000000),
    orientation: {
      heading: 0,
      pitch: CesiumMath.toRadians(-90),
      roll: 0,
    },
  });

  console.log("Cesium viewer created with stable local imagery");
  return viewer;
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

  handler.setInputAction((click: any) => {
    const pickedObject = viewer.scene.pick(click.position);
    if (defined(pickedObject) && defined(pickedObject.id) && (pickedObject.id as any).station) {
      onStationClick((pickedObject.id as any).station.id);
    } else {
      onStationClick(null);
    }
  }, ScreenSpaceEventType.LEFT_CLICK);

  handler.setInputAction((movement: any) => {
    const pickedObject = viewer.scene.pick(movement.endPosition);
    if (defined(pickedObject) && defined(pickedObject.id) && (pickedObject.id as any).station) {
      onStationHover((pickedObject.id as any).station.id);
      viewer.canvas.style.cursor = "pointer";
    } else {
      onStationHover(null);
      viewer.canvas.style.cursor = "default";
    }
  }, ScreenSpaceEventType.MOUSE_MOVE);

  return handler;
}
