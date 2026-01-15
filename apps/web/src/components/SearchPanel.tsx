"use client";

import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Volume2,
  Heart,
  Share,
  Globe,
  Music,
  Radio,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RadioStation } from "../types";
import { useGlobeStore } from "../stores/globe-store";
import { radioStationService } from "../services/radioStationService";

interface SearchPanelProps {
  className?: string;
}

export function SearchPanel({ className = "" }: SearchPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<RadioStation[]>([]);
  const [fullResults, setFullResults] = useState<RadioStation[]>([]);
  const [resultLimit, setResultLimit] = useState(20);
  const [totalResults, setTotalResults] = useState(0);
  const [popularStations, setPopularStations] = useState<RadioStation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState<
    "all" | "genre" | "country" | "city"
  >("all");
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const { selectStation } = useGlobeStore();

  const getDefaultLimit = (filter: "all" | "genre" | "country" | "city") => {
    switch (filter) {
      case "country":
        return 60;
      case "city":
        return 40;
      default:
        return 20;
    }
  };

  // Load popular stations, countries, and cities once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const stations = await radioStationService.getPopularStations(8);
        setPopularStations(stations);
        
        // Load available countries and cities for filtering (from cache)
        const countries = await radioStationService.getAvailableCountries();
        setAvailableCountries(countries);
        
        const cities = await radioStationService.getAvailableCities();
        setAvailableCities(cities);
        
        console.log(`Loaded ${countries.length} countries and ${cities.length} cities from cache`);
      } catch (error) {
        console.error("Failed to load station data:", error);
      }
    };
    fetchData();
  }, []);

  // Enhanced smart search with proper filtering logic and faster debounce
  useEffect(() => {
    let timer: NodeJS.Timeout;

    // For country/city search, allow shorter search terms
    const minLength = (searchFilter === "country" || searchFilter === "city") ? 2 : 3;
    
    if (searchTerm.length >= minLength) {
      setIsLoading(true);

      // Faster debounce for better UX (200ms instead of 300ms)
      timer = setTimeout(async () => {
        let results: RadioStation[] = [];

        try {
          console.log(`🔍 Smart search: filter=${searchFilter}, term="${searchTerm}"`);
          const startTime = performance.now();
          
          switch (searchFilter) {
            case "all":
              // Search across all fields: station name, country, city, genre
              results = await radioStationService.searchStations(searchTerm);
              break;
              
            case "genre":
              // Search specifically by genre/music type
              results = await radioStationService.getStationsByGenre(searchTerm);
              break;
              
            case "country":
              // Filter stations by country location
              results = await radioStationService.getStationsByCountry(searchTerm);
              break;
              
            case "city":
              // Filter stations by city location
              results = await radioStationService.getStationsByCity(searchTerm);
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
      }, 200);
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

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <motion.div className="flex items-center" whileHover={{ scale: 1.02 }}>
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={
              searchFilter === "country" ? "Search countries (e.g. Germany, Japan, Brazil)..." :
              searchFilter === "genre" ? "Search genres (e.g. rock, jazz, news, classical)..." :
              searchFilter === "city" ? `Search cities (e.g. ${availableCities.slice(0, 3).join(", ") || "London, Tokyo, New York"}...)` :
              "Search stations, countries, cities, or genres..."
            }
            className="glass pl-10 pr-4 py-2 w-64 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {isLoading && (
            <div className="absolute right-3 top-3">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      </motion.div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 w-80 glass rounded-xl overflow-hidden z-50 max-h-96 overflow-y-auto"
          >
            {/* Search Filters */}
            <div className="p-3 border-b border-white/10">
              <div className="flex gap-2">
                {["all", "genre", "country", "city"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      const nextFilter = filter as "all" | "genre" | "country" | "city";
                      setSearchFilter(nextFilter);
                      setSearchTerm(""); // Clear search when changing filter
                      setSearchResults([]);
                      setFullResults([]);
                      setTotalResults(0);
                      setResultLimit(getDefaultLimit(nextFilter));
                    }}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      searchFilter === filter
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    {filter === "country" && "🌍 "}
                    {filter === "city" && "🏙️ "}
                    {filter === "genre" && "🎵 "}
                    {filter === "all" && "🔍 "}
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="p-2">
                <div className="text-xs text-gray-400 px-2 py-1 flex items-center gap-2">
                  {searchFilter === "all" && <Search className="w-3 h-3" />}
                  {searchFilter === "country" && <Globe className="w-3 h-3" />}
                  {searchFilter === "city" && <MapPin className="w-3 h-3" />}
                  {searchFilter === "genre" && <Music className="w-3 h-3" />}
                  <span>
                    Showing {searchResults.length}
                    {totalResults > searchResults.length ? ` of ${totalResults}` : ""} {searchFilter === "all" ? "stations" : searchFilter} results
                    {searchFilter === "country" && searchTerm && ` in ${searchTerm}`}
                    {searchFilter === "city" && searchTerm && ` in ${searchTerm}`}
                    {searchFilter === "genre" && searchTerm && ` for ${searchTerm}`}
                    {searchFilter === "all" && searchTerm && ` for "${searchTerm}"`}
                  </span>
                </div>
                {searchResults.map((station) => (
                  <motion.button
                    key={station.id}
                    onClick={() => handleStationSelect(station)}
                    className="w-full p-3 text-left hover:bg-white/10 rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Radio className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white text-sm truncate">
                          {station.name}
                        </div>
                        <div className="text-xs text-gray-400 flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {station.location.city}, {station.location.country}
                          <span className="bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded text-xs">
                            {station.genre}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {(station.listeners / 1000).toFixed(0)}k
                      </div>
                    </div>
                  </motion.button>
                ))}
                {totalResults > searchResults.length && (
                  <div className="px-2 pb-2">
                    <button
                      onClick={handleLoadMoreResults}
                      className="w-full py-2 text-xs text-blue-300 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      Show more stations ({totalResults - searchResults.length} more)
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Country suggestions (when country filter is selected and no search term) */}
            {searchFilter === "country" && searchTerm.length === 0 && availableCountries.length > 0 && (
              <div className="p-2">
                <div className="text-xs text-gray-400 px-2 py-2 flex items-center gap-2">
                  <Globe className="w-3 h-3" />
                  Select a Country
                </div>
                <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto">
                  {availableCountries.slice(0, 20).map((country) => (
                    <button
                      key={country}
                      onClick={() => {
                        setSearchTerm(country);
                        setSearchFilter("country");
                        setSearchResults([]);
                        setFullResults([]);
                        setTotalResults(0);
                        setResultLimit(getDefaultLimit("country"));
                      }}
                      className="p-2 text-left text-sm text-gray-300 hover:bg-white/10 rounded transition-colors truncate"
                    >
                      {country}
                    </button>
                  ))}
                </div>
                {availableCountries.length > 20 && (
                  <div className="text-xs text-gray-500 px-2 py-1">
                    +{availableCountries.length - 20} more countries... Start typing to search
                  </div>
                )}
              </div>
            )}

            {/* Popular Stations (when no search and not country filter) */}
            {searchTerm.length === 0 && searchFilter !== "country" && popularStations.length > 0 && (
              <div className="p-2">
                <div className="text-xs text-gray-400 px-2 py-2 flex items-center gap-2">
                  <Music className="w-3 h-3" />
                  Popular Stations
                </div>
                {popularStations.map((station) => (
                  <motion.button
                    key={station.id}
                    onClick={() => handleStationSelect(station)}
                    className="w-full p-3 text-left hover:bg-white/10 rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">
                          {station.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white text-sm truncate">
                          {station.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {station.location.city}, {station.location.country}
                        </div>
                      </div>
                      <div className="text-xs text-green-400">
                        {(station.listeners / 1000).toFixed(0)}k
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}

            {/* No Results */}
            {searchTerm.length > 2 &&
              searchResults.length === 0 &&
              !isLoading && (
                <div className="p-6 text-center text-gray-400">
                  <Globe className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <div className="text-sm">No stations found</div>
                  <div className="text-xs">
                    Try searching by genre or country
                  </div>
                </div>
              )}

            {/* Close Button */}
            <div className="p-2 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSearchTerm("");
                  setSearchResults([]);
                  setFullResults([]);
                  setTotalResults(0);
                  setResultLimit(getDefaultLimit(searchFilter));
                }}
                className="w-full py-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
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
    </div>
  );
}
