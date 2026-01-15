"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Simple rotation animation
  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group>
      {/* Earth sphere with gradient to simulate land/ocean */}
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1a4d7a"
          roughness={0.9}
          metalness={0.1}
          emissive="#0a2540"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Cloud layer */}
      <Sphere ref={cloudsRef} args={[2.015, 32, 32]}>
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.15}
          roughness={1}
          depthWrite={false}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#6ba3d4"
          transparent={true}
          opacity={0.15}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </Sphere>
    </group>
  );
}
