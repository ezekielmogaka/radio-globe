"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Cesium components to avoid SSR issues
const CesiumGlobeRenderer = dynamic(() => import("./CesiumGlobeRenderer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-black">
      <div className="text-white">Loading 3D Globe...</div>
    </div>
  ),
});

interface CesiumGlobeProps {
  className?: string;
}

export function CesiumGlobe({ className = "" }: CesiumGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        ref={containerRef}
        className={`w-full h-full bg-black flex items-center justify-center ${className}`}
      >
        <div className="text-white text-center">
          <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
          <div>Initializing Globe...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: "400px" }}
    >
      <div
        className="absolute inset-0 bg-black flex items-center justify-center z-10"
        id="cesium-loading"
      >
        <div className="text-white text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
          <div>Loading 3D Globe...</div>
        </div>
      </div>
      <CesiumGlobeRenderer containerRef={containerRef} />
    </div>
  );
}
