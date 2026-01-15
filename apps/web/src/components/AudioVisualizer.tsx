"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AudioVisualizerProps {
  audioElement?: HTMLAudioElement | null;
  isPlaying: boolean;
  className?: string;
  type?: "bars" | "waveform" | "circular";
}

export function AudioVisualizer({
  audioElement,
  isPlaying,
  className = "",
  type = "bars",
}: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!audioElement || !isPlaying) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    try {
      // Create audio context and analyser
      const audioContext = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
      const source = audioContext.createMediaElementSource(audioElement);
      const analyser = audioContext.createAnalyser();

      // Configure analyser
      analyser.fftSize = type === "waveform" ? 2048 : 256;
      analyser.smoothingTimeConstant = 0.8;
      analyser.minDecibels = -90;
      analyser.maxDecibels = -10;

      // Connect audio graph
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

      // Start visualization
      const animate = () => {
        if (!analyserRef.current || !dataArrayRef.current || !canvasRef.current)
          return;

        if (dataArrayRef.current) {
          analyserRef.current.getByteFrequencyData(dataArrayRef.current as any);
        }

        switch (type) {
          case "bars":
            drawBars();
            break;
          case "waveform":
            drawWaveform();
            break;
          case "circular":
            drawCircular();
            break;
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      // Resume audio context if suspended
      if (audioContext.state === "suspended") {
        audioContext.resume();
      }

      animate();
    } catch (error) {
      console.warn("Audio visualization not supported:", error);
      setIsSupported(false);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [audioElement, isPlaying, type]);

  const drawBars = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const data = dataArrayRef.current!;

    const width = canvas.width;
    const height = canvas.height;
    const barWidth = (width / data.length) * 2;

    // Clear canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, width, height);

    // Draw bars
    for (let i = 0; i < data.length; i++) {
      const barHeight = (data[i] / 255) * height * 0.8;
      const x = i * barWidth;
      const y = height - barHeight;

      // Create gradient
      const gradient = ctx.createLinearGradient(0, y, 0, height);
      gradient.addColorStop(0, "#60a5fa");
      gradient.addColorStop(0.5, "#3b82f6");
      gradient.addColorStop(1, "#1d4ed8");

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth - 1, barHeight);
    }
  };

  const drawWaveform = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const data = dataArrayRef.current!;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, width, height);

    // Draw waveform
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#60a5fa";
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
  };

  const drawCircular = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const data = dataArrayRef.current!;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.3;

    // Clear canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, width, height);

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
      gradient.addColorStop(0, "rgba(96, 165, 250, 0.8)");
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.3)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isPlaying ? 1 : 0.3, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <canvas
        ref={canvasRef}
        width={type === "bars" ? 200 : type === "circular" ? 150 : 300}
        height={type === "bars" ? 60 : type === "circular" ? 150 : 80}
        className="w-full h-full rounded-lg bg-black/20 backdrop-blur-sm"
      />

      {/* Overlay effects */}
      {isPlaying && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none" />
      )}
    </motion.div>
  );
}
