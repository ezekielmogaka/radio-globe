"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobeStore } from "../stores/globe-store";
import { AudioVisualizer } from "./AudioVisualizer";
import { radioStationService } from "../services/radioStationService";

export function AudioPlayer() {
  const selectedStation = useGlobeStore((state) => state.selectedStation);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolumeState] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showVisualizer, setShowVisualizer] = useState(true);
  const [visualizerType, setVisualizerType] = useState<
    "bars" | "waveform" | "circular"
  >("bars");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;
    audioRef.current.crossOrigin = "anonymous";
    audioRef.current.preload = "none";

    const audio = audioRef.current;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      setError("Audio stream unavailable. Trying alternative...");
      setIsLoading(false);
      setIsPlaying(false);

      // Try to reload after a brief delay
      setTimeout(() => {
        if (audio.src) {
          audio.load();
        }
      }, 2000);
    };

    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
      audio.pause();
    };
  }, [volume]);

  // Handle station changes with proxy URL
  useEffect(() => {
    if (selectedStation && audioRef.current) {
      const audio = audioRef.current;
      setError(null);

      // Use the proxy service to get CORS-free URL
      const proxiedUrl =
        radioStationService.getProxiedStreamUrl(selectedStation);

      if (audio.src !== proxiedUrl) {
        audio.src = proxiedUrl;
        audio.load();
        console.log(
          "Loading station:",
          selectedStation.name,
          "URL:",
          proxiedUrl,
        );
      }
    }
  }, [selectedStation]);

  const play = async () => {
    if (audioRef.current && selectedStation) {
      try {
        setError(null);
        await audioRef.current.play();
      } catch (err) {
        setError("Failed to play audio. Please try again.");
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  if (!selectedStation) return null;

  return (
    <motion.div
      className="bg-black/80 backdrop-blur-md border border-white/20 rounded-t-2xl p-4 mx-4 mb-0"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      {/* Station Info Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {selectedStation.name.charAt(0)}
              </span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-white font-semibold truncate">
              {selectedStation.name}
            </h3>
            <p className="text-gray-400 text-sm truncate">
              {selectedStation.location.city},{" "}
              {selectedStation.location.country} • {selectedStation.genre}
            </p>
          </div>
        </div>

        {/* Visualizer Toggle */}
        <button
          onClick={() => setShowVisualizer(!showVisualizer)}
          className="text-white/60 hover:text-white transition-colors p-1"
          aria-label="Toggle Visualizer"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 2v8h10V5H5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Audio Visualizer */}
      <AnimatePresence>
        {showVisualizer && isPlaying && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60 text-xs">Audio Visualization</span>
              <div className="flex space-x-1">
                {["bars", "waveform", "circular"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setVisualizerType(type as any)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      visualizerType === type
                        ? "bg-blue-500 text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <AudioVisualizer
              audioElement={audioRef.current}
              isPlaying={isPlaying}
              type={visualizerType}
              className="w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={isPlaying ? pause : play}
          disabled={isLoading}
          className="flex-shrink-0 w-12 h-12 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 rounded-full flex items-center justify-center transition-all transform hover:scale-105"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 flex-1">
          <button
            onClick={toggleMute}
            className="text-white hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              {isMuted ? (
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.792L4.618 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.618l3.765-3.792a1 1 0 011.617-.792z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.792L4.618 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.618l3.765-3.792a1 1 0 011.617-.792zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>

          <div className="flex-1 max-w-32">
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume * 100}
              onChange={(e) => setVolume(Number(e.target.value) / 100)}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                        [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full 
                        [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>
        </div>

        {/* Now Playing Indicator */}
        {isPlaying && (
          <div className="flex items-center space-x-1">
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
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <motion.div
          className="mt-3 p-2 bg-red-500/20 border border-red-500/50 rounded text-red-300 text-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {error}
        </motion.div>
      )}
    </motion.div>
  );
}
