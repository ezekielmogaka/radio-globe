import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { RadioStation } from "../types";
import { AudioService, AudioState } from "../services/audioService";
import { radioStationService } from "../services/radioStationService";

interface UseModularAudioOptions {
  volume?: number;
  autoPlay?: boolean;
  retryAttempts?: number;
  retryDelay?: number;
}

interface ModularAudioState {
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  volume: number;
  isMuted: boolean;
  currentTime: number;
  state: AudioState;
  currentStation: RadioStation | null;
}

interface ModularAudioActions {
  play: () => Promise<void>;
  pause: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  loadStation: (station: RadioStation) => Promise<void>;
  clearError: () => void;
  getAudioElement: () => HTMLAudioElement | null;
}

export function useModularAudio(
  options: UseModularAudioOptions = {},
): [ModularAudioState, ModularAudioActions] {
  const audioServiceRef = useRef<AudioService | null>(null);

  // Memoize options to prevent infinite loops
  const memoizedOptions = useMemo(
    () => ({
      volume: options.volume || 0.7,
      autoPlay: options.autoPlay || false,
      retryAttempts: options.retryAttempts || 3,
      retryDelay: options.retryDelay || 2000,
    }),
    [
      options.volume,
      options.autoPlay,
      options.retryAttempts,
      options.retryDelay,
    ],
  );

  const [state, setState] = useState<ModularAudioState>(() => ({
    isPlaying: false,
    isLoading: false,
    error: null,
    volume: memoizedOptions.volume,
    isMuted: false,
    currentTime: 0,
    state: "idle",
    currentStation: null,
  }));

  // Initialize audio service
  useEffect(() => {
    audioServiceRef.current = new AudioService({
      volume: memoizedOptions.volume,
      retryAttempts: memoizedOptions.retryAttempts,
      retryDelay: memoizedOptions.retryDelay,
    });

    const service = audioServiceRef.current;

    // Set up event listeners
    service.on("stateChange", (audioState) => {
      setState((prev) => ({
        ...prev,
        state: audioState,
        isPlaying: audioState === "playing",
        isLoading: audioState === "loading",
      }));
    });

    service.on("error", (error) => {
      setState((prev) => ({
        ...prev,
        error,
        isLoading: false,
        isPlaying: false,
      }));
    });

    service.on("volumeChange", (volume) => {
      setState((prev) => ({
        ...prev,
        volume,
        isMuted: volume === 0,
      }));
    });

    service.on("timeUpdate", (currentTime) => {
      setState((prev) => ({
        ...prev,
        currentTime,
      }));
    });

    return () => {
      service.destroy();
    };
  }, [
    memoizedOptions.volume,
    memoizedOptions.retryAttempts,
    memoizedOptions.retryDelay,
  ]);

  const play = useCallback(async () => {
    if (!audioServiceRef.current) return;

    try {
      await audioServiceRef.current.play();
      setState((prev) => ({ ...prev, error: null }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: "Failed to play audio. Please try again.",
      }));
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioServiceRef.current) return;
    audioServiceRef.current.pause();
  }, []);

  const setVolume = useCallback((volume: number) => {
    if (!audioServiceRef.current) return;
    audioServiceRef.current.setVolume(volume);
  }, []);

  const toggleMute = useCallback(() => {
    if (!audioServiceRef.current) return;

    if (state.isMuted) {
      audioServiceRef.current.setVolume(state.volume > 0 ? state.volume : 0.7);
    } else {
      audioServiceRef.current.mute();
    }
  }, [state.isMuted, state.volume]);

  const loadStation = useCallback(
    async (station: RadioStation) => {
      if (!audioServiceRef.current) return;

      try {
        setState((prev) => ({
          ...prev,
          error: null,
          currentStation: station,
        }));

        // Get proxied URL to avoid CORS issues
        const streamUrl = radioStationService.getProxiedStreamUrl(station);

        await audioServiceRef.current.loadStation(station, streamUrl);

        // Auto-play if enabled
        if (memoizedOptions.autoPlay) {
          await play();
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: "Failed to load radio station.",
        }));
      }
    },
    [memoizedOptions.autoPlay, play],
  );

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const getAudioElement = useCallback((): HTMLAudioElement | null => {
    return audioServiceRef.current?.getAudioElement() || null;
  }, []);

  const playerState: ModularAudioState = useMemo(
    () => ({
      ...state,
      currentStation:
        audioServiceRef.current?.getCurrentStation() || state.currentStation,
    }),
    [state],
  );

  const actions: ModularAudioActions = useMemo(
    () => ({
      play,
      pause,
      setVolume,
      toggleMute,
      loadStation,
      clearError,
      getAudioElement,
    }),
    [
      play,
      pause,
      setVolume,
      toggleMute,
      loadStation,
      clearError,
      getAudioElement,
    ],
  );

  return [playerState, actions];
}
