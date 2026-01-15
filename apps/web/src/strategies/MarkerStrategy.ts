import * as THREE from "three";
import { RadioStation } from "../types";

export interface MarkerData {
  id: string;
  position: [number, number, number];
  stations: RadioStation[];
  type: 'single' | 'cluster' | 'city' | 'country';
  metadata: {
    city?: string;
    country?: string;
    density?: 'low' | 'medium' | 'high' | 'very-high';
    zoomLevel?: number;
    name?: string;
    stationCount?: number;
    type?: 'country' | 'city' | 'cluster';
  };
}

export interface MarkerStyle {
  size: number;
  color: string;
  opacity: number;
  hasLabel: boolean;
  labelText?: string;
  pulseEffect?: boolean;
  glowEffect?: boolean;
}

export abstract class BaseMarkerStrategy {
  abstract calculateStyle(data: MarkerData, cameraDistance: number): MarkerStyle;
  abstract shouldShow(data: MarkerData, zoomLevel: number): boolean;
  abstract handleInteraction(data: MarkerData, interactionType: 'click' | 'hover'): void;
}

export class SingleStationMarkerStrategy extends BaseMarkerStrategy {
  calculateStyle(data: MarkerData, cameraDistance: number): MarkerStyle {
    // Much smaller markers when zoomed in
    const baseSize = Math.max(0.015, Math.min(0.05, 0.1 / cameraDistance));
    
    return {
      size: baseSize,
      color: "#5f72ff",
      opacity: 0.9,
      // Only show labels when extremely close
      hasLabel: cameraDistance < 2.0,
      labelText: data.stations[0]?.name,
      pulseEffect: false,
      glowEffect: false
    };
  }

  shouldShow(data: MarkerData, zoomLevel: number): boolean {
    return zoomLevel > 3.5; // Show individual stations at closer zoom
  }

  handleInteraction(data: MarkerData, interactionType: 'click' | 'hover'): void {
    if (interactionType === 'click' && data.stations[0]) {
      // Dispatch station selection event
      window.dispatchEvent(new CustomEvent('stationSelected', { 
        detail: data.stations[0] 
      }));
    }
  }
}

export class ClusterMarkerStrategy extends BaseMarkerStrategy {
  calculateStyle(data: MarkerData, cameraDistance: number): MarkerStyle {
    const stationCount = data.stations.length;
    // Even more conservative base size
    const baseSize = Math.max(0.025, Math.min(0.1, 0.18 / cameraDistance));
    // Further reduce size multiplier to prevent huge markers
    const sizeMultiplier = Math.log(stationCount + 1) * 0.08;
    
    const densityColors = {
      'low': "#5f72ff",
      'medium': "#ffde59", 
      'high': "#ffa502",
      'very-high': "#ff4757"
    };

    // Special styling for country-level clusters
    const isCountryCluster = data.metadata.type === 'country';
    const color = isCountryCluster ? this.getCountryColor(data.metadata.country || 'Unknown') : densityColors[data.metadata.density || 'low'];

    return {
      size: baseSize + sizeMultiplier,
      color: color,
      opacity: isCountryCluster ? 0.8 : 0.9,
      // More restrictive label showing - show country names for country clusters
      hasLabel: cameraDistance < (isCountryCluster ? 4.0 : 2.5) && stationCount <= (isCountryCluster ? 200 : 5),
      labelText: isCountryCluster ? data.metadata.name : (data.metadata.city || `${stationCount}`),
      pulseEffect: false,
      glowEffect: true
    };
  }

  private getCountryColor(country: string): string {
    // Assign distinctive colors to major countries
    const countryColors: Record<string, string> = {
      'US': '#ff6b6b', 'United States': '#ff6b6b',
      'GB': '#4ecdc4', 'United Kingdom': '#4ecdc4',
      'DE': '#45b7d1', 'Germany': '#45b7d1',
      'FR': '#96ceb4', 'France': '#96ceb4',
      'JP': '#ffeaa7', 'Japan': '#ffeaa7',
      'AU': '#fd79a8', 'Australia': '#fd79a8',
      'BR': '#00b894', 'Brazil': '#00b894',
      'CA': '#e17055', 'Canada': '#e17055',
      'IN': '#a29bfe', 'India': '#a29bfe',
      'RU': '#636e72', 'Russia': '#636e72',
      'CN': '#fd63a3', 'China': '#fd63a3',
      'KR': '#fdcb6e', 'South Korea': '#fdcb6e',
      'ES': '#e84393', 'Spain': '#e84393',
      'IT': '#00cec9', 'Italy': '#00cec9',
    };
    
    return countryColors[country] || '#74b9ff'; // Default blue
  }

  shouldShow(data: MarkerData, zoomLevel: number): boolean {
    return zoomLevel >= 1 && zoomLevel <= 4; // Stop showing clusters before single stations appear
  }

  handleInteraction(data: MarkerData, interactionType: 'click' | 'hover'): void {
    if (interactionType === 'click') {
      if (data.stations.length === 1) {
        // Handle single station case - dispatch selection event directly
        window.dispatchEvent(new CustomEvent('stationSelected', { 
          detail: data.stations[0] 
        }));
      } else {
        // Show cluster expansion or select most popular
        const popularStation = data.stations.reduce((prev, current) => 
          (current.listeners > prev.listeners) ? current : prev
        );
        window.dispatchEvent(new CustomEvent('stationSelected', { 
          detail: popularStation 
        }));
      }
    }
  }
}

export class MarkerFactory {
  private strategies = new Map<string, BaseMarkerStrategy>();

  constructor() {
    this.strategies.set('single', new SingleStationMarkerStrategy());
    this.strategies.set('cluster', new ClusterMarkerStrategy());
  }

  createMarker(data: MarkerData, cameraDistance: number): {
    style: MarkerStyle;
    strategy: BaseMarkerStrategy;
  } {
    const strategy = this.strategies.get(data.type) || this.strategies.get('single')!;
    
    return {
      style: strategy.calculateStyle(data, cameraDistance),
      strategy
    };
  }

  shouldShowMarker(data: MarkerData, zoomLevel: number): boolean {
    const strategy = this.strategies.get(data.type) || this.strategies.get('single')!;
    return strategy.shouldShow(data, zoomLevel);
  }
}