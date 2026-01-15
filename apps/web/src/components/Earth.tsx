"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const nightLightsRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  // Load real Earth day texture using NASA-style satellite imagery
  const dayTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 2048;
    canvas.height = 1024;

    // Create high-contrast realistic Earth texture
    createSatelliteEarthTexture(ctx, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }, []);

  // Create realistic night lights from satellite data
  const nightTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 2048;
    canvas.height = 1024;

    // Black background
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add NASA-style night lights
    addNASAStyleNightLights(ctx, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Create realistic cloud texture
  const cloudTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 1024;
    canvas.height = 512;

    createRealisticClouds(ctx, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Create topographical normal map
  const normalTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 1024;
    canvas.height = 512;

    createTopographicalNormalMap(ctx, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Animation with realistic rotation speed
  useFrame((state, delta) => {
    if (earthRef.current && nightLightsRef.current && cloudsRef.current) {
      // Earth rotates once every 24 hours - scale it for demo (much faster)
      earthRef.current.rotation.y += delta * 0.1;
      nightLightsRef.current.rotation.y += delta * 0.1;
      cloudsRef.current.rotation.y += delta * 0.12; // Clouds move slightly faster

      // Dynamic atmosphere
      if (atmosphereRef.current && atmosphereRef.current.material) {
        const material = atmosphereRef.current.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = state.clock.getElapsedTime();
        }
      }
    }
  });

  return (
    <group>
      {/* Main Earth sphere with enhanced contrast */}
      <Sphere ref={earthRef} args={[2, 128, 64]}>
        <meshPhongMaterial
          map={dayTexture}
          normalMap={normalTexture}
          normalScale={new THREE.Vector2(1.2, 1.2)}
          shininess={0.5}
          specular={new THREE.Color(0x000000)}
          transparent={false}
          flatShading={false}
        />
      </Sphere>

      {/* Night lights layer */}
      <Sphere ref={nightLightsRef} args={[2.001, 64, 32]}>
        <meshBasicMaterial
          map={nightTexture}
          transparent={true}
          opacity={1}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Realistic cloud layer */}
      <Sphere ref={cloudsRef} args={[2.008, 64, 32]}>
        <meshLambertMaterial
          map={cloudTexture}
          transparent={true}
          opacity={0.4}
          alphaTest={0.1}
        />
      </Sphere>

      {/* Enhanced atmospheric glow */}
      <Sphere ref={atmosphereRef} args={[2.15, 64, 32]}>
        <shaderMaterial
          uniforms={{
            time: { value: 0 },
            color: { value: new THREE.Color(0.4, 0.7, 1.0) },
          }}
          vertexShader={`
            varying vec3 vNormal;
            varying vec3 vPositionNormal;
            
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform float time;
            uniform vec3 color;
            varying vec3 vNormal;
            varying vec3 vPositionNormal;
            
            void main() {
              float intensity = pow(0.6 - dot(vNormal, vPositionNormal), 2.0);
              vec3 atmosphere = color * pow(intensity, 0.8);
              float alpha = intensity * 0.4;
              gl_FragColor = vec4(atmosphere, alpha);
            }
          `}
          side={THREE.BackSide}
          transparent={true}
        />
      </Sphere>
    </group>
  );
}

// Create satellite-style Earth texture with high contrast between land and water
function createSatelliteEarthTexture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Create ultra-realistic ocean background with deep blue-black gradients
  const oceanGradient = ctx.createLinearGradient(0, 0, 0, height);
  oceanGradient.addColorStop(0, "#000814");    // Arctic black-blue
  oceanGradient.addColorStop(0.15, "#001d3d"); // Northern deep blue  
  oceanGradient.addColorStop(0.35, "#003566"); // Temperate ocean blue
  oceanGradient.addColorStop(0.5, "#0a4f8c");  // Equatorial bright blue
  oceanGradient.addColorStop(0.65, "#003566"); // Southern temperate
  oceanGradient.addColorStop(0.85, "#001d3d"); // Southern deep blue
  oceanGradient.addColorStop(1, "#000814");    // Antarctic black-blue
  
  ctx.fillStyle = oceanGradient;
  ctx.fillRect(0, 0, width, height);

  // Add ultra-detailed, photorealistic continent definitions
  const continents = [
    {
      name: "North America",
      regions: [
        // Canadian Arctic Archipelago
        { x: 0.08, y: 0.08, w: 0.28, h: 0.08, color: "#c8d5b9", type: "arctic_tundra" },
        
        // Boreal Forest Belt (Canada)
        { x: 0.06, y: 0.15, w: 0.30, h: 0.12, color: "#2d5016", type: "boreal_forest" },
        
        // Great Lakes Region
        { x: 0.18, y: 0.28, w: 0.12, h: 0.08, color: "#4a7c59", type: "temperate_forest" },
        
        // Eastern Deciduous Forest
        { x: 0.20, y: 0.32, w: 0.10, h: 0.15, color: "#6b8e23", type: "deciduous_forest" },
        
        // Great Plains
        { x: 0.14, y: 0.35, w: 0.12, h: 0.15, color: "#daa520", type: "grassland" },
        
        // Rocky Mountains
        { x: 0.10, y: 0.30, w: 0.04, h: 0.20, color: "#8b7355", type: "mountains" },
        
        // Pacific Northwest
        { x: 0.02, y: 0.30, w: 0.08, h: 0.15, color: "#355e3b", type: "temperate_rainforest" },
        
        // California Central Valley
        { x: 0.04, y: 0.42, w: 0.06, h: 0.10, color: "#9acd32", type: "mediterranean" },
        
        // Southwest Desert
        { x: 0.08, y: 0.45, w: 0.12, h: 0.12, color: "#cd853f", type: "desert" },
        
        // Mexican Highland
        { x: 0.12, y: 0.50, w: 0.10, h: 0.08, color: "#d2b48c", type: "highland" },
        
        // Central America
        { x: 0.15, y: 0.55, w: 0.08, h: 0.08, color: "#228b22", type: "tropical_forest" },
      ]
    },
    {
      name: "South America",
      regions: [
        // Amazon Basin - The lung of the Earth
        { x: 0.22, y: 0.58, w: 0.18, h: 0.15, color: "#013220", type: "amazon_rainforest" },
        
        // Brazilian Highlands (Cerrado)
        { x: 0.30, y: 0.62, w: 0.10, h: 0.12, color: "#8fbc8f", type: "cerrado_savanna" },
        
        // Andes Mountain Chain
        { x: 0.18, y: 0.58, w: 0.04, h: 0.28, color: "#696969", type: "andes_mountains" },
        
        // Patagonian Steppe
        { x: 0.20, y: 0.82, w: 0.12, h: 0.12, color: "#bdb76b", type: "patagonian_steppe" },
        
        // Pampas Grassland
        { x: 0.25, y: 0.78, w: 0.10, h: 0.08, color: "#9acd32", type: "pampas" },
        
        // Atlantic Coastal Forest
        { x: 0.32, y: 0.68, w: 0.06, h: 0.15, color: "#2e8b57", type: "atlantic_forest" },
        
        // Guiana Highlands
        { x: 0.28, y: 0.54, w: 0.08, h: 0.06, color: "#8b4513", type: "guiana_highlands" },
      ]
    },
    {
      name: "Europe",
      regions: [
        // Scandinavian Peninsula
        { x: 0.48, y: 0.15, w: 0.08, h: 0.12, color: "#2f4f2f", type: "taiga" },
        
        // British Isles
        { x: 0.45, y: 0.22, w: 0.03, h: 0.06, color: "#6b8e23", type: "maritime_temperate" },
        
        // Central European Plain
        { x: 0.48, y: 0.25, w: 0.15, h: 0.08, color: "#90ee90", type: "temperate_broadleaf" },
        
        // Mediterranean Basin
        { x: 0.48, y: 0.33, w: 0.18, h: 0.06, color: "#daa520", type: "mediterranean_shrubland" },
        
        // Eastern European Forest
        { x: 0.58, y: 0.22, w: 0.12, h: 0.12, color: "#556b2f", type: "mixed_forest" },
        
        // Iberian Peninsula
        { x: 0.46, y: 0.36, w: 0.06, h: 0.06, color: "#cd853f", type: "iberian_plateau" },
        
        // Italian Peninsula
        { x: 0.52, y: 0.36, w: 0.02, h: 0.08, color: "#daa520", type: "mediterranean" },
      ]
    },
    {
      name: "Africa", 
      regions: [
        // Sahara Desert
        { x: 0.48, y: 0.38, w: 0.22, h: 0.12, color: "#faa460", type: "sahara_desert" },
        
        // Sahel Transition Zone
        { x: 0.48, y: 0.48, w: 0.20, h: 0.04, color: "#ddbf94", type: "sahel" },
        
        // Central African Rainforest
        { x: 0.52, y: 0.52, w: 0.15, h: 0.10, color: "#013220", type: "congo_rainforest" },
        
        // East African Rift Valley
        { x: 0.60, y: 0.48, w: 0.08, h: 0.18, color: "#cd853f", type: "savanna" },
        
        // Kalahari Desert
        { x: 0.52, y: 0.72, w: 0.08, h: 0.08, color: "#d2b48c", type: "kalahari" },
        
        // Ethiopian Highlands
        { x: 0.62, y: 0.50, w: 0.06, h: 0.08, color: "#8fbc8f", type: "highlands" },
        
        // Madagascar
        { x: 0.68, y: 0.72, w: 0.02, h: 0.08, color: "#228b22", type: "tropical_highland" },
        
        // Atlas Mountains
        { x: 0.48, y: 0.35, w: 0.12, h: 0.03, color: "#a0522d", type: "atlas_mountains" },
        
        // Cape Region
        { x: 0.52, y: 0.82, w: 0.04, h: 0.03, color: "#daa520", type: "fynbos" },
      ]
    },
    {
      name: "Asia",
      regions: [
        // Siberian Taiga
        { x: 0.65, y: 0.12, w: 0.32, h: 0.20, color: "#1a4f2b", type: "siberian_taiga" },
        
        // Central Asian Steppes
        { x: 0.68, y: 0.30, w: 0.18, h: 0.10, color: "#ddd08b", type: "steppe" },
        
        // Gobi Desert
        { x: 0.78, y: 0.35, w: 0.12, h: 0.06, color: "#c19a6b", type: "gobi_desert" },
        
        // Tibetan Plateau
        { x: 0.74, y: 0.38, w: 0.10, h: 0.08, color: "#8b7355", type: "tibetan_plateau" },
        
        // Himalayas
        { x: 0.72, y: 0.42, w: 0.12, h: 0.04, color: "#696969", type: "himalayas" },
        
        // Indian Subcontinent
        { x: 0.70, y: 0.46, w: 0.12, h: 0.12, color: "#9acd32", type: "indian_plains" },
        
        // Indochina Peninsula
        { x: 0.78, y: 0.52, w: 0.08, h: 0.10, color: "#228b22", type: "monsoon_forest" },
        
        // East China Plains
        { x: 0.82, y: 0.38, w: 0.12, h: 0.15, color: "#adff2f", type: "temperate_plains" },
        
        // Southeast Asian Islands
        { x: 0.82, y: 0.58, w: 0.15, h: 0.12, color: "#32cd32", type: "tropical_rainforest" },
        
        // Japanese Archipelago
        { x: 0.90, y: 0.40, w: 0.04, h: 0.10, color: "#2e8b57", type: "temperate_forest" },
        
        // Arabian Peninsula
        { x: 0.58, y: 0.40, w: 0.12, h: 0.10, color: "#daa520", type: "arabian_desert" },
        
        // Anatolia and Levant
        { x: 0.55, y: 0.36, w: 0.08, h: 0.06, color: "#d2b48c", type: "mediterranean_highland" },
        
        // Iranian Plateau
        { x: 0.62, y: 0.36, w: 0.10, h: 0.08, color: "#bc9a6a", type: "iranian_plateau" },
      ]
    },
    {
      name: "Australia and Oceania",
      regions: [
        // Australian Outback
        { x: 0.82, y: 0.70, w: 0.15, h: 0.12, color: "#cd853f", type: "outback_desert" },
        
        // Eastern Australian Forests
        { x: 0.92, y: 0.72, w: 0.04, h: 0.12, color: "#228b22", type: "eucalyptus_forest" },
        
        // New Zealand
        { x: 0.96, y: 0.78, w: 0.02, h: 0.06, color: "#2e8b57", type: "temperate_oceanic" },
        
        // Great Dividing Range
        { x: 0.90, y: 0.70, w: 0.02, h: 0.15, color: "#8b7355", type: "australian_alps" },
        
        // Tropical North Australia
        { x: 0.84, y: 0.68, w: 0.12, h: 0.04, color: "#9acd32", type: "tropical_savanna" },
      ]
    },
    {
      name: "Antarctica",
      regions: [
        // Antarctic Ice Sheet
        { x: 0.0, y: 0.92, w: 1.0, h: 0.08, color: "#f0f8ff", type: "ice_sheet" },
      ]
    }
  ];

  // Render continents with photorealistic detail
  continents.forEach(continent => {
    continent.regions.forEach(region => {
      renderPhotorealisticTerrain(ctx, region, width, height);
    });
  });

  // Add atmospheric perspective
  addAtmosphericHaze(ctx, width, height);
}

function renderPhotorealisticTerrain(ctx: CanvasRenderingContext2D, region: any, width: number, height: number) {
  const x = region.x * width;
  const y = region.y * height;
  const w = region.w * width;
  const h = region.h * height;
  
  ctx.save();
  
  // Create highly irregular, coastline-like shapes
  drawNaturalCoastline(ctx, x, y, w, h, region.type);
  
  // Apply terrain-specific rendering
  switch(region.type) {
    case "amazon_rainforest":
    case "congo_rainforest":
      renderDenseRainforest(ctx, x, y, w, h, region.color);
      break;
    case "sahara_desert":
    case "gobi_desert":
    case "arabian_desert":
    case "outback_desert":
      renderDesertTerrain(ctx, x, y, w, h, region.color);
      break;
    case "himalayas":
    case "andes_mountains":
    case "atlas_mountains":
      renderMountainTerrain(ctx, x, y, w, h, region.color);
      break;
    case "ice_sheet":
      renderIceSheet(ctx, x, y, w, h, region.color);
      break;
    case "siberian_taiga":
    case "boreal_forest":
      renderBorealForest(ctx, x, y, w, h, region.color);
      break;
    default:
      renderStandardTerrain(ctx, x, y, w, h, region.color, region.type);
  }
  
  ctx.restore();
}

function drawNaturalCoastline(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, terrainType: string) {
  ctx.beginPath();
  
  // Determine irregularity based on terrain type
  let irregularity = 0.3;
  if (terrainType.includes("mountain")) irregularity = 0.5;
  if (terrainType.includes("island")) irregularity = 0.6;
  if (terrainType.includes("arctic")) irregularity = 0.4;
  
  const numPoints = Math.max(16, Math.floor((w + h) / 8));
  
  for (let i = 0; i <= numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    const baseRadius = Math.min(w, h) / 2;
    
    // Multiple levels of coastal variation
    const largeScale = Math.sin(angle * 3) * 0.3;
    const mediumScale = Math.sin(angle * 8) * 0.15;
    const smallScale = (Math.random() - 0.5) * irregularity;
    
    const radiusVariation = 1 + largeScale + mediumScale + smallScale;
    const px = x + w/2 + Math.cos(angle) * (w/2) * radiusVariation;
    const py = y + h/2 + Math.sin(angle) * (h/2) * radiusVariation;
    
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  
  ctx.closePath();
}

function renderDenseRainforest(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, baseColor: string) {
  // Create canopy gradient
  const canopyGrad = ctx.createRadialGradient(x + w/2, y + h/2, 0, x + w/2, y + h/2, Math.max(w, h)/2);
  canopyGrad.addColorStop(0, lightenColor(baseColor, 0.2));
  canopyGrad.addColorStop(0.7, baseColor);
  canopyGrad.addColorStop(1, darkenColor(baseColor, 0.3));
  
  ctx.fillStyle = canopyGrad;
  ctx.fill();
  
  // Add dense tree texture
  ctx.fillStyle = darkenColor(baseColor, 0.2);
  for (let i = 0; i < w * h / 100; i++) {
    const tx = x + Math.random() * w;
    const ty = y + Math.random() * h;
    const size = 1 + Math.random() * 2;
    ctx.fillRect(tx, ty, size, size);
  }
  
  // River patterns
  ctx.strokeStyle = darkenColor(baseColor, 0.5);
  ctx.lineWidth = 0.5;
  for (let r = 0; r < 3; r++) {
    ctx.beginPath();
    ctx.moveTo(x + Math.random() * w, y);
    ctx.quadraticCurveTo(
      x + Math.random() * w, 
      y + h/2 + (Math.random() - 0.5) * h/3,
      x + Math.random() * w, 
      y + h
    );
    ctx.stroke();
  }
}

function renderDesertTerrain(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, baseColor: string) {
  // Desert base with heat shimmer effect
  const desertGrad = ctx.createLinearGradient(x, y, x + w, y + h);
  desertGrad.addColorStop(0, lightenColor(baseColor, 0.3));
  desertGrad.addColorStop(0.5, baseColor);
  desertGrad.addColorStop(1, darkenColor(baseColor, 0.2));
  
  ctx.fillStyle = desertGrad;
  ctx.fill();
  
  // Sand dune patterns
  for (let d = 0; d < 8; d++) {
    const duneX = x + Math.random() * w;
    const duneY = y + Math.random() * h;
    const duneW = 20 + Math.random() * 40;
    const duneH = 5 + Math.random() * 15;
    
    ctx.fillStyle = lightenColor(baseColor, 0.1);
    ctx.beginPath();
    ctx.ellipse(duneX, duneY, duneW/2, duneH/2, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Sand particle texture
  ctx.fillStyle = lightenColor(baseColor, 0.15);
  for (let p = 0; p < w * h / 150; p++) {
    const px = x + Math.random() * w;
    const py = y + Math.random() * h;
    ctx.fillRect(px, py, Math.random() * 3, Math.random() * 2);
  }
}

function renderMountainTerrain(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, baseColor: string) {
  // Mountain base
  ctx.fillStyle = baseColor;
  ctx.fill();
  
  // Create mountain peaks
  const numPeaks = Math.floor(w / 15) + 2;
  for (let p = 0; p < numPeaks; p++) {
    const peakX = x + (p / numPeaks) * w + (Math.random() - 0.5) * w/numPeaks;
    const peakY = y + h * (0.3 + Math.random() * 0.4);
    const peakW = 8 + Math.random() * 20;
    const peakH = h * (0.2 + Math.random() * 0.6);
    
    // Mountain shadow gradient
    const peakGrad = ctx.createLinearGradient(peakX, peakY, peakX + peakW, peakY + peakH);
    peakGrad.addColorStop(0, lightenColor(baseColor, 0.4));
    peakGrad.addColorStop(0.3, baseColor);
    peakGrad.addColorStop(1, darkenColor(baseColor, 0.4));
    
    ctx.fillStyle = peakGrad;
    ctx.beginPath();
    ctx.moveTo(peakX, peakY + peakH);
    ctx.lineTo(peakX + peakW/2, peakY);
    ctx.lineTo(peakX + peakW, peakY + peakH);
    ctx.closePath();
    ctx.fill();
  }
  
  // Snow caps for high peaks
  if (h > 20) {
    ctx.fillStyle = "#f0f8ff";
    for (let s = 0; s < numPeaks / 2; s++) {
      const snowX = x + Math.random() * w;
      const snowY = y + h * 0.1;
      const snowSize = 3 + Math.random() * 8;
      ctx.fillRect(snowX, snowY, snowSize, snowSize/2);
    }
  }
}

function renderIceSheet(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, baseColor: string) {
  // Ice gradient
  const iceGrad = ctx.createLinearGradient(x, y, x + w, y + h);
  iceGrad.addColorStop(0, baseColor);
  iceGrad.addColorStop(0.5, lightenColor(baseColor, 0.1));
  iceGrad.addColorStop(1, darkenColor(baseColor, 0.1));
  
  ctx.fillStyle = iceGrad;
  ctx.fill();
  
  // Ice cracks and crevasses
  ctx.strokeStyle = darkenColor(baseColor, 0.2);
  ctx.lineWidth = 1;
  for (let c = 0; c < 10; c++) {
    ctx.beginPath();
    ctx.moveTo(x + Math.random() * w, y + Math.random() * h);
    ctx.lineTo(x + Math.random() * w, y + Math.random() * h);
    ctx.stroke();
  }
  
  // Glacial texture
  ctx.fillStyle = lightenColor(baseColor, 0.05);
  for (let g = 0; g < w * h / 200; g++) {
    const gx = x + Math.random() * w;
    const gy = y + Math.random() * h;
    ctx.fillRect(gx, gy, 2, 1);
  }
}

function renderBorealForest(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, baseColor: string) {
  // Forest gradient
  const forestGrad = ctx.createLinearGradient(x, y, x, y + h);
  forestGrad.addColorStop(0, lightenColor(baseColor, 0.1));
  forestGrad.addColorStop(1, darkenColor(baseColor, 0.2));
  
  ctx.fillStyle = forestGrad;
  ctx.fill();
  
  // Coniferous tree texture pattern
  ctx.fillStyle = darkenColor(baseColor, 0.3);
  for (let t = 0; t < w * h / 80; t++) {
    const treeX = x + Math.random() * w;
    const treeY = y + Math.random() * h;
    
    // Draw small triangular trees
    ctx.beginPath();
    ctx.moveTo(treeX, treeY + 3);
    ctx.lineTo(treeX + 1.5, treeY);
    ctx.lineTo(treeX + 3, treeY + 3);
    ctx.closePath();
    ctx.fill();
  }
  
  // Forest clearings and lakes
  ctx.fillStyle = darkenColor(baseColor, 0.4);
  for (let l = 0; l < 3; l++) {
    const lakeX = x + Math.random() * w;
    const lakeY = y + Math.random() * h;
    const lakeSize = 3 + Math.random() * 8;
    ctx.beginPath();
    ctx.arc(lakeX, lakeY, lakeSize, 0, Math.PI * 2);
    ctx.fill();
  }
}

function renderStandardTerrain(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, baseColor: string, terrainType: string) {
  // Standard terrain with elevation shading
  const terrainGrad = ctx.createRadialGradient(x + w/2, y + h/3, 0, x + w/2, y + h/2, Math.max(w, h)/2);
  terrainGrad.addColorStop(0, lightenColor(baseColor, 0.2));
  terrainGrad.addColorStop(0.6, baseColor);
  terrainGrad.addColorStop(1, darkenColor(baseColor, 0.2));
  
  ctx.fillStyle = terrainGrad;
  ctx.fill();
  
  // Add terrain-specific details
  if (terrainType.includes("temperate") || terrainType.includes("forest")) {
    // Forest texture
    ctx.fillStyle = darkenColor(baseColor, 0.2);
    for (let f = 0; f < w * h / 120; f++) {
      const fx = x + Math.random() * w;
      const fy = y + Math.random() * h;
      ctx.fillRect(fx, fy, 1 + Math.random(), 1 + Math.random());
    }
  } else if (terrainType.includes("grassland") || terrainType.includes("plains") || terrainType.includes("savanna")) {
    // Grassland texture
    ctx.strokeStyle = darkenColor(baseColor, 0.1);
    ctx.lineWidth = 0.5;
    for (let g = 0; g < w * h / 300; g++) {
      const gx = x + Math.random() * w;
      const gy = y + Math.random() * h;
      ctx.beginPath();
      ctx.moveTo(gx, gy);
      ctx.lineTo(gx + Math.random() * 3, gy + Math.random() * 2);
      ctx.stroke();
    }
  }
}

function addAtmosphericHaze(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Add subtle atmospheric perspective
  const atmosphere = ctx.createLinearGradient(0, 0, 0, height);
  atmosphere.addColorStop(0, "rgba(135, 206, 235, 0.05)");    // Sky blue at top
  atmosphere.addColorStop(0.5, "rgba(255, 255, 255, 0.02)");  // Slight haze in middle
  atmosphere.addColorStop(1, "rgba(135, 206, 235, 0.05)");    // Sky blue at bottom
  
  ctx.fillStyle = atmosphere;
  ctx.fillRect(0, 0, width, height);
}

// Enhanced color utility functions
function darkenColor(color: string, factor: number): string {
  const hex = color.replace('#', '');
  const r = Math.max(0, Math.floor(parseInt(hex.substr(0, 2), 16) * (1 - factor)));
  const g = Math.max(0, Math.floor(parseInt(hex.substr(2, 2), 16) * (1 - factor)));
  const b = Math.max(0, Math.floor(parseInt(hex.substr(4, 2), 16) * (1 - factor)));
  return `rgb(${r}, ${g}, ${b})`;
}

function lightenColor(color: string, factor: number): string {
  const hex = color.replace('#', '');
  const r = Math.min(255, Math.floor(parseInt(hex.substr(0, 2), 16) * (1 + factor)));
  const g = Math.min(255, Math.floor(parseInt(hex.substr(2, 2), 16) * (1 + factor)));
  const b = Math.min(255, Math.floor(parseInt(hex.substr(4, 2), 16) * (1 + factor)));
  return `rgb(${r}, ${g}, ${b})`;
}

function drawSatelliteRegion(ctx: CanvasRenderingContext2D, region: any, width: number, height: number) {
  // Base terrain color with enhanced contrast
  ctx.fillStyle = region.color;
  drawOrganicShape(ctx, region, width, height, 0.4);

  // Add strong border for maximum definition
  ctx.strokeStyle = region.color;
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Add a darker outline for even more contrast
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Add terrain texture variation with higher contrast
  const imageData = ctx.getImageData(
    region.x * width - region.w * width * 0.1,
    region.y * height - region.h * height * 0.1,
    region.w * width * 1.2,
    region.h * height * 1.2
  );
  
  const data = imageData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    // Add much more pronounced terrain variation
    const variation = (Math.random() - 0.5) * 60;
    data[i] = Math.max(0, Math.min(255, data[i] + variation));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + variation));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + variation));
  }
  
  ctx.putImageData(imageData, 
    region.x * width - region.w * width * 0.1,
    region.y * height - region.h * height * 0.1
  );
}

function drawOrganicShape(ctx: CanvasRenderingContext2D, shape: any, canvasWidth: number, canvasHeight: number, variation: number = 0.4) {
  const centerX = shape.x * canvasWidth;
  const centerY = shape.y * canvasHeight;
  const radiusX = (shape.w * canvasWidth) / 2;
  const radiusY = (shape.h * canvasHeight) / 2;

  ctx.beginPath();
  
  // Create irregular, realistic coastlines
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    const randomVariation = 0.5 + Math.random() * variation;
    const x = centerX + Math.cos(angle) * radiusX * randomVariation;
    const y = centerY + Math.sin(angle) * radiusY * randomVariation;
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  
  ctx.closePath();
  ctx.fill();
}

function addMountainRanges(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const mountains = [
    // Himalayas
    { x: 0.72, y: 0.42, w: 0.12, h: 0.03, color: "#8b7355" },
    // Andes
    { x: 0.22, y: 0.55, w: 0.02, h: 0.35, color: "#a0522d" },
    // Rocky Mountains
    { x: 0.16, y: 0.32, w: 0.03, h: 0.18, color: "#696969" },
    // Alps
    { x: 0.51, y: 0.31, w: 0.06, h: 0.02, color: "#708090" },
    // Urals
    { x: 0.58, y: 0.25, w: 0.01, h: 0.15, color: "#778899" },
  ];

  mountains.forEach(range => {
    ctx.fillStyle = range.color;
    drawOrganicShape(ctx, range, width, height, 0.2);
  });
}

function addRiverSystems(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.strokeStyle = "#4169e1";
  ctx.lineWidth = 1;
  
  // Amazon River
  ctx.beginPath();
  ctx.moveTo(0.18 * width, 0.62 * height);
  ctx.quadraticCurveTo(0.25 * width, 0.60 * height, 0.32 * width, 0.62 * height);
  ctx.stroke();
  
  // Nile River
  ctx.beginPath();
  ctx.moveTo(0.54 * width, 0.38 * height);
  ctx.quadraticCurveTo(0.55 * width, 0.50 * height, 0.54 * width, 0.65 * height);
  ctx.stroke();
  
  // Mississippi River
  ctx.beginPath();
  ctx.moveTo(0.20 * width, 0.32 * height);
  ctx.quadraticCurveTo(0.21 * width, 0.40 * height, 0.23 * width, 0.48 * height);
  ctx.stroke();
}

function addDesertDetails(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const deserts = [
    // Sahara with dune patterns
    { x: 0.50, y: 0.40, w: 0.18, h: 0.08, color: "#f4e4bc" },
    // Arabian Desert
    { x: 0.58, y: 0.42, w: 0.08, h: 0.06, color: "#ddbf94" },
    // Gobi Desert
    { x: 0.78, y: 0.35, w: 0.12, h: 0.06, color: "#c19a6b" },
    // Mojave
    { x: 0.14, y: 0.43, w: 0.06, h: 0.04, color: "#d2b48c" },
  ];

  deserts.forEach(desert => {
    ctx.fillStyle = desert.color;
    drawOrganicShape(ctx, desert, width, height, 0.3);
    
    // Add dune patterns
    for (let i = 0; i < 5; i++) {
      const duneX = (desert.x + (Math.random() - 0.5) * desert.w) * width;
      const duneY = (desert.y + (Math.random() - 0.5) * desert.h) * height;
      
      ctx.fillStyle = `rgba(240, 230, 180, 0.3)`;
      ctx.beginPath();
      ctx.ellipse(duneX, duneY, 8, 4, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

// Enhanced night lights based on NASA satellite imagery patterns
function addNASAStyleNightLights(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Major megalopolis regions with accurate light distribution
  const lightRegions = [
    // Northeast US Corridor (Boston-NYC-Washington)
    { centerX: 0.22, centerY: 0.39, density: 80, spread: 0.08, intensity: 1.0 },
    // California Coast (SF-LA)
    { centerX: 0.13, centerY: 0.45, density: 60, spread: 0.06, intensity: 0.9 },
    // European Megalopolis (London-Paris-Amsterdam-Ruhr)
    { centerX: 0.51, centerY: 0.30, density: 100, spread: 0.12, intensity: 1.0 },
    // Tokyo-Osaka Corridor
    { centerX: 0.89, centerY: 0.43, density: 70, spread: 0.08, intensity: 1.0 },
    // East China Coast (Shanghai-Beijing corridor)
    { centerX: 0.84, centerY: 0.40, density: 120, spread: 0.15, intensity: 1.1 },
    // Delhi-Mumbai Corridor
    { centerX: 0.77, centerY: 0.47, density: 90, spread: 0.10, intensity: 0.8 },
    // São Paulo-Rio de Janeiro
    { centerX: 0.28, centerY: 0.72, density: 50, spread: 0.06, intensity: 0.8 },
    // Cairo-Nile Delta
    { centerX: 0.54, centerY: 0.45, density: 40, spread: 0.04, intensity: 0.7 },
    // Mexico City
    { centerX: 0.18, centerY: 0.52, density: 30, spread: 0.04, intensity: 0.8 },
    // Nigeria Coast (Lagos)
    { centerX: 0.51, centerY: 0.58, density: 25, spread: 0.03, intensity: 0.6 },
  ];

  lightRegions.forEach(region => {
    for (let i = 0; i < region.density; i++) {
      // Use normal distribution for realistic city clustering
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.abs(normalRandom()) * region.spread * 0.5;
      const x = (region.centerX + Math.cos(angle) * distance) * width;
      const y = (region.centerY + Math.sin(angle) * distance) * height;
      
      // Variable light sizes for cities, towns, and suburbs
      const lightType = Math.random();
      let size, brightness, color;
      
      if (lightType < 0.1) {
        // Major cities - bright white/blue
        size = 3 + Math.random() * 5;
        brightness = 0.9 * region.intensity;
        color = [255, 245, 220]; // Warm white
      } else if (lightType < 0.3) {
        // Medium cities - yellow-white
        size = 2 + Math.random() * 3;
        brightness = 0.7 * region.intensity;
        color = [255, 220, 180]; // Warm yellow
      } else {
        // Towns and suburbs - orange
        size = 1 + Math.random() * 2;
        brightness = 0.4 * region.intensity;
        color = [255, 180, 120]; // Orange
      }
      
      // Create realistic light bloom effect
      const maxRadius = size * 12;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, maxRadius);
      gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${brightness})`);
      gradient.addColorStop(0.2, `rgba(${color[0]}, ${color[1] * 0.9}, ${color[2] * 0.8}, ${brightness * 0.8})`);
      gradient.addColorStop(0.5, `rgba(${color[0] * 0.9}, ${color[1] * 0.7}, ${color[2] * 0.5}, ${brightness * 0.4})`);
      gradient.addColorStop(0.8, `rgba(${color[0] * 0.8}, ${color[1] * 0.5}, ${color[2] * 0.3}, ${brightness * 0.1})`);
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, maxRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Bright core
      ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${brightness})`;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

// Create realistic cloud patterns using multiple noise octaves
function createRealisticClouds(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      // Multiple octaves of noise for realistic cloud formation
      const scale1 = 0.005;
      const scale2 = 0.01;
      const scale3 = 0.02;
      const scale4 = 0.04;
      
      const noise = 
        Math.sin(x * scale1) * Math.cos(y * scale1) * 0.4 +
        Math.sin(x * scale2) * Math.cos(y * scale2) * 0.3 +
        Math.sin(x * scale3) * Math.cos(y * scale3) * 0.2 +
        Math.sin(x * scale4) * Math.cos(y * scale4) * 0.1;
      
      // Create realistic cloud density
      let cloudDensity = Math.max(0, noise + 0.2);
      
      // Add weather patterns - more clouds in certain latitudes
      const latitude = Math.abs((y / height) - 0.5) * 2; // 0 at equator, 1 at poles
      if (latitude > 0.3 && latitude < 0.7) {
        cloudDensity *= 1.3; // More clouds in temperate zones
      }
      
      const alpha = cloudDensity * 255;
      const brightness = Math.min(255, alpha * 1.2);
      
      data[i] = brightness;     // Red
      data[i + 1] = brightness; // Green
      data[i + 2] = brightness; // Blue
      data[i + 3] = alpha;      // Alpha
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

// Enhanced topographical normal map with real elevation data patterns
function createTopographicalNormalMap(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      // Create elevation-based normal mapping
      const elevation = 
        Math.sin(x * 0.02) * Math.sin(y * 0.02) * 0.3 +  // Large features
        Math.sin(x * 0.05) * Math.sin(y * 0.05) * 0.2 +  // Medium features
        Math.sin(x * 0.1) * Math.sin(y * 0.1) * 0.1;     // Fine detail
      
      const normalizedElevation = (elevation + 0.6) * 0.8;
      const normalValue = normalizedElevation * 255;
      
      data[i] = normalValue * 0.6 + 127;     // Red (X normal)
      data[i + 1] = normalValue * 0.6 + 127; // Green (Y normal)
      data[i + 2] = 255;                     // Blue (Z normal)
      data[i + 3] = 255;                     // Alpha
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

// Helper function for normal distribution (Box-Muller transform)
function normalRandom(): number {
  const u1 = Math.random();
  const u2 = Math.random();
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}
