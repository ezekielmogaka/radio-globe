/**
 * Event types for the Globe Observer system
 */
export enum GlobeEventType {
  STATION_SELECTED = 'station_selected',
  STATION_HOVERED = 'station_hovered',
  STATIONS_LOADED = 'stations_loaded',
  ZOOM_CHANGED = 'zoom_changed',
  LOCATION_CHANGED = 'location_changed',
  AUDIO_STATE_CHANGED = 'audio_state_changed',
  ERROR_OCCURRED = 'error_occurred'
}

/**
 * Base event interface
 */
export interface GlobeEvent {
  type: GlobeEventType;
  timestamp: number;
  data?: any;
}

/**
 * Specific event interfaces
 */
export interface StationSelectedEvent extends GlobeEvent {
  type: GlobeEventType.STATION_SELECTED;
  data: {
    stationId: string;
    station: any;
  };
}

export interface StationsLoadedEvent extends GlobeEvent {
  type: GlobeEventType.STATIONS_LOADED;
  data: {
    count: number;
    region?: string;
    zoomLevel: number;
  };
}

export interface ZoomChangedEvent extends GlobeEvent {
  type: GlobeEventType.ZOOM_CHANGED;
  data: {
    oldZoom: number;
    newZoom: number;
    cameraDistance: number;
  };
}

export interface ErrorOccurredEvent extends GlobeEvent {
  type: GlobeEventType.ERROR_OCCURRED;
  data: {
    message: string;
    source: string;
    error?: Error;
  };
}

/**
 * Observer interface for subscribing to globe events
 */
export interface IGlobeObserver {
  onEvent(event: GlobeEvent): void;
  getObserverId(): string;
}

/**
 * Observable interface for publishing globe events
 */
export interface IGlobeObservable {
  subscribe(observer: IGlobeObserver, eventTypes?: GlobeEventType[]): void;
  unsubscribe(observerId: string): void;
  notify(event: GlobeEvent): void;
}

/**
 * Implementation of Observable pattern for Globe events
 * Provides decoupled communication between components
 */
export class GlobeEventBus implements IGlobeObservable {
  private observers = new Map<string, {
    observer: IGlobeObserver;
    eventTypes: Set<GlobeEventType>;
  }>();
  
  private eventHistory: GlobeEvent[] = [];
  private readonly maxHistorySize = 100;

  /**
   * Subscribe an observer to specific event types
   */
  subscribe(observer: IGlobeObserver, eventTypes?: GlobeEventType[]): void {
    const observerId = observer.getObserverId();
    const subscribedTypes = new Set(eventTypes || Object.values(GlobeEventType));
    
    this.observers.set(observerId, {
      observer,
      eventTypes: subscribedTypes
    });

    console.log(`Observer ${observerId} subscribed to events:`, Array.from(subscribedTypes));
  }

  /**
   * Unsubscribe an observer
   */
  unsubscribe(observerId: string): void {
    if (this.observers.delete(observerId)) {
      console.log(`Observer ${observerId} unsubscribed`);
    }
  }

  /**
   * Notify all subscribed observers of an event
   */
  notify(event: GlobeEvent): void {
    // Add to event history
    this.addToHistory(event);

    // Notify relevant observers
    Array.from(this.observers.entries()).forEach(([observerId, { observer, eventTypes }]) => {
      if (eventTypes.has(event.type)) {
        try {
          observer.onEvent(event);
        } catch (error) {
          console.error(`Error in observer ${observerId}:`, error);
          
          // Emit error event
          this.notify({
            type: GlobeEventType.ERROR_OCCURRED,
            timestamp: Date.now(),
            data: {
              message: `Observer ${observerId} error`,
              source: 'GlobeEventBus',
              error: error instanceof Error ? error : new Error(String(error))
            }
          });
        }
      }
    });
  }

  /**
   * Get list of active observers
   */
  getObservers(): string[] {
    return Array.from(this.observers.keys());
  }

  /**
   * Get event history
   */
  getEventHistory(eventType?: GlobeEventType): GlobeEvent[] {
    if (eventType) {
      return this.eventHistory.filter(event => event.type === eventType);
    }
    return [...this.eventHistory];
  }

  /**
   * Clear event history
   */
  clearHistory(): void {
    this.eventHistory = [];
  }

  /**
   * Get statistics about event bus usage
   */
  getStats(): {
    observerCount: number;
    eventHistorySize: number;
    eventTypeCounts: Record<string, number>;
  } {
    const eventTypeCounts: Record<string, number> = {};
    
    this.eventHistory.forEach(event => {
      eventTypeCounts[event.type] = (eventTypeCounts[event.type] || 0) + 1;
    });

    return {
      observerCount: this.observers.size,
      eventHistorySize: this.eventHistory.length,
      eventTypeCounts
    };
  }

  private addToHistory(event: GlobeEvent): void {
    this.eventHistory.push(event);
    
    // Maintain max history size
    if (this.eventHistory.length > this.maxHistorySize) {
      this.eventHistory.shift();
    }
  }
}

/**
 * Singleton event bus instance
 */
export const globeEventBus = new GlobeEventBus();

/**
 * Base class for components that need to observe globe events
 */
export abstract class GlobeObserver implements IGlobeObserver {
  protected eventBus: GlobeEventBus;
  private observerId: string;

  constructor(observerId: string, eventBus: GlobeEventBus = globeEventBus) {
    this.observerId = observerId;
    this.eventBus = eventBus;
  }

  getObserverId(): string {
    return this.observerId;
  }

  abstract onEvent(event: GlobeEvent): void;

  protected subscribe(eventTypes?: GlobeEventType[]): void {
    this.eventBus.subscribe(this, eventTypes);
  }

  protected unsubscribe(): void {
    this.eventBus.unsubscribe(this.observerId);
  }

  protected emit(event: Omit<GlobeEvent, 'timestamp'>): void {
    this.eventBus.notify({
      ...event,
      timestamp: Date.now()
    });
  }
}

/**
 * Utility functions for creating common events
 */
export const createGlobeEvent = {
  stationSelected: (stationId: string, station: any): StationSelectedEvent => ({
    type: GlobeEventType.STATION_SELECTED,
    timestamp: Date.now(),
    data: { stationId, station }
  }),

  stationsLoaded: (count: number, region?: string, zoomLevel = 1): StationsLoadedEvent => ({
    type: GlobeEventType.STATIONS_LOADED,
    timestamp: Date.now(),
    data: { count, region, zoomLevel }
  }),

  zoomChanged: (oldZoom: number, newZoom: number, cameraDistance: number): ZoomChangedEvent => ({
    type: GlobeEventType.ZOOM_CHANGED,
    timestamp: Date.now(),
    data: { oldZoom, newZoom, cameraDistance }
  }),

  error: (message: string, source: string, error?: Error): ErrorOccurredEvent => ({
    type: GlobeEventType.ERROR_OCCURRED,
    timestamp: Date.now(),
    data: { message, source, error }
  })
};