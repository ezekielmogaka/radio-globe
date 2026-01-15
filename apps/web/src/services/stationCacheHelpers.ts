import { RadioStation } from "../types";

export type StationIndex = Map<string, RadioStation[]>;

const UNKNOWN = "unknown";

export function buildCountryIndex(stations: RadioStation[]): StationIndex {
  const byCountry = new Map<string, RadioStation[]>();
  stations.forEach((station) => {
    const key = station.location.country?.toLowerCase() || UNKNOWN;
    if (!byCountry.has(key)) {
      byCountry.set(key, []);
    }
    byCountry.get(key)!.push(station);
  });
  return byCountry;
}

export function buildCityIndex(stations: RadioStation[]): StationIndex {
  const byCity = new Map<string, RadioStation[]>();
  stations.forEach((station) => {
    const city = station.location.city?.toLowerCase();
    if (!city) return;
    if (!byCity.has(city)) {
      byCity.set(city, []);
    }
    byCity.get(city)!.push(station);
  });
  return byCity;
}

export function buildGenreIndex(stations: RadioStation[]): StationIndex {
  const byGenre = new Map<string, RadioStation[]>();
  stations.forEach((station) => {
    const genre = station.genre?.toLowerCase() || UNKNOWN;
    if (!byGenre.has(genre)) {
      byGenre.set(genre, []);
    }
    byGenre.get(genre)!.push(station);

    station.tags?.forEach((tag) => {
      const key = tag.toLowerCase();
      if (!byGenre.has(key)) {
        byGenre.set(key, []);
      }
      byGenre.get(key)!.push(station);
    });
  });
  return byGenre;
}

export function filterStationsByCountry(
  stations: RadioStation[],
  normalizedCountry: string,
): RadioStation[] {
  return stations
    .filter((station) => {
      const name = station.location?.country?.toLowerCase() || "";
      const code = station.location?.countryCode?.toLowerCase() || "";
      return (
        name === normalizedCountry ||
        name.startsWith(normalizedCountry) ||
        code === normalizedCountry
      );
    })
    .sort((a, b) => (b.listeners || 0) - (a.listeners || 0));
}

export function filterStationsByCity(
  stations: RadioStation[],
  normalizedCity: string,
): RadioStation[] {
  return stations
    .filter((station) => station.location.city?.toLowerCase().includes(normalizedCity))
    .sort((a, b) => (b.listeners || 0) - (a.listeners || 0));
}

export function filterStationsByTag(
  stations: RadioStation[],
  normalizedTag: string,
): RadioStation[] {
  return stations
    .filter((station) => {
      const genre = station.genre?.toLowerCase() || "";
      const tags = station.tags?.map((tag) => tag.toLowerCase()) || [];
      return genre.includes(normalizedTag) || tags.some((tag) => tag.includes(normalizedTag));
    })
    .sort((a, b) => (b.listeners || 0) - (a.listeners || 0));
}

export function searchStationsInCache(stations: RadioStation[], query: string): RadioStation[] {
  const searchTerm = query.trim().toLowerCase();
  if (!searchTerm) return [];

  const results = stations.filter((station) =>
    station.name?.toLowerCase().includes(searchTerm) ||
    station.location?.country?.toLowerCase().includes(searchTerm) ||
    station.location?.city?.toLowerCase().includes(searchTerm) ||
    station.genre?.toLowerCase().includes(searchTerm) ||
    station.language?.toLowerCase().includes(searchTerm) ||
    station.description?.toLowerCase().includes(searchTerm) ||
    station.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
  );

  return results.sort((a, b) => {
    const aExact = a.name?.toLowerCase() === searchTerm;
    const bExact = b.name?.toLowerCase() === searchTerm;
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;
    return (b.listeners || 0) - (a.listeners || 0);
  });
}

export function distributeStationsByCountry(
  stations: RadioStation[],
  targetLimit: number,
): RadioStation[] {
  const byCountry = buildCountryIndex(stations);
  const result: RadioStation[] = [];
  const maxPerCountry = Math.min(20, Math.ceil(targetLimit / Math.max(byCountry.size, 1)));

  const countryGroups = Array.from(byCountry.values());
  for (let index = 0; index < countryGroups.length; index += 1) {
    const selected = countryGroups[index].slice(0, maxPerCountry);
    result.push(...selected);
    if (result.length >= targetLimit) break;
  }

  return result.slice(0, targetLimit);
}

export function summarizeCountries(stations: RadioStation[]): Array<{ name: string; iso: string; stationcount: number }> {
  const counts = new Map<string, { name: string; iso: string; stationcount: number }>();
  stations.forEach((station) => {
    const country = station.location.country || "Unknown";
    const iso = station.location.countryCode || "";
    if (!counts.has(country)) {
      counts.set(country, { name: country, iso, stationcount: 0 });
    }
    counts.get(country)!.stationcount += 1;
  });
  return Array.from(counts.values()).sort((a, b) => b.stationcount - a.stationcount);
}

export function summarizeTags(stations: RadioStation[]): Array<{ name: string; stationcount: number }> {
  const counts = new Map<string, number>();

  stations.forEach((station) => {
    if (station.genre) {
      const key = station.genre.toLowerCase();
      counts.set(key, (counts.get(key) || 0) + 1);
    }
    station.tags?.forEach((tag) => {
      const key = tag.toLowerCase();
      counts.set(key, (counts.get(key) || 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .map(([name, stationcount]) => ({ name, stationcount }))
    .sort((a, b) => b.stationcount - a.stationcount);
}
