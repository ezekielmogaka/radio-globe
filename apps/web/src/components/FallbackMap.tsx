"use client";

import { useEffect, useState } from 'react';
import { useGlobeStore } from '@/stores/globe-store';
import { RadioStation } from '@/types';

interface FallbackMapProps {
  stations?: RadioStation[];
}

export function FallbackMap({ stations = [] }: FallbackMapProps) {
  const { selectedStation, setSelectedStation, setAudioSource } = useGlobeStore();
  const [mapError, setMapError] = useState(false);

  const handleStationClick = (station: RadioStation) => {
    setSelectedStation(station);
    if (station.streamUrl) {
      setAudioSource(station.streamUrl);
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Simple world map background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-96 bg-blue-800/30 rounded-lg border border-blue-600/50 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-brown-800/20 to-green-900/20" />
          
          {/* Simple continent shapes */}
          <div className="absolute top-16 left-16 w-24 h-16 bg-green-700/60 rounded-lg transform rotate-12" title="North America" />
          <div className="absolute top-20 left-40 w-16 h-20 bg-green-700/60 rounded-lg transform -rotate-6" title="South America" />
          <div className="absolute top-12 left-64 w-32 h-24 bg-green-700/60 rounded-lg transform rotate-3" title="Europe/Africa" />
          <div className="absolute top-8 right-32 w-28 h-20 bg-green-700/60 rounded-lg transform -rotate-12" title="Asia" />
          <div className="absolute bottom-16 right-16 w-16 h-12 bg-green-700/60 rounded-lg transform rotate-45" title="Australia" />
          
          {/* Station markers overlay */}
          {stations.map((station, index) => (
            <button
              key={`${station.name}-${index}`}
              className={`
                absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-200 z-10
                ${selectedStation?.name === station.name 
                  ? 'bg-red-500 shadow-lg shadow-red-500/50 scale-150' 
                  : 'bg-yellow-400 hover:bg-yellow-300 hover:scale-125'
                }
              `}
              style={{
                left: `${((station.longitude + 180) / 360) * 100}%`,
                top: `${((90 - station.latitude) / 180) * 100}%`,
              }}
              onClick={() => handleStationClick(station)}
              title={`${station.name} - ${station.country}`}
            />
          ))}
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 text-white/80 text-xs">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>Radio Stations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span>Currently Playing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Station info panel */}
      {selectedStation && (
        <div className="absolute bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm max-w-xs">
          <h3 className="font-bold text-lg mb-2">{selectedStation.name}</h3>
          <p className="text-gray-300 text-sm mb-1">{selectedStation.country}</p>
          {selectedStation.genre && (
            <p className="text-blue-300 text-sm mb-2">{selectedStation.genre}</p>
          )}
          {selectedStation.streamUrl && (
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              onClick={() => setAudioSource(selectedStation.streamUrl!)}
            >
              Play Station
            </button>
          )}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-black/60 text-white p-3 rounded-lg backdrop-blur-sm">
        <h2 className="font-bold mb-2">🗺️ 2D Map Mode</h2>
        <p className="text-sm text-gray-300">
          Click on yellow dots to select radio stations
        </p>
      </div>
    </div>
  );
}