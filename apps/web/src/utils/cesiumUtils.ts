import { Cartesian3, Math as CesiumMath, Cartographic } from "cesium";
import { RadioStation } from "../types";

/**
 * Utility functions for working with Cesium coordinates and radio stations
 */

export interface CesiumCoordinate {
  longitude: number;
  latitude: number;
  height?: number;
}

export interface StationEntity {
  id: string;
  station: RadioStation;
  position: Cartesian3;
  coordinate: CesiumCoordinate;
}

/**
 * Convert latitude/longitude to Cesium Cartesian3 position
 */
export function latLngToCartesian3(
  lat: number,
  lng: number,
  height: number = 0,
): Cartesian3 {
  return Cartesian3.fromDegrees(lng, lat, height);
}

/**
 * Convert radio station to Cesium entity data
 */
export function radioStationToEntity(station: RadioStation): StationEntity {
  const coordinate: CesiumCoordinate = {
    longitude: station.location.lng,
    latitude: station.location.lat,
    height: 10000, // 10km above surface for visibility
  };

  return {
    id: station.id,
    station,
    position: latLngToCartesian3(
      coordinate.latitude,
      coordinate.longitude,
      coordinate.height,
    ),
    coordinate,
  };
}

/**
 * Calculate distance between two coordinates in kilometers
 */
export function calculateDistance(
  coord1: CesiumCoordinate,
  coord2: CesiumCoordinate,
): number {
  const R = 6371; // Earth's radius in km
  const dLat = CesiumMath.toRadians(coord2.latitude - coord1.latitude);
  const dLon = CesiumMath.toRadians(coord2.longitude - coord1.longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(CesiumMath.toRadians(coord1.latitude)) *
      Math.cos(CesiumMath.toRadians(coord2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Get optimal camera position for viewing a station
 */
export function getStationCameraPosition(station: RadioStation): Cartesian3 {
  const distance = 2000000; // 2000km from surface
  return latLngToCartesian3(
    station.location.lat,
    station.location.lng,
    distance,
  );
}

/**
 * Create camera destination for smooth animation to station
 */
interface CameraDestination {
  destination: Cartesian3;
  orientation: {
    heading: number;
    pitch: number;
    roll: number;
  };
  duration: number;
}

function estimateAltitudeFromBoundingBox(bbox: {
  minLat: number;
  minLng: number;
  maxLat: number;
  maxLng: number;
}): number {
  const latSpan = Math.max(Math.abs(bbox.maxLat - bbox.minLat), 0.5);
  const lngSpan = Math.max(Math.abs(bbox.maxLng - bbox.minLng), 0.5);
  const dominantSpan = Math.max(latSpan, lngSpan);
  const meters = dominantSpan * 111_000;
  const altitude = meters * 3;
  return Math.min(2_500_000, Math.max(220_000, altitude));
}

function estimateDurationFromAltitude(altitude: number): number {
  const normalized = altitude / 1_000_000;
  return Math.min(3.5, Math.max(1.25, normalized + 0.75));
}

export function createCameraDestination(station: RadioStation): CameraDestination {
  const wof = station.location.wof;
  const targetLat = wof?.centroid?.lat ?? station.location.lat;
  const targetLng = wof?.centroid?.lng ?? station.location.lng;

  const altitude = wof?.bbox ? estimateAltitudeFromBoundingBox(wof.bbox) : 1_500_000;
  const duration = estimateDurationFromAltitude(altitude);

  return {
    destination: Cartesian3.fromDegrees(targetLng, targetLat, altitude),
    orientation: {
      heading: CesiumMath.toRadians(0),
      pitch: CesiumMath.toRadians(-40),
      roll: 0,
    },
    duration,
  };
}

/**
 * Filter stations by visibility based on camera position
 */
export function filterStationsByDistance(
  stations: RadioStation[],
  cameraPosition: Cartesian3,
  maxDistance: number = 5000, // km
): RadioStation[] {
  const cameraCartographic = Cartographic.fromCartesian(cameraPosition);
  const cameraCoord: CesiumCoordinate = {
    longitude: CesiumMath.toDegrees(cameraCartographic.longitude),
    latitude: CesiumMath.toDegrees(cameraCartographic.latitude),
  };

  return stations.filter((station) => {
    const stationCoord: CesiumCoordinate = {
      longitude: station.location.lng,
      latitude: station.location.lat,
    };
    return calculateDistance(cameraCoord, stationCoord) <= maxDistance;
  });
}

/**
 * Get color for station based on status and cluster information
 */
export function getStationColor(
  station: RadioStation,
  isSelected: boolean = false,
  isHovered: boolean = false,
) {
  if (isSelected) return { red: 1.0, green: 0.0, blue: 0.0, alpha: 1.0 }; // Red
  if (isHovered) return { red: 1.0, green: 1.0, blue: 0.0, alpha: 1.0 }; // Yellow

  // Special handling for clusters - brighter colors
  const isCluster = station.isCluster || (station.stationCount && station.stationCount > 1);
  const alphaMultiplier = isCluster ? 1.0 : 0.8; // Clusters are more opaque

  // Color by region/country with extensive coverage
  const country = station.location.country || "default";
  switch (country) {
    // North America
    case "US":
    case "USA":
      return { red: 0.0, green: 0.5, blue: 1.0, alpha: alphaMultiplier }; // Blue
    case "CA":
    case "Canada":
      return { red: 1.0, green: 0.0, blue: 0.0, alpha: alphaMultiplier }; // Red
    case "MX":
    case "Mexico":
      return { red: 0.0, green: 1.0, blue: 0.0, alpha: alphaMultiplier }; // Green

    // Europe
    case "UK":
    case "GB":
    case "United Kingdom":
      return { red: 1.0, green: 0.0, blue: 0.5, alpha: alphaMultiplier }; // Pink
    case "DE":
    case "Germany":
      return { red: 1.0, green: 1.0, blue: 0.0, alpha: alphaMultiplier }; // Yellow
    case "FR":
    case "France":
      return { red: 0.5, green: 0.0, blue: 1.0, alpha: alphaMultiplier }; // Purple
    case "IT":
    case "Italy":
      return { red: 0.0, green: 1.0, blue: 0.5, alpha: alphaMultiplier }; // Light Green
    case "ES":
    case "Spain":
      return { red: 1.0, green: 0.5, blue: 0.0, alpha: alphaMultiplier }; // Orange
    case "NL":
    case "Netherlands":
      return { red: 1.0, green: 0.5, blue: 0.5, alpha: alphaMultiplier }; // Light Pink
    case "SE":
    case "Sweden":
      return { red: 0.0, green: 0.7, blue: 1.0, alpha: alphaMultiplier }; // Light Blue
    case "NO":
    case "Norway":
      return { red: 0.0, green: 0.3, blue: 0.7, alpha: alphaMultiplier }; // Dark Blue
    case "DK":
    case "Denmark":
      return { red: 0.8, green: 0.0, blue: 0.3, alpha: alphaMultiplier }; // Dark Pink
    case "FI":
    case "Finland":
      return { red: 0.0, green: 0.8, blue: 0.8, alpha: alphaMultiplier }; // Cyan
    case "CH":
    case "Switzerland":
      return { red: 0.7, green: 0.7, blue: 0.7, alpha: alphaMultiplier }; // Light Gray
    case "AT":
    case "Austria":
      return { red: 0.5, green: 0.5, blue: 0.0, alpha: alphaMultiplier }; // Olive
    case "BE":
    case "Belgium":
      return { red: 0.3, green: 0.0, blue: 0.0, alpha: alphaMultiplier }; // Dark Red
    case "PL":
    case "Poland":
      return { red: 0.8, green: 0.8, blue: 0.0, alpha: alphaMultiplier }; // Bright Yellow
    case "RU":
    case "Russia":
      return { red: 0.0, green: 0.0, blue: 0.8, alpha: alphaMultiplier }; // Dark Blue

    // Asia Pacific
    case "JP":
    case "Japan":
      return { red: 1.0, green: 0.0, blue: 1.0, alpha: alphaMultiplier }; // Magenta
    case "CN":
    case "China":
      return { red: 1.0, green: 0.8, blue: 0.0, alpha: alphaMultiplier }; // Gold
    case "KR":
    case "Korea":
    case "South Korea":
      return { red: 0.5, green: 1.0, blue: 0.5, alpha: alphaMultiplier }; // Light Green
    case "IN":
    case "India":
      return { red: 1.0, green: 0.5, blue: 0.2, alpha: alphaMultiplier }; // Saffron
    case "AU":
    case "Australia":
      return { red: 0.0, green: 0.6, blue: 0.0, alpha: alphaMultiplier }; // Forest Green
    case "NZ":
    case "New Zealand":
      return { red: 0.0, green: 0.4, blue: 0.0, alpha: alphaMultiplier }; // Dark Green
    case "TH":
    case "Thailand":
      return { red: 0.8, green: 0.4, blue: 0.8, alpha: alphaMultiplier }; // Light Purple
    case "SG":
    case "Singapore":
      return { red: 0.0, green: 0.8, blue: 0.6, alpha: alphaMultiplier }; // Teal
    case "MY":
    case "Malaysia":
      return { red: 0.6, green: 0.8, blue: 0.0, alpha: alphaMultiplier }; // Lime
    case "ID":
    case "Indonesia":
      return { red: 0.8, green: 0.0, blue: 0.8, alpha: alphaMultiplier }; // Purple
    case "PH":
    case "Philippines":
      return { red: 0.0, green: 0.0, blue: 1.0, alpha: alphaMultiplier }; // Blue

    // South America
    case "BR":
    case "Brazil":
      return { red: 0.0, green: 0.8, blue: 0.2, alpha: alphaMultiplier }; // Brazilian Green
    case "AR":
    case "Argentina":
      return { red: 0.5, green: 0.8, blue: 1.0, alpha: alphaMultiplier }; // Sky Blue
    case "CL":
    case "Chile":
      return { red: 0.8, green: 0.0, blue: 0.0, alpha: alphaMultiplier }; // Red
    case "PE":
    case "Peru":
      return { red: 0.8, green: 0.2, blue: 0.0, alpha: alphaMultiplier }; // Dark Orange
    case "CO":
    case "Colombia":
      return { red: 1.0, green: 1.0, blue: 0.0, alpha: alphaMultiplier }; // Yellow

    // Africa
    case "ZA":
    case "South Africa":
      return { red: 0.0, green: 0.5, blue: 0.0, alpha: alphaMultiplier }; // Green
    case "NG":
    case "Nigeria":
      return { red: 0.0, green: 0.7, blue: 0.0, alpha: alphaMultiplier }; // Green
    case "KE":
    case "Kenya":
      return { red: 0.8, green: 0.0, blue: 0.0, alpha: alphaMultiplier }; // Red
    case "EG":
    case "Egypt":
      return { red: 0.8, green: 0.6, blue: 0.0, alpha: alphaMultiplier }; // Gold
    case "MA":
    case "Morocco":
      return { red: 0.8, green: 0.0, blue: 0.0, alpha: alphaMultiplier }; // Red

    // Middle East
    case "AE":
    case "UAE":
      return { red: 0.0, green: 0.6, blue: 0.8, alpha: alphaMultiplier }; // Turquoise
    case "SA":
    case "Saudi Arabia":
      return { red: 0.0, green: 0.5, blue: 0.0, alpha: alphaMultiplier }; // Green
    case "IL":
    case "Israel":
      return { red: 0.0, green: 0.0, blue: 0.8, alpha: alphaMultiplier }; // Blue
    case "TR":
    case "Turkey":
      return { red: 0.8, green: 0.0, blue: 0.0, alpha: alphaMultiplier }; // Red
    case "IR":
    case "Iran":
      return { red: 0.0, green: 0.8, blue: 0.0, alpha: alphaMultiplier }; // Green

    // Default for unspecified countries
    default:
      return { red: 0.7, green: 0.7, blue: 0.7, alpha: alphaMultiplier }; // Light Gray
  }
}

/**
 * Create billboard scale based on station importance and cluster size
 */
export function getStationScale(station: RadioStation): number {
  // Handle clusters with dynamic scaling based on station count
  if (station.isCluster && station.stationCount) {
    if (station.stationCount > 20) return 2.5; // Very large clusters
    if (station.stationCount > 10) return 2.0; // Large clusters
    if (station.stationCount > 5) return 1.7; // Medium clusters
    if (station.stationCount > 1) return 1.4; // Small clusters
  }

  // Scale based on language or listener count (for individual stations)
  if (station.language === "en") return 1.2;
  if (station.tags?.includes("popular")) return 1.1;
  if (station.listeners && station.listeners > 10000) return 1.3;
  
  return 1.0;
}
