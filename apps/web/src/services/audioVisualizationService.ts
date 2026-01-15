export type VisualizationType = "bars" | "waveform" | "circular" | "particles";

export interface VisualizerConfig {
  fftSize: number;
  smoothingTimeConstant: number;
  minDecibels: number;
  maxDecibels: number;
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface VisualizerRenderer {
  render(
    data: Uint8Array,
    canvas: HTMLCanvasElement,
    config: VisualizerConfig,
  ): void;
}

export class BarsRenderer implements VisualizerRenderer {
  render(
    data: Uint8Array,
    canvas: HTMLCanvasElement,
    config: VisualizerConfig,
  ): void {
    const ctx = canvas.getContext("2d")!;
    const width = canvas.width;
    const height = canvas.height;
    const barWidth = (width / data.length) * 2;

    // Clear canvas with fade effect
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Draw bars
    for (let i = 0; i < data.length; i++) {
      const barHeight = (data[i] / 255) * height * 0.8;
      const x = i * barWidth;
      const y = height - barHeight;

      // Create gradient
      const gradient = ctx.createLinearGradient(0, y, 0, height);
      gradient.addColorStop(0, config.primaryColor);
      gradient.addColorStop(0.5, config.secondaryColor);
      gradient.addColorStop(1, config.primaryColor);

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth - 1, barHeight);
    }
  }
}

export class WaveformRenderer implements VisualizerRenderer {
  render(
    data: Uint8Array,
    canvas: HTMLCanvasElement,
    config: VisualizerConfig,
  ): void {
    const ctx = canvas.getContext("2d")!;
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas with fade effect
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Draw waveform
    ctx.lineWidth = 2;
    ctx.strokeStyle = config.primaryColor;
    ctx.beginPath();

    const sliceWidth = width / data.length;
    let x = 0;

    for (let i = 0; i < data.length; i++) {
      const v = data[i] / 128.0;
      const y = (v * height) / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctx.stroke();
  }
}

export class CircularRenderer implements VisualizerRenderer {
  render(
    data: Uint8Array,
    canvas: HTMLCanvasElement,
    config: VisualizerConfig,
  ): void {
    const ctx = canvas.getContext("2d")!;
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.3;

    // Clear canvas with fade effect
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Draw center circle
    ctx.fillStyle = config.primaryColor + "40";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.8, 0, Math.PI * 2);
    ctx.fill();

    // Draw circular visualization
    const angleStep = (Math.PI * 2) / data.length;

    for (let i = 0; i < data.length; i++) {
      const amplitude = (data[i] / 255) * radius;
      const angle = i * angleStep;

      const x1 = centerX + Math.cos(angle) * radius;
      const y1 = centerY + Math.sin(angle) * radius;
      const x2 = centerX + Math.cos(angle) * (radius + amplitude);
      const y2 = centerY + Math.sin(angle) * (radius + amplitude);

      // Create gradient
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, config.primaryColor + "CC");
      gradient.addColorStop(1, config.secondaryColor + "66");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
}

export class ParticlesRenderer implements VisualizerRenderer {
  private particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
  }> = [];

  render(
    data: Uint8Array,
    canvas: HTMLCanvasElement,
    config: VisualizerConfig,
  ): void {
    const ctx = canvas.getContext("2d")!;
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Calculate average amplitude
    const avgAmplitude = data.reduce((sum, val) => sum + val, 0) / data.length;

    // Generate new particles based on audio intensity
    if (avgAmplitude > 50) {
      for (let i = 0; i < Math.floor(avgAmplitude / 20); i++) {
        this.particles.push({
          x: Math.random() * width,
          y: height,
          vx: (Math.random() - 0.5) * 4,
          vy: -Math.random() * 5 - 2,
          life: 1.0,
        });
      }
    }

    // Update and draw particles
    this.particles = this.particles.filter((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // gravity
      particle.life -= 0.02;

      if (particle.life > 0) {
        ctx.fillStyle =
          config.primaryColor +
          Math.floor(particle.life * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();
        return true;
      }
      return false;
    });
  }
}

export class AudioVisualizationService {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private source: MediaElementAudioSourceNode | null = null;
  private dataArray: Uint8Array | null = null;
  private animationFrame: number | null = null;
  private renderers: Map<VisualizationType, VisualizerRenderer>;
  private currentRenderer: VisualizerRenderer | null = null;
  private currentType: VisualizationType = "bars";
  private config: VisualizerConfig;
  private initialized: boolean = false;

  constructor(config: Partial<VisualizerConfig> = {}) {
    this.config = {
      fftSize: 256,
      smoothingTimeConstant: 0.8,
      minDecibels: -90,
      maxDecibels: -10,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      primaryColor: "#60a5fa",
      secondaryColor: "#3b82f6",
      ...config,
    };

    this.renderers = new Map([
      ["bars", new BarsRenderer()],
      ["waveform", new WaveformRenderer()],
      ["circular", new CircularRenderer()],
      ["particles", new ParticlesRenderer()],
    ]);
  }

  public initialize(audioElement: HTMLAudioElement): boolean {
    // Prevent re-initialization
    if (this.initialized) {
      return true;
    }

    try {
      this.audioContext = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
      
      // Create source node only once
      // Note: This will fail if the element is already connected to a source
      try {
        this.source = this.audioContext.createMediaElementSource(audioElement);
      } catch (sourceError) {
        console.warn("Cannot create media element source (already in use). Visualization disabled.");
        // Clean up and return true - audio will still work without visualization
        this.audioContext.close();
        this.audioContext = null;
        this.initialized = true; // Mark as initialized to prevent retrying
        return true; // Return true so audio continues to work
      }
      
      this.analyser = this.audioContext.createAnalyser();

      // Configure analyser
      this.analyser.fftSize = this.config.fftSize;
      this.analyser.smoothingTimeConstant = this.config.smoothingTimeConstant;
      this.analyser.minDecibels = this.config.minDecibels;
      this.analyser.maxDecibels = this.config.maxDecibels;

      // Connect audio graph: source -> analyser -> destination
      // This ensures audio passes through the analyser but still plays
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);

      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

      // Resume audio context if suspended
      if (this.audioContext.state === "suspended") {
        this.audioContext.resume();
      }

      this.initialized = true;
      return true;
    } catch (error) {
      console.warn("Audio visualization initialization failed:", error);
      this.initialized = true; // Mark as initialized to prevent retrying
      return true; // Return true so audio continues to work
    }
  }

  public start(
    canvas: HTMLCanvasElement,
    type: VisualizationType = "bars",
  ): void {
    this.currentType = type;
    this.currentRenderer = this.renderers.get(type) || null;

    if (!this.analyser || !this.dataArray || !this.currentRenderer) {
      return;
    }

    // Resume audio context if suspended (required for iOS and other browsers)
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }

    const animate = () => {
      if (!this.analyser || !this.dataArray || !this.currentRenderer) return;

      if (this.dataArray) {
        if (this.currentType === "waveform") {
          this.analyser.getByteTimeDomainData(this.dataArray as any);
        } else {
          this.analyser.getByteFrequencyData(this.dataArray as any);
        }
      }
      this.currentRenderer.render(this.dataArray, canvas, this.config);

      this.animationFrame = requestAnimationFrame(animate);
    };

    animate();
  }

  public stop(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  public changeType(type: VisualizationType): void {
    this.currentType = type;
    this.currentRenderer = this.renderers.get(type) || null;
  }

  public updateConfig(newConfig: Partial<VisualizerConfig>): void {
    const oldFftSize = this.config.fftSize;
    this.config = { ...this.config, ...newConfig };

    if (this.analyser) {
      this.analyser.smoothingTimeConstant = this.config.smoothingTimeConstant;
      this.analyser.minDecibels = this.config.minDecibels;
      this.analyser.maxDecibels = this.config.maxDecibels;

      if (this.config.fftSize !== oldFftSize) {
        this.analyser.fftSize = this.config.fftSize;
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      }
    }
  }

  // Get available visualization types
  public getAvailableTypes(): VisualizationType[] {
    return Array.from(this.renderers.keys());
  }

  public destroy(): void {
    this.stop();
    
    // Disconnect audio nodes
    if (this.source) {
      this.source.disconnect();
      this.source = null;
    }
    
    if (this.analyser) {
      this.analyser.disconnect();
      this.analyser = null;
    }
    
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    
    this.dataArray = null;
    this.currentRenderer = null;
    this.initialized = false;
  }
}
