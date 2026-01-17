"use client";

import { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGlobeStore } from "../stores/globe-store";
import * as THREE from "three";

export function GlobeControls() {
  const controlsRef = useRef<any>();
  const { camera, invalidate, gl } = useThree();
  const { isAutoRotating, setCameraPosition, selectedStation } = useGlobeStore();
  const [isMobile, setIsMobile] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // When autorotate is on, we need to manually invalidate the frame to ensure rendering happens
  // since we switched to frameloop="demand"
  useFrame(() => {
    if (isAutoRotating || isInteracting) {
      invalidate();
    }
    
    if (controlsRef.current) {
      setCameraPosition([
        camera.position.x,
        camera.position.y,
        camera.position.z,
      ]);
    }
  });

  // Smooth camera animation when station is selected
  useEffect(() => {
    if (selectedStation && controlsRef.current) {
      invalidate();
    }
  }, [selectedStation, invalidate]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      autoRotate={isAutoRotating && !isInteracting}
      autoRotateSpeed={isMobile ? 0.2 : 0.35}
      minDistance={isMobile ? 2.8 : 2.5}
      maxDistance={isMobile ? 10 : 8}
      minPolarAngle={Math.PI / 8}
      maxPolarAngle={Math.PI - Math.PI / 8}
      zoomSpeed={isMobile ? 0.8 : 0.6}
      rotateSpeed={isMobile ? 0.6 : 0.4}
      enableDamping={true}
      dampingFactor={0.08}
      touches={{
        ONE: 2, // ROTATE
        TWO: 1, // DOLLY/ZOOM
      }}
      mouseButtons={{
        LEFT: 2, // ROTATE
        MIDDLE: 1, // DOLLY
        RIGHT: undefined, // No right-click action
      }}
      onStart={() => {
        setIsInteracting(true);
        invalidate();
      }}
      onEnd={() => {
        setIsInteracting(false);
        invalidate();
      }}
      onChange={() => {
        invalidate();
      }}
    />
  );
}
