"use client";

import { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGlobeStore } from "../stores/globe-store";

export function GlobeControls() {
  const controlsRef = useRef<any>();
  const { camera } = useThree();
  const { isAutoRotating, setCameraPosition } = useGlobeStore();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useFrame(() => {
    if (controlsRef.current) {
      // Update camera position in store
      setCameraPosition([
        camera.position.x,
        camera.position.y,
        camera.position.z,
      ]);
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      autoRotate={isAutoRotating}
      autoRotateSpeed={isMobile ? 0.3 : 0.5}
      minDistance={isMobile ? 2.5 : 1.5}
      maxDistance={isMobile ? 8 : 5}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI - Math.PI / 6}
      zoomSpeed={isMobile ? 1.2 : 0.8}
      rotateSpeed={isMobile ? 0.8 : 0.5}
      enableDamping={true}
      dampingFactor={isMobile ? 0.1 : 0.05}
      touches={{
        ONE: isMobile ? 2 : 2, // ROTATE
        TWO: isMobile ? 1 : 1, // DOLLY/ZOOM
      }}
      mouseButtons={{
        LEFT: 2, // ROTATE
        MIDDLE: 1, // DOLLY
        RIGHT: undefined, // No right-click action
      }}
    />
  );
}
