"use client";

import { useEffect, useState } from "react";
import { CesiumGlobe } from "../components/CesiumGlobe";
import { ModularAudioPlayer } from "../components/ModularAudioPlayer";
import { StationPanel } from "../components/StationPanel";
import { SearchPanel } from "../components/SearchPanel";
import { StationDirectory } from "../components/StationDirectory";
import { UserPanel } from "../components/UserPanel";
import { useGlobeStore } from "../stores/globe-store";
import { useStationCount } from "../hooks/useStationCount";
// import { globalRadioStations } from '../data/globalRadioStations'
import { radioDiscoveryService } from "../services/radioDiscoveryService";
import { motion } from "framer-motion";
import { Radio, Menu, X, List } from "lucide-react";

export default function Home() {
  const { selectedStation, addMarker, selectStation } = useGlobeStore();
  const stationCount = useStationCount(); // Use new architecture station count
  const [isMobile, setIsMobile] = useState(false);
  const [showDirectory, setShowDirectory] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Listen for station selection from 3D globe
  useEffect(() => {
    const handleStationSelected = (event: CustomEvent) => {
      const station = event.detail;
      if (station) {
        console.log('Station selected from globe:', station);
        selectStation(station);
      }
    };

    window.addEventListener('stationSelected', handleStationSelected as EventListener);
    return () => window.removeEventListener('stationSelected', handleStationSelected as EventListener);
  }, [selectStation]);

  // Detect mobile device and screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      {/* 3D Globe with Cesium */}
      <div className="absolute inset-0">
        <CesiumGlobe />
      </div>

      {/* Top Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-40 p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 glass rounded-2xl px-6 py-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <Radio className="w-8 h-8 text-gradient" />
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-blue-400/20" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient tracking-tight">
                Radio Globe
              </h1>
              <p className="text-sm text-gray-400 font-mono">
                Discover global radio stations
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-4">
              <SearchPanel />
              <motion.button
                onClick={() => setShowDirectory(!showDirectory)}
                className={`glass px-6 py-3 rounded-xl flex items-center gap-3 transition-all font-medium ${
                  showDirectory
                    ? "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 border-cyan-400/30"
                    : "text-white hover:bg-white/10 border-white/10"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <List className="w-5 h-5" />
                <span className="text-sm tracking-wide">Directory</span>
                <div className="text-xs font-mono opacity-60">
                  {stationCount}
                </div>
              </motion.button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="glass p-3 rounded-lg text-white"
              whileHover={{ scale: 1.05 }}
            >
              {showMobileMenu ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Station Directory Panel */}
      {showDirectory && !isMobile && (
        <motion.div
          className="absolute top-20 left-4 z-50 w-96"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
        >
          <StationDirectory />
        </motion.div>
      )}

      {/* Station Info Panel */}
      {selectedStation && (
        <motion.div
          className={`absolute ${isMobile ? "bottom-20 left-3 right-3" : "top-20 left-4"} z-50`}
          initial={{
            x: isMobile ? 0 : -400,
            y: isMobile ? 100 : 0,
            opacity: 0,
          }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ x: isMobile ? 0 : -400, y: isMobile ? 100 : 0, opacity: 0 }}
        >
          <StationPanel station={selectedStation} />
        </motion.div>
      )}

      {/* Bottom Controls */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-40"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            {/* User Panel - Desktop */}
            {!isMobile && <UserPanel />}

            {/* Audio Player */}
            <div className="flex-1 max-w-2xl mx-4">
              <ModularAudioPlayer
                showVisualizer={!isMobile}
                compactMode={isMobile}
                autoPlay={false}
              />
            </div>

            {/* Mobile Controls */}
            {isMobile && (
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => setShowDirectory(!showDirectory)}
                  className={`glass p-3 rounded-lg transition-colors ${
                    showDirectory
                      ? "bg-blue-500/20 text-blue-300"
                      : "text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <List className="w-5 h-5" />
                </motion.button>
              </div>
            )}

            {/* Desktop Stats */}
            {!isMobile && (
              <motion.div 
                className="glass px-6 py-4 rounded-2xl flex-shrink-0 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">
                    Global Stations
                  </div>
                  <div className="text-3xl font-bold text-gradient mt-1">
                    {stationCount}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && isMobile && (
        <motion.div
          className="absolute inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setShowMobileMenu(false)}
          />
          <motion.div
            className="absolute top-0 right-0 h-full w-80 glass p-6"
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="space-y-4">
                <SearchPanel />

                <motion.button
                  onClick={() => {
                    setShowDirectory(!showDirectory);
                    setShowMobileMenu(false);
                  }}
                  className="w-full glass p-4 rounded-lg flex items-center gap-3 text-left"
                  whileHover={{ scale: 1.02 }}
                >
                  <List className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="font-medium text-white">
                      Station Directory
                    </div>
                    <div className="text-xs text-gray-400">
                      Browse all stations
                    </div>
                  </div>
                </motion.button>

                <UserPanel />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Mobile Directory Overlay */}
      {showDirectory && isMobile && (
        <motion.div
          className="absolute inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setShowDirectory(false)}
          />
          <motion.div
            className="absolute top-20 bottom-20 left-4 right-4 rounded-xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <StationDirectory />
          </motion.div>
        </motion.div>
      )}

      {/* Loading Screen */}
      <motion.div
        className="absolute inset-0 z-50 bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ pointerEvents: "none" }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Radio Globe...</p>
          <p className="text-gray-400 text-sm">
            Connecting to global stations...
          </p>
        </div>
      </motion.div>
    </main>
  );
}
