// World geographical data for realistic Earth rendering
export interface Continent {
  name: string;
  color: string;
  paths: ContinentPath[];
}

export interface ContinentPath {
  // SVG-like path coordinates normalized to 0-1 range
  // These will be scaled to the texture dimensions
  x: number;
  y: number;
  width: number;
  height: number;
  shape: "ellipse" | "polygon" | "complex";
  points?: number[]; // For polygon shapes
}

export const continents: Continent[] = [
  {
    name: "North America",
    color: "#2d5a27",
    paths: [
      // USA/Canada main body
      {
        x: 0.08,
        y: 0.25,
        width: 0.25,
        height: 0.35,
        shape: "complex",
        points: [
          0.08, 0.35, 0.12, 0.25, 0.25, 0.28, 0.33, 0.45, 0.28, 0.6, 0.08, 0.55,
        ],
      },
      // Alaska
      { x: 0.02, y: 0.35, width: 0.08, height: 0.15, shape: "ellipse" },
      // Mexico/Central America
      { x: 0.15, y: 0.55, width: 0.12, height: 0.2, shape: "ellipse" },
    ],
  },
  {
    name: "South America",
    color: "#2d5a27",
    paths: [
      {
        x: 0.22,
        y: 0.65,
        width: 0.15,
        height: 0.33,
        shape: "complex",
        points: [
          0.25, 0.65, 0.37, 0.7, 0.35, 0.85, 0.28, 0.98, 0.22, 0.9, 0.24, 0.75,
        ],
      },
    ],
  },
  {
    name: "Europe",
    color: "#2d5a27",
    paths: [
      {
        x: 0.48,
        y: 0.25,
        width: 0.15,
        height: 0.2,
        shape: "complex",
        points: [0.48, 0.35, 0.55, 0.25, 0.63, 0.3, 0.6, 0.45, 0.48, 0.4],
      },
    ],
  },
  {
    name: "Africa",
    color: "#2d5a27",
    paths: [
      {
        x: 0.52,
        y: 0.45,
        width: 0.2,
        height: 0.4,
        shape: "complex",
        points: [
          0.55, 0.45, 0.72, 0.5, 0.7, 0.75, 0.62, 0.85, 0.52, 0.8, 0.54, 0.6,
        ],
      },
    ],
  },
  {
    name: "Asia",
    color: "#2d5a27",
    paths: [
      // Main Asia body
      {
        x: 0.65,
        y: 0.25,
        width: 0.3,
        height: 0.35,
        shape: "complex",
        points: [
          0.65, 0.35, 0.8, 0.25, 0.95, 0.3, 0.92, 0.5, 0.75, 0.6, 0.65, 0.5,
        ],
      },
      // India subcontinent
      { x: 0.72, y: 0.52, width: 0.1, height: 0.15, shape: "ellipse" },
      // Southeast Asia
      { x: 0.82, y: 0.6, width: 0.12, height: 0.1, shape: "ellipse" },
    ],
  },
  {
    name: "Australia",
    color: "#2d5a27",
    paths: [
      { x: 0.82, y: 0.75, width: 0.15, height: 0.12, shape: "ellipse" },
      // New Zealand
      { x: 0.92, y: 0.8, width: 0.03, height: 0.08, shape: "ellipse" },
    ],
  },
  {
    name: "Antarctica",
    color: "#e5e7eb",
    paths: [{ x: 0.1, y: 0.92, width: 0.8, height: 0.08, shape: "ellipse" }],
  },
];

export const majorCities = [
  // North America
  { name: "New York", lat: 40.7128, lng: -74.006, population: 8419000 },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437, population: 3971000 },
  { name: "Chicago", lat: 41.8781, lng: -87.6298, population: 2746000 },
  { name: "Toronto", lat: 43.6532, lng: -79.3832, population: 2956000 },
  { name: "Mexico City", lat: 19.4326, lng: -99.1332, population: 9209000 },

  // South America
  { name: "São Paulo", lat: -23.5505, lng: -46.6333, population: 12300000 },
  { name: "Buenos Aires", lat: -34.6037, lng: -58.3816, population: 3054000 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, population: 6748000 },

  // Europe
  { name: "London", lat: 51.5074, lng: -0.1278, population: 9540000 },
  { name: "Paris", lat: 48.8566, lng: 2.3522, population: 11020000 },
  { name: "Berlin", lat: 52.52, lng: 13.405, population: 3769000 },
  { name: "Madrid", lat: 40.4168, lng: -3.7038, population: 6642000 },
  { name: "Rome", lat: 41.9028, lng: 12.4964, population: 2873000 },
  { name: "Moscow", lat: 55.7558, lng: 37.6173, population: 12500000 },

  // Asia
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, population: 37400000 },
  { name: "Beijing", lat: 39.9042, lng: 116.4074, population: 21540000 },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737, population: 26320000 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777, population: 20410000 },
  { name: "Delhi", lat: 28.7041, lng: 77.1025, population: 32900000 },
  { name: "Seoul", lat: 37.5665, lng: 126.978, population: 9720000 },

  // Africa
  { name: "Cairo", lat: 30.0444, lng: 31.2357, population: 20900000 },
  { name: "Lagos", lat: 6.5244, lng: 3.3792, population: 15390000 },
  { name: "Johannesburg", lat: -26.2041, lng: 28.0473, population: 5635000 },

  // Australia
  { name: "Sydney", lat: -33.8688, lng: 151.2093, population: 5312000 },
  { name: "Melbourne", lat: -37.8136, lng: 144.9631, population: 5159000 },
];

export interface OceanArea {
  name: string;
  color: string;
  regions: {
    x: number;
    y: number;
    radius: number;
  }[];
}

export const oceans: OceanArea[] = [
  {
    name: "Pacific Ocean",
    color: "#1a365d",
    regions: [
      { x: 0.9, y: 0.5, radius: 0.3 }, // Main Pacific
      { x: 0.05, y: 0.5, radius: 0.25 }, // Eastern Pacific
    ],
  },
  {
    name: "Atlantic Ocean",
    color: "#1e40af",
    regions: [
      { x: 0.35, y: 0.4, radius: 0.2 }, // North Atlantic
      { x: 0.4, y: 0.7, radius: 0.18 }, // South Atlantic
    ],
  },
  {
    name: "Indian Ocean",
    color: "#1e3a8a",
    regions: [{ x: 0.7, y: 0.65, radius: 0.2 }],
  },
  {
    name: "Arctic Ocean",
    color: "#bfdbfe",
    regions: [{ x: 0.5, y: 0.05, radius: 0.4 }],
  },
  {
    name: "Antarctic Ocean",
    color: "#dbeafe",
    regions: [{ x: 0.5, y: 0.95, radius: 0.4 }],
  },
];
