import { useState, useEffect } from 'react';
import { GlobeEventType, createGlobeEvent } from '../events/GlobeEventBus';
import { createGlobeEventBus } from '../infrastructure/ServiceContainer';

/**
 * Hook to listen to station loading events from the new architecture
 */
export function useStationCount() {
  const [stationCount, setStationCount] = useState(0);
  
  useEffect(() => {
    const eventBus = createGlobeEventBus();
    
    // Create observer manually since we're in a React hook
    const observerId = 'useStationCount-hook';
    
    const observer = {
      getObserverId: () => observerId,
      onEvent: (event: any) => {
        if (event.type === GlobeEventType.STATIONS_LOADED) {
          const count = event.data?.count || 0;
          setStationCount(count);
        }
      }
    };
    
    // Subscribe to station loading events
    eventBus.subscribe(observer, [GlobeEventType.STATIONS_LOADED]);

    // Check if stations were already loaded before subscription
    if (eventBus.getLatestEvent) {
      const lastEvent = eventBus.getLatestEvent(GlobeEventType.STATIONS_LOADED);
      if (lastEvent) {
        setStationCount(lastEvent.data?.count || 0);
      }
    }
    
    return () => {
      eventBus.unsubscribe(observerId);
    };
  }, []);
  
  return stationCount;
}