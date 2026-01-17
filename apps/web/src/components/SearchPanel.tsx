"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Search,
  MapPin,
  Volume2,
  Heart,
  Share,
  Globe,
  Music,
  Radio,
  Sparkles,
  TrendingUp,
  Zap,
  Wifi,
  Compass,
  Clock,
  X,
  Headphones,
  Map,
  Activity,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RadioStation } from "../types";
import { useGlobeStore } from "../stores/globe-store";
import { radioStationService } from "../services/radioStationService";
import { radioBrowserApi } from "../services/radioBrowserApiService";

interface SearchPanelProps {
  className?: string;
}

// Futuristic filter tabs with icons
const FILTER_TABS = [
  { id: "all", label: "All", icon: Search, color: "cyan" },
  { id: "discover", label: "Discover", icon: Sparkles, color: "purple" },
  { id: "trending", label: "Trending", icon: TrendingUp, color: "pink" },
  { id: "mood", label: "Mood", icon: Headphones, color: "violet" },
  { id: "continent", label: "Continent", icon: Map, color: "emerald" },
  { id: "genre", label: "Genre", icon: Music, color: "green" },
  { id: "country", label: "Country", icon: Globe, color: "blue" },
  { id: "live", label: "Live Now", icon: Activity, color: "red" },
] as const;

// Mood options for discovery
const MOOD_OPTIONS = [
  { id: "chill", label: "Chill & Relax", emoji: "🧘", gradient: "from-blue-400 to-cyan-500" },
  { id: "energetic", label: "Energetic", emoji: "⚡", gradient: "from-yellow-400 to-orange-500" },
  { id: "focus", label: "Focus", emoji: "🎯", gradient: "from-purple-400 to-indigo-500" },
  { id: "party", label: "Party", emoji: "🎉", gradient: "from-pink-400 to-rose-500" },
  { id: "workout", label: "Workout", emoji: "💪", gradient: "from-red-400 to-orange-500" },
  { id: "romantic", label: "Romantic", emoji: "💕", gradient: "from-pink-300 to-purple-400" },
  { id: "nostalgic", label: "Nostalgic", emoji: "📻", gradient: "from-amber-400 to-yellow-500" },
  { id: "world", label: "World Music", emoji: "🌍", gradient: "from-green-400 to-teal-500" },
  { id: "jazz", label: "Jazz & Blues", emoji: "🎷", gradient: "from-indigo-400 to-purple-500" },
  { id: "news", label: "News & Talk", emoji: "📰", gradient: "from-gray-400 to-slate-500" },
];

// Continent options
const CONTINENT_OPTIONS = [
  { id: "europe", label: "Europe", emoji: "🇪🇺", gradient: "from-blue-400 to-indigo-500" },
  { id: "northamerica", label: "North America", emoji: "🌎", gradient: "from-red-400 to-blue-500" },
  { id: "southamerica", label: "South America", emoji: "🌎", gradient: "from-green-400 to-yellow-500" },
  { id: "asia", label: "Asia", emoji: "🌏", gradient: "from-orange-400 to-red-500" },
  { id: "africa", label: "Africa", emoji: "🌍", gradient: "from-yellow-400 to-orange-500" },
  { id: "oceania", label: "Oceania", emoji: "🌊", gradient: "from-cyan-400 to-blue-500" },
];

type FilterType = typeof FILTER_TABS[number]["id"];

export function SearchPanel({ className = "" }: SearchPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<RadioStation[]>([]);
  const [fullResults, setFullResults] = useState<RadioStation[]>([]);
  const [resultLimit, setResultLimit] = useState(20);
  const [totalResults, setTotalResults] = useState(0);
  const [popularStations, setPopularStations] = useState<RadioStation[]>([]);
  const [trendingStations, setTrendingStations] = useState<RadioStation[]>([]);
  const [discoverStations, setDiscoverStations] = useState<RadioStation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState<FilterType>("all");
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { selectStation, flyToStation } = useGlobeStore();

  const getDefaultLimit = (filter: FilterType) => {
    switch (filter) {
      case "country":
      case "continent":
        return 60;
      case "discover":
      case "trending":
      case "mood":
      case "live":
        return 30;
      default:
        return 20;
    }
  };

  // Load initial data: popular, trending, and discovery stations
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch from local cache
        const stations = await radioStationService.getPopularStations(8);
        setPopularStations(stations);
        
        const countries = await radioStationService.getAvailableCountries();
        setAvailableCountries(countries);
        
        const cities = await radioStationService.getAvailableCities();
        setAvailableCities(cities);

        // Fetch from Radio Browser API for enhanced discovery
        try {
          const [trending, discover, tags] = await Promise.all([
            radioBrowserApi.getTrendingStations(10),
            radioBrowserApi.discoverRandomStations(8),
            radioBrowserApi.getTags(20),
          ]);
          
          setTrendingStations(trending);
          setDiscoverStations(discover);
          setSuggestedTags(tags.map(t => t.name).slice(0, 12));
        } catch (apiError) {
          console.warn("Radio Browser API unavailable, using local data:", apiError);
        }
        
        console.log(`Loaded ${countries.length} countries and ${cities.length} cities`);
      } catch (error) {
        console.error("Failed to load station data:", error);
      }
    };
    fetchData();
  }, []);

  // Enhanced smart search with proper filtering logic and faster debounce
  useEffect(() => {
    let timer: NodeJS.Timeout;

    // For filters that show options immediately, allow zero-length search
    const immediateFilters = ["discover", "trending", "mood", "continent", "live"];
    const minLength = (searchFilter === "country") ? 2 : 
                      immediateFilters.includes(searchFilter) ? 0 : 3;
    
    if (searchTerm.length >= minLength || immediateFilters.includes(searchFilter)) {
      setIsLoading(true);

      // Faster debounce for better UX (150ms)
      timer = setTimeout(async () => {
        let results: RadioStation[] = [];

        try {
          console.log(`🔍 Smart search: filter=${searchFilter}, term="${searchTerm}"`);
          const startTime = performance.now();
          
          switch (searchFilter) {
            case "all":
              // Search across all fields using both local and API
              results = await radioStationService.searchStations(searchTerm);
              // Augment with Radio Browser API results if local results are few
              if (results.length < 20) {
                try {
                  const apiResults = await radioBrowserApi.searchByName(searchTerm, 30);
                  // Merge and dedupe
                  const existingIds = new Set(results.map(s => s.id));
                  const newResults = apiResults.filter(s => !existingIds.has(s.id));
                  results = [...results, ...newResults].slice(0, 100);
                } catch {}
              }
              break;
              
            case "discover":
              // Random discovery with optional tag filter
              if (searchTerm) {
                results = await radioBrowserApi.getStationsByTag(searchTerm, 50);
              } else {
                results = await radioBrowserApi.discoverRandomStations(30);
              }
              break;
              
            case "trending":
              // Get trending/top voted stations
              results = await radioBrowserApi.getTrendingStations(50);
              if (searchTerm) {
                const term = searchTerm.toLowerCase();
                results = results.filter(s => 
                  s.name.toLowerCase().includes(term) ||
                  s.genre?.toLowerCase().includes(term)
                );
              }
              break;
              
            case "mood":
              // Discover by mood/vibe
              if (searchTerm) {
                results = await radioBrowserApi.discoverByMood(searchTerm, 40);
              }
              break;
              
            case "continent":
              // Discover by continent
              if (searchTerm) {
                results = await radioBrowserApi.getStationsByContinent(searchTerm, 50);
              }
              break;
              
            case "live":
              // Get currently active/recently clicked stations
              results = await radioBrowserApi.getActiveNow(40);
              if (searchTerm) {
                const term = searchTerm.toLowerCase();
                results = results.filter(s => 
                  s.name.toLowerCase().includes(term) ||
                  s.location.country?.toLowerCase().includes(term)
                );
              }
              break;
              
            case "genre":
              // Search specifically by genre/music type
              results = await radioStationService.getStationsByGenre(searchTerm);
              // Augment with Radio Browser API tag search
              try {
                const apiResults = await radioBrowserApi.getStationsByTag(searchTerm, 30);
                const existingIds = new Set(results.map(s => s.id));
                const newResults = apiResults.filter(s => !existingIds.has(s.id));
                results = [...results, ...newResults].slice(0, 100);
              } catch {}
              break;
              
            case "country":
              // Filter stations by country - use both local and API
              results = await radioStationService.getStationsByCountry(searchTerm);
              if (results.length < 30) {
                try {
                  const apiResults = await radioBrowserApi.getStationsByCountry(searchTerm, 50);
                  const existingIds = new Set(results.map(s => s.id));
                  const newResults = apiResults.filter(s => !existingIds.has(s.id));
                  results = [...results, ...newResults].slice(0, 100);
                } catch {}
              }
              break;
              
            default:
              results = await radioStationService.searchStations(searchTerm);
          }

          const searchTime = (performance.now() - startTime).toFixed(0);
          console.log(`✅ Found ${results.length} results in ${searchTime}ms`);
          
          // Results are already sorted by relevance in the service
          const defaultLimit = getDefaultLimit(searchFilter);
          const limit = Math.min(defaultLimit, results.length);
          setFullResults(results);
          setTotalResults(results.length);
          setResultLimit(limit);
          setSearchResults(results.slice(0, limit));
        } catch (error) {
          console.error("Search error:", error);
          setFullResults([]);
          setTotalResults(0);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      }, 150);
    } else {
      setSearchResults([]);
      setFullResults([]);
      setTotalResults(0);
      setResultLimit(getDefaultLimit(searchFilter));
      setIsLoading(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [searchTerm, searchFilter]);

  const handleStationSelect = (station: RadioStation) => {
    selectStation(station);
    // Fly the globe to the station's location
    flyToStation(station);
    // Report click to Radio Browser API for statistics
    if (station.source === "radio-browser") {
      radioBrowserApi.reportStationClick(station.id).catch(() => {});
    }
    setIsOpen(false);
    setSearchTerm("");
    setSearchResults([]);
    setFullResults([]);
    setTotalResults(0);
    setResultLimit(getDefaultLimit(searchFilter));
  };

  const handleLoadMoreResults = () => {
    if (fullResults.length === 0) return;
    const nextLimit = Math.min(resultLimit + 20, fullResults.length);
    if (nextLimit > resultLimit) {
      setResultLimit(nextLimit);
      setSearchResults(fullResults.slice(0, nextLimit));
    }
  };

  const handleRefreshDiscover = async () => {
    setIsLoading(true);
    try {
      const discover = await radioBrowserApi.discoverRandomStations(20);
      setDiscoverStations(discover);
      setSearchResults(discover);
      setFullResults(discover);
      setTotalResults(discover.length);
    } catch (error) {
      console.error("Failed to refresh discover:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getFilterColor = (filterId: string) => {
    const colors: Record<string, string> = {
      cyan: "from-cyan-400 to-blue-500",
      purple: "from-purple-400 to-pink-500",
      pink: "from-pink-400 to-rose-500",
      green: "from-green-400 to-emerald-500",
      blue: "from-blue-400 to-indigo-500",
      orange: "from-orange-400 to-red-500",
      violet: "from-violet-400 to-purple-500",
      emerald: "from-emerald-400 to-teal-500",
      red: "from-red-400 to-orange-500",
    };
    const filter = FILTER_TABS.find(f => f.id === filterId);
    return colors[filter?.color || "cyan"];
  };

  return (
    <div className={`relative z-50 ${className}`}>
      {/* Click outside to close - placed first so it's below other elements */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => {
            setIsOpen(false);
            setSearchTerm("");
            setSearchResults([]);
            setFullResults([]);
            setTotalResults(0);
            setResultLimit(getDefaultLimit(searchFilter));
          }}
        />
      )}

      {/* Futuristic Search Input */}
      <motion.div 
        className="relative group z-50"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Glow effect behind input */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-pink-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <div className="relative flex items-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
            >
              <Search className="w-5 h-5 text-cyan-400" />
            </motion.div>
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={
              searchFilter === "discover" ? "Explore tags (jazz, rock, electronic...)" :
              searchFilter === "trending" ? "Filter trending stations..." :
              searchFilter === "country" ? "Search countries..." :
              searchFilter === "genre" ? "Search genres..." :
              searchFilter === "mood" ? "Select a mood below..." :
              searchFilter === "continent" ? "Select a continent below..." :
              searchFilter === "live" ? "Filter live stations..." :
              "Search the radio universe..."
            }
            className="w-72 pl-12 pr-4 py-3 rounded-xl text-white placeholder-gray-500 
                       bg-gray-900
                       border border-cyan-500/30 
                       focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30
                       focus:shadow-[0_0_20px_rgba(0,245,255,0.15)]
                       transition-all duration-300 outline-none"
          />
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          
          {/* Clear button */}
          {searchTerm && !isLoading && (
            <button
              onClick={() => {
                setSearchTerm("");
                inputRef.current?.focus();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>
      </motion.div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute top-full left-0 mt-2 w-96 rounded-2xl overflow-hidden z-50 
                       bg-gray-900/98
                       border border-cyan-500/20 
                       shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(0,245,255,0.08)]
                       max-h-[70vh] overflow-y-auto"
          >
            {/* Futuristic Filter Tabs */}
            <div className="p-3 border-b border-white/10 sticky top-0 bg-gray-900 z-10">
              <div className="flex gap-1.5 flex-wrap">
                {FILTER_TABS.map((filter) => {
                  const Icon = filter.icon;
                  const isActive = searchFilter === filter.id;
                  
                  return (
                    <motion.button
                      key={filter.id}
                      onClick={() => {
                        setSearchFilter(filter.id);
                        setSearchTerm("");
                        setSearchResults([]);
                        setFullResults([]);
                        setTotalResults(0);
                        setResultLimit(getDefaultLimit(filter.id));
                      }}
                      className={`relative px-3 py-1.5 text-xs rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeFilter"
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${getFilterColor(filter.id)}`}
                          style={{ boxShadow: "0 0 20px rgba(0,245,255,0.3)" }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        {filter.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="p-3">
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    {searchFilter === "all" && <Search className="w-3.5 h-3.5 text-cyan-400" />}
                    {searchFilter === "discover" && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                    {searchFilter === "trending" && <TrendingUp className="w-3.5 h-3.5 text-pink-400" />}
                    {searchFilter === "country" && <Globe className="w-3.5 h-3.5 text-blue-400" />}
                    {searchFilter === "mood" && <Headphones className="w-3.5 h-3.5 text-violet-400" />}
                    {searchFilter === "continent" && <Map className="w-3.5 h-3.5 text-emerald-400" />}
                    {searchFilter === "live" && <Activity className="w-3.5 h-3.5 text-red-400" />}
                    {searchFilter === "genre" && <Music className="w-3.5 h-3.5 text-green-400" />}
                    <span className="font-mono">
                      {searchResults.length}
                      {totalResults > searchResults.length ? ` / ${totalResults}` : ""} 
                      <span className="text-gray-500 ml-1">stations</span>
                    </span>
                  </div>
                  
                  {searchFilter === "discover" && (
                    <motion.button
                      onClick={handleRefreshDiscover}
                      className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Refresh
                    </motion.button>
                  )}
                </div>
                
                {/* Station Results List */}
                <div className="space-y-2">
                  {searchResults.map((station, index) => (
                    <motion.button
                      key={station.id}
                      onClick={() => handleStationSelect(station)}
                      className="w-full p-3 text-left rounded-xl transition-all duration-200 group
                                 bg-white/[0.02] hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10
                                 border border-transparent hover:border-cyan-500/20
                                 hover:shadow-[0_0_20px_rgba(0,245,255,0.1)]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-3">
                        {/* Station Icon with gradient */}
                        <div className="relative">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                                          bg-gradient-to-br ${getFilterColor(searchFilter)} opacity-80
                                          group-hover:opacity-100 transition-opacity`}>
                            <Radio className="w-5 h-5 text-white" />
                          </div>
                          {/* Online indicator */}
                          {station.isOnline !== false && (
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white text-sm truncate group-hover:text-cyan-300 transition-colors">
                            {station.name}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {station.location.city ? `${station.location.city}, ` : ""}{station.location.country}
                            </span>
                            {station.genre && (
                              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-cyan-500/20 text-cyan-300">
                                {station.genre.split(",")[0]?.trim()}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Stats */}
                        <div className="flex flex-col items-end gap-1">
                          <div className="text-xs font-mono text-gray-400 group-hover:text-cyan-400 transition-colors">
                            {station.listeners >= 1000 
                              ? `${(station.listeners / 1000).toFixed(0)}k` 
                              : station.listeners || "—"}
                          </div>
                          {station.bitrate && (
                            <div className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                              station.bitrate >= 256 
                                ? "bg-green-500/20 text-green-400" 
                                : station.bitrate >= 128 
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                            }`}>
                              {station.bitrate}kbps
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Load More Button */}
                {totalResults > searchResults.length && (
                  <motion.button
                    onClick={handleLoadMoreResults}
                    className="w-full mt-3 py-3 text-sm text-cyan-400 
                               bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                               hover:from-cyan-500/20 hover:to-purple-500/20
                               border border-cyan-500/20 hover:border-cyan-500/40
                               rounded-xl transition-all duration-200
                               flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="w-4 h-4" />
                    Load more ({totalResults - searchResults.length} remaining)
                  </motion.button>
                )}
              </div>
            )}

            {/* Discover Mode - Tag Suggestions */}
            {searchFilter === "discover" && searchTerm.length === 0 && suggestedTags.length > 0 && searchResults.length === 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-purple-400 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-medium">Explore by Genre</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedTags.map((tag) => (
                    <motion.button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1.5 text-xs rounded-full 
                                 bg-gradient-to-r from-purple-500/10 to-pink-500/10
                                 border border-purple-500/20 hover:border-purple-500/40
                                 text-purple-300 hover:text-white
                                 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
                
                {discoverStations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-400 flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5 text-purple-400" />
                        Random Discoveries
                      </span>
                      <motion.button
                        onClick={handleRefreshDiscover}
                        className="text-xs text-purple-400 hover:text-purple-300"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Zap className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                    <div className="space-y-2">
                      {discoverStations.slice(0, 5).map((station) => (
                        <motion.button
                          key={station.id}
                          onClick={() => handleStationSelect(station)}
                          className="w-full p-2 text-left rounded-lg bg-white/[0.02] hover:bg-purple-500/10 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                              <Radio className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-white truncate">{station.name}</div>
                              <div className="text-[10px] text-gray-500">{station.location.country}</div>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Trending Mode - Show Trending Stations */}
            {searchFilter === "trending" && searchTerm.length === 0 && trendingStations.length > 0 && searchResults.length === 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-pink-400 mb-3">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-medium">Most Voted Stations</span>
                </div>
                <div className="space-y-2">
                  {trendingStations.map((station, index) => (
                    <motion.button
                      key={station.id}
                      onClick={() => handleStationSelect(station)}
                      className="w-full p-3 text-left rounded-xl bg-white/[0.02] hover:bg-pink-500/10 
                                 border border-transparent hover:border-pink-500/20 transition-all"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 
                                        flex items-center justify-center text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-white truncate">{station.name}</div>
                          <div className="text-[10px] text-gray-500 flex items-center gap-2">
                            <span>{station.location.country}</span>
                            {station.votes && (
                              <span className="text-pink-400">♥ {station.votes}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Mood Mode - Mood/Vibe Selection */}
            {searchFilter === "mood" && searchTerm.length === 0 && searchResults.length === 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-violet-400 mb-3">
                  <Headphones className="w-3.5 h-3.5" />
                  <span className="font-medium">What's Your Vibe?</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {MOOD_OPTIONS.map((mood) => (
                    <motion.button
                      key={mood.id}
                      onClick={() => setSearchTerm(mood.id)}
                      className={`p-3 text-left rounded-xl transition-all duration-200
                                  bg-gradient-to-br ${mood.gradient} bg-opacity-10
                                  border border-white/10 hover:border-white/30
                                  hover:shadow-lg`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{mood.emoji}</span>
                        <span className="text-sm text-white font-medium">{mood.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Continent Mode - Explore by Region */}
            {searchFilter === "continent" && searchTerm.length === 0 && searchResults.length === 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-emerald-400 mb-3">
                  <Map className="w-3.5 h-3.5" />
                  <span className="font-medium">Explore by Continent</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CONTINENT_OPTIONS.map((continent) => (
                    <motion.button
                      key={continent.id}
                      onClick={() => setSearchTerm(continent.id)}
                      className={`p-4 text-left rounded-xl transition-all duration-200
                                  bg-gradient-to-br ${continent.gradient} bg-opacity-10
                                  border border-white/10 hover:border-white/30
                                  hover:shadow-lg`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">{continent.emoji}</span>
                        <span className="text-sm text-white font-medium">{continent.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Live Now Mode - Recently Active Stations */}
            {searchFilter === "live" && searchTerm.length === 0 && searchResults.length === 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-red-400 mb-3">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span className="font-medium">Recently Active Stations</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  Stations that were just clicked by listeners around the world...
                </div>
                <motion.button
                  onClick={async () => {
                    setIsLoading(true);
                    try {
                      const active = await radioBrowserApi.getActiveNow(30);
                      setSearchResults(active);
                      setFullResults(active);
                      setTotalResults(active.length);
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                  className="w-full py-3 text-sm text-red-400 
                             bg-gradient-to-r from-red-500/10 to-orange-500/10 
                             hover:from-red-500/20 hover:to-orange-500/20
                             border border-red-500/20 hover:border-red-500/40
                             rounded-xl transition-all duration-200
                             flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Activity className="w-4 h-4" />
                  Load Live Stations
                </motion.button>
              </div>
            )}

            {/* Country suggestions (when country filter is selected and no search term) */}
            {searchFilter === "country" && searchTerm.length === 0 && availableCountries.length > 0 && searchResults.length === 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-blue-400 mb-3">
                  <Globe className="w-3.5 h-3.5" />
                  <span className="font-medium">Select a Country</span>
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                  {availableCountries.slice(0, 24).map((country) => (
                    <motion.button
                      key={country}
                      onClick={() => setSearchTerm(country)}
                      className="p-2.5 text-left text-sm text-gray-300 rounded-lg
                                 bg-white/[0.02] hover:bg-blue-500/10
                                 border border-transparent hover:border-blue-500/20
                                 transition-all truncate"
                      whileHover={{ scale: 1.02 }}
                    >
                      {country}
                    </motion.button>
                  ))}
                </div>
                {availableCountries.length > 24 && (
                  <div className="text-xs text-gray-500 mt-2 px-1">
                    +{availableCountries.length - 24} more countries... Start typing to search
                  </div>
                )}
              </div>
            )}

            {/* Popular Stations (default view) */}
            {searchTerm.length === 0 && searchFilter === "all" && popularStations.length > 0 && searchResults.length === 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-cyan-400 mb-3">
                  <Wifi className="w-3.5 h-3.5" />
                  <span className="font-medium">Popular Stations</span>
                </div>
                <div className="space-y-2">
                  {popularStations.map((station, index) => (
                    <motion.button
                      key={station.id}
                      onClick={() => handleStationSelect(station)}
                      className="w-full p-3 text-left rounded-xl 
                                 bg-white/[0.02] hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10
                                 border border-transparent hover:border-cyan-500/20
                                 transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 
                                        flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {station.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-white truncate">{station.name}</div>
                          <div className="text-[10px] text-gray-500">
                            {station.location.city}, {station.location.country}
                          </div>
                        </div>
                        <div className="text-xs font-mono text-cyan-400">
                          {station.listeners >= 1000 
                            ? `${(station.listeners / 1000).toFixed(0)}k` 
                            : station.listeners}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {((searchFilter === "all" && searchTerm.length > 2) || 
              (searchFilter !== "all" && searchFilter !== "discover" && searchFilter !== "trending" && searchTerm.length > 1)) &&
              searchResults.length === 0 &&
              !isLoading && (
                <motion.div 
                  className="p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800/50 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="text-sm text-gray-400 mb-1">No stations found</div>
                  <div className="text-xs text-gray-600">
                    Try a different search term or explore other filters
                  </div>
                  <motion.button
                    onClick={() => {
                      setSearchFilter("discover");
                      setSearchTerm("");
                    }}
                    className="mt-4 px-4 py-2 text-xs rounded-full 
                               bg-gradient-to-r from-purple-500/20 to-pink-500/20
                               border border-purple-500/30 text-purple-300
                               hover:border-purple-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="w-3.5 h-3.5 inline mr-1.5" />
                    Discover Random Stations
                  </motion.button>
                </motion.div>
              )}

            {/* Footer with powered by */}
            <div className="p-3 border-t border-white/5 flex items-center justify-between">
              <div className="text-[10px] text-gray-600 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Powered by Radio Browser API
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSearchTerm("");
                  setSearchResults([]);
                  setFullResults([]);
                  setTotalResults(0);
                  setResultLimit(getDefaultLimit(searchFilter));
                }}
                className="text-xs text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
