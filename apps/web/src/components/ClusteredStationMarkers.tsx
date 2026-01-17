"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { MarkerData } from "../strategies/MarkerStrategy";
import { createStationLoadingUseCase, createStationSelectionUseCase, createMarkerFactory } from "../infrastructure/ServiceContainer";
import { useGlobeStore } from "../stores/globe-store";

export function ClusteredStationMarkers() {
  const markersRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  
  // Use cases (clean architecture) - memoized to prevent infinite loops
  const stationLoadingUseCase = useMemo(() => createStationLoadingUseCase(), []);
  const stationSelectionUseCase = useMemo(() => createStationSelectionUseCase(), []);
  const markerFactory = useMemo(() => createMarkerFactory(), []);

  // Local state
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null);

  // Calculate camera distance and zoom level - throttled to prevent constant updates
  const [cameraDistance, setCameraDistance] = useState(4);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Throttled camera distance calculation
  useEffect(() => {
    const updateCameraDistance = () => {
      const distance = camera.position.length();
      const zoom = Math.max(1, 8 - distance);
      const roundedZoom = Math.round(zoom * 2) / 2; // Round to nearest 0.5
      
      setCameraDistance(distance);
      if (Math.abs(roundedZoom - zoomLevel) > 0.25) {
        setZoomLevel(roundedZoom);
      }
    };
    
    const interval = setInterval(updateCameraDistance, 500); // Update every 500ms
    return () => clearInterval(interval);
  }, [camera, zoomLevel]);



  // Load markers based on zoom level
  useEffect(() => {
    const loadMarkers = async () => {
      setIsLoading(true);
      try {
        const newMarkers = await stationLoadingUseCase.loadStationsForView(zoomLevel);
        setMarkers(newMarkers);

        // Update global playlist with stations from current view
        // Use requestAnimationFrame to avoid blocking the main thread during render
        requestAnimationFrame(() => {
          const visibleStations = newMarkers.flatMap(m => m.stations);
          if (visibleStations.length > 0) {
            useGlobeStore.getState().setPlaylist(visibleStations);
          }
        });

      } catch (error) {
        console.error('Failed to load markers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMarkers();
  }, [zoomLevel, stationLoadingUseCase]);

  // Handle marker interactions
  const handleMarkerClick = (markerData: MarkerData, event: any) => {
    event.stopPropagation();
    
    const { strategy } = markerFactory.createMarker(markerData, cameraDistance);
    strategy.handleInteraction(markerData, 'click');
  };

  const handleMarkerHover = (markerId: string | null) => {
    setHoveredMarkerId(markerId);
  };

  // Update marker facing direction
  useFrame(() => {
    if (!markersRef.current) return;

    markersRef.current.children.forEach((marker) => {
      if (marker.children.length > 0) {
        marker.children.forEach(child => {
          if (child.type === 'Mesh') {
            child.lookAt(camera.position);
          }
        });
      }
    });
  });

  // Filter and style markers
  const visibleMarkers = useMemo(() => {
    return markers
      .filter(marker => markerFactory.shouldShowMarker(marker, zoomLevel))
      .map(marker => ({
        data: marker,
        ...markerFactory.createMarker(marker, cameraDistance)
      }));
  }, [markers, zoomLevel, cameraDistance, markerFactory]);

  return (
    <group ref={markersRef}>
      {visibleMarkers.map(({ data, style, strategy }) => {
        const isHovered = hoveredMarkerId === data.id;
        const stationCount = data.stations.length;
        
        // Radio Garden style - green glowing dots for cities
        const markerColor = isHovered ? "#00ff88" : style.color || "#00d4aa";
        const glowColor = "#00ffaa";
        
        return (
          <group
            key={data.id}
            position={data.position}
            onClick={(e) => handleMarkerClick(data, e)}
            onPointerOver={(e) => {
              e.stopPropagation();
              handleMarkerHover(data.id);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              handleMarkerHover(null);
              document.body.style.cursor = "auto";
            }}
          >
            {/* Outer glow sphere */}
            <mesh>
              <sphereGeometry args={[style.size * 1.5, 16, 16]} />
              <meshBasicMaterial
                color={glowColor}
                transparent
                opacity={isHovered ? 0.4 : 0.15}
              />
            </mesh>

            {/* Main marker - Radio Garden style glowing sphere */}
            <mesh>
              <sphereGeometry args={[style.size, 16, 16]} />
              <meshBasicMaterial
                color={markerColor}
                transparent
                opacity={isHovered ? 1 : style.opacity}
              />
            </mesh>

            {/* Inner bright core */}
            <mesh>
              <sphereGeometry args={[style.size * 0.4, 12, 12]} />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={isHovered ? 1 : 0.9}
              />
            </mesh>

            {/* Station count badge for clusters - positioned outward from globe center */}
            {stationCount > 1 && (
              <group position={[style.size * 1.2, style.size * 1.2, 0]}>
                {/* Badge background */}
                <mesh>
                  <sphereGeometry args={[style.size * 0.5, 12, 12]} />
                  <meshBasicMaterial
                    color="#1a1a2e"
                    transparent
                    opacity={0.95}
                  />
                </mesh>

                {/* Station count text - billboard style */}
                <Text
                  fontSize={style.size * 0.4}
                  color="#00ffaa"
                  anchorX="center"
                  anchorY="middle"
                  fontWeight="bold"
                >
                  {stationCount > 99 ? "99+" : stationCount}
                </Text>
              </group>
            )}

            {/* Pulsing glow effect for hovered markers */}
            {isHovered && (
              <>
                <mesh>
                  <sphereGeometry args={[style.size * 2.0, 16, 16]} />
                  <meshBasicMaterial
                    color={glowColor}
                    transparent
                    opacity={0.2}
                  />
                </mesh>
                <mesh>
                  <sphereGeometry args={[style.size * 2.5, 16, 16]} />
                  <meshBasicMaterial
                    color={glowColor}
                    transparent
                    opacity={0.1}
                  />
                </mesh>
              </>
            )}

            {/* City/Location Label */}
            {style.hasLabel && style.labelText && (
              <group position={[0, -style.size * 2.2, 0]}>
                {/* Label background */}
                <mesh position={[0, 0, -0.001]}>
                  <planeGeometry args={[style.labelText.length * style.size * 0.2 + style.size * 0.5, style.size * 0.6]} />
                  <meshBasicMaterial
                    color="#0a0a14"
                    transparent
                    opacity={0.85}
                  />
                </mesh>
                
                {/* Label text */}
                <Text
                  position={[0, 0, 0]}
                  fontSize={style.size * 0.28}
                  color="#ffffff"
                  anchorX="center"
                  anchorY="middle"
                  maxWidth={2}
                  textAlign="center"
                  fontWeight="medium"
                >
                  {style.labelText}
                </Text>
              </group>
            )}
          </group>
        );
      })}

      {/* Loading indicator */}
      {isLoading && (
        <mesh position={[0, 3, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#00ffaa" />
        </mesh>
      )}
    </group>
  );
}