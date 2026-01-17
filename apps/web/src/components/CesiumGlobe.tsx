"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Cesium components to avoid SSR issues
const CesiumGlobeRenderer = dynamic(() => import("./CesiumGlobeRenderer"), {
  ssr: false,
  loading: () => null, // No loading component - we handle it ourselves
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

  // Stable container style - prevents layout shifts that cause flickering
  const containerStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    overflow: "hidden",
  };

  if (!isClient) {
    return (
      <div style={containerStyle} className={className}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            <div className="text-sm text-gray-400">Initializing Globe...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={containerStyle} className={className}>
      {/* Loading overlay - hidden once Cesium is ready */}
      <div
        id="cesium-loading"
        className="absolute inset-0 bg-black flex items-center justify-center z-10 transition-opacity duration-500"
      >
        <div className="text-white text-center">
          <div className="animate-spin w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full mx-auto mb-3"></div>
          <div className="text-sm text-gray-400">Loading 3D Globe...</div>
        </div>
      </div>
      <CesiumGlobeRenderer containerRef={containerRef} />
    </div>
  );
}
