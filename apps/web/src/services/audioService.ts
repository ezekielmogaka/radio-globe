import { RadioStation } from "../types";

export type AudioState = "idle" | "loading" | "playing" | "paused" | "error";

export interface AudioPlayerConfig {
  volume: number;
  crossOrigin: "anonymous" | "use-credentials";
  preload: "none" | "metadata" | "auto";
  retryAttempts: number;
  retryDelay: number;
}

export interface AudioPlayerEvents {
  stateChange: (state: AudioState) => void;
  error: (error: string) => void;
  loadStart: () => void;
  canPlay: () => void;
  volumeChange: (volume: number) => void;
  timeUpdate: (currentTime: number) => void;
}

export class AudioService {
  private audio: HTMLAudioElement | null = null;
  private state: AudioState = "idle";
  private config: AudioPlayerConfig;
  private listeners: Partial<AudioPlayerEvents> = {};
  private retryCount = 0;
  private currentStation: RadioStation | null = null;
  private lastTimeUpdate = 0;
  private readonly TIME_UPDATE_THROTTLE = 100; // ms

  constructor(config: Partial<AudioPlayerConfig> = {}) {
    this.config = {
      volume: 0.7,
      crossOrigin: "anonymous",
      preload: "none",
      retryAttempts: 3,
      retryDelay: 2000,
      ...config,
    };

    this.initializeAudio();
  }

  private initializeAudio() {
    this.audio = new Audio();
    this.audio.volume = this.config.volume;
    this.audio.crossOrigin = this.config.crossOrigin;
    this.audio.preload = this.config.preload;

    // Set up event listeners
    this.audio.addEventListener("loadstart", this.handleLoadStart.bind(this));
    this.audio.addEventListener("canplay", this.handleCanPlay.bind(this));
    this.audio.addEventListener("play", this.handlePlay.bind(this));
    this.audio.addEventListener("pause", this.handlePause.bind(this));
    this.audio.addEventListener("error", this.handleError.bind(this));
    this.audio.addEventListener(
      "volumechange",
      this.handleVolumeChange.bind(this),
    );
    this.audio.addEventListener("timeupdate", this.handleTimeUpdate.bind(this));
  }

  private handleLoadStart() {
    this.setState("loading");
    this.listeners.loadStart?.();
  }

  private handleCanPlay() {
    this.setState("paused");
    this.listeners.canPlay?.();
  }

  private handlePlay() {
    this.setState("playing");
  }

  private handlePause() {
    this.setState("paused");
  }

  private handleError() {
    this.setState("error");
    const errorMessage = this.getErrorMessage();
    this.listeners.error?.(errorMessage);

    // Attempt retry if configured
    if (this.retryCount < this.config.retryAttempts) {
      this.scheduleRetry();
    }
  }

  private handleVolumeChange() {
    if (this.audio) {
      this.listeners.volumeChange?.(this.audio.volume);
    }
  }

  private handleTimeUpdate() {
    if (this.audio) {
      const now = Date.now();
      if (now - this.lastTimeUpdate >= this.TIME_UPDATE_THROTTLE) {
        this.lastTimeUpdate = now;
        this.listeners.timeUpdate?.(this.audio.currentTime);
      }
    }
  }

  private getErrorMessage(): string {
    if (!this.audio?.error) return "Unknown audio error";

    switch (this.audio.error.code) {
      case MediaError.MEDIA_ERR_ABORTED:
        return "Audio loading was aborted";
      case MediaError.MEDIA_ERR_NETWORK:
        return "Network error occurred while loading audio";
      case MediaError.MEDIA_ERR_DECODE:
        return "Audio format not supported";
      case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
        return "Audio source not supported";
      default:
        return "Audio playback failed";
    }
  }

  private scheduleRetry() {
    setTimeout(() => {
      if (this.audio && this.currentStation) {
        this.retryCount++;
        console.log(
          `Retrying audio load (attempt ${this.retryCount}/${this.config.retryAttempts})`,
        );
        this.audio.load();
      }
    }, this.config.retryDelay);
  }

  private setState(state: AudioState) {
    this.state = state;
    this.listeners.stateChange?.(state);
  }

  // Public API
  public on<T extends keyof AudioPlayerEvents>(
    event: T,
    callback: AudioPlayerEvents[T],
  ) {
    this.listeners[event] = callback as any;
  }

  public off<T extends keyof AudioPlayerEvents>(event: T) {
    delete this.listeners[event];
  }

  public async loadStation(
    station: RadioStation,
    streamUrl?: string,
  ): Promise<void> {
    if (!this.audio) return;

    this.currentStation = station;
    this.retryCount = 0;

    const url = streamUrl || station.url;
    if (this.audio.src !== url) {
      this.audio.src = url;
      this.audio.load();
    }
  }

  public async play(): Promise<void> {
    if (!this.audio) return;

    try {
      await this.audio.play();
    } catch (error) {
      this.setState("error");
      throw error;
    }
  }

  public pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  public setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }

  public getVolume(): number {
    return this.audio?.volume || 0;
  }

  public mute(): void {
    this.setVolume(0);
  }

  public unmute(): void {
    this.setVolume(this.config.volume);
  }

  public getState(): AudioState {
    return this.state;
  }

  public getCurrentStation(): RadioStation | null {
    return this.currentStation;
  }

  public getAudioElement(): HTMLAudioElement | null {
    return this.audio;
  }

  public destroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.removeAttribute("src");
      this.audio.load();
      this.audio = null;
    }
    this.listeners = {};
    this.currentStation = null;
  }
}
