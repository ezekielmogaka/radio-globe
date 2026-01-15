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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="glass rounded-xl p-5 w-80 max-w-sm relative"
    >
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      )}

      {/* Header */}
      <div className="mb-4 pr-8">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">
              {station.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-white truncate">
              {station.name}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-400 text-sm">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">
                {station.location.city}, {station.location.country}
              </span>
            </div>
          </div>
        </div>

        {/* Distance Badge */}
        {distance !== null && (
          <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
            <MapPin className="w-3 h-3" />
            {formatDistance(distance)} away
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="text-center p-2.5 bg-white/5 rounded-lg">
          <Users className="w-4 h-4 mx-auto mb-1 text-blue-400" />
          <div className="text-sm font-semibold text-white">
            {station.listeners >= 1000
              ? `${(station.listeners / 1000).toFixed(0)}k`
              : station.listeners}
          </div>
          <div className="text-[10px] text-gray-500">Listeners</div>
        </div>
        <div className="text-center p-2.5 bg-white/5 rounded-lg">
          <Clock className="w-4 h-4 mx-auto mb-1 text-green-400" />
          <div className="text-sm font-semibold text-white">{currentTime}</div>
          <div className="text-[10px] text-gray-500">Local Time</div>
        </div>
        <div className="text-center p-2.5 bg-white/5 rounded-lg">
          <quality.icon className={`w-4 h-4 mx-auto mb-1 ${quality.color}`} />
          <div className={`text-sm font-semibold ${quality.color}`}>
            {quality.label}
          </div>
          <div className="text-[10px] text-gray-500">
            {station.bitrate ? `${station.bitrate}kbps` : "Quality"}
          </div>
        </div>
      </div>

      {/* Genre Tags */}
      {station.genre && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {station.genre
            .split(",")
            .slice(0, 3)
            .map((genre, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-white/10 text-gray-300 rounded-full text-xs"
              >
                {genre.trim()}
              </span>
            ))}
        </div>
      )}

      {/* Language & Details */}
      <div className="space-y-2 mb-4 text-sm">
        {station.language && (
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Language</span>
            <span className="text-gray-300 capitalize">{station.language}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => toggleFavorite(station)}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
            isStationFavorite
              ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${isStationFavorite ? "fill-current" : ""}`}
          />
          {isStationFavorite ? "Saved" : "Save"}
        </button>
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Share2 className="w-4 h-4" />
          )}
        </button>
        {station.website && (
          <a
            href={station.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
