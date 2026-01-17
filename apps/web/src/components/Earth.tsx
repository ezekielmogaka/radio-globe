"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const nightLightsRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereInnerRef = useRef<THREE.Mesh>(null);
  const atmosphereOuterRef = useRef<THREE.Mesh>(null);

  // Create enhanced Earth texture with detailed continents
  const earthTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 4096;
    canvas.height = 2048;
    createEnhancedEarthTexture(ctx, canvas.width, canvas.height);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);

  // Create night lights texture
  const nightTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 2048;
    canvas.height = 1024;
    createNightLightsTexture(ctx, canvas.width, canvas.height);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Create subtle cloud texture
  const cloudTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 1024;
    canvas.height = 512;
    createCloudTexture(ctx, canvas.width, canvas.height);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Animation - no auto-rotation for Radio Garden style interaction
  // The globe is controlled by user via OrbitControls
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Only animate clouds slowly for atmospheric effect
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0001;
    }
    
    // Update atmosphere shaders for subtle pulsing effect
    [atmosphereInnerRef, atmosphereOuterRef].forEach(ref => {
      if (ref.current?.material) {
        const material = ref.current.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = time;
        }
      }
    });
  });

  return (
    <group>
      {/* Main Earth sphere with enhanced texture */}
      <Sphere ref={earthRef} args={[2, 128, 64]}>
        <meshBasicMaterial map={earthTexture} />
      </Sphere>

      {/* Night lights layer - subtle city glow */}
      <Sphere ref={nightLightsRef} args={[2.002, 64, 32]}>
        <meshBasicMaterial
          map={nightTexture}
          transparent={true}
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </Sphere>

      {/* Subtle cloud layer */}
      <Sphere ref={cloudsRef} args={[2.012, 48, 24]}>
        <meshBasicMaterial
          map={cloudTexture}
          transparent={true}
          opacity={0.15}
          depthWrite={false}
        />
      </Sphere>

      {/* Inner atmosphere glow - cyan/blue */}
      <Sphere ref={atmosphereInnerRef} args={[2.06, 64, 32]}>
        <shaderMaterial
          uniforms={{
            time: { value: 0 },
            glowColor: { value: new THREE.Color(0.2, 0.6, 0.9) },
          }}
          vertexShader={`
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform float time;
            uniform vec3 glowColor;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vec3 viewDir = normalize(-vPosition);
              float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.5);
              
              // Subtle pulsing
              float pulse = sin(time * 0.5) * 0.05 + 0.95;
              
              vec3 color = glowColor * pulse;
              float alpha = fresnel * 0.5;
              
              gl_FragColor = vec4(color, alpha);
            }
          `}
          side={THREE.BackSide}
          transparent={true}
          depthWrite={false}
        />
      </Sphere>

      {/* Outer atmosphere glow - teal/green accent */}
      <Sphere ref={atmosphereOuterRef} args={[2.15, 48, 24]}>
        <shaderMaterial
          uniforms={{
            time: { value: 0 },
            innerColor: { value: new THREE.Color(0.0, 0.8, 0.7) },
            outerColor: { value: new THREE.Color(0.1, 0.3, 0.6) },
          }}
          vertexShader={`
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform float time;
            uniform vec3 innerColor;
            uniform vec3 outerColor;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
              vec3 viewDir = normalize(-vPosition);
              float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 5.0);
              
              // Gradient from inner to outer color
              vec3 color = mix(innerColor, outerColor, fresnel);
              
              // Subtle shimmer
              float shimmer = sin(time * 1.5 + fresnel * 10.0) * 0.03 + 0.97;
              
              float alpha = fresnel * 0.25 * shimmer;
              
              gl_FragColor = vec4(color, alpha);
            }
          `}
          side={THREE.BackSide}
          transparent={true}
          depthWrite={false}
        />
      </Sphere>
    </group>
  );
}

// ====== TEXTURE GENERATION FUNCTIONS ======

// Enhanced Earth texture with detailed continents and terrain variations
function createEnhancedEarthTexture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Deep ocean gradient background
  const oceanGradient = ctx.createLinearGradient(0, 0, 0, height);
  oceanGradient.addColorStop(0, "#050a12");     // Arctic dark
  oceanGradient.addColorStop(0.15, "#0a1420");  // Northern
  oceanGradient.addColorStop(0.4, "#0c1825");   // Temperate
  oceanGradient.addColorStop(0.5, "#0e1a28");   // Equatorial
  oceanGradient.addColorStop(0.6, "#0c1825");   // Southern temperate
  oceanGradient.addColorStop(0.85, "#0a1420");  // Southern
  oceanGradient.addColorStop(1, "#050a12");     // Antarctic dark
  
  ctx.fillStyle = oceanGradient;
  ctx.fillRect(0, 0, width, height);

  // Add subtle ocean texture
  addOceanTexture(ctx, width, height);

  // Color palette for terrain
  const colors = {
    land: "#1e5545",        // Primary land - deep teal green
    landLight: "#2a6a55",   // Lighter land areas
    forest: "#1a4a3a",      // Dense forests
    tropical: "#2d6b48",    // Tropical regions
    desert: "#4a4535",      // Desert/arid
    mountain: "#3a4a45",    // Mountain regions
    ice: "#8aa8b0",         // Ice/glaciers
    coastGlow: "#00c4a0",   // Coastline highlight
  };

  // Helper to convert lat/lon to canvas coordinates
  const toCanvas = (lon: number, lat: number): [number, number] => {
    const x = ((lon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return [x, y];
  };

  // Draw filled polygon with optional gradient
  const drawLandmass = (points: [number, number][], color: string, addCoast: boolean = true) => {
    if (points.length < 3) return;
    
    ctx.beginPath();
    const [startX, startY] = toCanvas(points[0][0], points[0][1]);
    ctx.moveTo(startX, startY);
    
    for (let i = 1; i < points.length; i++) {
      const [x, y] = toCanvas(points[i][0], points[i][1]);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    
    // Fill with base color
    ctx.fillStyle = color;
    ctx.fill();
    
    // Add subtle coastline glow
    if (addCoast) {
      ctx.strokeStyle = colors.coastGlow;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.3;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
  };

  // ============ NORTH AMERICA - Detailed ============
  drawLandmass([
    // Arctic coast
    [-168, 65], [-165, 68], [-160, 70], [-150, 70], [-140, 70],
    [-130, 72], [-120, 74], [-110, 76], [-100, 77], [-90, 78],
    [-80, 79], [-70, 78], [-65, 76], [-60, 73],
    // East coast
    [-64, 70], [-68, 65], [-72, 62], [-75, 58], [-78, 52],
    [-80, 48], [-82, 45], [-85, 42], [-83, 38], [-80, 35],
    [-78, 32], [-80, 28], [-82, 25],
    // Gulf coast & Mexico
    [-85, 28], [-90, 29], [-95, 28], [-97, 26], [-100, 24],
    [-105, 22], [-108, 25], [-110, 28], [-112, 30],
    // West coast
    [-115, 28], [-118, 32], [-120, 35], [-122, 38], [-124, 42],
    [-125, 45], [-127, 48], [-130, 52], [-135, 56],
    [-140, 58], [-145, 60], [-150, 60], [-155, 58],
    [-160, 62], [-165, 64], [-168, 65]
  ], colors.land);

  // Alaska - detailed
  drawLandmass([
    [-168, 65], [-172, 62], [-176, 58], [-178, 54], [-175, 52],
    [-170, 53], [-165, 55], [-160, 58], [-155, 58], [-150, 60],
    [-145, 62], [-140, 60], [-142, 64], [-150, 68], [-158, 70],
    [-165, 68], [-168, 65]
  ], colors.forest);

  // Greenland
  drawLandmass([
    [-45, 60], [-48, 65], [-52, 70], [-55, 74], [-52, 78],
    [-45, 82], [-35, 83], [-25, 82], [-18, 78], [-20, 72],
    [-28, 66], [-38, 60], [-45, 60]
  ], colors.ice);

  // ============ CENTRAL AMERICA ============
  drawLandmass([
    [-100, 24], [-97, 20], [-95, 18], [-92, 16], [-88, 15],
    [-85, 13], [-82, 10], [-80, 9], [-78, 8],
    [-80, 10], [-83, 14], [-87, 16], [-92, 18],
    [-96, 20], [-100, 24]
  ], colors.tropical);

  // Cuba
  drawLandmass([
    [-85, 23], [-82, 23], [-78, 22], [-75, 20], [-74, 20],
    [-77, 20], [-81, 21], [-84, 22], [-85, 23]
  ], colors.tropical, false);

  // Hispaniola
  drawLandmass([
    [-74, 20], [-72, 20], [-69, 18], [-71, 18], [-74, 19], [-74, 20]
  ], colors.tropical, false);

  // Jamaica
  drawLandmass([
    [-78, 18], [-76, 18], [-76, 17.5], [-78, 17.5], [-78, 18]
  ], colors.tropical, false);

  // ============ SOUTH AMERICA - Detailed ============
  drawLandmass([
    // North coast
    [-80, 10], [-78, 10], [-75, 12], [-72, 12], [-68, 10],
    [-62, 10], [-58, 8], [-52, 5], [-48, 2], [-45, 0],
    // East coast
    [-40, -2], [-38, -5], [-35, -10], [-37, -15], [-38, -18],
    [-40, -22], [-45, -25], [-48, -28], [-52, -32],
    [-55, -35], [-58, -38],
    // South
    [-62, -42], [-65, -48], [-68, -52], [-72, -54], [-75, -52],
    // West coast
    [-74, -45], [-72, -40], [-71, -35], [-72, -30], [-70, -25],
    [-70, -20], [-72, -15], [-76, -10], [-78, -5], [-80, 0],
    [-82, 5], [-80, 10]
  ], colors.landLight);

  // Amazon rainforest overlay
  drawLandmass([
    [-75, 2], [-70, 2], [-62, 0], [-55, -2], [-52, -5],
    [-52, -10], [-58, -12], [-65, -10], [-72, -5], [-75, 0], [-75, 2]
  ], colors.tropical, false);

  // ============ EUROPE - Detailed ============
  // Iberian Peninsula
  drawLandmass([
    [-10, 36], [-8, 38], [-6, 40], [-2, 42], [0, 42],
    [2, 42], [3, 40], [0, 38], [-2, 36], [-6, 36], [-10, 36]
  ], colors.land);

  // France
  drawLandmass([
    [-2, 42], [2, 42], [5, 44], [7, 46], [8, 48],
    [5, 50], [2, 51], [-2, 48], [-4, 46], [-2, 42]
  ], colors.land);

  // British Isles
  drawLandmass([
    [-8, 50], [-5, 50], [-3, 52], [-2, 54], [-3, 56],
    [-5, 58], [-6, 58], [-8, 57], [-10, 54], [-8, 50]
  ], colors.landLight);

  // Ireland
  drawLandmass([
    [-10, 51], [-8, 52], [-6, 54], [-8, 55], [-10, 54], [-10, 51]
  ], colors.landLight, false);

  // Central Europe
  drawLandmass([
    [5, 46], [10, 46], [15, 48], [18, 50], [22, 48],
    [24, 50], [20, 52], [15, 54], [10, 54], [8, 52],
    [5, 50], [5, 46]
  ], colors.land);

  // Scandinavia
  drawLandmass([
    [5, 58], [8, 60], [10, 62], [12, 66], [15, 68],
    [20, 70], [28, 71], [30, 70], [28, 68], [25, 65],
    [22, 62], [18, 60], [12, 58], [5, 58]
  ], colors.forest);

  // Italy
  drawLandmass([
    [7, 44], [10, 46], [14, 46], [18, 42], [18, 40],
    [16, 38], [12, 38], [10, 40], [7, 44]
  ], colors.land);

  // Balkans & Greece
  drawLandmass([
    [18, 42], [22, 44], [28, 45], [28, 42], [26, 40],
    [24, 38], [22, 36], [20, 38], [18, 40], [18, 42]
  ], colors.land);

  // ============ AFRICA - Detailed ============
  drawLandmass([
    // North coast
    [-18, 28], [-15, 32], [-8, 35], [0, 37], [10, 37],
    [15, 33], [25, 32], [32, 32], [35, 30],
    // East coast
    [38, 25], [42, 18], [48, 12], [52, 10], [50, 5],
    [45, 0], [42, -5], [40, -12], [38, -18], [35, -25],
    [32, -30], [28, -34],
    // South coast
    [22, -35], [18, -34], [15, -32],
    // West coast
    [12, -25], [12, -18], [10, -8], [8, 0], [5, 5],
    [0, 6], [-5, 5], [-10, 8], [-15, 12], [-18, 18],
    [-18, 25], [-18, 28]
  ], "#3a5a48");

  // Sahara Desert overlay
  drawLandmass([
    [-15, 28], [-10, 30], [0, 32], [15, 30], [25, 28],
    [32, 28], [35, 22], [30, 18], [20, 15], [10, 15],
    [0, 18], [-10, 22], [-15, 25], [-15, 28]
  ], colors.desert, false);

  // Congo Rainforest
  drawLandmass([
    [8, 5], [15, 5], [25, 2], [30, -2], [28, -8],
    [22, -10], [15, -8], [10, -5], [8, 0], [8, 5]
  ], colors.tropical, false);

  // Madagascar
  drawLandmass([
    [50, -12], [48, -16], [45, -22], [44, -25], [47, -25],
    [50, -22], [50, -16], [50, -12]
  ], colors.tropical);

  // ============ ASIA - Detailed ============
  // Russia
  drawLandmass([
    [30, 70], [40, 72], [60, 74], [80, 76], [100, 78],
    [120, 76], [140, 74], [160, 70], [170, 68], [180, 66],
    [180, 55], [170, 55], [160, 52], [150, 48], [140, 45],
    [135, 46], [130, 50], [120, 54], [100, 55], [80, 52],
    [60, 50], [50, 52], [40, 56], [35, 60], [30, 65], [28, 68], [30, 70]
  ], colors.forest);

  // Middle East
  drawLandmass([
    [35, 38], [40, 40], [45, 38], [50, 38], [55, 35],
    [60, 30], [58, 25], [55, 20], [50, 15], [45, 12],
    [40, 15], [38, 20], [35, 25], [33, 30], [34, 35], [35, 38]
  ], colors.desert);

  // Arabian Peninsula
  drawLandmass([
    [35, 30], [40, 28], [50, 25], [55, 22], [58, 18],
    [55, 15], [50, 13], [45, 12], [38, 18], [35, 25], [35, 30]
  ], colors.desert, false);

  // India
  drawLandmass([
    [68, 35], [72, 32], [75, 28], [78, 22], [82, 18],
    [85, 22], [88, 24], [92, 22], [88, 18], [84, 12],
    [80, 8], [77, 10], [74, 15], [72, 20], [70, 28], [68, 35]
  ], colors.landLight);

  // Southeast Asia mainland
  drawLandmass([
    [92, 28], [98, 25], [102, 22], [105, 18], [108, 15],
    [105, 10], [102, 6], [100, 3], [98, 6], [95, 12],
    [92, 18], [92, 28]
  ], colors.tropical);

  // China / East Asia
  drawLandmass([
    [75, 40], [80, 45], [90, 48], [100, 48], [110, 45],
    [118, 42], [122, 40], [125, 42], [130, 42], [128, 38],
    [122, 35], [118, 32], [115, 28], [110, 22], [105, 22],
    [100, 26], [95, 30], [88, 32], [82, 35], [75, 40]
  ], colors.land);

  // Japan
  drawLandmass([
    [130, 32], [132, 35], [134, 38], [138, 42], [142, 45],
    [145, 44], [143, 40], [140, 36], [137, 33], [132, 32], [130, 32]
  ], colors.forest);

  // Korean Peninsula
  drawLandmass([
    [125, 38], [128, 40], [130, 38], [129, 35], [127, 33],
    [125, 35], [125, 38]
  ], colors.land, false);

  // Taiwan
  drawLandmass([
    [120, 25], [122, 25], [122, 22], [120, 22], [120, 25]
  ], colors.tropical, false);

  // Philippines
  drawLandmass([
    [118, 18], [122, 18], [126, 15], [125, 10], [122, 6],
    [120, 10], [118, 14], [118, 18]
  ], colors.tropical);

  // Indonesia - Sumatra
  drawLandmass([
    [95, 5], [100, 2], [105, -2], [105, -6], [100, -5],
    [95, -2], [95, 5]
  ], colors.tropical);

  // Indonesia - Java
  drawLandmass([
    [105, -6], [110, -7], [115, -8], [115, -8.5], [108, -8],
    [105, -7], [105, -6]
  ], colors.tropical, false);

  // Indonesia - Borneo
  drawLandmass([
    [108, 6], [115, 5], [118, 2], [118, -2], [115, -4],
    [110, -2], [108, 2], [108, 6]
  ], colors.tropical);

  // Indonesia - Sulawesi
  drawLandmass([
    [118, 2], [122, 0], [125, -2], [122, -5], [120, -2],
    [118, 0], [118, 2]
  ], colors.tropical, false);

  // Papua New Guinea
  drawLandmass([
    [140, -2], [145, -3], [150, -5], [152, -8], [148, -10],
    [145, -8], [142, -6], [140, -4], [140, -2]
  ], colors.tropical);

  // ============ AUSTRALIA ============
  drawLandmass([
    [114, -22], [118, -18], [125, -14], [132, -12], [140, -12],
    [145, -14], [150, -20], [153, -28], [150, -35],
    [145, -40], [138, -38], [132, -35], [128, -32],
    [122, -28], [118, -24], [114, -22]
  ], "#4a5a3a");

  // Eastern Australia (greener)
  drawLandmass([
    [148, -16], [153, -25], [152, -32], [150, -38],
    [146, -38], [145, -32], [147, -25], [148, -16]
  ], colors.landLight, false);

  // Tasmania
  drawLandmass([
    [145, -40], [148, -41], [148, -43], [145, -44], [144, -42], [145, -40]
  ], colors.landLight, false);

  // New Zealand - North Island
  drawLandmass([
    [173, -35], [176, -37], [178, -40], [176, -42],
    [174, -40], [173, -37], [173, -35]
  ], colors.forest);

  // New Zealand - South Island
  drawLandmass([
    [167, -44], [170, -42], [174, -43], [172, -46],
    [168, -47], [167, -45], [167, -44]
  ], colors.forest);

  // ============ ANTARCTICA ============
  ctx.fillStyle = colors.ice;
  ctx.fillRect(0, height * 0.88, width, height * 0.12);

  // Add terrain texture noise
  addTerrainTexture(ctx, width, height);

  // Add subtle grid lines
  addGridLines(ctx, width, height);
}

// Add subtle ocean texture
function addOceanTexture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.globalAlpha = 0.03;
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 30 + 5;
    
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, "#00aaff");
    gradient.addColorStop(1, "transparent");
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// Add terrain texture to landmasses
function addTerrainTexture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    // Only add noise to land (brighter than ocean)
    if (brightness > 15) {
      const noise = (Math.random() - 0.5) * 10;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Add subtle grid overlay
function addGridLines(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.strokeStyle = "rgba(0, 200, 160, 0.06)";
  ctx.lineWidth = 1;
  
  // Latitude lines every 15 degrees
  for (let lat = -75; lat <= 75; lat += 15) {
    const y = ((90 - lat) / 180) * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  
  // Longitude lines every 15 degrees
  for (let lon = -180; lon < 180; lon += 15) {
    const x = ((lon + 180) / 360) * width;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  
  // Equator - slightly brighter
  ctx.strokeStyle = "rgba(0, 220, 180, 0.12)";
  ctx.lineWidth = 1.5;
  const equatorY = height / 2;
  ctx.beginPath();
  ctx.moveTo(0, equatorY);
  ctx.lineTo(width, equatorY);
  ctx.stroke();
}

// Create night lights texture showing city clusters
function createNightLightsTexture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);

  // Major city light regions
  const lightRegions = [
    // North America
    { x: 0.21, y: 0.38, density: 60, spread: 0.06 },  // Northeast US
    { x: 0.14, y: 0.42, density: 40, spread: 0.04 },  // California
    { x: 0.19, y: 0.35, density: 30, spread: 0.03 },  // Great Lakes
    { x: 0.16, y: 0.44, density: 25, spread: 0.03 },  // Texas
    // Europe
    { x: 0.49, y: 0.32, density: 80, spread: 0.08 },  // Western Europe
    { x: 0.52, y: 0.30, density: 30, spread: 0.04 },  // Eastern Europe
    // Asia
    { x: 0.88, y: 0.38, density: 50, spread: 0.04 },  // Japan
    { x: 0.83, y: 0.38, density: 100, spread: 0.10 }, // China coast
    { x: 0.72, y: 0.42, density: 70, spread: 0.07 },  // India
    { x: 0.86, y: 0.36, density: 30, spread: 0.02 },  // Korea
    // Other
    { x: 0.32, y: 0.68, density: 35, spread: 0.04 },  // Brazil
    { x: 0.55, y: 0.42, density: 25, spread: 0.03 },  // Middle East
    { x: 0.92, y: 0.72, density: 20, spread: 0.03 },  // Australia
  ];

  lightRegions.forEach(region => {
    for (let i = 0; i < region.density; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * region.spread;
      const x = (region.x + Math.cos(angle) * dist) * width;
      const y = (region.y + Math.sin(angle) * dist) * height;
      
      const size = Math.random() * 3 + 1;
      const brightness = Math.random() * 0.3 + 0.2;
      
      // City glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
      gradient.addColorStop(0, `rgba(255, 200, 100, ${brightness})`);
      gradient.addColorStop(0.5, `rgba(255, 180, 80, ${brightness * 0.5})`);
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

// Create subtle cloud texture
function createCloudTexture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      // Multiple octaves of noise for cloud-like patterns
      const noise = 
        Math.sin(x * 0.01 + y * 0.005) * 0.4 +
        Math.sin(x * 0.02 - y * 0.01) * 0.3 +
        Math.sin(x * 0.04 + y * 0.03) * 0.2 +
        Math.random() * 0.1;
      
      // Latitude-based cloud density
      const latFactor = Math.sin((y / height) * Math.PI);
      
      const cloudDensity = Math.max(0, noise * latFactor);
      const alpha = cloudDensity * 150;
      
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = alpha;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}
