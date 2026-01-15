"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  AudioVisualizationService,
  VisualizationType,
} from "../services/audioVisualizationService";

interface ModularAudioVisualizerProps {
  audioElement?: HTMLAudioElement | null;
  isPlaying: boolean;
  className?: string;
  type?: VisualizationType;
  width?: number;
  height?: number;
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
  };
}

export function ModularAudioVisualizer({
  audioElement,
  isPlaying,
  className = "",
  type = "bars",
  width = 300,
  height = 100,
  colors = {},
}: ModularAudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visualizationServiceRef = useRef<AudioVisualizationService | null>(
    null,
  );
  const [isSupported, setIsSupported] = useState(true);
  const [currentType, setCurrentType] = useState<VisualizationType>(type);

  // Initialize visualization service
  useEffect(() => {
    visualizationServiceRef.current = new AudioVisualizationService({
      fftSize: type === "waveform" ? 2048 : 256,
      primaryColor: colors.primary || "#60a5fa",
      secondaryColor: colors.secondary || "#3b82f6",
      backgroundColor: colors.background || "rgba(0, 0, 0, 0.1)",
    });

    return () => {
      visualizationServiceRef.current?.destroy();
    };
  }, []);

  // Handle audio element changes
  useEffect(() => {
    if (!audioElement || !visualizationServiceRef.current) {
      return;
    }

    const success = visualizationServiceRef.current.initialize(audioElement);
    if (!success) {
      console.warn("Audio visualization disabled - element already in use");
      setIsSupported(false);
    }
  }, [audioElement]);

  // Handle playback state changes
  useEffect(() => {
    if (!visualizationServiceRef.current || !canvasRef.current) {
      return;
    }

    if (isPlaying && isSupported) {
      visualizationServiceRef.current.start(canvasRef.current, currentType);
    } else {
      visualizationServiceRef.current.stop();
    }

    return () => {
      visualizationServiceRef.current?.stop();
    };
  }, [isPlaying, isSupported, currentType]);

  // Handle prop changes (type, colors)
  useEffect(() => {
    if (visualizationServiceRef.current) {
      visualizationServiceRef.current.updateConfig({
        fftSize: type === "waveform" ? 2048 : 256,
        primaryColor: colors.primary || "#60a5fa",
        secondaryColor: colors.secondary || "#3b82f6",
        backgroundColor: colors.background || "rgba(0, 0, 0, 0.1)",
      });
      visualizationServiceRef.current.changeType(type);
    }
    setCurrentType(type);
  }, [type, colors.primary, colors.secondary, colors.background]);

  if (!isSupported) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-sm">
          Audio visualization not supported
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isPlaying ? 1 : 0.5,
        scale: 1,
        filter: isPlaying ? "blur(0px)" : "blur(1px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-full rounded-lg bg-black/20 backdrop-blur-sm border border-white/10"
        style={{
          imageRendering: "pixelated",
        }}
      />

      {/* Overlay effects */}
      {isPlaying && (
        <>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none" />
        </>
      )}

      {/* Loading indicator when audio is initializing */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin" />
            Ready
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Hook for easier visualization type cycling
export function useVisualizationType() {
  const [type, setType] = useState<VisualizationType>("bars");
  const types: VisualizationType[] = [
    "bars",
    "waveform",
    "circular",
    "particles",
  ];

  const nextType = () => {
    const currentIndex = types.indexOf(type);
    const nextIndex = (currentIndex + 1) % types.length;
    setType(types[nextIndex]);
  };

  const setVisualizationType = (newType: VisualizationType) => {
    setType(newType);
  };

  return {
    currentType: type,
    availableTypes: types,
    nextType,
    setType: setVisualizationType,
  };
}
