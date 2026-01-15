"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { MarkerData } from "../strategies/MarkerStrategy";
import { createStationLoadingUseCase, createStationSelectionUseCase, createMarkerFactory } from "../infrastructure/ServiceContainer";

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
            {/* Main marker */}
            <mesh>
              <circleGeometry args={[style.size, 32]} />
              <meshBasicMaterial
                color={style.color}
                transparent
                opacity={style.opacity}
              />
            </mesh>

            {/* Inner core */}
            <mesh>
              <circleGeometry args={[style.size * 0.6, 16]} />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.8}
              />
            </mesh>

            {/* Station count for clusters */}
            {stationCount > 1 && (
              <>
                <mesh position={[0, 0, 0.001]}>
                  <circleGeometry args={[style.size * 0.35, 16]} />
                  <meshBasicMaterial
                    color={style.color}
                    transparent
                    opacity={1}
                  />
                </mesh>

                <Text
                  position={[0, 0, 0.002]}
                  fontSize={style.size * 0.4}
                  color="white"
                  anchorX="center"
                  anchorY="middle"
                >
                  {stationCount}
                </Text>
              </>
            )}

            {/* Glow effect */}
            {style.glowEffect && (
              <mesh>
                <ringGeometry args={[style.size * 1.2, style.size * 1.5, 32]} />
                <meshBasicMaterial
                  color={style.color}
                  transparent
                  opacity={0.3}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}

            {/* Hover ring */}
            {isHovered && (
              <mesh>
                <ringGeometry args={[style.size * 1.1, style.size * 1.3, 32]} />
                <meshBasicMaterial
                  color={style.color}
                  transparent
                  opacity={0.5}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}

            {/* Labels */}
            {style.hasLabel && style.labelText && (
              <Text
                position={[0, -style.size * 1.8, 0]}
                fontSize={style.size * 0.3}
                color="rgba(255, 255, 255, 0.9)"
                anchorX="center"
                anchorY="middle"
                maxWidth={2}
                textAlign="center"
              >
                {style.labelText}
              </Text>
            )}
          </group>
        );
      })}

      {/* Loading indicator */}
      {isLoading && (
        <mesh position={[0, 3, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#00d4ff" />
        </mesh>
      )}
    </group>
  );
}