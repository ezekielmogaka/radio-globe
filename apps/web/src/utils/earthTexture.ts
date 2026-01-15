import * as THREE from "three";

export class EarthTextureGenerator {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  generateTexture(): THREE.Texture {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = this.width;
    canvas.height = this.height;

    // Create realistic Earth texture with continents and oceans
    this.drawBaseLayer(ctx);
    this.drawContinents(ctx);
    this.drawMountains(ctx);
    this.drawDeserts(ctx);
    this.addRandomTerrain(ctx);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.flipY = false;

    return texture;
  }

  private drawBaseLayer(ctx: CanvasRenderingContext2D): void {
    // Ocean blue background
    const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, "#1e3a5f"); // Deep blue at poles
    gradient.addColorStop(0.5, "#2b5a87"); // Medium blue at equator
    gradient.addColorStop(1, "#1e3a5f"); // Deep blue at poles

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.width, this.height);
  }

  private drawContinents(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#4a5d3a"; // Forest green base

    // Approximate continent shapes (simplified for performance)
    const continents = [
      // North America
      { x: 0.15, y: 0.25, width: 0.3, height: 0.3 },
      // South America
      { x: 0.2, y: 0.6, width: 0.15, height: 0.35 },
      // Europe
      { x: 0.48, y: 0.3, width: 0.12, height: 0.15 },
      // Africa
      { x: 0.52, y: 0.45, width: 0.15, height: 0.4 },
      // Asia
      { x: 0.6, y: 0.2, width: 0.35, height: 0.4 },
      // Australia
      { x: 0.8, y: 0.75, width: 0.12, height: 0.08 },
    ];

    continents.forEach((continent) => {
      this.drawContinentShape(ctx, continent);
    });
  }

  private drawContinentShape(
    ctx: CanvasRenderingContext2D,
    continent: { x: number; y: number; width: number; height: number },
  ): void {
    const x = continent.x * this.width;
    const y = continent.y * this.height;
    const width = continent.width * this.width;
    const height = continent.height * this.height;

    // Create organic continent shape
    ctx.beginPath();
    ctx.ellipse(x, y, width / 2, height / 2, 0, 0, Math.PI * 2);

    // Add irregular edges
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const offsetX =
        Math.cos(angle) * (width / 2) * (0.7 + Math.random() * 0.6);
      const offsetY =
        Math.sin(angle) * (height / 2) * (0.7 + Math.random() * 0.6);

      if (i === 0) {
        ctx.moveTo(x + offsetX, y + offsetY);
      } else {
        ctx.lineTo(x + offsetX, y + offsetY);
      }
    }
    ctx.closePath();
    ctx.fill();

    // Add coastal variations
    ctx.strokeStyle = "#3d4f2d";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  private drawMountains(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#8B4513"; // Brown for mountains

    // Major mountain ranges
    const mountains = [
      // Himalayas
      { x: 0.7, y: 0.35, width: 0.15, height: 0.05 },
      // Andes
      { x: 0.22, y: 0.6, width: 0.03, height: 0.25 },
      // Rocky Mountains
      { x: 0.18, y: 0.3, width: 0.05, height: 0.15 },
      // Alps
      { x: 0.51, y: 0.32, width: 0.08, height: 0.03 },
    ];

    mountains.forEach((range) => {
      const x = range.x * this.width;
      const y = range.y * this.height;
      const width = range.width * this.width;
      const height = range.height * this.height;

      ctx.fillRect(x, y, width, height);
    });
  }

  private drawDeserts(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#DEB887"; // Sandy color

    // Major deserts
    const deserts = [
      // Sahara
      { x: 0.48, y: 0.45, width: 0.2, height: 0.08 },
      // Gobi
      { x: 0.75, y: 0.32, width: 0.12, height: 0.06 },
      // Arabian
      { x: 0.58, y: 0.42, width: 0.08, height: 0.06 },
      // Mojave/Sonoran
      { x: 0.15, y: 0.42, width: 0.08, height: 0.04 },
    ];

    deserts.forEach((desert) => {
      const x = desert.x * this.width;
      const y = desert.y * this.height;
      const width = desert.width * this.width;
      const height = desert.height * this.height;

      ctx.fillRect(x, y, width, height);
    });
  }

  private addRandomTerrain(ctx: CanvasRenderingContext2D): void {
    // Add noise and detail to make it look more realistic
    const imageData = ctx.getImageData(0, 0, this.width, this.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 40;

      data[i] = Math.max(0, Math.min(255, data[i] + noise)); // Red
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise)); // Green
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise)); // Blue
    }

    ctx.putImageData(imageData, 0, 0);
  }
}
