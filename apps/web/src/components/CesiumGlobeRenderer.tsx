"use client";

import { useEffect, useRef, useCallback, RefObject } from "react";
import {
  Ion,
  Viewer,
  Cartesian3,
} from "cesium";
// import 'cesium/Build/Cesium/Widgets/widgets.css'
import { useGlobeStore } from "../stores/globe-store";
import { createStationLoadingUseCase } from "../infrastructure/ServiceContainer";
import { radioDiscoveryService } from "../services/radioDiscoveryService";
import { createCameraDestination } from "../utils/cesiumUtils";
import { CesiumEntityManager } from "../utils/cesiumEntityManager";
import {
  createCesiumViewer,
  createEventHandlers,
} from "../utils/cesiumViewerConfig";
import { CesiumRegionOverlayManager } from "../utils/cesiumRegionOverlay";
import type { RadioStation } from "../types";

// Set Cesium base URL as early as possible
if (typeof window !== "undefined") {
  (window as any).CESIUM_BASE_URL = "/cesium/";

  // Add global error handler for Cesium imagery errors specifically
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    if (reason) {
      const errorStr = reason.toString ? reason.toString() : String(reason);
      const message = reason.message || errorStr;
      
      // Suppress Cesium-related imagery/tile loading errors
      if (
        errorStr.includes("ImageryLayer") ||
        errorStr.includes("cesium") ||
        errorStr.includes("imagery") ||
        errorStr.includes("tile") ||
        errorStr.includes("Tile") ||
        message.includes("ImageryLayer") ||
        message.includes("Failed to load")
      ) {
        // Silently handle - these are usually transient network issues
        event.preventDefault();
        return;
      }
    }
  });

  // Also catch regular errors from Cesium
  window.addEventListener("error", (event) => {
    if (event.message && (
      event.message.includes("cesium") ||
      event.message.includes("Cesium") ||
      event.message.includes("ImageryLayer") ||
      event.message.includes("tile")
    )) {
      event.preventDefault();
      return;
    }
  });
}

// Set Cesium Ion access token
Ion.defaultAccessToken =
  process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1NGU5Ny05OGNlLTQ4Y2MtOGEyNC0yOGQ1NGM2YmJmMzgiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNzM2NjkwMzIxfQ.aF1ggEQ-dJfCOoAGiU5pynhQD7q4aaUOMkFD2C7sZS8";

interface CesiumGlobeRendererProps {
  containerRef: RefObject<HTMLDivElement>;
}

export default function CesiumGlobeRenderer({
  containerRef,
}: CesiumGlobeRendererProps) {
  const viewerRef = useRef<Viewer | null>(null);
  const entityManagerRef = useRef<CesiumEntityManager | null>(null);
  const handlerRef = useRef<any>(null);
  const overlayManagerRef = useRef<CesiumRegionOverlayManager | null>(null);

  const {
    selectedStation,
    hoveredStation,
    selectStation,
    hoverStation,
    addMarker,
    flyToTarget,
    clearFlyToTarget,
    selectCluster,
  } = useGlobeStore();

  // Load radio stations using the comprehensive country-based system
  const loadStations = useCallback(async () => {
    console.log("Loading stations with country-based organization...", {
      entityManager: !!entityManagerRef.current,
    });
    if (!entityManagerRef.current) {
      console.warn("Entity manager not available");
      return;
    }

    try {
      // Create service instances
      const stationLoader = createStationLoadingUseCase();

      // Get current camera height and calculate proper zoom level
      const cameraHeight = viewerRef.current?.camera.positionCartographic.height || 15000000;
      console.log("Camera height:", cameraHeight);
      
      // More conservative zoom levels to prevent overcrowding
      let currentZoom = 1; // Default to country level
      if (cameraHeight < 2000000) currentZoom = 5; // Very close - individual stations
      else if (cameraHeight < 5000000) currentZoom = 4; // Close - city clusters
      else if (cameraHeight < 10000000) currentZoom = 3; // Medium - city clusters
      else if (cameraHeight < 20000000) currentZoom = 2; // Far - country clusters
      else currentZoom = 1; // Very far - country clusters only
      
      console.log("Loading stations for zoom level:", currentZoom);
      const markerData = await stationLoader.loadStationsForView(currentZoom);
      console.log("Received marker data:", markerData.length, "markers");

      if (markerData.length === 0) {
        console.warn("No markers received from station loader - trying fallback");
        // Fallback: try to load some test stations directly
        try {
          const fallbackStations = await radioDiscoveryService.getTopStations(20);
          console.log("Loaded fallback stations:", fallbackStations.length);
          
          fallbackStations.forEach((station, index) => {
            try {
              if (station.location?.lat && station.location?.lng) {
                console.log(`Creating entity ${index + 1}/${fallbackStations.length}: ${station.name}`);
                entityManagerRef.current!.createStationEntity(station);
                addMarker(station);
              } else {
                console.warn(`Station ${station.name} has no valid coordinates`);
              }
            } catch (entityError) {
              console.error(`Failed to create entity for ${station.name}:`, entityError);
            }
          });
          
          return;
        } catch (fallbackError) {
          console.error("Fallback station loading failed:", fallbackError);
        }
        return;
      }

      // Clear existing entities before adding new ones
      entityManagerRef.current.clearAll();
      console.log("Cleared existing entities");

      // Add marker entities based on the new system with better validation
      let successCount = 0;
      let errorCount = 0;
      
      markerData.forEach((marker, index) => {
        try {
          console.log(`Processing marker ${index + 1}/${markerData.length}:`, marker.id, marker.type);
          
          // Validate marker position
          if (!marker.position || marker.position.length !== 3) {
            console.error(`Invalid position for marker ${marker.id}:`, marker.position);
            errorCount++;
            return;
          }
          
          const [lng, lat, height] = marker.position;
          
          // Validate coordinates
          if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
            console.error(`Invalid coordinates for marker ${marker.id}: lat=${lat}, lng=${lng}`);
            errorCount++;
            return;
          }
          
          // Create appropriate station data for the entity
          if (marker.type === 'cluster' || marker.type === 'city') {
            const stationData = {
              id: marker.id,
              name: marker.metadata.name || `Cluster ${marker.metadata.stationCount}`,
              location: {
                lat: lat,
                lng: lng,
                country: marker.metadata.country || 'Unknown',
                city: marker.metadata.city || 'Unknown',
              },
              url: marker.stations[0]?.url || 'http://example.com',
              genre: marker.metadata.type === 'country' ? 'Country Cluster' : 'City Cluster',
              language: 'Multiple',
              listeners: (marker.metadata.stationCount || 1) * 1000,
              stationCount: marker.metadata.stationCount,
              isCluster: true,
              stations: marker.stations, // Store the list of stations
              type: marker.type
            };
            
            console.log(`Creating cluster entity: ${stationData.name} ${marker.type === 'city' ? '(City)' : '(Country)'}`);
            entityManagerRef.current!.createStationEntity(stationData as any);
            addMarker(stationData as any);
          } else {
            // Individual station
            const station = marker.stations[0];
            if (station && station.location?.lat && station.location?.lng) {
              console.log(`Creating individual station entity: ${station.name}`);
              entityManagerRef.current!.createStationEntity(station);
              addMarker(station);
            } else {
              console.error(`Invalid station data for marker ${marker.id}:`, station);
              errorCount++;
              return;
            }
          }
          successCount++;
        } catch (err) {
          console.error(
            `Failed to create entity for marker ${marker.id}:`,
            err
          );
          errorCount++;
        }
      });

      console.log(`Marker creation complete: ${successCount} successful, ${errorCount} errors`);
      console.log(`Total stations represented: ${markerData.reduce((sum, m) => sum + (m.metadata.stationCount || 1), 0)}`);
      
      if (successCount === 0) {
        console.error("No markers were successfully created! Trying emergency fallback...");
        // Emergency fallback - add a few test markers
        const testStations = [
          {
            id: 'test-1',
            name: 'Test Station NYC',
            location: { lat: 40.7128, lng: -74.0060, country: 'US', city: 'New York' },
            url: 'http://test.com',
            genre: 'Test',
            language: 'English',
            listeners: 1000
          },
          {
            id: 'test-2', 
            name: 'Test Station London',
            location: { lat: 51.5074, lng: -0.1278, country: 'GB', city: 'London' },
            url: 'http://test.com',
            genre: 'Test',
            language: 'English',
            listeners: 1000
          }
        ];
        
        testStations.forEach(station => {
          try {
            entityManagerRef.current!.createStationEntity(station as any);
            addMarker(station as any);
            console.log(`Added emergency test station: ${station.name}`);
          } catch (testError) {
            console.error(`Failed to add test station ${station.name}:`, testError);
          }
        });
      }
    } catch (error) {
      console.error("Failed to load comprehensive station system:", error);
      // Try a simple test to add one marker
      try {
        const testStation: RadioStation = {
          id: "test-station",
          name: "Test Station",
          location: {
            lat: 40.7128,
            lng: -74.006,
            country: "USA",
            city: "New York",
          },
          url: "http://test.com",
          genre: "Test",
          language: "English",
          listeners: 1000,
        };
        addMarker(testStation);
        console.log("Added test station");
      } catch (testError) {
        console.error("Failed to add test station:", testError);
      }
    }
  }, [addMarker]);

  // Initialize Cesium viewer and entity manager
  useEffect(() => {
    console.log("Initializing Cesium...", {
      container: !!containerRef.current,
      viewer: !!viewerRef.current,
    });
    if (!containerRef.current || viewerRef.current) return;

    let cancelled = false;

    const initViewer = async () => {
      try {
        console.log("Creating Cesium viewer...");

        const viewer = await createCesiumViewer(containerRef.current!);

        if (cancelled) {
          viewer.destroy();
          return;
        }

        viewerRef.current = viewer;
        console.log("Cesium viewer created successfully");

        // Hide loading indicator
        const loadingEl = document.getElementById("cesium-loading");
        if (loadingEl) {
          loadingEl.style.display = "none";
        }

        // Add error event listeners but don't let them break the app
        viewer.scene.renderError.addEventListener((scene, error) => {
          console.warn("Cesium render error (handled):", error);
        });

        viewer.scene.debugShowFramesPerSecond = false;

        // Create entity manager
        console.log("Creating entity manager...");
        entityManagerRef.current = new CesiumEntityManager(viewer);
        console.log("Entity manager created");

        overlayManagerRef.current = new CesiumRegionOverlayManager(viewer);

        const resolveStation = (stationId: string | null): RadioStation | null => {
          if (!stationId || !entityManagerRef.current) return null;
          const entity = entityManagerRef.current.getEntity(stationId);
          const station = entity ? ((entity as any).station as RadioStation | undefined) : undefined;
          return station ?? null;
        };

        handlerRef.current = createEventHandlers(
          viewer,
          (stationId) => {
            const station = resolveStation(stationId);
            const isCluster = station && ((station as any).isCluster || (station as any).type === 'cluster' || (station as any).type === 'city');
            
            if (isCluster && (station as any).stations) {
              console.log("Cluster selected:", (station as any).stations.length, "stations");
              selectCluster((station as any).stations);
              // Also select the first station to play music immediately
              if ((station as any).stations.length > 0) {
                 selectStation((station as any).stations[0]);
              }
            } else {
              selectStation(station);
            }
          },
          (stationId) => {
            const station = resolveStation(stationId);
            hoverStation(station);
          },
        );

        // Add camera movement event listener for dynamic loading
        let lastZoomLevel = 1;
        viewer.camera.moveEnd.addEventListener(() => {
          const height = viewer.camera.positionCartographic.height;
          let newZoom = 1;
          if (height < 2000000) newZoom = 5;
          else if (height < 5000000) newZoom = 4;
          else if (height < 10000000) newZoom = 3;
          else if (height < 20000000) newZoom = 2;
          else newZoom = 1;
          
          console.log(`Camera moved to height: ${height}, zoom level: ${newZoom}`);
          
          // Only reload if zoom level actually changed
          if (newZoom !== lastZoomLevel) {
            lastZoomLevel = newZoom;
            setTimeout(() => {
              loadStations();
            }, 300);
          }
        });

        // Load initial stations after a brief delay to ensure viewer is ready
        console.log("Loading stations...");
        setTimeout(() => {
          loadStations();
        }, 500);

      } catch (error) {
        console.error("Failed to initialize Cesium viewer:", error);
        
        let errorMessage = "Unknown error";
        if (error instanceof Error) {
          errorMessage = error.message;
          console.error("Error details:", error.stack);
        } else if (typeof error === "string") {
          errorMessage = error;
        } else {
          try {
            errorMessage = JSON.stringify(error);
          } catch (e) {
            errorMessage = String(error);
          }
        }

        // Try to show fallback content
        const loadingEl = document.getElementById("cesium-loading");
        if (loadingEl) {
          loadingEl.innerHTML = `
            <div class="text-white text-center">
              <div class="text-red-500 mb-2">Failed to initialize 3D Globe</div>
              <div class="text-sm">Error: ${errorMessage}</div>
            </div>
          `;
        }
      }
    };

    initViewer();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [containerRef, selectStation, hoverStation, loadStations]);

  // Update entity appearance based on selection/hover state
  useEffect(() => {
    if (!entityManagerRef.current) return;

    entityManagerRef.current.getAllEntities().forEach((entity, stationId) => {
      const isSelected = selectedStation?.id === stationId;
      const isHovered = hoveredStation?.id === stationId;

      entityManagerRef.current!.updateEntityAppearance(
        stationId,
        isSelected,
        isHovered,
      );
    });
  }, [selectedStation, hoveredStation]);

  // Animate camera to selected station
  useEffect(() => {
    if (overlayManagerRef.current) {
      void overlayManagerRef.current.highlightStation(selectedStation ?? null);
    }

    if (!viewerRef.current || !selectedStation) return;

    const viewer = viewerRef.current;
    const destination = createCameraDestination(selectedStation);

    viewer.camera.flyTo({
      destination: destination.destination,
      orientation: destination.orientation,
      duration: destination.duration,
    });
  }, [selectedStation]);

  // Handle flyToTarget from store (for search/discovery)
  useEffect(() => {
    if (!viewerRef.current || !flyToTarget) return;

    const viewer = viewerRef.current;
    const { latitude, longitude, height = 2000000, duration = 2 } = flyToTarget;

    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(longitude, latitude, height),
      duration: duration,
      complete: () => {
        // Clear the target after animation completes
        clearFlyToTarget();
      },
    });
  }, [flyToTarget, clearFlyToTarget]);

  // Cleanup function
  const cleanup = () => {
    if (handlerRef.current) {
      handlerRef.current.destroy();
      handlerRef.current = null;
    }
    if (viewerRef.current) {
      viewerRef.current.destroy();
      viewerRef.current = null;
    }
    entityManagerRef.current = null;
    if (overlayManagerRef.current) {
      overlayManagerRef.current.dispose();
      overlayManagerRef.current = null;
    }
  };

  return null;
}
