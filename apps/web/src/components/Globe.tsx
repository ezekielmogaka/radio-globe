"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, Component, ReactNode } from "react";
import { Earth } from "./Earth";
import { ClusteredStationMarkers } from "./ClusteredStationMarkers";
import { GlobeControls } from "./GlobeControls";
import { Stars } from "@react-three/drei";
import { useGlobeStore } from "../stores/globe-store";
import { StationDirectory } from "./StationDirectory";
import { Layers } from "lucide-react";
import * as THREE from "three";

// Robust WebGL detection
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

// Simple fallback component
function WebGLFallback({ onEnable2D }: { onEnable2D: () => void }) {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 to-black flex items-center justify-center z-50">
      <div className="text-center text-white p-8 bg-black/40 rounded-xl backdrop-blur-md max-w-lg border border-white/10 shadow-2xl">
        <div className="text-6xl mb-6 animate-pulse">🌍</div>
        <h2 className="text-2xl font-bold mb-4">3D Globe Unavailable</h2>
        <p className="text-gray-300 mb-8">
          Your browser (or this specific browser mode) doesn't support WebGL hardware acceleration.
        </p>
        
        <div className="space-y-4">
          <button 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            onClick={onEnable2D}
          >
            <span>📱</span>
            <span>Switch to Lite Mode (2D)</span>
          </button>
          
          <button 
            className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg transition-colors text-sm"
            onClick={() => window.location.reload()}
          >
            🔄 Retry 3D Version
          </button>
        </div>

        <div className="text-xs text-gray-500 mt-8 pt-6 border-t border-white/10">
          <p className="mb-2 uppercase tracking-wider font-semibold">Troubleshooting</p>
          <ul className="space-y-1 text-left px-4">
            <li>• Enable hardware acceleration in settings</li>
            <li>• Update browser to latest version</li>
            <li>• Try Chrome, Firefox, or Safari</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Error boundary for Canvas errors
interface WebGLErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<{children: ReactNode, onFallback: () => void}, WebGLErrorBoundaryState> {
  constructor(props: {children: ReactNode, onFallback: () => void}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): WebGLErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('WebGL Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <WebGLFallback onEnable2D={this.props.onFallback} />;
    }
    return this.props.children;
  }
}

export function Globe() {
  // Check if user has explicitly requested 2D mode, or fallback to 2D
  const [is2DMode, setIs2DMode] = useState(false);
  const [isSupported, setIsSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const supported = isWebGLAvailable();
    setIsSupported(supported);
    if (!supported) {
      // Don't auto-switch effectively, let the user see the fallback UI 
      // or optionally auto-switch. The fallback UI is better as it explains WHY.
      // But if we want to avoid the error entirely, we shouldn't render Canvas.
    }
  }, []);
  
  // 2D Mode (Station Directory)
  if (is2DMode) {
    return (
      <div className="w-full h-screen relative overflow-hidden bg-gray-900">
         {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-black z-0" />
        
        <div className="relative z-10 w-full h-full flex flex-col pt-20 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
             <div className="flex items-center space-x-3">
               <div className="bg-blue-600 p-2 rounded-lg">
                 <span className="text-2xl">📱</span>
               </div>
               <div>
                  <h2 className="text-2xl font-bold text-white">Lite Mode</h2>
                  <p className="text-blue-200 text-sm">Station Directory</p>
               </div>
             </div>
             <button 
                onClick={() => setIs2DMode(false)}
                className="text-white/80 hover:text-white text-sm bg-blue-600/20 hover:bg-blue-600/40 px-4 py-2 rounded-full transition-colors border border-blue-500/30 flex items-center space-x-2"
             >
                <Layers className="w-4 h-4" />
                <span>Switch to 3D Globe</span>
             </button>
          </div>
          
          <div className="flex-1 overflow-hidden bg-black/40 rounded-2xl border border-white/10 backdrop-blur-sm">
             <StationDirectory className="w-full h-full" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* 
         Only render Canvas if WebGL is supported to avoid "Context could not be created" console errors.
         If detection is still running (null), show simple loader. 
         If known unsupported (false), show Fallback.
      */}
      {isSupported === null ? (
        <div className="absolute inset-0 flex items-center justify-center text-white/50">
          <div className="animate-pulse">Loading Engine...</div>
        </div>
      ) : isSupported === false ? (
        <WebGLFallback onEnable2D={() => setIs2DMode(true)} />
      ) : (
        <WebGLErrorBoundary onFallback={() => setIs2DMode(true)}>
          <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            camera={{ position: [0, 0, 4.5], fov: 45, near: 0.1, far: 1000 }}
            gl={{ 
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.2,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor("#000008", 1);
            }}
          >
            {/* Enhanced lighting system */}
            <ambientLight intensity={0.15} color="#4a6fa5" />
            
            {/* Sun light - main directional light */}
            <directionalLight 
              position={[5, 3, 5]} 
              intensity={2.5} 
              color="#fff5e6"
              castShadow
            />
            
            {/* Rim light for atmosphere edge glow */}
            <pointLight position={[-8, 0, -5]} intensity={0.8} color="#6eb5ff" />
            
            {/* Fill light */}
            <pointLight position={[0, -5, 3]} intensity={0.3} color="#1a1a2e" />
            
            <Suspense fallback={null}>
              {/* Enhanced star field with depth */}
              <Stars 
                radius={400} 
                depth={100} 
                count={15000} 
                factor={5} 
                saturation={0.2} 
                fade 
                speed={0.3}
              />
              
              {/* Secondary distant stars */}
              <Stars 
                radius={200} 
                depth={50} 
                count={5000} 
                factor={3} 
                saturation={0} 
                fade 
                speed={0.1}
              />
              
              <Earth />
              <ClusteredStationMarkers />
              <GlobeControls />
            </Suspense>
          </Canvas>
        </WebGLErrorBoundary>
      )}
      
      <div className="absolute top-4 left-4 text-white z-10 pointer-events-none">
        <div className="relative">
          {/* Futuristic glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-transparent rounded-lg blur-xl" />
          <div className="relative">
            <h1 className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 tracking-tight">
              Radio Globe
            </h1>
            <p className="text-sm text-cyan-300/70 font-light tracking-wide">
              Explore radio stations around the world
            </p>
          </div>
        </div>
      </div>

      {/* Futuristic corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none z-5">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <path d="M0 30 L0 0 L30 0" stroke="url(#cornerGrad)" strokeWidth="1" fill="none" />
          <defs>
            <linearGradient id="cornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none z-5 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <path d="M0 30 L0 0 L30 0" stroke="url(#cornerGrad2)" strokeWidth="1" fill="none" />
          <defs>
            <linearGradient id="cornerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none z-5 -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <path d="M0 30 L0 0 L30 0" stroke="url(#cornerGrad3)" strokeWidth="1" fill="none" />
          <defs>
            <linearGradient id="cornerGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none z-5 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <path d="M0 30 L0 0 L30 0" stroke="url(#cornerGrad4)" strokeWidth="1" fill="none" />
          <defs>
            <linearGradient id="cornerGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

       {/* Mode Switcher */}
       <div className="absolute bottom-6 left-6 z-20">
        <button
          onClick={() => setIs2DMode(true)}
          className="flex items-center space-x-2 bg-gray-900/60 hover:bg-gray-900/80 text-cyan-300/80 hover:text-cyan-300 backdrop-blur-md px-4 py-2.5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all text-sm group shadow-lg shadow-cyan-500/5"
        >
          <div className="p-1.5 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
            <Layers className="w-4 h-4" />
          </div>
          <span className="font-medium">Switch to 2D List</span>
        </button>
      </div>
      
      {/* Subtle scan line effect */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.015]" 
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
           }} 
      />
    </div>
  );
}
