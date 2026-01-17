"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface AudioVisualizerProps {
  audioElement?: HTMLAudioElement | null;
  isPlaying: boolean;
  className?: string;
  type?: "bars" | "waveform" | "circular" | "spectrum" | "neon-bars" | "orbital";
  color?: "cyan" | "purple" | "gradient" | "rainbow";
  size?: "sm" | "md" | "lg";
}

// Futuristic color schemes
const colorSchemes = {
  cyan: {
    primary: "#00f5ff",
    secondary: "#00a8ff",
    glow: "rgba(0, 245, 255, 0.5)",
  },
  purple: {
    primary: "#a855f7",
    secondary: "#ff00ff",
    glow: "rgba(168, 85, 247, 0.5)",
  },
  gradient: {
    primary: "#00f5ff",
    secondary: "#a855f7",
    glow: "rgba(0, 245, 255, 0.3)",
  },
  rainbow: {
    primary: "#ff0080",
    secondary: "#00ff88",
    glow: "rgba(255, 0, 128, 0.3)",
  },
};

const sizeConfig = {
  sm: { width: 150, height: 40, barCount: 16 },
  md: { width: 250, height: 60, barCount: 32 },
  lg: { width: 400, height: 100, barCount: 64 },
};

export function AudioVisualizer({
  audioElement,
  isPlaying,
  className = "",
  type = "neon-bars",
  color = "gradient",
  size = "md",
}: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [audioConnected, setAudioConnected] = useState(false);

  const colors = colorSchemes[color];
  const dimensions = sizeConfig[size];

  // Initialize audio context and connect to audio element
  useEffect(() => {
    if (!audioElement || audioConnected) return;

    try {
      // Create or reuse audio context
      if (!audioContextRef.current) {
        audioContextRef.current = new (
          window.AudioContext || (window as any).webkitAudioContext
        )();
      }

      const audioContext = audioContextRef.current;

      // Create analyser if not exists
      if (!analyserRef.current) {
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = type === "waveform" ? 2048 : 256;
        analyser.smoothingTimeConstant = 0.75;
        analyser.minDecibels = -90;
        analyser.maxDecibels = -10;
        analyserRef.current = analyser;
      }

      // Connect source only once
      if (!sourceRef.current) {
        try {
          const source = audioContext.createMediaElementSource(audioElement);
          source.connect(analyserRef.current);
          analyserRef.current.connect(audioContext.destination);
          sourceRef.current = source;
          setAudioConnected(true);
        } catch (e) {
          // Audio element may already be connected
          console.warn("Audio already connected to context");
          setAudioConnected(true);
        }
      }

      dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
    } catch (error) {
      console.warn("Audio visualization not supported:", error);
      setIsSupported(false);
    }
  }, [audioElement, audioConnected, type]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || !analyserRef.current || !canvasRef.current) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    // Resume audio context if suspended
    if (audioContextRef.current?.state === "suspended") {
      audioContextRef.current.resume();
    }

    const animate = () => {
      if (!analyserRef.current || !dataArrayRef.current || !canvasRef.current) return;

      analyserRef.current.getByteFrequencyData(dataArrayRef.current as Uint8Array<ArrayBuffer>);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Clear with trail effect
      ctx.fillStyle = "rgba(3, 3, 8, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      switch (type) {
        case "neon-bars":
          drawNeonBars(ctx, canvas, dataArrayRef.current, colors);
          break;
        case "bars":
          drawBars(ctx, canvas, dataArrayRef.current, colors);
          break;
        case "waveform":
          drawWaveform(ctx, canvas, dataArrayRef.current, colors);
          break;
        case "circular":
          drawCircular(ctx, canvas, dataArrayRef.current, colors);
          break;
        case "spectrum":
          drawSpectrum(ctx, canvas, dataArrayRef.current, colors);
          break;
        case "orbital":
          drawOrbital(ctx, canvas, dataArrayRef.current, colors);
          break;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, type, colors]);

  // Drawing functions
  const drawNeonBars = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    data: Uint8Array,
    colors: typeof colorSchemes.cyan
  ) => {
    const barCount = Math.min(dimensions.barCount, data.length);
    const barWidth = (canvas.width / barCount) * 0.7;
    const gap = (canvas.width / barCount) * 0.3;

    for (let i = 0; i < barCount; i++) {
      const dataIndex = Math.floor((i / barCount) * data.length);
      const value = data[dataIndex];
      const barHeight = (value / 255) * canvas.height * 0.85;
      const x = i * (barWidth + gap);
      const y = canvas.height - barHeight;

      // Neon glow effect
      const gradient = ctx.createLinearGradient(x, canvas.height, x, y);
      gradient.addColorStop(0, colors.primary);
      gradient.addColorStop(0.5, colors.secondary);
      gradient.addColorStop(1, "transparent");

      // Draw glow
      ctx.shadowColor = colors.glow;
      ctx.shadowBlur = 15;
      ctx.fillStyle = gradient;

      // Draw bar with rounded top
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, [barWidth / 2, barWidth / 2, 0, 0]);
      ctx.fill();

      // Top highlight
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillRect(x + barWidth * 0.2, y, barWidth * 0.6, 2);
    }
  };

  const drawBars = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    data: Uint8Array,
    colors: typeof colorSchemes.cyan
  ) => {
    const barWidth = (canvas.width / data.length) * 2;

    for (let i = 0; i < data.length; i++) {
      const barHeight = (data[i] / 255) * canvas.height * 0.8;
      const x = i * barWidth;
      const y = canvas.height - barHeight;

      const gradient = ctx.createLinearGradient(0, y, 0, canvas.height);
      gradient.addColorStop(0, colors.primary);
      gradient.addColorStop(1, colors.secondary);

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth - 1, barHeight);
    }
  };

  const drawWaveform = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    data: Uint8Array,
    colors: typeof colorSchemes.cyan
  ) => {
    ctx.lineWidth = 2;
    ctx.strokeStyle = colors.primary;
    ctx.shadowColor = colors.glow;
    ctx.shadowBlur = 10;
    ctx.beginPath();

    const sliceWidth = canvas.width / data.length;
    let x = 0;

    for (let i = 0; i < data.length; i++) {
      const v = data[i] / 128.0;
      const y = (v * canvas.height) / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctx.stroke();

    // Mirror effect
    ctx.strokeStyle = colors.secondary;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    x = 0;

    for (let i = 0; i < data.length; i++) {
      const v = data[i] / 128.0;
      const y = canvas.height - (v * canvas.height) / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  const drawCircular = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    data: Uint8Array,
    colors: typeof colorSchemes.cyan
  ) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.25;
    const angleStep = (Math.PI * 2) / data.length;

    ctx.shadowColor = colors.glow;
    ctx.shadowBlur = 15;

    for (let i = 0; i < data.length; i++) {
      const amplitude = (data[i] / 255) * radius;
      const angle = i * angleStep - Math.PI / 2;

      const x1 = centerX + Math.cos(angle) * radius;
      const y1 = centerY + Math.sin(angle) * radius;
      const x2 = centerX + Math.cos(angle) * (radius + amplitude);
      const y2 = centerY + Math.sin(angle) * (radius + amplitude);

      const hue = (i / data.length) * 60 + 180; // Cyan to purple range
      ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Center circle
    ctx.shadowBlur = 20;
    ctx.fillStyle = colors.primary;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawSpectrum = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    data: Uint8Array,
    colors: typeof colorSchemes.cyan
  ) => {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, colors.primary);
    gradient.addColorStop(0.5, colors.secondary);
    gradient.addColorStop(1, colors.primary);

    ctx.fillStyle = gradient;
    ctx.shadowColor = colors.glow;
    ctx.shadowBlur = 10;

    // Draw frequency spectrum as a mountain
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    for (let i = 0; i < data.length; i++) {
      const x = (i / data.length) * canvas.width;
      const y = canvas.height - (data[i] / 255) * canvas.height * 0.9;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    ctx.fill();
  };

  const drawOrbital = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    data: Uint8Array,
    colors: typeof colorSchemes.cyan
  ) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const time = Date.now() * 0.001;

    // Draw orbiting particles based on audio
    for (let i = 0; i < 32; i++) {
      const dataIndex = Math.floor((i / 32) * data.length);
      const value = data[dataIndex] / 255;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.3;
      const radius = baseRadius * (0.5 + value * 0.5);
      const angle = (i / 32) * Math.PI * 2 + time;

      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const particleSize = 2 + value * 4;

      const hue = (i / 32) * 60 + 180;
      ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${0.3 + value * 0.7})`;
      ctx.shadowColor = colors.glow;
      ctx.shadowBlur = 10 + value * 10;

      ctx.beginPath();
      ctx.arc(x, y, particleSize, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  if (!isSupported) {
    // Fallback animated bars when audio API not supported
    return (
      <div className={`flex items-center justify-center gap-1 ${className}`}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-full"
            style={{
              background: `linear-gradient(to top, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 0 10px ${colors.glow}`,
            }}
            animate={isPlaying ? {
              height: [4, 20, 8, 16, 4],
            } : { height: 4 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isPlaying ? 1 : 0.4, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full rounded-lg"
        style={{
          background: "rgba(3, 3, 8, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      />

      {/* Overlay glow effect */}
      {isPlaying && (
        <div 
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${colors.glow} 0%, transparent 70%)`,
            opacity: 0.3,
          }}
        />
      )}

      {/* Corner accents */}
      <div 
        className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 rounded-tl-lg"
        style={{ borderColor: colors.primary }}
      />
      <div 
        className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 rounded-tr-lg"
        style={{ borderColor: colors.primary }}
      />
      <div 
        className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 rounded-bl-lg"
        style={{ borderColor: colors.secondary }}
      />
      <div 
        className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 rounded-br-lg"
        style={{ borderColor: colors.secondary }}
      />
    </motion.div>
  );
}

