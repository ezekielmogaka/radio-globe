"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Radio,
  MapPin,
  Play,
  Volume2,
  Heart,
  Clock,
  Compass,
  TrendingUp,
  History,
  Sparkles,
  Filter,
  ChevronDown,
} from "lucide-react";
import { RadioStation } from "../types";
import { useGlobeStore } from "../stores/globe-store";
import { useFavorites, useRecentStations } from "../hooks/useUserData";
import {
  useUserLocation,
  calculateDistance,
  getTimeOfDay,
  getTimeBasedGenres,
} from "../hooks/useUserLocation";
import { radioDiscoveryService } from "../services/radioDiscoveryService";

interface StationDirectoryProps {
  className?: string;
}

type TabType = "discover" | "nearby" | "favorites" | "recent";

export function StationDirectory({ className = "" }: StationDirectoryProps) {
  const [activeTab, setActiveTab] = useState<TabType>("discover");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [stations, setStations] = useState<RadioStation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const { selectedStation, selectStation } = useGlobeStore();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const { recent, addToRecent } = useRecentStations();
  const { location, isLoading: locationLoading } = useUserLocation();

  // Load stations
  useEffect(() => {
    const loadStations = async () => {
      setIsLoading(true);
      try {
        const data = await radioDiscoveryService.getTopStations(100);
        setStations(data);
      } catch (error) {
        console.error("Failed to load stations:", error);
      }
      setIsLoading(false);
    };
    loadStations();
  }, []);

  // Get unique genres
  const genres = useMemo(() => {
    const allGenres = stations.flatMap(
      (s) => s.genre?.split(",").map((g) => g.trim().toLowerCase()) || [],
    );
    return ["all", ...Array.from(new Set(allGenres)).slice(0, 10)];
  }, [stations]);

  // Time-based recommendations
  const timeOfDay = getTimeOfDay();
  const recommendedGenres = getTimeBasedGenres();

  // Sort stations by distance if location available
  const stationsWithDistance = useMemo(() => {
    if (!location) return stations.map((s) => ({ station: s, distance: null }));

    return stations
      .map((station) => {
        const distance =
          station.location.lat && station.location.lng
            ? calculateDistance(
                location.latitude,
                location.longitude,
                station.location.lat,
                station.location.lng,
              )
            : null;
        return { station, distance };
      })
      .sort((a, b) => {
        if (a.distance === null) return 1;
        if (b.distance === null) return -1;
        return a.distance - b.distance;
      });
  }, [stations, location]);

  // Filter stations by genre
  const filteredStations = useMemo(() => {
    if (selectedGenre === "all") return stationsWithDistance;
    return stationsWithDistance.filter(({ station }) =>
      station.genre?.toLowerCase().includes(selectedGenre),
    );
  }, [stationsWithDistance, selectedGenre]);

  // Get display data based on active tab
  const displayData = useMemo(() => {
    switch (activeTab) {
      case "nearby":
        return filteredStations.slice(0, 20);
      case "favorites":
        return favorites.map((s) => ({ station: s, distance: null }));
      case "recent":
        return recent.map((s) => ({ station: s, distance: null }));
      case "discover":
      default:
        // Time-based smart discovery
        const timeFiltered = stationsWithDistance.filter(({ station }) =>
          recommendedGenres.some((genre) =>
            station.genre?.toLowerCase().includes(genre),
          ),
        );
        // Mix time-relevant with popular
        return [
          ...timeFiltered.slice(0, 5),
          ...stationsWithDistance
            .filter((s) => !timeFiltered.includes(s))
            .sort((a, b) => b.station.listeners - a.station.listeners)
            .slice(0, 15),
        ];
    }
  }, [
    activeTab,
    filteredStations,
    favorites,
    recent,
    stationsWithDistance,
    recommendedGenres,
  ]);

  const handleStationSelect = (station: RadioStation) => {
    selectStation(station);
    addToRecent(station);
  };

  const formatDistance = (km: number | null) => {
    if (km === null) return null;
    if (km < 1) return `${Math.round(km * 1000)}m`;
    if (km < 100) return `${km.toFixed(0)}km`;
    return `${Math.round(km).toLocaleString()}km`;
  };

  const tabs = [
    { id: "discover" as TabType, label: "Discover", icon: Sparkles },
    { id: "nearby" as TabType, label: "Near Me", icon: Compass },
    {
      id: "favorites" as TabType,
      label: "Favorites",
      icon: Heart,
      count: favorites.length,
    },
    {
      id: "recent" as TabType,
      label: "Recent",
      icon: History,
      count: recent.length,
    },
  ];

  return (
    <motion.div
      className={`glass rounded-xl overflow-hidden flex flex-col h-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Globe className="w-6 h-6 text-gradient" />
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-blue-400/20" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Stations
              </h2>
              <p className="text-sm text-gray-400 font-mono">
                {displayData.length} available
              </p>
            </div>
          </div>

          {/* Time-based greeting */}
          <div className="flex items-center gap-2 glass px-3 py-2 rounded-lg">
            <span className="text-sm text-gray-300 font-medium">
              {timeOfDay === "morning" && "☀️ Good morning"}
              {timeOfDay === "afternoon" && "🌤️ Good afternoon"}
              {timeOfDay === "evening" && "🌅 Good evening"}
              {timeOfDay === "night" && "🌙 Night mode"}
            </span>
          </div>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex gap-2 bg-surface-card/50 p-1.5 rounded-xl">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline tracking-wide">{tab.label}</span>
              {tab.count !== undefined && tab.count > 0 && (
                <span
                  className={`px-2 py-1 text-xs rounded-full font-mono ${
                    activeTab === tab.id 
                      ? "bg-white/20 text-white" 
                      : "bg-white/10 text-gray-300"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Filters - For discover and nearby tabs */}
      {(activeTab === "discover" || activeTab === "nearby") && (
        <div className="px-4 py-2 border-b border-white/5 flex-shrink-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by genre</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => setSelectedGenre(genre)}
                      className={`px-2 py-1 text-xs rounded-full transition-colors ${
                        selectedGenre === genre
                          ? "bg-blue-500 text-white"
                          : "bg-white/10 text-gray-400 hover:text-white hover:bg-white/20"
                      }`}
                    >
                      {genre === "all" ? "All" : genre}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Content Heading */}
      {activeTab === "discover" && (
        <div className="px-4 py-2 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <TrendingUp className="w-3.5 h-3.5 text-green-400" />
            <span>
              Recommended for {timeOfDay}:{" "}
              <span className="text-gray-300">
                {recommendedGenres.slice(0, 3).join(", ")}
              </span>
            </span>
          </div>
        </div>
      )}

      {activeTab === "nearby" && location && (
        <div className="px-4 py-2 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>
              Stations near{" "}
              <span className="text-gray-300">
                {location.city || "your location"}
              </span>
            </span>
          </div>
        </div>
      )}

      {/* Station List */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : displayData.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            <Radio className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <div className="text-sm">
              {activeTab === "favorites" && "No favorites yet"}
              {activeTab === "recent" && "No recently played"}
              {activeTab === "nearby" && "No nearby stations found"}
              {activeTab === "discover" && "No stations found"}
            </div>
            <div className="text-xs mt-1">
              {activeTab === "favorites" &&
                "Tap the heart icon to save stations"}
              {activeTab === "recent" && "Play some stations to see them here"}
            </div>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {displayData.map(({ station, distance }) => (
              <StationListItem
                key={station.id}
                station={station}
                distance={formatDistance(distance)}
                isSelected={selectedStation?.id === station.id}
                isFavorite={isFavorite(station.id)}
                onSelect={() => handleStationSelect(station)}
                onToggleFavorite={() => toggleFavorite(station)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0">
        <div className="flex justify-between text-xs text-gray-500">
          <span>{displayData.length} stations</span>
          <span>{location?.city && `📍 ${location.city}`}</span>
        </div>
      </div>
    </motion.div>
  );
}

interface StationListItemProps {
  station: RadioStation;
  distance: string | null;
  isSelected: boolean;
  isFavorite: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
}

function StationListItem({
  station,
  distance,
  isSelected,
  isFavorite,
  onSelect,
  onToggleFavorite,
}: StationListItemProps) {
  return (
    <motion.div
      className={`p-3 cursor-pointer transition-colors ${
        isSelected ? "bg-blue-500/20" : "hover:bg-white/5"
      }`}
      onClick={onSelect}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        {/* Station Icon */}
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isSelected
              ? "bg-blue-500"
              : "bg-gradient-to-br from-purple-500/30 to-blue-500/30"
          }`}
        >
          {isSelected ? (
            <div className="flex items-end gap-0.5 h-4">
              <div
                className="w-1 bg-white rounded-full animate-pulse"
                style={{ height: "40%" }}
              />
              <div
                className="w-1 bg-white rounded-full animate-pulse"
                style={{ height: "100%", animationDelay: "0.1s" }}
              />
              <div
                className="w-1 bg-white rounded-full animate-pulse"
                style={{ height: "60%", animationDelay: "0.2s" }}
              />
            </div>
          ) : (
            <span className="text-white font-bold text-sm">
              {station.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        {/* Station Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3
              className={`font-medium text-sm truncate ${
                isSelected ? "text-blue-300" : "text-white"
              }`}
            >
              {station.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
            <span className="truncate">{station.location.country}</span>
            {station.genre && (
              <>
                <span className="text-gray-600">•</span>
                <span className="truncate text-gray-400">
                  {station.genre.split(",")[0]}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Distance & Stats */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {distance && (
            <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
              {distance}
            </span>
          )}

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Volume2 className="w-3 h-3" />
            <span>
              {station.listeners >= 1000
                ? `${(station.listeners / 1000).toFixed(0)}k`
                : station.listeners}
            </span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className={`p-1.5 rounded-full transition-colors ${
              isFavorite
                ? "text-pink-400 bg-pink-500/20"
                : "text-gray-500 hover:text-pink-400 hover:bg-white/5"
            }`}
          >
            <Heart
              className={`w-3.5 h-3.5 ${isFavorite ? "fill-current" : ""}`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
