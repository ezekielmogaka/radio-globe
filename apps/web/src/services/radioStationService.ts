// import { globalRadioStations } from '../data/globalRadioStations'
import { RadioStation } from "../types/index";
import { radioDiscoveryService } from "./radioDiscoveryService";

export class RadioStationService {
  private stations: RadioStation[] = [];
  private proxyUrl = "/api/proxy/audio";
  private discoveredStations: RadioStation[] = [];
  private isDiscoveryEnabled = true;
  private allCachedStations: RadioStation[] = [];
  private cacheLoaded = false;

  /**
   * Load all stations from cache (once per session)
   */
  private async ensureCacheLoaded(): Promise<void> {
    if (this.cacheLoaded) return;
    
    try {
      this.allCachedStations = await radioDiscoveryService.getAllStations();
      this.cacheLoaded = true;
      console.log(`Loaded ${this.allCachedStations.length} stations into search cache`);
    } catch (error) {
      console.warn('Failed to load station cache:', error);
      this.allCachedStations = [];
    }
  }

  /**
   * Get all radio stations (curated + discovered)
   */
  getAllStations(): RadioStation[] {
    return [...this.stations, ...this.discoveredStations];
  }

  /**
   * Get curated stations only
   */
  getCuratedStations(): RadioStation[] {
    return this.stations;
  }

  /**
   * Enhanced search that searches ALL cached stations (fast, comprehensive)
   */
  async searchStations(
    query: string,
    includeOnline: boolean = true,
  ): Promise<RadioStation[]> {
    await this.ensureCacheLoaded();
    
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return [];

    // Search across ALL cached stations (fast in-memory search)
    const results = this.allCachedStations.filter(
      (station) =>
        station.name.toLowerCase().includes(searchTerm) ||
        station.location?.country?.toLowerCase().includes(searchTerm) ||
        station.location?.city?.toLowerCase().includes(searchTerm) ||
        station.genre?.toLowerCase().includes(searchTerm) ||
        station.language?.toLowerCase().includes(searchTerm) ||
        (station.description && station.description.toLowerCase().includes(searchTerm))
    );

    // Sort by relevance: exact matches first, then by listeners/popularity
    const sorted = results.sort((a, b) => {
      const aExact = a.name.toLowerCase() === searchTerm;
      const bExact = b.name.toLowerCase() === searchTerm;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return (b.listeners || 0) - (a.listeners || 0);
    });

    return sorted.slice(0, 100); // Return top 100 matches
  }

  /**
   * Search only local curated stations
   */
  private searchLocalStations(query: string): RadioStation[] {
    const searchTerm = query.toLowerCase();

    return this.stations.filter(
      (station) =>
        station.name.toLowerCase().includes(searchTerm) ||
        station.location.city.toLowerCase().includes(searchTerm) ||
        station.location.country.toLowerCase().includes(searchTerm) ||
        station.genre.toLowerCase().includes(searchTerm) ||
        station.language.toLowerCase().includes(searchTerm) ||
        (station.description &&
          station.description.toLowerCase().includes(searchTerm)),
    );
  }

  /**
   * Enhanced country search that works with comprehensive cached data
   */
  async getStationsByCountry(
    country: string,
    includeOnline: boolean = true,
  ): Promise<RadioStation[]> {
    await this.ensureCacheLoaded();
    
    const countryLower = country.trim().toLowerCase();
    const normalizedCode = this.getCountryCode(countryLower) || (countryLower.length > 0 && countryLower.length <= 3 ? countryLower.toUpperCase() : null);
    const normalizedCodeLower = normalizedCode?.toLowerCase() || null;

    const countryStations = this.allCachedStations.filter((station) => {
      const name = station.location?.country?.toLowerCase() || "";
      const code = station.location?.countryCode?.toLowerCase() || "";

      if (normalizedCodeLower && code === normalizedCodeLower) {
        return true;
      }

      if (name === countryLower) {
        return true;
      }

      // Support partial matches while avoiding overly broad contains() matches
      return !normalizedCodeLower && name.startsWith(countryLower);
    });
    
    // Sort by popularity (listeners/clicks)
    const sorted = countryStations.sort((a, b) => (b.listeners || 0) - (a.listeners || 0));
    
    console.log(`Found ${sorted.length} stations for country: ${country}`);
    return sorted.slice(0, 100); // Return top 100
  }

  /**
   * Get popular/top stations with online integration
   */
  async getPopularStations(
    limit: number = 20,
    includeOnline: boolean = true,
  ): Promise<RadioStation[]> {
    const localPopular = [...this.stations]
      .sort((a, b) => b.listeners - a.listeners)
      .slice(0, limit);

    if (!includeOnline || !this.isDiscoveryEnabled) {
      return localPopular;
    }

    try {
      const onlineTop = await radioDiscoveryService.getTopStations(limit);
      return this.mergeStationResults(localPopular, onlineTop).slice(0, limit);
    } catch (error) {
      console.warn("Failed to fetch online top stations:", error);
      return localPopular;
    }
  }

  /**
   * Get stations by genre from cached data (fast search)
   */
  async getStationsByGenre(
    genre: string,
    includeOnline: boolean = true,
  ): Promise<RadioStation[]> {
    await this.ensureCacheLoaded();
    
    const genreLower = genre.toLowerCase();
    const genreStations = this.allCachedStations.filter((station) =>
      station.genre?.toLowerCase().includes(genreLower) ||
      station.tags?.some(tag => tag.toLowerCase().includes(genreLower))
    );
    
    // Sort by popularity
    const sorted = genreStations.sort((a, b) => (b.listeners || 0) - (a.listeners || 0));
    
    console.log(`Found ${sorted.length} stations for genre: ${genre}`);
    return sorted.slice(0, 100);
  }

  /**
   * Get all unique cities from cached stations
   */
  async getAvailableCities(): Promise<string[]> {
    await this.ensureCacheLoaded();
    
    const cities = Array.from(
      new Set(
        this.allCachedStations
          .map((station) => station.location?.city)
          .filter(city => city && city.trim() !== '')
      )
    );
    
    return cities.sort();
  }

  /**
   * Get stations by city from cached data (fast search)
   */
  async getStationsByCity(
    city: string,
    includeOnline: boolean = true,
  ): Promise<RadioStation[]> {
    await this.ensureCacheLoaded();
    
    const cityLower = city.toLowerCase();
    const cityStations = this.allCachedStations.filter(
      (station) =>
        station.location?.city?.toLowerCase().includes(cityLower)
    );
    
    // Sort by popularity
    const sorted = cityStations.sort((a, b) => (b.listeners || 0) - (a.listeners || 0));
    
    console.log(`Found ${sorted.length} stations for city: ${city}`);
    return sorted.slice(0, 100);
  }

  /**
   * Private helper methods
   */
  private mergeStationResults(
    local: RadioStation[],
    online: RadioStation[],
  ): RadioStation[] {
    const merged = [...local];
    const existingUrls = new Set(local.map((s) => s.url));

    for (const station of online) {
      if (!existingUrls.has(station.url)) {
        merged.push(station);
      }
    }

    return merged;
  }

  private getCountryCode(countryName: string): string | null {
    // Comprehensive country code mapping for global radio stations
    const countryMap: Record<string, string> = {
      // North America
      "united states": "US", "usa": "US", "us": "US",
      "canada": "CA", "ca": "CA",
      "mexico": "MX", "mx": "MX",
      
      // Europe
      "united kingdom": "GB", "uk": "GB", "gb": "GB", "britain": "GB",
      "germany": "DE", "de": "DE",
      "france": "FR", "fr": "FR",
      "italy": "IT", "it": "IT",
      "spain": "ES", "es": "ES",
      "netherlands": "NL", "nl": "NL", "holland": "NL",
      "sweden": "SE", "se": "SE",
      "norway": "NO", "no": "NO",
      "denmark": "DK", "dk": "DK",
      "finland": "FI", "fi": "FI",
      "switzerland": "CH", "ch": "CH",
      "austria": "AT", "at": "AT",
      "belgium": "BE", "be": "BE",
      "poland": "PL", "pl": "PL",
      "russia": "RU", "ru": "RU",
      "turkey": "TR", "tr": "TR",
      
      // Asia-Pacific
      "japan": "JP", "jp": "JP",
      "south korea": "KR", "korea": "KR", "kr": "KR",
      "china": "CN", "cn": "CN",
      "india": "IN", "in": "IN",
      "australia": "AU", "au": "AU",
      "new zealand": "NZ", "nz": "NZ",
      "singapore": "SG", "sg": "SG",
      "thailand": "TH", "th": "TH",
      "malaysia": "MY", "my": "MY",
      "indonesia": "ID", "id": "ID",
      "philippines": "PH", "ph": "PH",
      
      // Latin America
      "brazil": "BR", "br": "BR",
      "argentina": "AR", "ar": "AR",
      "chile": "CL", "cl": "CL",
      "colombia": "CO", "co": "CO",
      "peru": "PE", "pe": "PE",
      "venezuela": "VE", "ve": "VE",
      "uruguay": "UY", "uy": "UY",
      
      // Africa
      "south africa": "ZA", "za": "ZA",
      "nigeria": "NG", "ng": "NG",
      "egypt": "EG", "eg": "EG",
      "kenya": "KE", "ke": "KE",
      "ethiopia": "ET", "et": "ET",
      "ghana": "GH", "gh": "GH",
      "tunisia": "TN", "tn": "TN",
      "morocco": "MA", "ma": "MA",
      "zambia": "ZM", "zm": "ZM",
      "zimbabwe": "ZW", "zw": "ZW",
      "tanzania": "TZ", "tz": "TZ",
      "uganda": "UG", "ug": "UG",
      "mozambique": "MZ", "mz": "MZ",
      "botswana": "BW", "bw": "BW",
      "namibia": "NA", "na": "NA",
      "angola": "AO", "ao": "AO",
      "mali": "ML", "ml": "ML",
      "senegal": "SN", "sn": "SN",
      "burkina faso": "BF", "bf": "BF",
      "ivory coast": "CI", "ci": "CI", "cote divoire": "CI",
      "cameroon": "CM", "cm": "CM",
      "democratic republic of congo": "CD", "drc": "CD", "congo": "CG",
      "rwanda": "RW", "rw": "RW",
      "madagascar": "MG", "mg": "MG",
      "algeria": "DZ", "dz": "DZ",
      "libya": "LY", "ly": "LY",
      "sudan": "SD", "sd": "SD",
      "chad": "TD", "td": "TD",
      "niger": "NE", "ne": "NE",
      
      // Middle East
      "israel": "IL", "il": "IL",
      "saudi arabia": "SA", "sa": "SA",
      "united arab emirates": "AE", "uae": "AE", "ae": "AE",
      "qatar": "QA", "qa": "QA",
      "kuwait": "KW", "kw": "KW",
      "iran": "IR", "ir": "IR"
    };

    return countryMap[countryName.toLowerCase()] || null;
  }

  /**
   * Get stations by continent
   */
  getStationsByContinent(continent: string): RadioStation[] {
    const continentCountries: Record<string, string[]> = {
      "north-america": ["United States", "Canada", "Mexico"],
      "south-america": ["Brazil", "Argentina", "Chile", "Colombia", "Peru"],
      europe: [
        "United Kingdom",
        "France",
        "Germany",
        "Italy",
        "Spain",
        "Netherlands",
        "Switzerland",
      ],
      asia: ["Japan", "South Korea", "China", "India", "Singapore", "Thailand"],
      africa: ["South Africa", "Nigeria", "Kenya", "Egypt", "Zambia", "Zimbabwe", "Tanzania", "Uganda", "Ghana", "Ethiopia", "Morocco", "Algeria", "Tunisia", "Rwanda", "Botswana", "Namibia", "Angola", "Mozambique", "Mali", "Senegal", "Cameroon", "Madagascar"],
      oceania: ["Australia", "New Zealand"],
    };

    const countries = continentCountries[continent.toLowerCase()] || [];
    return this.stations.filter((station) =>
      countries.includes(station.location.country),
    );
  }

  /**
   * Get unique countries from cached stations
   */
  async getAvailableCountries(): Promise<string[]> {
    await this.ensureCacheLoaded();
    
    const countries = Array.from(
      new Set(
        this.allCachedStations
          .map((station) => station.location?.country)
          .filter(country => country && country !== 'Unknown')
      )
    );
    
    return countries.sort((a, b) => a.localeCompare(b));
  }

  /**
   * Get unique countries
   */
  getCountries(): string[] {
    const countries = Array.from(
      new Set(this.stations.map((station) => station.location.country)),
    );
    return countries.sort();
  }

  /**
   * Get unique cities for a country
   */
  getCitiesInCountry(country: string): string[] {
    const cities = this.stations
      .filter((station) => station.location.country === country)
      .map((station) => station.location.city);

    return Array.from(new Set(cities)).sort();
  }

  /**
   * Get unique genres
   */
  getGenres(): string[] {
    const genres = Array.from(
      new Set(this.stations.map((station) => station.genre)),
    );
    return genres.sort();
  }

  /**
   * Get unique languages
   */
  getLanguages(): string[] {
    const languages = Array.from(
      new Set(this.stations.map((station) => station.language)),
    );
    return languages.sort();
  }

  /**
   * Get proxied stream URL to avoid CORS issues
   */
  getProxiedStreamUrl(station: RadioStation): string {
    // For known CORS-free streams, return direct URL
    const corsFreeHosts = [
      "ice1.somafm.com",
      "stream.srg-ssr.ch",
      "streams.kqed.org",
    ];

    try {
      const url = new URL(station.url);
      if (corsFreeHosts.some((host) => url.hostname.includes(host))) {
        return station.url;
      }
    } catch {
      // Invalid URL, use proxy
    }

    // Use proxy for potentially CORS-blocked streams
    return `${this.proxyUrl}?url=${encodeURIComponent(station.url)}`;
  }

  /**
   * Get station by ID
   */
  getStationById(id: string): RadioStation | undefined {
    return this.stations.find((station) => station.id === id);
  }

  /**
   * Get random stations
   */
  getRandomStations(count: number = 5): RadioStation[] {
    const shuffled = [...this.stations].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  /**
   * Calculate distance between two points (Haversine formula)
   */
  private calculateDistance(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
  ): number {
    const R = 6371; // Earth's radius in km
    const dLat = this.toRad(lat2 - lat1);
    const dLng = this.toRad(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
        Math.cos(this.toRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRad(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}

// Export singleton instance
export const radioStationService = new RadioStationService();
