import { useRef, useEffect, useState, useCallback } from "react";

interface UseAudioPlayerReturn {
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  volume: number;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  play: () => Promise<void>;
  pause: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  load: (url: string) => void;
}

export function useAudioPlayer(): UseAudioPlayerReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolumeState] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    audio.crossOrigin = "anonymous";
    audio.preload = "none";
    audioRef.current = audio;

    // Event listeners
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleError = (e: any) => {
      setError("Failed to load audio stream");
      setIsLoading(false);
      setIsPlaying(false);
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlayThrough = () => setIsLoading(false);

    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("error", handleError);
    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const play = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      setError(null);
      await audioRef.current.play();
    } catch (err) {
      setError("Playback failed. Stream may be unavailable.");
      setIsPlaying(false);
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  }, [isMuted]);

  const load = useCallback((url: string) => {
    if (!audioRef.current) return;

    setError(null);
    setIsLoading(true);
    audioRef.current.src = url;
    audioRef.current.load();
  }, []);

  return {
    isPlaying,
    isLoading,
    error,
    volume,
    isMuted,
    currentTime,
    duration,
    play,
    pause,
    setVolume,
    toggleMute,
    load,
  };
}
