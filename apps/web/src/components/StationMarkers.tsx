"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGlobeStore } from "../stores/globe-store";
import * as THREE from "three";

export function StationMarkers() {
  const markersRef = useRef<THREE.Group>(null);
  const { markers, selectStation, hoverStation } = useGlobeStore();
  const { camera } = useThree();

  useFrame(() => {
    if (!markersRef.current) return;

    // Update marker facing direction to camera
    markersRef.current.children.forEach((marker) => {
      marker.lookAt(camera.position);
    });
  });

  return (
    <group ref={markersRef}>
      {markers.map((marker) => {
        if (!marker.isVisible) return null;

        return (
          <group
            key={marker.station.id}
            position={marker.position}
            onClick={(e) => {
              e.stopPropagation();
              selectStation(marker.station);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              hoverStation(marker.station);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              hoverStation(null);
              document.body.style.cursor = "auto";
            }}
          >
            {/* Station marker */}
            <mesh>
              <circleGeometry args={[0.03, 16]} />
              <meshBasicMaterial
                color={
                  marker.isSelected
                    ? "#00ff88"
                    : marker.isHovered
                      ? "#88ccff"
                      : "#ff6b6b"
                }
                transparent
                opacity={marker.isHovered || marker.isSelected ? 1 : 0.9}
              />
            </mesh>

            {/* Inner glow */}
            <mesh>
              <circleGeometry args={[0.015, 16]} />
              <meshBasicMaterial
                color={marker.isSelected ? "#ffffff" : "#ffffff"}
                transparent
                opacity={0.8}
              />
            </mesh>

            {/* Pulsing ring for selected station */}
            {marker.isSelected && (
              <mesh>
                <ringGeometry args={[0.04, 0.06, 16]} />
                <meshBasicMaterial
                  color="#00ff88"
                  transparent
                  opacity={0.6}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}

            {/* Hover ring */}
            {marker.isHovered && !marker.isSelected && (
              <mesh>
                <ringGeometry args={[0.035, 0.045, 16]} />
                <meshBasicMaterial
                  color="#88ccff"
                  transparent
                  opacity={0.5}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}
