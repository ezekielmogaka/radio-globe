"use client";

import { useState, useEffect } from "react";

interface UserLocation {
  latitude: number;
  longitude: number;
  country?: string;
  city?: string;
  timezone?: string;
}

interface LocationState {
  location: UserLocation | null;
  isLoading: boolean;
  error: string | null;
  permissionDenied: boolean;
}

// Fallback locations by country code
const FALLBACK_LOCATIONS: Record<string, UserLocation> = {
  US: {
    latitude: 37.7749,
    longitude: -122.4194,
    country: "United States",
    city: "San Francisco",
    timezone: "America/Los_Angeles",
  },
  GB: {
    latitude: 51.5074,
    longitude: -0.1278,
    country: "United Kingdom",
    city: "London",
    timezone: "Europe/London",
  },
  DE: {
    latitude: 52.52,
    longitude: 13.405,
    country: "Germany",
    city: "Berlin",
    timezone: "Europe/Berlin",
  },
  FR: {
    latitude: 48.8566,
    longitude: 2.3522,
    country: "France",
    city: "Paris",
    timezone: "Europe/Paris",
  },
  JP: {
    latitude: 35.6762,
    longitude: 139.6503,
    country: "Japan",
    city: "Tokyo",
    timezone: "Asia/Tokyo",
  },
  KE: {
    latitude: -1.2921,
    longitude: 36.8219,
    country: "Kenya",
    city: "Nairobi",
    timezone: "Africa/Nairobi",
  },
  IN: {
    latitude: 28.6139,
    longitude: 77.209,
    country: "India",
    city: "New Delhi",
    timezone: "Asia/Kolkata",
  },
  BR: {
    latitude: -23.5505,
    longitude: -46.6333,
    country: "Brazil",
    city: "São Paulo",
    timezone: "America/Sao_Paulo",
  },
  AU: {
    latitude: -33.8688,
    longitude: 151.2093,
    country: "Australia",
    city: "Sydney",
    timezone: "Australia/Sydney",
  },
};

export function useUserLocation() {
  const [state, setState] = useState<LocationState>({
    location: null,
    isLoading: true,
    error: null,
    permissionDenied: false,
  });

  useEffect(() => {
    // Try to get from localStorage first (cached location)
    const cached = localStorage.getItem("userLocation");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        // Use cached if less than 24 hours old
        if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
          setState({
            location: parsed.location,
            isLoading: false,
            error: null,
            permissionDenied: false,
          });
          return;
        }
      } catch (e) {
        localStorage.removeItem("userLocation");
      }
    }

    // Try geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Try to get location details via reverse geocoding
          let locationDetails: UserLocation = { latitude, longitude };

          try {
            // Using a free reverse geocoding service
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
              { headers: { "User-Agent": "RadioGlobe/1.0" } },
            );
            if (response.ok) {
              const data = await response.json();
              locationDetails = {
                latitude,
                longitude,
                country: data.address?.country,
                city:
                  data.address?.city ||
                  data.address?.town ||
                  data.address?.village,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              };
            }
          } catch (e) {
            // Reverse geocoding failed, use coordinates only
            locationDetails.timezone =
              Intl.DateTimeFormat().resolvedOptions().timeZone;
          }

          // Cache the location
          localStorage.setItem(
            "userLocation",
            JSON.stringify({
              location: locationDetails,
              timestamp: Date.now(),
            }),
          );

          setState({
            location: locationDetails,
            isLoading: false,
            error: null,
            permissionDenied: false,
          });
        },
        (error) => {
          console.warn("Geolocation error:", error.message);

          // Use timezone-based fallback
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const fallbackLocation = getFallbackFromTimezone(timezone);

          setState({
            location: fallbackLocation,
            isLoading: false,
            error: error.message,
            permissionDenied: error.code === error.PERMISSION_DENIED,
          });
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        },
      );
    } else {
      // Geolocation not supported, use timezone fallback
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const fallbackLocation = getFallbackFromTimezone(timezone);

      setState({
        location: fallbackLocation,
        isLoading: false,
        error: "Geolocation not supported",
        permissionDenied: false,
      });
    }
  }, []);

  return state;
}

function getFallbackFromTimezone(timezone: string): UserLocation {
  // Map timezones to countries
  if (timezone.startsWith("America/")) {
    if (timezone.includes("Sao_Paulo") || timezone.includes("Brasilia")) {
      return FALLBACK_LOCATIONS.BR;
    }
    return FALLBACK_LOCATIONS.US;
  }
  if (timezone.startsWith("Europe/London")) return FALLBACK_LOCATIONS.GB;
  if (
    timezone.startsWith("Europe/Berlin") ||
    timezone.startsWith("Europe/Vienna")
  )
    return FALLBACK_LOCATIONS.DE;
  if (timezone.startsWith("Europe/Paris")) return FALLBACK_LOCATIONS.FR;
  if (timezone.startsWith("Asia/Tokyo")) return FALLBACK_LOCATIONS.JP;
  if (timezone.startsWith("Asia/Kolkata")) return FALLBACK_LOCATIONS.IN;
  if (timezone.startsWith("Africa/Nairobi")) return FALLBACK_LOCATIONS.KE;
  if (timezone.startsWith("Australia/")) return FALLBACK_LOCATIONS.AU;

  // Default to US
  return FALLBACK_LOCATIONS.US;
}

// Calculate distance between two coordinates in km
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

// Get time of day category
export function getTimeOfDay(): "morning" | "afternoon" | "evening" | "night" {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
}

// Get recommended genres based on time of day
export function getTimeBasedGenres(): string[] {
  const timeOfDay = getTimeOfDay();
  switch (timeOfDay) {
    case "morning":
      return ["news", "talk", "classical", "jazz", "acoustic"];
    case "afternoon":
      return ["pop", "rock", "indie", "electronic", "world"];
    case "evening":
      return ["jazz", "soul", "r&b", "chill", "lounge"];
    case "night":
      return ["ambient", "electronic", "classical", "lo-fi", "sleep"];
  }
}
