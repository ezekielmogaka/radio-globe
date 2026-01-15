"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";
import { ClusteredStationMarkers } from "./ClusteredStationMarkers";
import { GlobeControls } from "./GlobeControls";
import { Stars } from "@react-three/drei";

export function Globe() {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 1);
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, 5]} intensity={0.8} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Stars radius={300} depth={60} count={20000} factor={7} />
          <Earth />
          <ClusteredStationMarkers />
          <GlobeControls />
        </Suspense>
      </Canvas>
      
      <div className="absolute top-4 left-4 text-white z-10">
        <h1 className="text-2xl font-bold mb-2">Radio Globe</h1>
        <p className="text-sm opacity-75">Explore radio stations around the world</p>
      </div>
    </div>
  );
}
