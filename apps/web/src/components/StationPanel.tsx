"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  ExternalLink,
  Heart,
  Share2,
  X,
  Wifi,
  WifiOff,
  Copy,
  Check,
  Radio,
  Zap,
  Signal,
  Globe,
  Music,
} from "lucide-react";
import { RadioStation } from "../types";
import { useFavorites } from "../hooks/useUserData";
import { useUserLocation, calculateDistance } from "../hooks/useUserLocation";

interface StationPanelProps {
  station: RadioStation;
  onClose?: () => void;
}

export function StationPanel({ station, onClose }: StationPanelProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { location } = useUserLocation();
  const [copied, setCopied] = useState(false);

  const isStationFavorite = isFavorite(station.id);

  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: station.location.timezone || "UTC",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Calculate distance from user
  const distance =
    location && station.location.lat && station.location.lng
      ? calculateDistance(
          location.latitude,
          location.longitude,
          station.location.lat,
          station.location.lng,
        )
      : null;

  const formatDistance = (km: number) => {
    if (km < 1) return `${Math.round(km * 1000)}m`;
    if (km < 100) return `${km.toFixed(1)}km`;
    return `${Math.round(km).toLocaleString()}km`;
  };

  // Get quality indicator
  const getQualityIndicator = (bitrate?: number) => {
    if (!bitrate)
      return { label: "Unknown", color: "text-gray-400", icon: WifiOff };
    if (bitrate >= 256)
      return { label: "HD", color: "text-green-400", icon: Wifi };
    if (bitrate >= 128)
      return { label: "Good", color: "text-blue-400", icon: Wifi };
    return { label: "Low", color: "text-yellow-400", icon: Wifi };
  };

  const quality = getQualityIndicator(station.bitrate);

  const handleShare = async () => {
    const shareData = {
      title: station.name,
      text: `Listen to ${station.name} on Radio Globe`,
      url: `${window.location.origin}?station=${station.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        // User cancelled or share failed
        copyToClipboard(shareData.url);
      }
    } else {
      copyToClipboard(shareData.url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="relative w-[340px] max-w-sm"
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50 blur-sm" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 animate-pulse" />
      
      {/* Main panel content */}
      <div className="relative rounded-2xl p-5 bg-gradient-to-b from-gray-900/95 to-gray-950/95 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,245,255,0.1)]">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl" />

        {/* Close Button */}
        {onClose && (
          <motion.button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/5 hover:bg-white/10 
                       border border-white/10 hover:border-cyan-500/30 transition-all z-10"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-4 h-4 text-gray-400" />
          </motion.button>
        )}

        {/* Header */}
        <div className="mb-5 pr-10">
          <div className="flex items-start gap-4">
            {/* Station Icon with animated glow */}
            <div className="relative">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 
                           flex items-center justify-center shadow-lg"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0, 245, 255, 0.3)",
                    "0 0 30px rgba(168, 85, 247, 0.4)",
                    "0 0 20px rgba(0, 245, 255, 0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Radio className="w-7 h-7 text-white" />
              </motion.div>
              {/* Live indicator */}
              <motion.div 
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900
                           flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-white truncate mb-1">
                {station.name}
              </h3>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="truncate">
                  {station.location.city}{station.location.city && station.location.country ? ", " : ""}{station.location.country}
                </span>
              </div>
            </div>
          </div>

          {/* Distance Badge */}
          {distance !== null && (
            <motion.div 
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 
                         bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                         border border-cyan-500/20 rounded-full text-xs font-mono"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Signal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-cyan-300">{formatDistance(distance)}</span>
              <span className="text-gray-500">away</span>
            </motion.div>
          )}
        </div>

        {/* Stats Grid - Holographic style */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            { icon: Users, value: station.listeners >= 1000 ? `${(station.listeners / 1000).toFixed(0)}k` : station.listeners, label: "Listeners", color: "cyan" },
            { icon: Clock, value: currentTime, label: "Local Time", color: "green" },
            { icon: quality.icon, value: quality.label, label: station.bitrate ? `${station.bitrate}kbps` : "Quality", color: station.bitrate >= 256 ? "green" : station.bitrate >= 128 ? "blue" : "yellow" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative text-center p-3 rounded-xl 
                         bg-gradient-to-b from-white/5 to-transparent
                         border border-white/5 hover:border-cyan-500/30
                         transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`w-4 h-4 mx-auto mb-1.5 ${
                stat.color === "cyan" ? "text-cyan-400" :
                stat.color === "green" ? "text-green-400" :
                stat.color === "blue" ? "text-blue-400" :
                "text-yellow-400"
              }`} />
              <div className="text-sm font-bold text-white font-mono">{stat.value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Genre Tags - Neon style */}
        {station.genre && (
          <div className="flex flex-wrap gap-2 mb-5">
            {station.genre
              .split(",")
              .slice(0, 4)
              .map((genre, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium
                             bg-gradient-to-r from-purple-500/10 to-pink-500/10
                             border border-purple-500/20 text-purple-300
                             hover:border-purple-500/40 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  {genre.trim()}
                </motion.span>
              ))}
          </div>
        )}

        {/* Language & Details - Terminal style */}
        {station.language && (
          <div className="mb-5 p-3 rounded-lg bg-black/30 border border-white/5 font-mono text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 uppercase tracking-wider">Language</span>
              <span className="text-cyan-300 capitalize">{station.language}</span>
            </div>
            {station.source && (
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5">
                <span className="text-gray-500 uppercase tracking-wider">Source</span>
                <span className="text-purple-300">{station.source}</span>
              </div>
            )}
          </div>
        )}

        {/* Actions - Futuristic buttons */}
        <div className="flex gap-2">
          <motion.button
            onClick={() => toggleFavorite(station)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
              isStationFavorite
                ? "bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-400 border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
                : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-cyan-500/30"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart
              className={`w-4 h-4 ${isStationFavorite ? "fill-current" : ""}`}
            />
            <span className="text-sm">{isStationFavorite ? "Saved" : "Save"}</span>
          </motion.button>
          
          <motion.button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 px-4 py-3 
                       bg-white/5 text-white rounded-xl 
                       border border-white/10 hover:border-cyan-500/30
                       hover:bg-cyan-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </motion.button>
          
          {station.website && (
            <motion.a
              href={station.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 
                         bg-white/5 text-white rounded-xl 
                         border border-white/10 hover:border-purple-500/30
                         hover:bg-purple-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
        
        {/* Bottom accent line */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] 
                     bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
