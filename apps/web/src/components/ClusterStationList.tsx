"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Radio, MapPin, Signal } from "lucide-react";
import { useGlobeStore } from "../stores/globe-store";
import { RadioStation } from "../types";

export function ClusterStationList() {
  const { selectedCluster, selectCluster, selectStation, selectedStation } = useGlobeStore();
  const listRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") selectCluster(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectCluster]);

  if (!selectedCluster) return null;

  const cityName = selectedCluster[0]?.location?.city || "Unknown Location";
  const countryName = selectedCluster[0]?.location?.country || "Unknown Country";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="fixed top-20 right-4 z-40 w-80 max-h-[80vh] bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden flex flex-col"
        ref={listRef}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {cityName}
            </h2>
            <p className="text-xs text-blue-200">{countryName} • {selectedCluster.length} Stations</p>
          </div>
          <button
            onClick={() => selectCluster(null)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* List */}
        <div className="overflow-y-auto flex-1 p-2 space-y-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {selectedCluster.map((station) => {
            const isPlaying = selectedStation?.id === station.id;
            return (
              <motion.button
                key={station.id}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                onClick={() => selectStation(station)}
                className={`w-full text-left p-3 rounded-md flex items-center gap-3 transition-all ${
                  isPlaying 
                    ? "bg-cyan-500/20 border border-cyan-500/50" 
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className={`p-2 rounded-full ${
                  isPlaying ? "bg-cyan-500 text-black" : "bg-white/10 text-white"
                }`}>
                  {isPlaying ? <Signal className="w-4 h-4 animate-pulse" /> : <Play className="w-4 h-4 ml-0.5" />}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium truncate ${isPlaying ? "text-cyan-400" : "text-white"}`}>
                    {station.name}
                  </h3>
                  {station.genre && (
                    <p className="text-xs text-white/50 truncate flex items-center gap-1">
                      <Radio className="w-3 h-3" />
                      {station.genre}
                    </p>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
