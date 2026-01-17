/**
 * Stream URL Validator - Helps identify and test radio stream URLs
 */

import { RadioStation } from "../types";

export interface StreamValidationResult {
  url: string;
  isValid: boolean;
  error?: string;
  httpStatus?: number;
  contentType?: string;
  accessible: boolean;
}

export class StreamValidator {
  private static readonly TIMEOUT_MS = 5000;
  private static readonly VALID_CONTENT_TYPES = [
    'audio/mpeg',
    'audio/mp3',
    'audio/aac',
    'audio/ogg',
    'audio/x-mpegurl',
    'application/ogg',
    'application/vnd.apple.mpegurl',
  ];

  /**
   * Quick validation of URL format
   */
  static isValidUrlFormat(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return ['http:', 'https:'].includes(urlObj.protocol) && 
             !url.includes('localhost') && 
             !url.includes('127.0.0.1') &&
             urlObj.hostname.length > 0;
    } catch {
      return false;
    }
  }

  /**
   * Test if a stream URL is accessible (HEAD request)
   */
  static async testStreamUrl(url: string): Promise<StreamValidationResult> {
    const result: StreamValidationResult = {
      url,
      isValid: false,
      accessible: false,
    };

    if (!this.isValidUrlFormat(url)) {
      result.error = 'Invalid URL format';
      return result;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.TIMEOUT_MS);

      const response = await fetch(url, {
        method: 'HEAD',
        signal: controller.signal,
        mode: 'cors',
        cache: 'no-cache',
      });

      clearTimeout(timeoutId);

      result.httpStatus = response.status;
      result.contentType = response.headers.get('content-type') || undefined;
      result.accessible = response.ok;

      if (response.ok) {
        const contentType = result.contentType?.toLowerCase();
        result.isValid = !contentType || this.VALID_CONTENT_TYPES.some(type => 
          contentType.includes(type.toLowerCase())
        );
        
        if (!result.isValid && contentType) {
          result.error = `Unsupported content type: ${contentType}`;
        } else {
          result.isValid = true;
        }
      } else {
        result.error = `HTTP ${response.status}: ${response.statusText}`;
      }

    } catch (error: any) {
      if (error.name === 'AbortError') {
        result.error = 'Request timeout';
      } else if (error.name === 'TypeError' && error.message.includes('CORS')) {
        result.error = 'CORS policy blocked';
      } else {
        result.error = error.message || 'Network error';
      }
    }

    return result;
  }

  /**
   * Validate a station's stream URLs
   */
  static async validateStation(station: RadioStation): Promise<StreamValidationResult> {
    console.log(`🔍 Validating station: ${station.name}`);
    
    const result = await this.testStreamUrl(station.url);
    
    if (result.isValid) {
      console.log(`✅ ${station.name}: Valid stream`);
    } else {
      console.warn(`❌ ${station.name}: ${result.error || 'Invalid stream'}`);
    }
    
    return result;
  }

  /**
   * Batch validate multiple stations
   */
  static async validateStations(
    stations: RadioStation[], 
    maxConcurrent: number = 5
  ): Promise<Map<string, StreamValidationResult>> {
    const results = new Map<string, StreamValidationResult>();
    
    // Process stations in batches to avoid overwhelming the browser
    for (let i = 0; i < stations.length; i += maxConcurrent) {
      const batch = stations.slice(i, i + maxConcurrent);
      const batchPromises = batch.map(async (station) => {
        const result = await this.validateStation(station);
        return { station, result };
      });
      
      const batchResults = await Promise.all(batchPromises);
      batchResults.forEach(({ station, result }) => {
        results.set(station.id, result);
      });
      
      // Small delay between batches
      if (i + maxConcurrent < stations.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    return results;
  }

  /**
   * Get working fallback URLs for a failed station
   */
  static getGenericFallbackUrls(genre?: string): string[] {
    const genericFallbacks = [
      // SomaFM - Very reliable
      'https://ice1.somafm.com/groovesalad-256-mp3',
      'https://ice1.somafm.com/dronezone-256-mp3',
      'https://ice1.somafm.com/deepspaceone-128-mp3',
      
      // Radio Swiss - Reliable European streams
      'https://stream.srg-ssr.ch/m/rsc_de/mp3_128',
      'https://stream.srg-ssr.ch/m/rsp/mp3_128',
      
      // Other reliable streams
      'https://streams.radiomast.io/7e59e0b8-5d34-4bb6-8bb2-b0601db043a8',
      'https://stream.radiojar.com/4wqre78phm8uv',
    ];

    // Genre-specific fallbacks
    const genreMap: { [key: string]: string[] } = {
      'Ambient': [
        'https://ice1.somafm.com/groovesalad-256-mp3',
        'https://ice1.somafm.com/dronezone-256-mp3',
      ],
      'Electronic': [
        'https://ice1.somafm.com/beatblender-128-mp3',
        'https://ice1.somafm.com/digitalis-128-mp3',
      ],
      'Classical': [
        'https://stream.srg-ssr.ch/m/rsc_de/mp3_128',
      ],
      'Jazz': [
        'https://ice1.somafm.com/jazzgroove-256-mp3',
      ],
    };

    if (genre && genreMap[genre]) {
      return [...genreMap[genre], ...genericFallbacks];
    }

    return genericFallbacks;
  }
}

/**
 * Development helper to test current station data
 */
export const testCurrentStations = async (stations: RadioStation[]) => {
  console.log('🧪 Testing radio stations...');
  const results = await StreamValidator.validateStations(stations);
  
  const valid = Array.from(results.values()).filter(r => r.isValid).length;
  const total = results.size;
  
  console.log(`📊 Stream validation complete: ${valid}/${total} stations working`);
  
  // Log problematic stations
  const problematic = Array.from(results.entries())
    .filter(([, result]) => !result.isValid)
    .slice(0, 10); // Limit output
    
  if (problematic.length > 0) {
    console.group('❌ Problematic stations:');
    problematic.forEach(([stationId, result]) => {
      console.log(`${stationId}: ${result.error}`);
    });
    console.groupEnd();
  }
  
  return results;
};