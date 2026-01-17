import { IStationLoadingUseCase, IStationSelectionUseCase } from "../domain/usecases";
import { MarkerData } from "../strategies/MarkerStrategy";
import { StationRepository } from "../repositories/StationRepository";
import { GlobeEventBus, createGlobeEvent, GlobeEventType } from "../events/GlobeEventBus";
import { CommandInvoker, createCommand } from "../commands/GlobeCommands";
import { latLngToPosition } from "../utils/coordinates";


/**
 * Station Loading Use Case
 * Handles progressive loading and clustering of radio stations
 */
export class StationLoadingUseCase implements IStationLoadingUseCase {
  constructor(
    private stationRepository: StationRepository,
    private eventBus: GlobeEventBus
  ) {}

  async loadStationsForView(zoomLevel: number): Promise<MarkerData[]> {
    try {
      this.eventBus.notify(createGlobeEvent.zoomChanged(0, zoomLevel, zoomLevel * 2));

      // Load comprehensive global station data with country distribution
      const stations = await this.stationRepository.getGlobalStationsWithDistribution();
      console.log(`Loaded ${stations.length} stations from global distribution`);

      // If no stations or stations without coordinates, add enhanced test data
      if (stations.length === 0 || stations.every(s => !s.location?.lat && !s.location?.lng)) {
        console.log('Adding enhanced fallback test stations with real coordinates');
        const enhancedTestStations = this.getEnhancedTestStations();
        return this.clusterStationsByCountryAndCity(enhancedTestStations, zoomLevel);
      }

      // Group stations by country and city for intelligent clustering
      const clusteredMarkers = this.clusterStationsByCountryAndCity(stations, zoomLevel);
      
      const totalStations = clusteredMarkers.reduce((sum, marker) => sum + marker.stations.length, 0);
      console.log(`Created ${clusteredMarkers.length} marker clusters with ${totalStations} total stations`);
      
      this.eventBus.notify(createGlobeEvent.stationsLoaded(
        totalStations,
        'global',
        zoomLevel
      ));

      return clusteredMarkers;
    } catch (error) {
      console.error('Error in loadStationsForView:', error);
      
      // Enhanced fallback with comprehensive test data
      const testStations = this.getEnhancedTestStations();
      const clusteredMarkers = this.clusterStationsByCountryAndCity(testStations, zoomLevel);
      
      const totalStations = clusteredMarkers.reduce((sum, marker) => sum + marker.stations.length, 0);
      
      this.eventBus.notify(createGlobeEvent.stationsLoaded(
        totalStations,
        'global',
        zoomLevel
      ));
      
      this.eventBus.notify(createGlobeEvent.error(
        'Failed to load stations, using fallback',
        'StationLoadingUseCase',
        error instanceof Error ? error : new Error(String(error))
      ));
      return clusteredMarkers;
    }
  }

  /**
   * Enhanced clustering by country first, then by city for better organization
   */
  private clusterStationsByCountryAndCity(stations: any[], zoomLevel: number): MarkerData[] {
    const markers: MarkerData[] = [];
    
    // Group by country first, then by city/region within country
    const stationsByCountry = new Map<string, any[]>();
    stations.forEach(station => {
      const country = station.location?.country || station.country || 'Unknown';
      if (!stationsByCountry.has(country)) {
        stationsByCountry.set(country, []);
      }
      stationsByCountry.get(country)!.push(station);
    });

    // Process each country based on zoom level with more conservative clustering
    stationsByCountry.forEach((countryStations, country) => {
      if (zoomLevel <= 2) {
        // Country-level clustering for far zoom - always cluster
        const countryCenter = this.getCountryCenter(country);
        if (countryCenter && countryStations.length > 0) {
          markers.push({
            id: `country-${country}`,
            type: 'cluster',
            position: countryCenter,
            stations: countryStations,
            metadata: {
              name: `${country} (${countryStations.length} stations)`,
              country: country,
              stationCount: countryStations.length,
              density: this.getDensityLevel(countryStations.length),
              type: 'country' as const
            }
          });
        }
      } else if (zoomLevel <= 4) {
        // City-level clustering for medium zoom - be more conservative
        if (countryStations.length <= 3) {
          // If very few stations, still cluster at country level
          const countryCenter = this.getCountryCenter(country);
          if (countryCenter) {
            markers.push({
              id: `country-${country}`,
              type: 'cluster',
              position: countryCenter,
              stations: countryStations,
              metadata: {
                name: `${country} (${countryStations.length} stations)`,
                country: country,
                stationCount: countryStations.length,
                density: this.getDensityLevel(countryStations.length),
                type: 'country' as const
              }
            });
          }
        } else {
          // City-level clustering for countries with many stations
          // Group by major cities and towns within the country
          const cityClusters = this.clusterStationsByCity(countryStations, country, zoomLevel);
          markers.push(...cityClusters);
        }
      } else {
        // Individual stations for close zoom - but limit to prevent overcrowding
        const maxIndividualStations = 15; // Limit individual stations per country
        const stationsToShow = countryStations.slice(0, maxIndividualStations);
        
        if (countryStations.length > maxIndividualStations) {
          // If too many stations, show a few individuals plus a cluster for the rest
          stationsToShow.forEach(station => {
            if (station.location?.lat && station.location?.lng) {
              markers.push({
                id: `station-${station.id}`,
                type: 'single',
                position: [station.location.lng, station.location.lat, 0],
                stations: [station],
                metadata: {
                  name: station.name,
                  country: station.location.country,
                  city: station.location.city,
                  stationCount: 1,
                  density: 'low' as const,
                  type: 'cluster' as const
                }
              });
            }
          });
          
          // Add a cluster for remaining stations
          const remaining = countryStations.slice(maxIndividualStations);
          const countryCenter = this.getCountryCenter(country);
          if (countryCenter && remaining.length > 0) {
            markers.push({
              id: `country-overflow-${country}`,
              type: 'cluster',
              position: countryCenter,
              stations: remaining,
              metadata: {
                name: `${country} (+${remaining.length} more)`,
                country: country,
                stationCount: remaining.length,
                density: this.getDensityLevel(remaining.length),
                type: 'country' as const
              }
            });
          }
        } else {
          // Show all individual stations if manageable count
          stationsToShow.forEach(station => {
            if (station.location?.lat && station.location?.lng) {
              markers.push({
                id: `station-${station.id}`,
                type: 'single',
                position: [station.location.lng, station.location.lat, 0],
                stations: [station],
                metadata: {
                  name: station.name,
                  country: station.location.country,
                  city: station.location.city,
                  stationCount: 1,
                  density: 'low' as const,
                  type: 'cluster' as const
                }
              });
            }
          });
        }
      }
    });

    return markers;
  }

  /**
   * Get approximate center coordinates for major countries
   */
  private getCountryCenter(country: string): [number, number, number] | null {
    const countryCenters: Record<string, [number, number, number]> = {
      'US': [-98.5, 39.8, 0], 'United States': [-98.5, 39.8, 0],
      'GB': [-3.4, 55.4, 0], 'United Kingdom': [-3.4, 55.4, 0],
      'DE': [10.5, 51.2, 0], 'Germany': [10.5, 51.2, 0],
      'FR': [2.2, 46.2, 0], 'France': [2.2, 46.2, 0],
      'ES': [-3.7, 40.5, 0], 'Spain': [-3.7, 40.5, 0],
      'IT': [12.6, 41.9, 0], 'Italy': [12.6, 41.9, 0],
      'NL': [5.3, 52.1, 0], 'Netherlands': [5.3, 52.1, 0],
      'SE': [18.6, 60.1, 0], 'Sweden': [18.6, 60.1, 0],
      'NO': [10.7, 59.9, 0], 'Norway': [10.7, 59.9, 0],
      'DK': [9.5, 56.3, 0], 'Denmark': [9.5, 56.3, 0],
      'JP': [138.3, 36.2, 0], 'Japan': [138.3, 36.2, 0],
      'KR': [127.8, 35.9, 0], 'South Korea': [127.8, 35.9, 0],
      'CN': [104.2, 35.9, 0], 'China': [104.2, 35.9, 0],
      'IN': [78.9, 20.6, 0], 'India': [78.9, 20.6, 0],
      'AU': [133.8, -25.3, 0], 'Australia': [133.8, -25.3, 0],
      'NZ': [174.9, -40.9, 0], 'New Zealand': [174.9, -40.9, 0],
      'BR': [-51.9, -14.2, 0], 'Brazil': [-51.9, -14.2, 0],
      'MX': [-102.6, 23.6, 0], 'Mexico': [-102.6, 23.6, 0],
      'CA': [-106.3, 56.1, 0], 'Canada': [-106.3, 56.1, 0],
      'RU': [105.3, 61.5, 0], 'Russia': [105.3, 61.5, 0],
      'ZA': [22.9, -30.6, 0], 'South Africa': [22.9, -30.6, 0],
      'AR': [-63.6, -38.4, 0], 'Argentina': [-63.6, -38.4, 0],
      'CL': [-71.5, -35.7, 0], 'Chile': [-71.5, -35.7, 0],
      'EG': [30.8, 26.8, 0], 'Egypt': [30.8, 26.8, 0],
      'NG': [8.7, 9.1, 0], 'Nigeria': [8.7, 9.1, 0],
      'TR': [35.2, 39.0, 0], 'Turkey': [35.2, 39.0, 0],
    };

    return countryCenters[country] || null;
  }

  /**
   * Calculate density level based on station count
   */
  private getDensityLevel(stationCount: number): 'low' | 'medium' | 'high' | 'very-high' {
    if (stationCount > 20) return 'very-high';
    if (stationCount > 10) return 'high';
    if (stationCount > 5) return 'medium';
    return 'low';
  }

  /**
   * Get coordinates for major cities worldwide
   */
  private getCityCoordinates(cityName: string, country: string): { lat: number; lng: number } | null {
    const cityCoords: Record<string, Record<string, { lat: number; lng: number }>> = {
      'Zambia': {
        'Lusaka': { lat: -15.3875, lng: 28.3228 },
        'Ndola': { lat: -12.9687, lng: 28.6366 },
        'Kitwe': { lat: -12.8024, lng: 28.2132 },
        'Kabwe': { lat: -14.4469, lng: 28.4464 },
        'Chingola': { lat: -12.5289, lng: 27.8811 },
        'Mufulira': { lat: -12.5443, lng: 28.2405 },
        'Livingstone': { lat: -17.8419, lng: 25.8544 }
      },
      'Nigeria': {
        'Lagos': { lat: 6.5244, lng: 3.3792 },
        'Abuja': { lat: 9.0765, lng: 7.3986 },
        'Kano': { lat: 12.0022, lng: 8.5920 },
        'Ibadan': { lat: 7.3775, lng: 3.9470 },
        'Port Harcourt': { lat: 4.8156, lng: 7.0498 }
      },
      'Kenya': {
        'Nairobi': { lat: -1.2921, lng: 36.8219 },
        'Mombasa': { lat: -4.0435, lng: 39.6682 },
        'Kisumu': { lat: -0.0917, lng: 34.7680 },
        'Eldoret': { lat: 0.5143, lng: 35.2698 }
      },
      'South Africa': {
        'Johannesburg': { lat: -26.2041, lng: 28.0473 },
        'Cape Town': { lat: -33.9249, lng: 18.4241 },
        'Durban': { lat: -29.8587, lng: 31.0218 },
        'Pretoria': { lat: -25.7479, lng: 28.2293 }
      },
      'United States': {
        'New York': { lat: 40.7128, lng: -74.0060 },
        'Los Angeles': { lat: 34.0522, lng: -118.2437 },
        'Chicago': { lat: 41.8781, lng: -87.6298 },
        'Houston': { lat: 29.7604, lng: -95.3698 }
      },
      'United Kingdom': {
        'London': { lat: 51.5074, lng: -0.1278 },
        'Manchester': { lat: 53.4808, lng: -2.2426 },
        'Birmingham': { lat: 52.4862, lng: -1.8904 },
        'Liverpool': { lat: 53.4084, lng: -2.9916 }
      }
    };

    return cityCoords[country]?.[cityName] || null;
  }

  /**
   * Get approximate country boundaries for coordinate generation
   */
  private getCountryBounds(country: string): { minLat: number; maxLat: number; minLng: number; maxLng: number } | null {
    const countryBounds: Record<string, { minLat: number; maxLat: number; minLng: number; maxLng: number }> = {
      'Zambia': { minLat: -18.0, maxLat: -8.2, minLng: 21.9, maxLng: 33.7 },
      'Nigeria': { minLat: 4.3, maxLat: 13.9, minLng: 2.7, maxLng: 14.7 },
      'Kenya': { minLat: -4.7, maxLat: 5.5, minLng: 33.9, maxLng: 41.9 },
      'South Africa': { minLat: -34.8, maxLat: -22.1, minLng: 16.3, maxLng: 32.9 },
      'United States': { minLat: 25.0, maxLat: 49.0, minLng: -125.0, maxLng: -66.0 },
      'United Kingdom': { minLat: 49.9, maxLat: 58.7, minLng: -8.6, maxLng: 1.8 },
      'Germany': { minLat: 47.3, maxLat: 55.1, minLng: 5.9, maxLng: 15.0 },
      'France': { minLat: 41.3, maxLat: 51.1, minLng: -5.1, maxLng: 9.6 },
      'Brazil': { minLat: -33.7, maxLat: 5.3, minLng: -73.9, maxLng: -28.8 },
      'Australia': { minLat: -43.6, maxLat: -10.7, minLng: 113.3, maxLng: 153.6 }
    };

    return countryBounds[country] || null;
  }

  /**
   * Enhanced test stations with global coverage
   */
  private getEnhancedTestStations(): any[] {
    return [
      // North America
      { id: 'test-us-1', name: 'KQED FM', url: 'http://kqed.org/stream', country: 'US', city: 'San Francisco', genre: 'News', location: { lat: 37.7749, lng: -122.4194 } },
      { id: 'test-us-2', name: 'WNYC FM', url: 'http://wnyc.org/stream', country: 'US', city: 'New York', genre: 'News', location: { lat: 40.7589, lng: -73.9851 } },
      { id: 'test-us-3', name: 'WXPN', url: 'http://wxpn.org/stream', country: 'US', city: 'Philadelphia', genre: 'Music', location: { lat: 39.9526, lng: -75.1652 } },
      { id: 'test-ca-1', name: 'CBC Radio One', url: 'http://cbc.ca/stream', country: 'CA', city: 'Toronto', genre: 'News', location: { lat: 43.6532, lng: -79.3832 } },
      { id: 'test-ca-2', name: 'Radio-Canada', url: 'http://radio-canada.ca/stream', country: 'CA', city: 'Montreal', genre: 'News', location: { lat: 45.5017, lng: -73.5673 } },
      
      // Europe
      { id: 'test-gb-1', name: 'BBC Radio 1', url: 'http://bbc.co.uk/stream', country: 'GB', city: 'London', genre: 'Music', location: { lat: 51.5074, lng: -0.1278 } },
      { id: 'test-gb-2', name: 'BBC Radio 4', url: 'http://bbc.co.uk/radio4', country: 'GB', city: 'London', genre: 'News', location: { lat: 51.5074, lng: -0.1278 } },
      { id: 'test-de-1', name: 'Deutschlandfunk', url: 'http://dradio.de/stream', country: 'DE', city: 'Berlin', genre: 'News', location: { lat: 52.5200, lng: 13.4050 } },
      { id: 'test-de-2', name: 'Bayern 3', url: 'http://br.de/stream', country: 'DE', city: 'Munich', genre: 'Music', location: { lat: 48.1351, lng: 11.5820 } },
      { id: 'test-fr-1', name: 'France Inter', url: 'http://radiofrance.fr/stream', country: 'FR', city: 'Paris', genre: 'News', location: { lat: 48.8566, lng: 2.3522 } },
      { id: 'test-es-1', name: 'RNE Radio 1', url: 'http://rtve.es/stream', country: 'ES', city: 'Madrid', genre: 'News', location: { lat: 40.4168, lng: -3.7038 } },
      { id: 'test-it-1', name: 'RAI Radio 1', url: 'http://rai.it/stream', country: 'IT', city: 'Rome', genre: 'News', location: { lat: 41.9028, lng: 12.4964 } },
      { id: 'test-nl-1', name: 'NPO Radio 1', url: 'http://npo.nl/stream', country: 'NL', city: 'Amsterdam', genre: 'News', location: { lat: 52.3676, lng: 4.9041 } },
      { id: 'test-se-1', name: 'SVT P1', url: 'http://svt.se/stream', country: 'SE', city: 'Stockholm', genre: 'News', location: { lat: 59.3293, lng: 18.0686 } },
      { id: 'test-no-1', name: 'NRK P1', url: 'http://nrk.no/stream', country: 'NO', city: 'Oslo', genre: 'News', location: { lat: 59.9139, lng: 10.7522 } },
      
      // Asia-Pacific
      { id: 'test-jp-1', name: 'NHK Radio', url: 'http://nhk.or.jp/stream', country: 'JP', city: 'Tokyo', genre: 'News', location: { lat: 35.6762, lng: 139.6503 } },
      { id: 'test-jp-2', name: 'J-Wave', url: 'http://j-wave.co.jp/stream', country: 'JP', city: 'Tokyo', genre: 'Music', location: { lat: 35.6762, lng: 139.6503 } },
      { id: 'test-kr-1', name: 'KBS Radio', url: 'http://kbs.co.kr/stream', country: 'KR', city: 'Seoul', genre: 'News', location: { lat: 37.5665, lng: 126.9780 } },
      { id: 'test-au-1', name: 'ABC Radio', url: 'http://abc.net.au/stream', country: 'AU', city: 'Sydney', genre: 'News', location: { lat: -33.8688, lng: 151.2093 } },
      { id: 'test-au-2', name: 'Triple J', url: 'http://triplej.net.au/stream', country: 'AU', city: 'Sydney', genre: 'Music', location: { lat: -33.8688, lng: 151.2093 } },
      { id: 'test-nz-1', name: 'RNZ National', url: 'http://rnz.co.nz/stream', country: 'NZ', city: 'Wellington', genre: 'News', location: { lat: -41.2865, lng: 174.7762 } },
      { id: 'test-in-1', name: 'All India Radio', url: 'http://allindiaradio.gov.in/stream', country: 'IN', city: 'New Delhi', genre: 'News', location: { lat: 28.7041, lng: 77.1025 } },
      { id: 'test-in-2', name: 'Radio City', url: 'http://radiocity.in/stream', country: 'IN', city: 'Mumbai', genre: 'Music', location: { lat: 19.0760, lng: 72.8777 } },
      
      // Latin America
      { id: 'test-br-1', name: 'CBN Radio', url: 'http://cbn.globoradio.globo.com/stream', country: 'BR', city: 'São Paulo', genre: 'News', location: { lat: -23.5558, lng: -46.6396 } },
      { id: 'test-br-2', name: 'Rádio Nacional', url: 'http://radios.ebc.com.br/stream', country: 'BR', city: 'Rio de Janeiro', genre: 'Music', location: { lat: -22.9068, lng: -43.1729 } },
      { id: 'test-mx-1', name: 'Radio Universidad', url: 'http://radio.unam.mx/stream', country: 'MX', city: 'Mexico City', genre: 'Culture', location: { lat: 19.4326, lng: -99.1332 } },
      { id: 'test-ar-1', name: 'Radio Nacional', url: 'http://radionacional.com.ar/stream', country: 'AR', city: 'Buenos Aires', genre: 'News', location: { lat: -34.6118, lng: -58.3960 } },
      { id: 'test-cl-1', name: 'Radio Cooperativa', url: 'http://cooperativa.cl/stream', country: 'CL', city: 'Santiago', genre: 'News', location: { lat: -33.4489, lng: -70.6693 } },
      
      // Africa & Middle East
      { id: 'test-za-1', name: 'SAfm', url: 'http://sabc.co.za/stream', country: 'ZA', city: 'Johannesburg', genre: 'News', location: { lat: -26.2041, lng: 28.0473 } },
      { id: 'test-eg-1', name: 'Radio Cairo', url: 'http://ertu.org/stream', country: 'EG', city: 'Cairo', genre: 'News', location: { lat: 30.0444, lng: 31.2357 } },
      { id: 'test-ng-1', name: 'Radio Nigeria', url: 'http://frcn.gov.ng/stream', country: 'NG', city: 'Lagos', genre: 'News', location: { lat: 6.5244, lng: 3.3792 } },
      { id: 'test-il-1', name: 'Kol Israel', url: 'http://kan.org.il/stream', country: 'IL', city: 'Tel Aviv', genre: 'News', location: { lat: 32.0853, lng: 34.7818 } },
      
      // Russia & Eastern Europe
      { id: 'test-ru-1', name: 'Radio Russia', url: 'http://radiorus.ru/stream', country: 'RU', city: 'Moscow', genre: 'News', location: { lat: 55.7558, lng: 37.6173 } },
      { id: 'test-ru-2', name: 'Echo Moscow', url: 'http://echo.msk.ru/stream', country: 'RU', city: 'Moscow', genre: 'Talk', location: { lat: 55.7558, lng: 37.6173 } },
      { id: 'test-tr-1', name: 'TRT Radyo 1', url: 'http://trt.net.tr/stream', country: 'TR', city: 'Istanbul', genre: 'News', location: { lat: 41.0082, lng: 28.9784 } },
    ];
  }

  private clusterStationsByCity(stations: any[], country: string, zoomLevel: number): MarkerData[] {
    const cityGroups = new Map<string, any[]>();
    
    console.log(`Clustering ${stations.length} stations for ${country}`);
    
    // Group stations by city, creating major urban centers as cluster points
    stations.forEach((station, index) => {
      const city = station.location?.city || 'Unknown City';
      const cityKey = `${city}-${country}`;
      
      if (!cityGroups.has(cityKey)) {
        cityGroups.set(cityKey, []);
      }
      cityGroups.get(cityKey)!.push(station);
      
      // Log first few stations to debug location data
      if (index < 3) {
        console.log(`Station ${index} in ${country}:`, {
          name: station.name,
          city,
          lat: station.location?.lat,
          lng: station.location?.lng
        });
      }
    });

    console.log(`Created ${cityGroups.size} city clusters for ${country}`);

    // Convert city groups to marker data representing urban centers
    return Array.from(cityGroups.entries()).map(([cityKey, groupStations]) => {
      const representative = groupStations[0];
      const cityName = cityKey.split('-')[0];
      let lat = representative.location?.lat || 0;
      let lng = representative.location?.lng || 0;
      
      // If no coordinates, use enhanced city coordinate lookup
      if (lat === 0 && lng === 0) {
        const cityCoords = this.getCityCoordinates(cityName, country);
        if (cityCoords) {
          lat = cityCoords.lat;
          lng = cityCoords.lng;
        } else {
          // Fallback: generate realistic coordinates within country bounds
          const countryBounds = this.getCountryBounds(country);
          if (countryBounds) {
            const hash = this.hashString(cityKey);
            lat = countryBounds.minLat + ((hash % 100) / 100) * (countryBounds.maxLat - countryBounds.minLat);
            lng = countryBounds.minLng + (((hash * 7) % 100) / 100) * (countryBounds.maxLng - countryBounds.minLng);
          }
        }
      }
      
      const position = latLngToPosition(lat, lng, 2.02) as [number, number, number];
      
      return {
        id: cityKey,
        position,
        stations: groupStations,
        type: 'city' as const,
        metadata: {
          name: `${cityName} (${groupStations.length} stations)`,
          city: cityName,
          country: country,
          stationCount: groupStations.length,
          density: this.getDensityLevel(groupStations.length),
          type: 'city' as const
        }
      };
    }).filter(marker => 
      // Filter out markers with invalid coordinates
      marker.position[0] !== 0 || marker.position[1] !== 0
    );
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }
}

/**
 * Station Selection Use Case  
 * Handles station selection with command pattern and events
 */
export class StationSelectionUseCase implements IStationSelectionUseCase {
  private currentSelection: { stationId: string; station: any } | null = null;

  constructor(
    private eventBus: GlobeEventBus,
    private commandInvoker: CommandInvoker
  ) {}

  async selectStation(stationId: string, station: any): Promise<void> {
    const previousSelection = this.currentSelection;
    
    // Create selection command
    const command = createCommand.selectStation(
      stationId,
      station,
      (id, st) => this.executeSelection(id, st),
      () => this.clearSelection(),
      previousSelection || undefined
    );

    // Execute through command invoker for undo/redo support
    await this.commandInvoker.execute(command);
  }

  async clearSelection(): Promise<void> {
    if (!this.currentSelection) return;

    const previousSelection = this.currentSelection;
    this.currentSelection = null;

    // Emit selection cleared event
    this.eventBus.notify({
      type: GlobeEventType.STATION_SELECTED,
      timestamp: Date.now(),
      data: { stationId: null, station: null, previousSelection }
    });
  }

  getCurrentSelection(): { stationId: string; station: any } | null {
    return this.currentSelection;
  }

  async hoverStation(stationId: string | null): Promise<void> {
    this.eventBus.notify({
      type: GlobeEventType.STATION_HOVERED,
      timestamp: Date.now(),
      data: { stationId }
    });
  }

  private executeSelection(stationId: string, station: any): void {
    this.currentSelection = { stationId, station };

    // Emit selection event
    this.eventBus.notify(createGlobeEvent.stationSelected(stationId, station));
  }
}