"use client";

import { useState, useEffect, useCallback } from "react";
import type { RadioStation } from "../types";

const STORAGE_KEYS = {
  FAVORITES: "radioGlobe_favorites",
  RECENT: "radioGlobe_recent",
  PREFERENCES: "radioGlobe_preferences",
};

const MAX_RECENT = 20;

interface UserPreferences {
  autoPlay: boolean;
  defaultVolume: number;
  preferredGenres: string[];
  preferredCountries: string[];
  sleepTimer: number | null; // minutes
}

const DEFAULT_PREFERENCES: UserPreferences = {
  autoPlay: false,
  defaultVolume: 70,
  preferredGenres: [],
  preferredCountries: [],
  sleepTimer: null,
};

export function useFavorites() {
  const [favorites, setFavorites] = useState<RadioStation[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load favorites:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const addFavorite = useCallback((station: RadioStation) => {
    setFavorites((prev) => {
      if (prev.some((s) => s.id === station.id)) return prev;
      return [station, ...prev];
    });
  }, []);

  const removeFavorite = useCallback((stationId: string) => {
    setFavorites((prev) => prev.filter((s) => s.id !== stationId));
  }, []);

  const isFavorite = useCallback(
    (stationId: string) => {
      return favorites.some((s) => s.id === stationId);
    },
    [favorites],
  );

  const toggleFavorite = useCallback(
    (station: RadioStation) => {
      if (isFavorite(station.id)) {
        removeFavorite(station.id);
      } else {
        addFavorite(station);
      }
    },
    [isFavorite, removeFavorite, addFavorite],
  );

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    isLoaded,
  };
}

export function useRecentStations() {
  const [recent, setRecent] = useState<RadioStation[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load recent from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.RECENT);
      if (stored) {
        setRecent(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load recent stations:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save recent to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recent));
    }
  }, [recent, isLoaded]);

  const addToRecent = useCallback((station: RadioStation) => {
    setRecent((prev) => {
      // Remove if already exists
      const filtered = prev.filter((s) => s.id !== station.id);
      // Add to front and limit size
      return [station, ...filtered].slice(0, MAX_RECENT);
    });
  }, []);

  const clearRecent = useCallback(() => {
    setRecent([]);
  }, []);

  return {
    recent,
    addToRecent,
    clearRecent,
    isLoaded,
  };
}

export function usePreferences() {
  const [preferences, setPreferences] =
    useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
      if (stored) {
        setPreferences({ ...DEFAULT_PREFERENCES, ...JSON.parse(stored) });
      }
    } catch (e) {
      console.error("Failed to load preferences:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        STORAGE_KEYS.PREFERENCES,
        JSON.stringify(preferences),
      );
    }
  }, [preferences, isLoaded]);

  const updatePreference = useCallback(
    <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
      setPreferences((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const addPreferredGenre = useCallback((genre: string) => {
    setPreferences((prev) => ({
      ...prev,
      preferredGenres: Array.from(new Set([...prev.preferredGenres, genre])),
    }));
  }, []);

  const removePreferredGenre = useCallback((genre: string) => {
    setPreferences((prev) => ({
      ...prev,
      preferredGenres: prev.preferredGenres.filter((g) => g !== genre),
    }));
  }, []);

  return {
    preferences,
    updatePreference,
    addPreferredGenre,
    removePreferredGenre,
    isLoaded,
  };
}

// Combined hook for all user data
export function useUserData() {
  const favorites = useFavorites();
  const recent = useRecentStations();
  const preferences = usePreferences();

  return {
    favorites,
    recent,
    preferences,
    isLoaded: favorites.isLoaded && recent.isLoaded && preferences.isLoaded,
  };
}
