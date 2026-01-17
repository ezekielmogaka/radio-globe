/**
 * Coordinate conversion utilities for geographic calculations
 * Compatible with both Cesium and general 3D applications
 */

/**
 * Convert latitude/longitude to 3D Cartesian coordinates
 */
export function latLngToPosition(
  lat: number,
  lng: number,
  radius: number = 2.02,
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}

/**
 * Convert 3D Cartesian coordinates to latitude/longitude
 */
export function positionToLatLng(
  x: number,
  y: number,
  z: number,
): { lat: number; lng: number } {
  const radius = Math.sqrt(x * x + y * y + z * z);
  const lat = 90 - (Math.acos(y / radius) * 180) / Math.PI;
  const lng = (Math.atan2(z, -x) * 180) / Math.PI - 180;

  return { lat, lng };
}

/**
 * Calculate distance between two geographic points using Haversine formula
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Normalize longitude to [-180, 180] range
 */
export function normalizeLongitude(lng: number): number {
  while (lng > 180) lng -= 360;
  while (lng < -180) lng += 360;
  return lng;
}

/**
 * Normalize latitude to [-90, 90] range
 */
export function normalizeLatitude(lat: number): number {
  return Math.max(-90, Math.min(90, lat));
}
