"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  MoreVertical,
  SkipBack,
  SkipForward,
  Settings,
} from "lucide-react";
import { useGlobeStore } from "../stores/globe-store";
import { useModularAudio } from "../hooks/useModularAudio";
import {
  ModularAudioVisualizer,
  useVisualizationType,
} from "./ModularAudioVisualizer";
import { useState } from "react";

interface ModularAudioPlayerProps {
  className?: string;
  showVisualizer?: boolean;
  compactMode?: boolean;
  autoPlay?: boolean;
}

export function ModularAudioPlayer({
  className = "",
  showVisualizer = true,
  compactMode = false,
  autoPlay = false,
}: ModularAudioPlayerProps) {
  const selectedStation = useGlobeStore((state) => state.selectedStation);
  const [showSettings, setShowSettings] = useState(false);
  const [audioState, audioActions] = useModularAudio({ autoPlay, volume: 0.7 });
  const { currentType, availableTypes, nextType, setType } =
    useVisualizationType();

  // Load station when selected
  useEffect(() => {
    if (selectedStation) {
      audioActions.loadStation(selectedStation);
    }
  }, [selectedStation, audioActions.loadStation]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!selectedStation) {
    return (
      <motion.div
        className={`glass rounded-xl p-6 text-center ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-gray-400 mb-2">
          <Volume2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
        </div>
        <p className="text-white text-sm mb-1">Select a Radio Station</p>
        <p className="text-gray-400 text-xs">
          Click on any station marker on the globe
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`glass rounded-xl overflow-hidden ${compactMode ? "p-3" : "p-4"} ${className}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      layout
    >
      {/* Station Info Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {!compactMode && (
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {selectedStation.name.charAt(0)}
                </span>
              </div>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3
              className={`text-white font-semibold truncate ${compactMode ? "text-sm" : ""}`}
            >
              {selectedStation.name}
            </h3>
            <p
              className={`text-gray-400 truncate ${compactMode ? "text-xs" : "text-sm"}`}
            >
              {selectedStation.location.city},{" "}
              {selectedStation.location.country} • {selectedStation.genre}
            </p>
          </div>
        </div>

        {/* Settings Button */}
        <motion.button
          onClick={() => setShowSettings(!showSettings)}
          className="text-white/60 hover:text-white transition-colors p-1 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Settings className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Audio Visualizer - Disabled for now to prevent audio issues */}
      {/* TODO: Re-implement visualization without Web Audio API interference */}
      
      {/* Main Controls */}
      <div className="flex items-center space-x-4">
        {/* Play/Pause Button */}
        <motion.button
          onClick={
            audioState.isPlaying ? audioActions.pause : audioActions.play
          }
          disabled={audioState.isLoading}
          className={`flex-shrink-0 ${compactMode ? "w-10 h-10" : "w-12 h-12"} bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 rounded-full flex items-center justify-center transition-all`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {audioState.isLoading ? (
            <div
              className={`${compactMode ? "w-4 h-4" : "w-5 h-5"} border-2 border-white border-t-transparent rounded-full animate-spin`}
            />
          ) : audioState.isPlaying ? (
            <Pause
              className={`${compactMode ? "w-4 h-4" : "w-5 h-5"} text-white`}
            />
          ) : (
            <Play
              className={`${compactMode ? "w-4 h-4" : "w-5 h-5"} text-white ml-0.5`}
            />
          )}
        </motion.button>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 flex-1">
          <motion.button
            onClick={audioActions.toggleMute}
            className="text-white hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            {audioState.isMuted ? (
              <VolumeX className={compactMode ? "w-4 h-4" : "w-5 h-5"} />
            ) : (
              <Volume2 className={compactMode ? "w-4 h-4" : "w-5 h-5"} />
            )}
          </motion.button>

          <div className="flex-1 max-w-24">
            <input
              type="range"
              min="0"
              max="100"
              value={audioState.isMuted ? 0 : audioState.volume * 100}
              onChange={(e) =>
                audioActions.setVolume(Number(e.target.value) / 100)
              }
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                        [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full 
                        [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>

          <span className="text-white/60 text-xs min-w-8">
            {Math.round((audioState.isMuted ? 0 : audioState.volume) * 100)}%
          </span>
        </div>

        {/* Now Playing Indicator */}
        {audioState.isPlaying && !compactMode && (
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex space-x-0.5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-green-500 rounded-full"
                  animate={{
                    height: [4, 16, 4],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
            <span className="text-green-500 text-xs font-medium">LIVE</span>
          </motion.div>
        )}
      </div>

      {/* Error Display */}
      <AnimatePresence>
        {audioState.error && (
          <motion.div
            className="mt-3 p-2 bg-red-500/20 border border-red-500/50 rounded text-red-300 text-sm flex items-center justify-between"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <span className="flex-1">{audioState.error}</span>
            <button
              onClick={audioActions.clearError}
              className="text-red-300 hover:text-red-100 ml-2"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white text-sm">Show Visualizer</span>
                <button
                  onClick={() => setShowSettings(false)}
                  className={`w-8 h-4 rounded-full transition-colors ${
                    showVisualizer ? "bg-blue-500" : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`w-3 h-3 bg-white rounded-full transition-transform ${
                      showVisualizer ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              <div className="text-xs text-gray-400">
                Station: {selectedStation.name}
                <br />
                Genre: {selectedStation.genre}
                <br />
                Location: {selectedStation.location.city},{" "}
                {selectedStation.location.country}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
