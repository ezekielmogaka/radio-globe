(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/CesiumGlobe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CesiumGlobe",
    ()=>CesiumGlobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Dynamically import Cesium components to avoid SSR issues
const CesiumGlobeRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/components/CesiumGlobeRenderer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/components/CesiumGlobeRenderer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white",
                children: "Loading 3D Globe..."
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = CesiumGlobeRenderer;
function CesiumGlobe({ className = "" }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CesiumGlobe.useEffect": ()=>{
            setIsClient(true);
        }
    }["CesiumGlobe.useEffect"], []);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: `w-full h-full bg-black flex items-center justify-center ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Initializing Globe..."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `w-full h-full ${className}`,
        style: {
            minHeight: "400px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black flex items-center justify-center z-10",
                id: "cesium-loading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Loading 3D Globe..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CesiumGlobeRenderer, {
                containerRef: containerRef
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/CesiumGlobe.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(CesiumGlobe, "VVuyqvv9VP9NRdkL9+IqPZ0zFJU=");
_c1 = CesiumGlobe;
var _c, _c1;
__turbopack_context__.k.register(_c, "CesiumGlobeRenderer");
__turbopack_context__.k.register(_c1, "CesiumGlobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/utils/coordinates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Coordinate conversion utilities for geographic calculations
 * Compatible with both Cesium and general 3D applications
 */ /**
 * Convert latitude/longitude to 3D Cartesian coordinates
 */ __turbopack_context__.s([
    "calculateDistance",
    ()=>calculateDistance,
    "latLngToPosition",
    ()=>latLngToPosition,
    "normalizeLatitude",
    ()=>normalizeLatitude,
    "normalizeLongitude",
    ()=>normalizeLongitude,
    "positionToLatLng",
    ()=>positionToLatLng
]);
function latLngToPosition(lat, lng, radius = 1) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return [
        x,
        y,
        z
    ];
}
function positionToLatLng(x, y, z) {
    const radius = Math.sqrt(x * x + y * y + z * z);
    const lat = 90 - Math.acos(y / radius) * 180 / Math.PI;
    const lng = Math.atan2(z, -x) * 180 / Math.PI - 180;
    return {
        lat,
        lng
    };
}
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
function normalizeLongitude(lng) {
    while(lng > 180)lng -= 360;
    while(lng < -180)lng += 360;
    return lng;
}
function normalizeLatitude(lat) {
    return Math.max(-90, Math.min(90, lat));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGlobeStore",
    ()=>useGlobeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$coordinates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/coordinates.ts [app-client] (ecmascript)");
;
;
;
const useGlobeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeWithSelector"])((set, get)=>({
        // Initial state
        selectedStation: null,
        hoveredStation: null,
        cameraPosition: [
            0,
            0,
            2.5
        ],
        isAutoRotating: true,
        markers: [],
        // Actions
        selectStation: (station)=>{
            set((state)=>({
                    selectedStation: station,
                    markers: state.markers.map((marker)=>({
                            ...marker,
                            isSelected: marker.station.id === station?.id
                        }))
                }));
        },
        hoverStation: (station)=>{
            set((state)=>({
                    hoveredStation: station,
                    markers: state.markers.map((marker)=>({
                            ...marker,
                            isHovered: marker.station.id === station?.id
                        }))
                }));
        },
        setCameraPosition: (position)=>{
            set({
                cameraPosition: position
            });
        },
        setCesiumCameraPosition: (position)=>{
            set({
                cesiumCameraPosition: position,
                // Also update legacy camera position for compatibility
                cameraPosition: [
                    position.longitude,
                    position.latitude,
                    position.height
                ]
            });
        },
        setAutoRotating: (isAutoRotating)=>{
            set({
                isAutoRotating
            });
        },
        addMarker: (station)=>{
            const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$coordinates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latLngToPosition"])(station.location.lat, station.location.lng);
            const marker = {
                station,
                position,
                isVisible: true,
                isHovered: false,
                isSelected: false
            };
            set((state)=>({
                    markers: [
                        ...state.markers.filter((m)=>m.station.id !== station.id),
                        marker
                    ]
                }));
        },
        removeMarker: (stationId)=>{
            set((state)=>({
                    markers: state.markers.filter((m)=>m.station.id !== stationId)
                }));
        },
        updateMarkerVisibility: (stationId, isVisible)=>{
            set((state)=>({
                    markers: state.markers.map((marker)=>marker.station.id === stationId ? {
                            ...marker,
                            isVisible
                        } : marker)
                }));
        },
        getStationsByRegion: (region)=>{
            const { markers } = get();
            return markers.filter((marker)=>marker.station.location.country.toLowerCase().includes(region.toLowerCase()) || marker.station.location.city.toLowerCase().includes(region.toLowerCase())).map((marker)=>marker.station);
        },
        searchStations: (query)=>{
            const { markers } = get();
            const searchTerm = query.toLowerCase();
            return markers.filter((marker)=>marker.station.name.toLowerCase().includes(searchTerm) || marker.station.location.city.toLowerCase().includes(searchTerm) || marker.station.location.country.toLowerCase().includes(searchTerm) || marker.station.genre.toLowerCase().includes(searchTerm) || marker.station.language.toLowerCase().includes(searchTerm)).map((marker)=>marker.station);
        }
    })));
// Subscribe to state changes for analytics or side effects
useGlobeStore.subscribe((state)=>state.selectedStation, (selectedStation)=>{
    if (selectedStation) {
        console.log("Station selected:", selectedStation.name);
    // Track analytics, update URL, etc.
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/audioService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioService",
    ()=>AudioService
]);
class AudioService {
    audio = null;
    state = "idle";
    config;
    listeners = {};
    retryCount = 0;
    currentStation = null;
    lastTimeUpdate = 0;
    TIME_UPDATE_THROTTLE = 100;
    constructor(config = {}){
        this.config = {
            volume: 0.7,
            crossOrigin: "anonymous",
            preload: "none",
            retryAttempts: 3,
            retryDelay: 2000,
            ...config
        };
        this.initializeAudio();
    }
    initializeAudio() {
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
        this.audio.addEventListener("volumechange", this.handleVolumeChange.bind(this));
        this.audio.addEventListener("timeupdate", this.handleTimeUpdate.bind(this));
    }
    handleLoadStart() {
        this.setState("loading");
        this.listeners.loadStart?.();
    }
    handleCanPlay() {
        this.setState("paused");
        this.listeners.canPlay?.();
    }
    handlePlay() {
        this.setState("playing");
    }
    handlePause() {
        this.setState("paused");
    }
    handleError() {
        this.setState("error");
        const errorMessage = this.getErrorMessage();
        this.listeners.error?.(errorMessage);
        // Attempt retry if configured
        if (this.retryCount < this.config.retryAttempts) {
            this.scheduleRetry();
        }
    }
    handleVolumeChange() {
        if (this.audio) {
            this.listeners.volumeChange?.(this.audio.volume);
        }
    }
    handleTimeUpdate() {
        if (this.audio) {
            const now = Date.now();
            if (now - this.lastTimeUpdate >= this.TIME_UPDATE_THROTTLE) {
                this.lastTimeUpdate = now;
                this.listeners.timeUpdate?.(this.audio.currentTime);
            }
        }
    }
    getErrorMessage() {
        if (!this.audio?.error) return "Unknown audio error";
        switch(this.audio.error.code){
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
    scheduleRetry() {
        setTimeout(()=>{
            if (this.audio && this.currentStation) {
                this.retryCount++;
                console.log(`Retrying audio load (attempt ${this.retryCount}/${this.config.retryAttempts})`);
                this.audio.load();
            }
        }, this.config.retryDelay);
    }
    setState(state) {
        this.state = state;
        this.listeners.stateChange?.(state);
    }
    // Public API
    on(event, callback) {
        this.listeners[event] = callback;
    }
    off(event) {
        delete this.listeners[event];
    }
    async loadStation(station, streamUrl) {
        if (!this.audio) return;
        this.currentStation = station;
        this.retryCount = 0;
        const url = streamUrl || station.url;
        if (this.audio.src !== url) {
            this.audio.src = url;
            this.audio.load();
        }
    }
    async play() {
        if (!this.audio) return;
        try {
            await this.audio.play();
        } catch (error) {
            this.setState("error");
            throw error;
        }
    }
    pause() {
        if (this.audio) {
            this.audio.pause();
        }
    }
    setVolume(volume) {
        if (this.audio) {
            this.audio.volume = Math.max(0, Math.min(1, volume));
        }
    }
    getVolume() {
        return this.audio?.volume || 0;
    }
    mute() {
        this.setVolume(0);
    }
    unmute() {
        this.setVolume(this.config.volume);
    }
    getState() {
        return this.state;
    }
    getCurrentStation() {
        return this.currentStation;
    }
    getAudioElement() {
        return this.audio;
    }
    destroy() {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/radioDiscoveryService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioDiscoveryService",
    ()=>RadioDiscoveryService,
    "radioDiscoveryService",
    ()=>radioDiscoveryService
]);
class RadioDiscoveryService {
    baseUrl = "https://de1.api.radio-browser.info/json";
    cache = new Map();
    cacheExpiry = 5 * 60 * 1000;
    /**
   * Search radio stations from Radio Browser API
   */ async searchOnlineStations(query, limit = 50) {
        const cacheKey = `search:${query}:${limit}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
        try {
            const response = await fetch(`${this.baseUrl}/stations/search`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "RadioGlobe/1.0.0"
                },
                body: JSON.stringify({
                    name: query,
                    limit,
                    hidebroken: true,
                    order: "clickcount",
                    reverse: true
                })
            });
            if (!response.ok) throw new Error("Failed to fetch stations");
            const data = await response.json();
            const stations = this.mapRadioBrowserStations(data);
            this.setCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.warn("Failed to fetch online stations:", error);
            return [];
        }
    }
    /**
   * Get stations by country from Radio Browser API
   */ async getStationsByCountry(countryCode, limit = 100) {
        const cacheKey = `country:${countryCode}:${limit}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
        try {
            const response = await fetch(`${this.baseUrl}/stations/bycountrycodeexact/${countryCode}?limit=${limit}&hidebroken=true&order=clickcount&reverse=true`);
            if (!response.ok) throw new Error("Failed to fetch country stations");
            const data = await response.json();
            const stations = this.mapRadioBrowserStations(data);
            this.setCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.warn("Failed to fetch country stations:", error);
            return [];
        }
    }
    /**
   * Get top stations globally
   */ async getTopStations(limit = 100) {
        const cacheKey = `top:${limit}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
        try {
            const response = await fetch(`${this.baseUrl}/stations/topvote/${limit}`);
            if (!response.ok) throw new Error("Failed to fetch top stations");
            const data = await response.json();
            const stations = this.mapRadioBrowserStations(data);
            this.setCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.warn("Failed to fetch top stations:", error);
            return [];
        }
    }
    /**
   * Get stations by tag/genre
   */ async getStationsByTag(tag, limit = 50) {
        const cacheKey = `tag:${tag}:${limit}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
        try {
            const response = await fetch(`${this.baseUrl}/stations/bytag/${encodeURIComponent(tag)}?limit=${limit}&hidebroken=true&order=clickcount&reverse=true`);
            if (!response.ok) throw new Error("Failed to fetch stations by tag");
            const data = await response.json();
            const stations = this.mapRadioBrowserStations(data);
            this.setCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.warn("Failed to fetch stations by tag:", error);
            return [];
        }
    }
    /**
   * Get stations by city from Radio Browser API
   */ async getStationsByCity(city, limit = 50) {
        const cacheKey = `city:${city}:${limit}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
        try {
            const response = await fetch(`${this.baseUrl}/stations/bycity/${encodeURIComponent(city)}?limit=${limit}&hidebroken=true&order=clickcount&reverse=true`);
            if (!response.ok) throw new Error("Failed to fetch city stations");
            const data = await response.json();
            const stations = this.mapRadioBrowserStations(data);
            this.setCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.warn("Failed to fetch city stations:", error);
            return [];
        }
    }
    /**
   * Get available countries
   */ async getCountries() {
        const cacheKey = "countries";
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
        try {
            const response = await fetch(`${this.baseUrl}/countries?hidebroken=true`);
            if (!response.ok) throw new Error("Failed to fetch countries");
            const data = await response.json();
            this.setCache(cacheKey, data, 60 * 60 * 1000); // Cache for 1 hour
            return data;
        } catch (error) {
            console.warn("Failed to fetch countries:", error);
            return [];
        }
    }
    /**
   * Get available tags/genres
   */ async getTags() {
        const cacheKey = "tags";
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
        try {
            const response = await fetch(`${this.baseUrl}/tags?hidebroken=true&order=stationcount&reverse=true`);
            if (!response.ok) throw new Error("Failed to fetch tags");
            const data = await response.json();
            this.setCache(cacheKey, data, 60 * 60 * 1000); // Cache for 1 hour
            return data;
        } catch (error) {
            console.warn("Failed to fetch tags:", error);
            return [];
        }
    }
    /**
   * Map Radio Browser API response to our RadioStation format
   */ mapRadioBrowserStations(data) {
        return data.filter((station)=>station.url && station.name).map((station, index)=>{
            let lat = parseFloat(station.geo_lat) || 0;
            let lng = parseFloat(station.geo_long) || 0;
            // If no coordinates, assign default location based on country
            if (lat === 0 && lng === 0) {
                const defaultCoords = this.getDefaultCountryCoordinates(station.country);
                lat = defaultCoords.lat + (Math.random() - 0.5) * 2; // Add small random offset
                lng = defaultCoords.lng + (Math.random() - 0.5) * 2;
            }
            return {
                id: station.stationuuid || `station-${index}`,
                name: station.name || "Unknown Station",
                url: station.url,
                location: {
                    city: station.state || "Unknown",
                    country: station.country || "Unknown",
                    lat,
                    lng
                },
                genre: station.tags || station.genre || "Various",
                language: station.language || "Unknown",
                listeners: station.clickcount || 0,
                bitrate: station.bitrate || 128,
                description: station.homepage || "",
                isPublic: true,
                source: "radio-browser"
            };
        }).filter((station)=>station.location.lat !== 0 || station.location.lng !== 0); // Filter out stations without coordinates
    }
    /**
   * Cache management
   */ getFromCache(key) {
        const cached = this.cache.get(key);
        if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
            return cached.data;
        }
        return null;
    }
    setCache(key, data, customExpiry) {
        this.cache.set(key, {
            data,
            timestamp: Date.now(),
            expiry: customExpiry || this.cacheExpiry
        });
    }
    /**
   * Get default coordinates for a country
   */ getDefaultCountryCoordinates(country) {
        const countryDefaults = {
            Germany: {
                lat: 51.1657,
                lng: 10.4515
            },
            "United States": {
                lat: 39.8283,
                lng: -98.5795
            },
            USA: {
                lat: 39.8283,
                lng: -98.5795
            },
            "United Kingdom": {
                lat: 55.3781,
                lng: -3.436
            },
            UK: {
                lat: 55.3781,
                lng: -3.436
            },
            France: {
                lat: 46.2276,
                lng: 2.2137
            },
            Italy: {
                lat: 41.8719,
                lng: 12.5674
            },
            Spain: {
                lat: 40.4637,
                lng: -3.7492
            },
            Canada: {
                lat: 56.1304,
                lng: -106.3468
            },
            Australia: {
                lat: -25.2744,
                lng: 133.7751
            },
            Japan: {
                lat: 36.2048,
                lng: 138.2529
            },
            Brazil: {
                lat: -14.235,
                lng: -51.9253
            },
            Netherlands: {
                lat: 52.1326,
                lng: 5.2913
            },
            Austria: {
                lat: 47.5162,
                lng: 14.5501
            },
            Switzerland: {
                lat: 46.8182,
                lng: 8.2275
            }
        };
        return countryDefaults[country] || {
            lat: 0,
            lng: 0
        };
    }
    /**
   * Calculate distance between two coordinates
   */ calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
}
const radioDiscoveryService = new RadioDiscoveryService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/radioStationService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { globalRadioStations } from '../data/globalRadioStations'
__turbopack_context__.s([
    "RadioStationService",
    ()=>RadioStationService,
    "radioStationService",
    ()=>radioStationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioDiscoveryService.ts [app-client] (ecmascript)");
;
class RadioStationService {
    stations = [];
    proxyUrl = "/api/proxy/audio";
    discoveredStations = [];
    isDiscoveryEnabled = true;
    /**
   * Get all radio stations (curated + discovered)
   */ getAllStations() {
        return [
            ...this.stations,
            ...this.discoveredStations
        ];
    }
    /**
   * Get curated stations only
   */ getCuratedStations() {
        return this.stations;
    }
    /**
   * Enhanced search that includes online discovery
   */ async searchStations(query, includeOnline = true) {
        // Search local curated stations
        const localResults = this.searchLocalStations(query);
        if (!includeOnline || !this.isDiscoveryEnabled || !query.trim()) {
            return localResults;
        }
        try {
            // Search online stations
            const onlineResults = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].searchOnlineStations(query, 30);
            // Merge and deduplicate results
            const allResults = [
                ...localResults
            ];
            const existingUrls = new Set(localResults.map((s)=>s.url));
            for (const station of onlineResults){
                if (!existingUrls.has(station.url)) {
                    allResults.push(station);
                    existingUrls.add(station.url);
                }
            }
            return allResults.slice(0, 100); // Limit total results
        } catch (error) {
            console.warn("Failed to search online stations:", error);
            return localResults;
        }
    }
    /**
   * Search only local curated stations
   */ searchLocalStations(query) {
        const searchTerm = query.toLowerCase();
        return this.stations.filter((station)=>station.name.toLowerCase().includes(searchTerm) || station.location.city.toLowerCase().includes(searchTerm) || station.location.country.toLowerCase().includes(searchTerm) || station.genre.toLowerCase().includes(searchTerm) || station.language.toLowerCase().includes(searchTerm) || station.description && station.description.toLowerCase().includes(searchTerm));
    }
    /**
   * Discover stations by country with online integration
   */ async getStationsByCountry(country, includeOnline = true) {
        const localStations = this.stations.filter((station)=>station.location.country.toLowerCase() === country.toLowerCase());
        if (!includeOnline || !this.isDiscoveryEnabled) {
            return localStations;
        }
        try {
            // Get country code for API call (simplified mapping)
            const countryCode = this.getCountryCode(country);
            if (countryCode) {
                const onlineStations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByCountry(countryCode, 50);
                return this.mergeStationResults(localStations, onlineStations);
            }
        } catch (error) {
            console.warn("Failed to fetch online stations for country:", error);
        }
        return localStations;
    }
    /**
   * Get popular/top stations with online integration
   */ async getPopularStations(limit = 20, includeOnline = true) {
        const localPopular = [
            ...this.stations
        ].sort((a, b)=>b.listeners - a.listeners).slice(0, limit);
        if (!includeOnline || !this.isDiscoveryEnabled) {
            return localPopular;
        }
        try {
            const onlineTop = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(limit);
            return this.mergeStationResults(localPopular, onlineTop).slice(0, limit);
        } catch (error) {
            console.warn("Failed to fetch online top stations:", error);
            return localPopular;
        }
    }
    /**
   * Get stations by genre with online discovery
   */ async getStationsByGenre(genre, includeOnline = true) {
        const localStations = this.stations.filter((station)=>station.genre.toLowerCase().includes(genre.toLowerCase()));
        if (!includeOnline || !this.isDiscoveryEnabled) {
            return localStations;
        }
        try {
            const onlineStations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByTag(genre, 30);
            return this.mergeStationResults(localStations, onlineStations);
        } catch (error) {
            console.warn("Failed to fetch online stations by genre:", error);
            return localStations;
        }
    }
    /**
   * Get stations by city with online discovery
   */ async getStationsByCity(city, includeOnline = true) {
        const localStations = this.stations.filter((station)=>station.location.city.toLowerCase().includes(city.toLowerCase()));
        if (!includeOnline || !this.isDiscoveryEnabled) {
            return localStations;
        }
        try {
            const onlineStations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByCity(city, 30);
            return this.mergeStationResults(localStations, onlineStations);
        } catch (error) {
            console.warn("Failed to fetch online stations by city:", error);
            return localStations;
        }
    }
    /**
   * Get available countries from both sources
   */ async getAvailableCountries() {
        try {
            const [localCountries, onlineCountries] = await Promise.all([
                this.getLocalCountries(),
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getCountries()
            ]);
            // Merge country lists
            const countryMap = new Map();
            localCountries.forEach((country)=>{
                countryMap.set(country.name.toLowerCase(), country);
            });
            onlineCountries.forEach((country)=>{
                const key = country.name.toLowerCase();
                const existing = countryMap.get(key);
                if (existing) {
                    existing.count += country.stationcount;
                    existing.code = existing.code || country.iso;
                } else {
                    countryMap.set(key, {
                        name: country.name,
                        code: country.iso,
                        count: country.stationcount
                    });
                }
            });
            return Array.from(countryMap.values()).sort((a, b)=>b.count - a.count);
        } catch (error) {
            console.warn("Failed to get countries:", error);
            return this.getLocalCountries();
        }
    }
    /**
   * Get available genres/tags
   */ async getAvailableGenres() {
        try {
            const [localGenres, onlineTags] = await Promise.all([
                this.getLocalGenres(),
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTags()
            ]);
            // Merge genre lists
            const genreMap = new Map();
            localGenres.forEach((genre)=>{
                genreMap.set(genre.name.toLowerCase(), genre.count);
            });
            onlineTags.forEach((tag)=>{
                const key = tag.name.toLowerCase();
                const existing = genreMap.get(key) || 0;
                genreMap.set(key, existing + tag.stationcount);
            });
            return Array.from(genreMap.entries()).map(([name, count])=>({
                    name: name.charAt(0).toUpperCase() + name.slice(1),
                    count
                })).sort((a, b)=>b.count - a.count).slice(0, 50); // Limit to top 50 genres
        } catch (error) {
            console.warn("Failed to get genres:", error);
            return this.getLocalGenres();
        }
    }
    /**
   * Private helper methods
   */ mergeStationResults(local, online) {
        const merged = [
            ...local
        ];
        const existingUrls = new Set(local.map((s)=>s.url));
        for (const station of online){
            if (!existingUrls.has(station.url)) {
                merged.push(station);
            }
        }
        return merged;
    }
    getLocalCountries() {
        const countryCount = new Map();
        this.stations.forEach((station)=>{
            const country = station.location.country;
            countryCount.set(country, (countryCount.get(country) || 0) + 1);
        });
        return Array.from(countryCount.entries()).map(([name, count])=>({
                name,
                count
            }));
    }
    getLocalGenres() {
        const genreCount = new Map();
        this.stations.forEach((station)=>{
            const genre = station.genre;
            genreCount.set(genre, (genreCount.get(genre) || 0) + 1);
        });
        return Array.from(genreCount.entries()).map(([name, count])=>({
                name,
                count
            }));
    }
    getCountryCode(countryName) {
        // Simplified country code mapping - in production, use a comprehensive library
        const countryMap = {
            "united states": "US",
            usa: "US",
            canada: "CA",
            "united kingdom": "GB",
            uk: "GB",
            germany: "DE",
            france: "FR",
            italy: "IT",
            spain: "ES",
            brazil: "BR",
            japan: "JP",
            australia: "AU",
            netherlands: "NL",
            sweden: "SE",
            norway: "NO",
            denmark: "DK",
            finland: "FI"
        };
        return countryMap[countryName.toLowerCase()] || null;
    }
    /**
   * Get stations by continent
   */ getStationsByContinent(continent) {
        const continentCountries = {
            "north-america": [
                "United States",
                "Canada",
                "Mexico"
            ],
            "south-america": [
                "Brazil",
                "Argentina",
                "Chile",
                "Colombia",
                "Peru"
            ],
            europe: [
                "United Kingdom",
                "France",
                "Germany",
                "Italy",
                "Spain",
                "Netherlands",
                "Switzerland"
            ],
            asia: [
                "Japan",
                "South Korea",
                "China",
                "India",
                "Singapore",
                "Thailand"
            ],
            africa: [
                "South Africa",
                "Nigeria",
                "Kenya",
                "Egypt"
            ],
            oceania: [
                "Australia",
                "New Zealand"
            ]
        };
        const countries = continentCountries[continent.toLowerCase()] || [];
        return this.stations.filter((station)=>countries.includes(station.location.country));
    }
    /**
   * Get unique countries
   */ getCountries() {
        const countries = Array.from(new Set(this.stations.map((station)=>station.location.country)));
        return countries.sort();
    }
    /**
   * Get unique cities for a country
   */ getCitiesInCountry(country) {
        const cities = this.stations.filter((station)=>station.location.country === country).map((station)=>station.location.city);
        return Array.from(new Set(cities)).sort();
    }
    /**
   * Get unique genres
   */ getGenres() {
        const genres = Array.from(new Set(this.stations.map((station)=>station.genre)));
        return genres.sort();
    }
    /**
   * Get unique languages
   */ getLanguages() {
        const languages = Array.from(new Set(this.stations.map((station)=>station.language)));
        return languages.sort();
    }
    /**
   * Get proxied stream URL to avoid CORS issues
   */ getProxiedStreamUrl(station) {
        // For known CORS-free streams, return direct URL
        const corsFreeHosts = [
            "ice1.somafm.com",
            "stream.srg-ssr.ch",
            "streams.kqed.org"
        ];
        try {
            const url = new URL(station.url);
            if (corsFreeHosts.some((host)=>url.hostname.includes(host))) {
                return station.url;
            }
        } catch  {
        // Invalid URL, use proxy
        }
        // Use proxy for potentially CORS-blocked streams
        return `${this.proxyUrl}?url=${encodeURIComponent(station.url)}`;
    }
    /**
   * Get station by ID
   */ getStationById(id) {
        return this.stations.find((station)=>station.id === id);
    }
    /**
   * Get random stations
   */ getRandomStations(count = 5) {
        const shuffled = [
            ...this.stations
        ].sort(()=>0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    /**
   * Calculate distance between two points (Haversine formula)
   */ calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Earth's radius in km
        const dLat = this.toRad(lat2 - lat1);
        const dLng = this.toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    toRad(degrees) {
        return degrees * (Math.PI / 180);
    }
}
const radioStationService = new RadioStationService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useModularAudio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModularAudio",
    ()=>useModularAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$audioService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/audioService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioStationService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useModularAudio(options = {}) {
    _s();
    const audioServiceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Memoize options to prevent infinite loops
    const memoizedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useModularAudio.useMemo[memoizedOptions]": ()=>({
                volume: options.volume || 0.7,
                autoPlay: options.autoPlay || false,
                retryAttempts: options.retryAttempts || 3,
                retryDelay: options.retryDelay || 2000
            })
    }["useModularAudio.useMemo[memoizedOptions]"], [
        options.volume,
        options.autoPlay,
        options.retryAttempts,
        options.retryDelay
    ]);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useModularAudio.useState": ()=>({
                isPlaying: false,
                isLoading: false,
                error: null,
                volume: memoizedOptions.volume,
                isMuted: false,
                currentTime: 0,
                state: "idle",
                currentStation: null
            })
    }["useModularAudio.useState"]);
    // Initialize audio service
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModularAudio.useEffect": ()=>{
            audioServiceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$audioService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioService"]({
                volume: memoizedOptions.volume,
                retryAttempts: memoizedOptions.retryAttempts,
                retryDelay: memoizedOptions.retryDelay
            });
            const service = audioServiceRef.current;
            // Set up event listeners
            service.on("stateChange", {
                "useModularAudio.useEffect": (audioState)=>{
                    setState({
                        "useModularAudio.useEffect": (prev)=>({
                                ...prev,
                                state: audioState,
                                isPlaying: audioState === "playing",
                                isLoading: audioState === "loading"
                            })
                    }["useModularAudio.useEffect"]);
                }
            }["useModularAudio.useEffect"]);
            service.on("error", {
                "useModularAudio.useEffect": (error)=>{
                    setState({
                        "useModularAudio.useEffect": (prev)=>({
                                ...prev,
                                error,
                                isLoading: false,
                                isPlaying: false
                            })
                    }["useModularAudio.useEffect"]);
                }
            }["useModularAudio.useEffect"]);
            service.on("volumeChange", {
                "useModularAudio.useEffect": (volume)=>{
                    setState({
                        "useModularAudio.useEffect": (prev)=>({
                                ...prev,
                                volume,
                                isMuted: volume === 0
                            })
                    }["useModularAudio.useEffect"]);
                }
            }["useModularAudio.useEffect"]);
            service.on("timeUpdate", {
                "useModularAudio.useEffect": (currentTime)=>{
                    setState({
                        "useModularAudio.useEffect": (prev)=>({
                                ...prev,
                                currentTime
                            })
                    }["useModularAudio.useEffect"]);
                }
            }["useModularAudio.useEffect"]);
            return ({
                "useModularAudio.useEffect": ()=>{
                    service.destroy();
                }
            })["useModularAudio.useEffect"];
        }
    }["useModularAudio.useEffect"], [
        memoizedOptions.volume,
        memoizedOptions.retryAttempts,
        memoizedOptions.retryDelay
    ]);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModularAudio.useCallback[play]": async ()=>{
            if (!audioServiceRef.current) return;
            try {
                await audioServiceRef.current.play();
                setState({
                    "useModularAudio.useCallback[play]": (prev)=>({
                            ...prev,
                            error: null
                        })
                }["useModularAudio.useCallback[play]"]);
            } catch (error) {
                setState({
                    "useModularAudio.useCallback[play]": (prev)=>({
                            ...prev,
                            error: "Failed to play audio. Please try again."
                        })
                }["useModularAudio.useCallback[play]"]);
            }
        }
    }["useModularAudio.useCallback[play]"], []);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModularAudio.useCallback[pause]": ()=>{
            if (!audioServiceRef.current) return;
            audioServiceRef.current.pause();
        }
    }["useModularAudio.useCallback[pause]"], []);
    const setVolume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModularAudio.useCallback[setVolume]": (volume)=>{
            if (!audioServiceRef.current) return;
            audioServiceRef.current.setVolume(volume);
        }
    }["useModularAudio.useCallback[setVolume]"], []);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModularAudio.useCallback[toggleMute]": ()=>{
            if (!audioServiceRef.current) return;
            if (state.isMuted) {
                audioServiceRef.current.setVolume(state.volume > 0 ? state.volume : 0.7);
            } else {
                audioServiceRef.current.mute();
            }
        }
    }["useModularAudio.useCallback[toggleMute]"], [
        state.isMuted,
        state.volume
    ]);
    const loadStation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModularAudio.useCallback[loadStation]": async (station)=>{
            if (!audioServiceRef.current) return;
            try {
                setState({
                    "useModularAudio.useCallback[loadStation]": (prev)=>({
                            ...prev,
                            error: null,
                            currentStation: station
                        })
                }["useModularAudio.useCallback[loadStation]"]);
                // Get proxied URL to avoid CORS issues
                const streamUrl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getProxiedStreamUrl(station);
                await audioServiceRef.current.loadStation(station, streamUrl);
                // Auto-play if enabled
                if (memoizedOptions.autoPlay) {
                    await play();
                }
            } catch (error) {
                setState({
                    "useModularAudio.useCallback[loadStation]": (prev)=>({
                            ...prev,
                            error: "Failed to load radio station."
                        })
                }["useModularAudio.useCallback[loadStation]"]);
            }
        }
    }["useModularAudio.useCallback[loadStation]"], [
        memoizedOptions.autoPlay,
        play
    ]);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModularAudio.useCallback[clearError]": ()=>{
            setState({
                "useModularAudio.useCallback[clearError]": (prev)=>({
                        ...prev,
                        error: null
                    })
            }["useModularAudio.useCallback[clearError]"]);
        }
    }["useModularAudio.useCallback[clearError]"], []);
    const getAudioElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModularAudio.useCallback[getAudioElement]": ()=>{
            return audioServiceRef.current?.getAudioElement() || null;
        }
    }["useModularAudio.useCallback[getAudioElement]"], []);
    const playerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useModularAudio.useMemo[playerState]": ()=>({
                ...state,
                currentStation: audioServiceRef.current?.getCurrentStation() || state.currentStation
            })
    }["useModularAudio.useMemo[playerState]"], [
        state
    ]);
    const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useModularAudio.useMemo[actions]": ()=>({
                play,
                pause,
                setVolume,
                toggleMute,
                loadStation,
                clearError,
                getAudioElement
            })
    }["useModularAudio.useMemo[actions]"], [
        play,
        pause,
        setVolume,
        toggleMute,
        loadStation,
        clearError,
        getAudioElement
    ]);
    return [
        playerState,
        actions
    ];
}
_s(useModularAudio, "9hg1gh0XqMYzmNfAvR/smsDM/hQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/audioVisualizationService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioVisualizationService",
    ()=>AudioVisualizationService,
    "BarsRenderer",
    ()=>BarsRenderer,
    "CircularRenderer",
    ()=>CircularRenderer,
    "ParticlesRenderer",
    ()=>ParticlesRenderer,
    "WaveformRenderer",
    ()=>WaveformRenderer
]);
class BarsRenderer {
    render(data, canvas, config) {
        const ctx = canvas.getContext("2d");
        const width = canvas.width;
        const height = canvas.height;
        const barWidth = width / data.length * 2;
        // Clear canvas with fade effect
        ctx.fillStyle = config.backgroundColor;
        ctx.fillRect(0, 0, width, height);
        // Draw bars
        for(let i = 0; i < data.length; i++){
            const barHeight = data[i] / 255 * height * 0.8;
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
class WaveformRenderer {
    render(data, canvas, config) {
        const ctx = canvas.getContext("2d");
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
        for(let i = 0; i < data.length; i++){
            const v = data[i] / 128.0;
            const y = v * height / 2;
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
class CircularRenderer {
    render(data, canvas, config) {
        const ctx = canvas.getContext("2d");
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
        const angleStep = Math.PI * 2 / data.length;
        for(let i = 0; i < data.length; i++){
            const amplitude = data[i] / 255 * radius;
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
class ParticlesRenderer {
    particles = [];
    render(data, canvas, config) {
        const ctx = canvas.getContext("2d");
        const width = canvas.width;
        const height = canvas.height;
        // Clear canvas
        ctx.fillStyle = config.backgroundColor;
        ctx.fillRect(0, 0, width, height);
        // Calculate average amplitude
        const avgAmplitude = data.reduce((sum, val)=>sum + val, 0) / data.length;
        // Generate new particles based on audio intensity
        if (avgAmplitude > 50) {
            for(let i = 0; i < Math.floor(avgAmplitude / 20); i++){
                this.particles.push({
                    x: Math.random() * width,
                    y: height,
                    vx: (Math.random() - 0.5) * 4,
                    vy: -Math.random() * 5 - 2,
                    life: 1.0
                });
            }
        }
        // Update and draw particles
        this.particles = this.particles.filter((particle)=>{
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; // gravity
            particle.life -= 0.02;
            if (particle.life > 0) {
                ctx.fillStyle = config.primaryColor + Math.floor(particle.life * 255).toString(16).padStart(2, "0");
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
                ctx.fill();
                return true;
            }
            return false;
        });
    }
}
class AudioVisualizationService {
    analyser = null;
    dataArray = null;
    animationFrame = null;
    renderers;
    currentRenderer = null;
    config;
    constructor(config = {}){
        this.config = {
            fftSize: 256,
            smoothingTimeConstant: 0.8,
            minDecibels: -90,
            maxDecibels: -10,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            primaryColor: "#60a5fa",
            secondaryColor: "#3b82f6",
            ...config
        };
        this.renderers = new Map([
            [
                "bars",
                new BarsRenderer()
            ],
            [
                "waveform",
                new WaveformRenderer()
            ],
            [
                "circular",
                new CircularRenderer()
            ],
            [
                "particles",
                new ParticlesRenderer()
            ]
        ]);
    }
    initialize(audioElement) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioContext.createMediaElementSource(audioElement);
            this.analyser = audioContext.createAnalyser();
            // Configure analyser
            this.analyser.fftSize = this.config.fftSize;
            this.analyser.smoothingTimeConstant = this.config.smoothingTimeConstant;
            this.analyser.minDecibels = this.config.minDecibels;
            this.analyser.maxDecibels = this.config.maxDecibels;
            // Connect audio graph
            source.connect(this.analyser);
            this.analyser.connect(audioContext.destination);
            this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
            // Resume audio context if suspended
            if (audioContext.state === "suspended") {
                audioContext.resume();
            }
            return true;
        } catch (error) {
            console.warn("Audio visualization initialization failed:", error);
            return false;
        }
    }
    start(canvas, type = "bars") {
        this.currentRenderer = this.renderers.get(type) || null;
        if (!this.analyser || !this.dataArray || !this.currentRenderer) {
            return;
        }
        const animate = ()=>{
            if (!this.analyser || !this.dataArray || !this.currentRenderer) return;
            if (this.dataArray) {
                this.analyser.getByteFrequencyData(this.dataArray);
            }
            this.currentRenderer.render(this.dataArray, canvas, this.config);
            this.animationFrame = requestAnimationFrame(animate);
        };
        animate();
    }
    stop() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }
    changeType(type) {
        this.currentRenderer = this.renderers.get(type) || null;
    }
    updateConfig(newConfig) {
        this.config = {
            ...this.config,
            ...newConfig
        };
    }
    getAvailableTypes() {
        return Array.from(this.renderers.keys());
    }
    destroy() {
        this.stop();
        this.analyser = null;
        this.dataArray = null;
        this.currentRenderer = null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ModularAudioVisualizer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModularAudioVisualizer",
    ()=>ModularAudioVisualizer,
    "useVisualizationType",
    ()=>useVisualizationType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$audioVisualizationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/audioVisualizationService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function ModularAudioVisualizer({ audioElement, isPlaying, className = "", type = "bars", width = 300, height = 100, colors = {} }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visualizationServiceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSupported, setIsSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentType, setCurrentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(type);
    // Initialize visualization service
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioVisualizer.useEffect": ()=>{
            visualizationServiceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$audioVisualizationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioVisualizationService"]({
                fftSize: type === "waveform" ? 2048 : 256,
                primaryColor: colors.primary || "#60a5fa",
                secondaryColor: colors.secondary || "#3b82f6",
                backgroundColor: colors.background || "rgba(0, 0, 0, 0.1)"
            });
            return ({
                "ModularAudioVisualizer.useEffect": ()=>{
                    visualizationServiceRef.current?.destroy();
                }
            })["ModularAudioVisualizer.useEffect"];
        }
    }["ModularAudioVisualizer.useEffect"], [
        type,
        colors.primary,
        colors.secondary,
        colors.background
    ]);
    // Handle audio element changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioVisualizer.useEffect": ()=>{
            if (!audioElement || !visualizationServiceRef.current) {
                return;
            }
            const success = visualizationServiceRef.current.initialize(audioElement);
            if (!success) {
                setIsSupported(false);
            }
        }
    }["ModularAudioVisualizer.useEffect"], [
        audioElement
    ]);
    // Handle playback state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioVisualizer.useEffect": ()=>{
            if (!visualizationServiceRef.current || !canvasRef.current) {
                return;
            }
            if (isPlaying && isSupported) {
                visualizationServiceRef.current.start(canvasRef.current, currentType);
            } else {
                visualizationServiceRef.current.stop();
            }
            return ({
                "ModularAudioVisualizer.useEffect": ()=>{
                    visualizationServiceRef.current?.stop();
                }
            })["ModularAudioVisualizer.useEffect"];
        }
    }["ModularAudioVisualizer.useEffect"], [
        isPlaying,
        isSupported,
        currentType
    ]);
    // Handle type changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioVisualizer.useEffect": ()=>{
            setCurrentType(type);
            if (visualizationServiceRef.current) {
                visualizationServiceRef.current.changeType(type);
            }
        }
    }["ModularAudioVisualizer.useEffect"], [
        type
    ]);
    if (!isSupported) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center justify-center ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-500 text-sm",
                children: "Audio visualization not supported"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `relative ${className}`,
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: isPlaying ? 1 : 0.5,
            scale: 1,
            filter: isPlaying ? "blur(0px)" : "blur(1px)"
        },
        transition: {
            duration: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: width,
                height: height,
                className: "w-full h-full rounded-lg bg-black/20 backdrop-blur-sm border border-white/10",
                style: {
                    imageRendering: "pixelated"
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-lg shadow-inner pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            !isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-gray-400 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        "Ready"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(ModularAudioVisualizer, "w/XpGGhzkEDutO7MrwNbSolDh8k=");
_c = ModularAudioVisualizer;
function useVisualizationType() {
    _s1();
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("bars");
    const types = [
        "bars",
        "waveform",
        "circular",
        "particles"
    ];
    const nextType = ()=>{
        const currentIndex = types.indexOf(type);
        const nextIndex = (currentIndex + 1) % types.length;
        setType(types[nextIndex]);
    };
    const setVisualizationType = (newType)=>{
        setType(newType);
    };
    return {
        currentType: type,
        availableTypes: types,
        nextType,
        setType: setVisualizationType
    };
}
_s1(useVisualizationType, "QOCO3nMaCrCD3vAWaCvTpGU6UfQ=");
var _c;
__turbopack_context__.k.register(_c, "ModularAudioVisualizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ModularAudioPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModularAudioPlayer",
    ()=>ModularAudioPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModularAudio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useModularAudio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioVisualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ModularAudioVisualizer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ModularAudioPlayer({ className = "", showVisualizer = true, compactMode = false, autoPlay = false }) {
    _s();
    const selectedStation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])({
        "ModularAudioPlayer.useGlobeStore[selectedStation]": (state)=>state.selectedStation
    }["ModularAudioPlayer.useGlobeStore[selectedStation]"]);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioState, audioActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModularAudio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModularAudio"])({
        autoPlay,
        volume: 0.7
    });
    const { currentType, availableTypes, nextType, setType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioVisualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVisualizationType"])();
    // Load station when selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioPlayer.useEffect": ()=>{
            if (selectedStation) {
                audioActions.loadStation(selectedStation);
            }
        }
    }["ModularAudioPlayer.useEffect"], [
        selectedStation,
        audioActions.loadStation
    ]);
    const formatTime = (time)=>{
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };
    if (!selectedStation) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: `glass rounded-xl p-6 text-center ${className}`,
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                        className: "w-8 h-8 mx-auto mb-2 opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-sm mb-1",
                    children: "Select a Radio Station"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-xs",
                    children: "Click on any station marker on the globe"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `glass rounded-xl overflow-hidden ${compactMode ? "p-3" : "p-4"} ${className}`,
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: 100,
            opacity: 0
        },
        layout: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3 flex-1 min-w-0",
                        children: [
                            !compactMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-sm",
                                        children: selectedStation.name.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-white font-semibold truncate ${compactMode ? "text-sm" : ""}`,
                                        children: selectedStation.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-gray-400 truncate ${compactMode ? "text-xs" : "text-sm"}`,
                                        children: [
                                            selectedStation.location.city,
                                            ",",
                                            " ",
                                            selectedStation.location.country,
                                            " • ",
                                            selectedStation.genre
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setShowSettings(!showSettings),
                        className: "text-white/60 hover:text-white transition-colors p-1 rounded",
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showVisualizer && audioState.isPlaying && !compactMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "mb-4 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/60 text-xs",
                                    children: "Audio Visualization"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-1",
                                    children: availableTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setType(type),
                                            className: `px-2 py-1 text-xs rounded transition-colors ${currentType === type ? "bg-blue-500 text-white" : "text-white/60 hover:text-white"}`,
                                            children: type
                                        }, type, false, {
                                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioVisualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModularAudioVisualizer"], {
                            audioElement: audioActions.getAudioElement(),
                            isPlaying: audioState.isPlaying,
                            type: currentType,
                            className: "w-full",
                            height: compactMode ? 40 : 80
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: audioState.isPlaying ? audioActions.pause : audioActions.play,
                        disabled: audioState.isLoading,
                        className: `flex-shrink-0 ${compactMode ? "w-10 h-10" : "w-12 h-12"} bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 rounded-full flex items-center justify-center transition-all`,
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: audioState.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${compactMode ? "w-4 h-4" : "w-5 h-5"} border-2 border-white border-t-transparent rounded-full animate-spin`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this) : audioState.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            className: `${compactMode ? "w-4 h-4" : "w-5 h-5"} text-white`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: `${compactMode ? "w-4 h-4" : "w-5 h-5"} text-white ml-0.5`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: audioActions.toggleMute,
                                className: "text-white hover:text-blue-300 transition-colors",
                                whileHover: {
                                    scale: 1.1
                                },
                                children: audioState.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                    className: compactMode ? "w-4 h-4" : "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: compactMode ? "w-4 h-4" : "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    value: audioState.isMuted ? 0 : audioState.volume * 100,
                                    onChange: (e)=>audioActions.setVolume(Number(e.target.value) / 100),
                                    className: "w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3  [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full  [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/60 text-xs min-w-8",
                                children: [
                                    Math.round((audioState.isMuted ? 0 : audioState.volume) * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    audioState.isPlaying && !compactMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center space-x-2",
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-0.5",
                                children: [
                                    ...Array(3)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "w-1 bg-green-500 rounded-full",
                                        animate: {
                                            height: [
                                                4,
                                                16,
                                                4
                                            ]
                                        },
                                        transition: {
                                            duration: 0.8,
                                            repeat: Infinity,
                                            delay: i * 0.1
                                        }
                                    }, i, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-500 text-xs font-medium",
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: audioState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-3 p-2 bg-red-500/20 border border-red-500/50 rounded text-red-300 text-sm flex items-center justify-between",
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1",
                            children: audioState.error
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: audioActions.clearError,
                            className: "text-red-300 hover:text-red-100 ml-2",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 253,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "mt-4 p-3 bg-white/5 rounded-lg border border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-sm",
                                        children: "Show Visualizer"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSettings(false),
                                        className: `w-8 h-4 rounded-full transition-colors ${showVisualizer ? "bg-blue-500" : "bg-gray-600"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-3 h-3 bg-white rounded-full transition-transform ${showVisualizer ? "translate-x-4" : "translate-x-0.5"}`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 282,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400",
                                children: [
                                    "Station: ",
                                    selectedStation.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this),
                                    "Genre: ",
                                    selectedStation.genre,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this),
                                    "Location: ",
                                    selectedStation.location.city,
                                    ",",
                                    " ",
                                    selectedStation.location.country
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 279,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 273,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(ModularAudioPlayer, "Mnk6BJ7MUb9AfBCMoG3Z43hJfF0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModularAudio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModularAudio"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioVisualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVisualizationType"]
    ];
});
_c = ModularAudioPlayer;
var _c;
__turbopack_context__.k.register(_c, "ModularAudioPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useUserData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFavorites",
    ()=>useFavorites,
    "usePreferences",
    ()=>usePreferences,
    "useRecentStations",
    ()=>useRecentStations,
    "useUserData",
    ()=>useUserData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEYS = {
    FAVORITES: "radioGlobe_favorites",
    RECENT: "radioGlobe_recent",
    PREFERENCES: "radioGlobe_preferences"
};
const MAX_RECENT = 20;
const DEFAULT_PREFERENCES = {
    autoPlay: false,
    defaultVolume: 70,
    preferredGenres: [],
    preferredCountries: [],
    sleepTimer: null
};
function useFavorites() {
    _s();
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load favorites from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFavorites.useEffect": ()=>{
            try {
                const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
                if (stored) {
                    setFavorites(JSON.parse(stored));
                }
            } catch (e) {
                console.error("Failed to load favorites:", e);
            }
            setIsLoaded(true);
        }
    }["useFavorites.useEffect"], []);
    // Save favorites to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFavorites.useEffect": ()=>{
            if (isLoaded) {
                localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
            }
        }
    }["useFavorites.useEffect"], [
        favorites,
        isLoaded
    ]);
    const addFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFavorites.useCallback[addFavorite]": (station)=>{
            setFavorites({
                "useFavorites.useCallback[addFavorite]": (prev)=>{
                    if (prev.some({
                        "useFavorites.useCallback[addFavorite]": (s)=>s.id === station.id
                    }["useFavorites.useCallback[addFavorite]"])) return prev;
                    return [
                        station,
                        ...prev
                    ];
                }
            }["useFavorites.useCallback[addFavorite]"]);
        }
    }["useFavorites.useCallback[addFavorite]"], []);
    const removeFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFavorites.useCallback[removeFavorite]": (stationId)=>{
            setFavorites({
                "useFavorites.useCallback[removeFavorite]": (prev)=>prev.filter({
                        "useFavorites.useCallback[removeFavorite]": (s)=>s.id !== stationId
                    }["useFavorites.useCallback[removeFavorite]"])
            }["useFavorites.useCallback[removeFavorite]"]);
        }
    }["useFavorites.useCallback[removeFavorite]"], []);
    const isFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFavorites.useCallback[isFavorite]": (stationId)=>{
            return favorites.some({
                "useFavorites.useCallback[isFavorite]": (s)=>s.id === stationId
            }["useFavorites.useCallback[isFavorite]"]);
        }
    }["useFavorites.useCallback[isFavorite]"], [
        favorites
    ]);
    const toggleFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFavorites.useCallback[toggleFavorite]": (station)=>{
            if (isFavorite(station.id)) {
                removeFavorite(station.id);
            } else {
                addFavorite(station);
            }
        }
    }["useFavorites.useCallback[toggleFavorite]"], [
        isFavorite,
        removeFavorite,
        addFavorite
    ]);
    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
        isLoaded
    };
}
_s(useFavorites, "SpCCm6r996nv4uZ3qP5pbwnh/g8=");
function useRecentStations() {
    _s1();
    const [recent, setRecent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load recent from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRecentStations.useEffect": ()=>{
            try {
                const stored = localStorage.getItem(STORAGE_KEYS.RECENT);
                if (stored) {
                    setRecent(JSON.parse(stored));
                }
            } catch (e) {
                console.error("Failed to load recent stations:", e);
            }
            setIsLoaded(true);
        }
    }["useRecentStations.useEffect"], []);
    // Save recent to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRecentStations.useEffect": ()=>{
            if (isLoaded) {
                localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recent));
            }
        }
    }["useRecentStations.useEffect"], [
        recent,
        isLoaded
    ]);
    const addToRecent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRecentStations.useCallback[addToRecent]": (station)=>{
            setRecent({
                "useRecentStations.useCallback[addToRecent]": (prev)=>{
                    // Remove if already exists
                    const filtered = prev.filter({
                        "useRecentStations.useCallback[addToRecent].filtered": (s)=>s.id !== station.id
                    }["useRecentStations.useCallback[addToRecent].filtered"]);
                    // Add to front and limit size
                    return [
                        station,
                        ...filtered
                    ].slice(0, MAX_RECENT);
                }
            }["useRecentStations.useCallback[addToRecent]"]);
        }
    }["useRecentStations.useCallback[addToRecent]"], []);
    const clearRecent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRecentStations.useCallback[clearRecent]": ()=>{
            setRecent([]);
        }
    }["useRecentStations.useCallback[clearRecent]"], []);
    return {
        recent,
        addToRecent,
        clearRecent,
        isLoaded
    };
}
_s1(useRecentStations, "kgmPF35F93KH8oha/QxdIOJ5h9Q=");
function usePreferences() {
    _s2();
    const [preferences, setPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_PREFERENCES);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load preferences from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePreferences.useEffect": ()=>{
            try {
                const stored = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
                if (stored) {
                    setPreferences({
                        ...DEFAULT_PREFERENCES,
                        ...JSON.parse(stored)
                    });
                }
            } catch (e) {
                console.error("Failed to load preferences:", e);
            }
            setIsLoaded(true);
        }
    }["usePreferences.useEffect"], []);
    // Save preferences to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePreferences.useEffect": ()=>{
            if (isLoaded) {
                localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(preferences));
            }
        }
    }["usePreferences.useEffect"], [
        preferences,
        isLoaded
    ]);
    const updatePreference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePreferences.useCallback[updatePreference]": (key, value)=>{
            setPreferences({
                "usePreferences.useCallback[updatePreference]": (prev)=>({
                        ...prev,
                        [key]: value
                    })
            }["usePreferences.useCallback[updatePreference]"]);
        }
    }["usePreferences.useCallback[updatePreference]"], []);
    const addPreferredGenre = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePreferences.useCallback[addPreferredGenre]": (genre)=>{
            setPreferences({
                "usePreferences.useCallback[addPreferredGenre]": (prev)=>({
                        ...prev,
                        preferredGenres: Array.from(new Set([
                            ...prev.preferredGenres,
                            genre
                        ]))
                    })
            }["usePreferences.useCallback[addPreferredGenre]"]);
        }
    }["usePreferences.useCallback[addPreferredGenre]"], []);
    const removePreferredGenre = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePreferences.useCallback[removePreferredGenre]": (genre)=>{
            setPreferences({
                "usePreferences.useCallback[removePreferredGenre]": (prev)=>({
                        ...prev,
                        preferredGenres: prev.preferredGenres.filter({
                            "usePreferences.useCallback[removePreferredGenre]": (g)=>g !== genre
                        }["usePreferences.useCallback[removePreferredGenre]"])
                    })
            }["usePreferences.useCallback[removePreferredGenre]"]);
        }
    }["usePreferences.useCallback[removePreferredGenre]"], []);
    return {
        preferences,
        updatePreference,
        addPreferredGenre,
        removePreferredGenre,
        isLoaded
    };
}
_s2(usePreferences, "FtFOp9RbJEwJgaqO0eQ28AP9VoU=");
function useUserData() {
    _s3();
    const favorites = useFavorites();
    const recent = useRecentStations();
    const preferences = usePreferences();
    return {
        favorites,
        recent,
        preferences,
        isLoaded: favorites.isLoaded && recent.isLoaded && preferences.isLoaded
    };
}
_s3(useUserData, "ozRWkBPMPQ6VrS56WOiu1SSmlp8=", false, function() {
    return [
        useFavorites,
        useRecentStations,
        usePreferences
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useUserLocation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateDistance",
    ()=>calculateDistance,
    "getTimeBasedGenres",
    ()=>getTimeBasedGenres,
    "getTimeOfDay",
    ()=>getTimeOfDay,
    "useUserLocation",
    ()=>useUserLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
// Fallback locations by country code
const FALLBACK_LOCATIONS = {
    US: {
        latitude: 37.7749,
        longitude: -122.4194,
        country: "United States",
        city: "San Francisco",
        timezone: "America/Los_Angeles"
    },
    GB: {
        latitude: 51.5074,
        longitude: -0.1278,
        country: "United Kingdom",
        city: "London",
        timezone: "Europe/London"
    },
    DE: {
        latitude: 52.52,
        longitude: 13.405,
        country: "Germany",
        city: "Berlin",
        timezone: "Europe/Berlin"
    },
    FR: {
        latitude: 48.8566,
        longitude: 2.3522,
        country: "France",
        city: "Paris",
        timezone: "Europe/Paris"
    },
    JP: {
        latitude: 35.6762,
        longitude: 139.6503,
        country: "Japan",
        city: "Tokyo",
        timezone: "Asia/Tokyo"
    },
    KE: {
        latitude: -1.2921,
        longitude: 36.8219,
        country: "Kenya",
        city: "Nairobi",
        timezone: "Africa/Nairobi"
    },
    IN: {
        latitude: 28.6139,
        longitude: 77.209,
        country: "India",
        city: "New Delhi",
        timezone: "Asia/Kolkata"
    },
    BR: {
        latitude: -23.5505,
        longitude: -46.6333,
        country: "Brazil",
        city: "São Paulo",
        timezone: "America/Sao_Paulo"
    },
    AU: {
        latitude: -33.8688,
        longitude: 151.2093,
        country: "Australia",
        city: "Sydney",
        timezone: "Australia/Sydney"
    }
};
function useUserLocation() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        location: null,
        isLoading: true,
        error: null,
        permissionDenied: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserLocation.useEffect": ()=>{
            // Try to get from localStorage first (cached location)
            const cached = localStorage.getItem("userLocation");
            if (cached) {
                try {
                    const parsed = JSON.parse(cached);
                    // Use cached if less than 24 hours old
                    if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
                        setState({
                            location: parsed.location,
                            isLoading: false,
                            error: null,
                            permissionDenied: false
                        });
                        return;
                    }
                } catch (e) {
                    localStorage.removeItem("userLocation");
                }
            }
            // Try geolocation API
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition({
                    "useUserLocation.useEffect": async (position)=>{
                        const { latitude, longitude } = position.coords;
                        // Try to get location details via reverse geocoding
                        let locationDetails = {
                            latitude,
                            longitude
                        };
                        try {
                            // Using a free reverse geocoding service
                            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`, {
                                headers: {
                                    "User-Agent": "RadioGlobe/1.0"
                                }
                            });
                            if (response.ok) {
                                const data = await response.json();
                                locationDetails = {
                                    latitude,
                                    longitude,
                                    country: data.address?.country,
                                    city: data.address?.city || data.address?.town || data.address?.village,
                                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                                };
                            }
                        } catch (e) {
                            // Reverse geocoding failed, use coordinates only
                            locationDetails.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        }
                        // Cache the location
                        localStorage.setItem("userLocation", JSON.stringify({
                            location: locationDetails,
                            timestamp: Date.now()
                        }));
                        setState({
                            location: locationDetails,
                            isLoading: false,
                            error: null,
                            permissionDenied: false
                        });
                    }
                }["useUserLocation.useEffect"], {
                    "useUserLocation.useEffect": (error)=>{
                        console.warn("Geolocation error:", error.message);
                        // Use timezone-based fallback
                        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        const fallbackLocation = getFallbackFromTimezone(timezone);
                        setState({
                            location: fallbackLocation,
                            isLoading: false,
                            error: error.message,
                            permissionDenied: error.code === error.PERMISSION_DENIED
                        });
                    }
                }["useUserLocation.useEffect"], {
                    enableHighAccuracy: false,
                    timeout: 10000,
                    maximumAge: 300000
                });
            } else {
                // Geolocation not supported, use timezone fallback
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const fallbackLocation = getFallbackFromTimezone(timezone);
                setState({
                    location: fallbackLocation,
                    isLoading: false,
                    error: "Geolocation not supported",
                    permissionDenied: false
                });
            }
        }
    }["useUserLocation.useEffect"], []);
    return state;
}
_s(useUserLocation, "qqA+uLsul6ZNf+e92zv71Zo+7kw=");
function getFallbackFromTimezone(timezone) {
    // Map timezones to countries
    if (timezone.startsWith("America/")) {
        if (timezone.includes("Sao_Paulo") || timezone.includes("Brasilia")) {
            return FALLBACK_LOCATIONS.BR;
        }
        return FALLBACK_LOCATIONS.US;
    }
    if (timezone.startsWith("Europe/London")) return FALLBACK_LOCATIONS.GB;
    if (timezone.startsWith("Europe/Berlin") || timezone.startsWith("Europe/Vienna")) return FALLBACK_LOCATIONS.DE;
    if (timezone.startsWith("Europe/Paris")) return FALLBACK_LOCATIONS.FR;
    if (timezone.startsWith("Asia/Tokyo")) return FALLBACK_LOCATIONS.JP;
    if (timezone.startsWith("Asia/Kolkata")) return FALLBACK_LOCATIONS.IN;
    if (timezone.startsWith("Africa/Nairobi")) return FALLBACK_LOCATIONS.KE;
    if (timezone.startsWith("Australia/")) return FALLBACK_LOCATIONS.AU;
    // Default to US
    return FALLBACK_LOCATIONS.US;
}
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
function toRad(deg) {
    return deg * (Math.PI / 180);
}
function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    if (hour >= 17 && hour < 21) return "evening";
    return "night";
}
function getTimeBasedGenres() {
    const timeOfDay = getTimeOfDay();
    switch(timeOfDay){
        case "morning":
            return [
                "news",
                "talk",
                "classical",
                "jazz",
                "acoustic"
            ];
        case "afternoon":
            return [
                "pop",
                "rock",
                "indie",
                "electronic",
                "world"
            ];
        case "evening":
            return [
                "jazz",
                "soul",
                "r&b",
                "chill",
                "lounge"
            ];
        case "night":
            return [
                "ambient",
                "electronic",
                "classical",
                "lo-fi",
                "sleep"
            ];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/StationPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationPanel",
    ()=>StationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserLocation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function StationPanel({ station, onClose }) {
    _s();
    const { isFavorite, toggleFavorite } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"])();
    const { location } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserLocation"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isStationFavorite = isFavorite(station.id);
    const currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: station.location.timezone || "UTC",
        hour: "2-digit",
        minute: "2-digit"
    });
    // Calculate distance from user
    const distance = location && station.location.lat && station.location.lng ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDistance"])(location.latitude, location.longitude, station.location.lat, station.location.lng) : null;
    const formatDistance = (km)=>{
        if (km < 1) return `${Math.round(km * 1000)}m`;
        if (km < 100) return `${km.toFixed(1)}km`;
        return `${Math.round(km).toLocaleString()}km`;
    };
    // Get quality indicator
    const getQualityIndicator = (bitrate)=>{
        if (!bitrate) return {
            label: "Unknown",
            color: "text-gray-400",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"]
        };
        if (bitrate >= 256) return {
            label: "HD",
            color: "text-green-400",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"]
        };
        if (bitrate >= 128) return {
            label: "Good",
            color: "text-blue-400",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"]
        };
        return {
            label: "Low",
            color: "text-yellow-400",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"]
        };
    };
    const quality = getQualityIndicator(station.bitrate);
    const handleShare = async ()=>{
        const shareData = {
            title: station.name,
            text: `Listen to ${station.name} on Radio Globe`,
            url: `${window.location.origin}?station=${station.id}`
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (e) {
                // User cancelled or share failed
                copyToClipboard(shareData.url);
            }
        } else {
            copyToClipboard(shareData.url);
        }
    };
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.9
        },
        className: "glass rounded-xl p-5 w-80 max-w-sm relative",
        children: [
            onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-3 right-3 p-1.5 rounded-lg hover:bg-white/10 transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-4 h-4 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 pr-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold text-lg",
                                    children: station.name.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg text-white truncate",
                                        children: station.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-gray-400 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3.5 h-3.5 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: [
                                                    station.location.city,
                                                    ", ",
                                                    station.location.country
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    distance !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            formatDistance(distance),
                            " away"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-2.5 bg-white/5 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-4 h-4 mx-auto mb-1 text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-white",
                                children: station.listeners >= 1000 ? `${(station.listeners / 1000).toFixed(0)}k` : station.listeners
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-gray-500",
                                children: "Listeners"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-2.5 bg-white/5 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-4 h-4 mx-auto mb-1 text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-white",
                                children: currentTime
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-gray-500",
                                children: "Local Time"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-2.5 bg-white/5 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(quality.icon, {
                                className: `w-4 h-4 mx-auto mb-1 ${quality.color}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-sm font-semibold ${quality.color}`,
                                children: quality.label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-gray-500",
                                children: station.bitrate ? `${station.bitrate}kbps` : "Quality"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            station.genre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5 mb-4",
                children: station.genre.split(",").slice(0, 3).map((genre, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 bg-white/10 text-gray-300 rounded-full text-xs",
                        children: genre.trim()
                    }, i, false, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 176,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4 text-sm",
                children: station.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Language"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-300 capitalize",
                            children: station.language
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleFavorite(station),
                        className: `flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${isStationFavorite ? "bg-pink-500/20 text-pink-400 border border-pink-500/30" : "bg-white/10 text-white hover:bg-white/20"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: `w-4 h-4 ${isStationFavorite ? "fill-current" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            isStationFavorite ? "Saved" : "Save"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShare,
                        className: "flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors",
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4 text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    station.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: station.website,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center justify-center px-3 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(StationPanel, "F0UWLfzct+XC4BPeGoMwm55btUo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserLocation"]
    ];
});
_c = StationPanel;
var _c;
__turbopack_context__.k.register(_c, "StationPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/SearchPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchPanel",
    ()=>SearchPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioStationService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SearchPanel({ className = "" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [popularStations, setPopularStations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchFilter, setSearchFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const { selectStation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    // Load popular stations once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPanel.useEffect": ()=>{
            const fetchPopular = {
                "SearchPanel.useEffect.fetchPopular": async ()=>{
                    try {
                        const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getPopularStations(8);
                        setPopularStations(stations);
                    } catch (error) {
                        console.error("Failed to load popular stations:", error);
                    }
                }
            }["SearchPanel.useEffect.fetchPopular"];
            fetchPopular();
        }
    }["SearchPanel.useEffect"], []);
    // Enhanced search with filters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPanel.useEffect": ()=>{
            let timer;
            if (searchTerm.length > 2) {
                setIsLoading(true);
                timer = setTimeout({
                    "SearchPanel.useEffect": async ()=>{
                        let results = [];
                        try {
                            switch(searchFilter){
                                case "genre":
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByGenre(searchTerm);
                                    break;
                                case "country":
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByCountry(searchTerm);
                                    break;
                                case "city":
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByCity(searchTerm);
                                    break;
                                default:
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].searchStations(searchTerm);
                            }
                            setSearchResults(results.slice(0, 10)); // Limit results
                        } catch (error) {
                            console.error("Search error:", error);
                            setSearchResults([]);
                        } finally{
                            setIsLoading(false);
                        }
                    }
                }["SearchPanel.useEffect"], 300);
            } else {
                setSearchResults([]);
                setIsLoading(false);
            }
            return ({
                "SearchPanel.useEffect": ()=>{
                    if (timer) clearTimeout(timer);
                }
            })["SearchPanel.useEffect"];
        }
    }["SearchPanel.useEffect"], [
        searchTerm,
        searchFilter
    ]);
    const handleStationSelect = (station)=>{
        selectStation(station);
        setIsOpen(false);
        setSearchTerm("");
        setSearchResults([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-center",
                whileHover: {
                    scale: 1.02
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-3 w-4 h-4 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            onFocus: ()=>setIsOpen(true),
                            placeholder: "Search radio stations...",
                            className: "glass pl-10 pr-4 py-2 w-64 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-3 top-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    className: "absolute top-full left-0 mt-2 w-80 glass rounded-xl overflow-hidden z-50 max-h-96 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-b border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    "all",
                                    "genre",
                                    "country",
                                    "city"
                                ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchFilter(filter),
                                        className: `px-3 py-1 text-xs rounded-full transition-colors ${searchFilter === filter ? "bg-blue-500 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"}`,
                                        children: filter.charAt(0).toUpperCase() + filter.slice(1)
                                    }, filter, false, {
                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400 px-2 py-1",
                                    children: [
                                        searchResults.length,
                                        " stations found"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this),
                                searchResults.map((station)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>handleStationSelect(station),
                                        className: "w-full p-3 text-left hover:bg-white/10 rounded-lg transition-colors",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                        className: "w-5 h-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-white text-sm truncate",
                                                            children: station.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-400 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 27
                                                                }, this),
                                                                station.location.city,
                                                                ", ",
                                                                station.location.country,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded text-xs",
                                                                    children: station.genre
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        (station.listeners / 1000).toFixed(0),
                                                        "k"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 162,
                                            columnNumber: 21
                                        }, this)
                                    }, station.id, false, {
                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this),
                        searchTerm.length === 0 && popularStations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400 px-2 py-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this),
                                        "Popular Stations"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, this),
                                popularStations.map((station)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>handleStationSelect(station),
                                        className: "w-full p-3 text-left hover:bg-white/10 rounded-lg transition-colors",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white text-xs font-bold",
                                                        children: station.name.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-white text-sm truncate",
                                                            children: station.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-400",
                                                            children: [
                                                                station.location.city,
                                                                ", ",
                                                                station.location.country
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-green-400",
                                                    children: [
                                                        (station.listeners / 1000).toFixed(0),
                                                        "k"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, this)
                                    }, station.id, false, {
                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 189,
                            columnNumber: 15
                        }, this),
                        searchTerm.length > 2 && searchResults.length === 0 && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 text-center text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    className: "w-8 h-8 mx-auto mb-2 opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 229,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: "No stations found"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 230,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs",
                                    children: "Try searching by genre or country"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 231,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 228,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 border-t border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsOpen(false);
                                    setSearchTerm("");
                                },
                                className: "w-full py-2 text-xs text-gray-400 hover:text-white transition-colors",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>{
                    setIsOpen(false);
                    setSearchTerm("");
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(SearchPanel, "bHA062Dj63KbdCxFCHwDT0ULuDc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"]
    ];
});
_c = SearchPanel;
var _c;
__turbopack_context__.k.register(_c, "SearchPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/StationDirectory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationDirectory",
    ()=>StationDirectory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserLocation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioDiscoveryService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function StationDirectory({ className = "" }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("discover");
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [stations, setStations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { selectedStation, selectStation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const { favorites, isFavorite, toggleFavorite } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"])();
    const { recent, addToRecent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentStations"])();
    const { location, isLoading: locationLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserLocation"])();
    // Load stations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StationDirectory.useEffect": ()=>{
            const loadStations = {
                "StationDirectory.useEffect.loadStations": async ()=>{
                    setIsLoading(true);
                    try {
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(100);
                        setStations(data);
                    } catch (error) {
                        console.error("Failed to load stations:", error);
                    }
                    setIsLoading(false);
                }
            }["StationDirectory.useEffect.loadStations"];
            loadStations();
        }
    }["StationDirectory.useEffect"], []);
    // Get unique genres
    const genres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StationDirectory.useMemo[genres]": ()=>{
            const allGenres = stations.flatMap({
                "StationDirectory.useMemo[genres].allGenres": (s)=>s.genre?.split(",").map({
                        "StationDirectory.useMemo[genres].allGenres": (g)=>g.trim().toLowerCase()
                    }["StationDirectory.useMemo[genres].allGenres"]) || []
            }["StationDirectory.useMemo[genres].allGenres"]);
            return [
                "all",
                ...Array.from(new Set(allGenres)).slice(0, 10)
            ];
        }
    }["StationDirectory.useMemo[genres]"], [
        stations
    ]);
    // Time-based recommendations
    const timeOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeOfDay"])();
    const recommendedGenres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeBasedGenres"])();
    // Sort stations by distance if location available
    const stationsWithDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StationDirectory.useMemo[stationsWithDistance]": ()=>{
            if (!location) return stations.map({
                "StationDirectory.useMemo[stationsWithDistance]": (s)=>({
                        station: s,
                        distance: null
                    })
            }["StationDirectory.useMemo[stationsWithDistance]"]);
            return stations.map({
                "StationDirectory.useMemo[stationsWithDistance]": (station)=>{
                    const distance = station.location.lat && station.location.lng ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDistance"])(location.latitude, location.longitude, station.location.lat, station.location.lng) : null;
                    return {
                        station,
                        distance
                    };
                }
            }["StationDirectory.useMemo[stationsWithDistance]"]).sort({
                "StationDirectory.useMemo[stationsWithDistance]": (a, b)=>{
                    if (a.distance === null) return 1;
                    if (b.distance === null) return -1;
                    return a.distance - b.distance;
                }
            }["StationDirectory.useMemo[stationsWithDistance]"]);
        }
    }["StationDirectory.useMemo[stationsWithDistance]"], [
        stations,
        location
    ]);
    // Filter stations by genre
    const filteredStations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StationDirectory.useMemo[filteredStations]": ()=>{
            if (selectedGenre === "all") return stationsWithDistance;
            return stationsWithDistance.filter({
                "StationDirectory.useMemo[filteredStations]": ({ station })=>station.genre?.toLowerCase().includes(selectedGenre)
            }["StationDirectory.useMemo[filteredStations]"]);
        }
    }["StationDirectory.useMemo[filteredStations]"], [
        stationsWithDistance,
        selectedGenre
    ]);
    // Get display data based on active tab
    const displayData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StationDirectory.useMemo[displayData]": ()=>{
            switch(activeTab){
                case "nearby":
                    return filteredStations.slice(0, 20);
                case "favorites":
                    return favorites.map({
                        "StationDirectory.useMemo[displayData]": (s)=>({
                                station: s,
                                distance: null
                            })
                    }["StationDirectory.useMemo[displayData]"]);
                case "recent":
                    return recent.map({
                        "StationDirectory.useMemo[displayData]": (s)=>({
                                station: s,
                                distance: null
                            })
                    }["StationDirectory.useMemo[displayData]"]);
                case "discover":
                default:
                    // Time-based smart discovery
                    const timeFiltered = stationsWithDistance.filter({
                        "StationDirectory.useMemo[displayData].timeFiltered": ({ station })=>recommendedGenres.some({
                                "StationDirectory.useMemo[displayData].timeFiltered": (genre)=>station.genre?.toLowerCase().includes(genre)
                            }["StationDirectory.useMemo[displayData].timeFiltered"])
                    }["StationDirectory.useMemo[displayData].timeFiltered"]);
                    // Mix time-relevant with popular
                    return [
                        ...timeFiltered.slice(0, 5),
                        ...stationsWithDistance.filter({
                            "StationDirectory.useMemo[displayData]": (s)=>!timeFiltered.includes(s)
                        }["StationDirectory.useMemo[displayData]"]).sort({
                            "StationDirectory.useMemo[displayData]": (a, b)=>b.station.listeners - a.station.listeners
                        }["StationDirectory.useMemo[displayData]"]).slice(0, 15)
                    ];
            }
        }
    }["StationDirectory.useMemo[displayData]"], [
        activeTab,
        filteredStations,
        favorites,
        recent,
        stationsWithDistance,
        recommendedGenres
    ]);
    const handleStationSelect = (station)=>{
        selectStation(station);
        addToRecent(station);
    };
    const formatDistance = (km)=>{
        if (km === null) return null;
        if (km < 1) return `${Math.round(km * 1000)}m`;
        if (km < 100) return `${km.toFixed(0)}km`;
        return `${Math.round(km).toLocaleString()}km`;
    };
    const tabs = [
        {
            id: "discover",
            label: "Discover",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
        },
        {
            id: "nearby",
            label: "Near Me",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"]
        },
        {
            id: "favorites",
            label: "Favorites",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            count: favorites.length
        },
        {
            id: "recent",
            label: "Recent",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
            count: recent.length
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `glass rounded-xl overflow-hidden flex flex-col h-full ${className}`,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-white/10 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-5 h-5 text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-white",
                                        children: "Stations"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400",
                                    children: [
                                        timeOfDay === "morning" && "☀️ Good morning",
                                        timeOfDay === "afternoon" && "🌤️ Good afternoon",
                                        timeOfDay === "evening" && "🌅 Good evening",
                                        timeOfDay === "night" && "🌙 Night mode"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 bg-white/5 p-1 rounded-lg",
                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `flex-1 flex items-center justify-center gap-1.5 px-2 py-2 text-xs rounded-md transition-all ${activeTab === tab.id ? "bg-blue-500 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    tab.count !== undefined && tab.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-1.5 py-0.5 text-[10px] rounded-full ${activeTab === tab.id ? "bg-white/20" : "bg-white/10"}`,
                                        children: tab.count
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            (activeTab === "discover" || activeTab === "nearby") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 border-b border-white/5 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowFilters(!showFilters),
                        className: "flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Filter by genre"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 pt-2",
                                children: genres.map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedGenre(genre),
                                        className: `px-2 py-1 text-xs rounded-full transition-colors ${selectedGenre === genre ? "bg-blue-500 text-white" : "bg-white/10 text-gray-400 hover:text-white hover:bg-white/20"}`,
                                        children: genre === "all" ? "All" : genre
                                    }, genre, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 249,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 247,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 241,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this),
            activeTab === "discover" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "w-3.5 h-3.5 text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Recommended for ",
                                timeOfDay,
                                ":",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: recommendedGenres.slice(0, 3).join(", ")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 271,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this),
            activeTab === "nearby" && location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            className: "w-3.5 h-3.5 text-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Stations near",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: location.city || "your location"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-32",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 301,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 300,
                    columnNumber: 11
                }, this) : displayData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                            className: "w-8 h-8 mx-auto mb-2 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm",
                            children: [
                                activeTab === "favorites" && "No favorites yet",
                                activeTab === "recent" && "No recently played",
                                activeTab === "nearby" && "No nearby stations found",
                                activeTab === "discover" && "No stations found"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs mt-1",
                            children: [
                                activeTab === "favorites" && "Tap the heart icon to save stations",
                                activeTab === "recent" && "Play some stations to see them here"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-white/5",
                    children: displayData.map(({ station, distance })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StationListItem, {
                            station: station,
                            distance: formatDistance(distance),
                            isSelected: selectedStation?.id === station.id,
                            isFavorite: isFavorite(station.id),
                            onSelect: ()=>handleStationSelect(station),
                            onToggleFavorite: ()=>toggleFavorite(station)
                        }, station.id, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 321,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 319,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t border-white/10 bg-white/5 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                displayData.length,
                                " stations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: location?.city && `📍 ${location.city}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(StationDirectory, "MPDDCuAcEwsm5aHWX7OKFaNK+CY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentStations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserLocation"]
    ];
});
_c = StationDirectory;
function StationListItem({ station, distance, isSelected, isFavorite, onSelect, onToggleFavorite }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `p-3 cursor-pointer transition-colors ${isSelected ? "bg-blue-500/20" : "hover:bg-white/5"}`,
        onClick: onSelect,
        whileTap: {
            scale: 0.98
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isSelected ? "bg-blue-500" : "bg-gradient-to-br from-purple-500/30 to-blue-500/30"}`,
                    children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-0.5 h-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 bg-white rounded-full animate-pulse",
                                style: {
                                    height: "40%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 382,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 bg-white rounded-full animate-pulse",
                                style: {
                                    height: "100%",
                                    animationDelay: "0.1s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 386,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 bg-white rounded-full animate-pulse",
                                style: {
                                    height: "60%",
                                    animationDelay: "0.2s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 390,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 381,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: station.name.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 396,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `font-medium text-sm truncate ${isSelected ? "text-blue-300" : "text-white"}`,
                                children: station.name
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs text-gray-500 mt-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: station.location.country
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this),
                                station.genre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate text-gray-400",
                                            children: station.genre.split(",")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 flex-shrink-0",
                    children: [
                        distance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full",
                            children: distance
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 430,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: station.listeners >= 1000 ? `${(station.listeners / 1000).toFixed(0)}k` : station.listeners
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onToggleFavorite();
                            },
                            className: `p-1.5 rounded-full transition-colors ${isFavorite ? "text-pink-400 bg-pink-500/20" : "text-gray-500 hover:text-pink-400 hover:bg-white/5"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: `w-3.5 h-3.5 ${isFavorite ? "fill-current" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
            lineNumber: 371,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, this);
}
_c1 = StationListItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "StationDirectory");
__turbopack_context__.k.register(_c1, "StationListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/UserPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserPanel",
    ()=>UserPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UserPanel() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Mock auth state
    if (!isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button-secondary text-sm",
                    children: "Sign In"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button-primary text-sm",
                    children: "Sign Up"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-3 p-3 glass rounded-lg hover:bg-white/20 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "w-4 h-4 text-white"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-white",
                                children: "John Doe"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400",
                                children: "Premium"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: -10
                    },
                    className: "absolute right-0 top-full mt-2 w-64 glass rounded-xl overflow-hidden z-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-white",
                                                children: "John Doe"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400",
                                                children: "john@example.com"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-blue-400",
                                                children: "Premium Member"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "Favorites"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-auto text-xs text-gray-400",
                                            children: "24"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "Listening History"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "Discover"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/10 my-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors text-red-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Sign Out"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/UserPanel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(UserPanel, "yFKST7Y5gg/yaPdhg4D8qvU+t2E=");
_c = UserPanel;
var _c;
__turbopack_context__.k.register(_c, "UserPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CesiumGlobe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/CesiumGlobe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ModularAudioPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/StationPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SearchPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationDirectory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/StationDirectory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/UserPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const { selectedStation, addMarker, markers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDirectory, setShowDirectory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMobileMenu, setShowMobileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect mobile device and screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const checkIfMobile = {
                "Home.useEffect.checkIfMobile": ()=>{
                    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
                }
            }["Home.useEffect.checkIfMobile"];
            checkIfMobile();
            window.addEventListener("resize", checkIfMobile);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("resize", checkIfMobile)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative h-screen w-screen overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CesiumGlobe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CesiumGlobe"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 right-0 z-40 p-4",
                initial: {
                    y: -100
                },
                animate: {
                    y: 0
                },
                transition: {
                    delay: 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex items-center gap-3",
                            whileHover: {
                                scale: 1.05
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                        className: "w-6 h-6 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-white",
                                            children: "Radio Globe"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400",
                                            children: "Discover global radio stations"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchPanel"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setShowDirectory(!showDirectory),
                                    className: `glass px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${showDirectory ? "bg-blue-500/20 text-blue-300" : "text-white hover:bg-white/10"}`,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "Directory"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: ()=>setShowMobileMenu(!showMobileMenu),
                            className: "glass p-3 rounded-lg text-white",
                            whileHover: {
                                scale: 1.05
                            },
                            children: showMobileMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            showDirectory && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-20 left-4 z-50 w-96",
                initial: {
                    x: -400,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                exit: {
                    x: -400,
                    opacity: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationDirectory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StationDirectory"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            selectedStation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `absolute ${isMobile ? "bottom-20 left-3 right-3" : "top-20 left-4"} z-50`,
                initial: {
                    x: isMobile ? 0 : -400,
                    y: isMobile ? 100 : 0,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    y: 0,
                    opacity: 1
                },
                exit: {
                    x: isMobile ? 0 : -400,
                    y: isMobile ? 100 : 0,
                    opacity: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StationPanel"], {
                    station: selectedStation
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 left-0 right-0 z-40",
                initial: {
                    y: 100
                },
                animate: {
                    y: 0
                },
                transition: {
                    delay: 0.7
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserPanel"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-2xl mx-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModularAudioPlayer"], {
                                    showVisualizer: !isMobile,
                                    compactMode: isMobile,
                                    autoPlay: false
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setShowDirectory(!showDirectory),
                                    className: `glass p-3 rounded-lg transition-colors ${showDirectory ? "bg-blue-500/20 text-blue-300" : "text-white"}`,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass px-4 py-2 rounded-lg flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400",
                                        children: "Global Stations"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-white",
                                        children: markers.length
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            showMobileMenu && isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 z-50",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/80",
                        onClick: ()=>setShowMobileMenu(false)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-0 right-0 h-full w-80 glass p-6",
                        initial: {
                            x: 320
                        },
                        animate: {
                            x: 0
                        },
                        exit: {
                            x: 320
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-white",
                                            children: "Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowMobileMenu(false),
                                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchPanel"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>{
                                                setShowDirectory(!showDirectory);
                                                setShowMobileMenu(false);
                                            },
                                            className: "w-full glass p-4 rounded-lg flex items-center gap-3 text-left",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                    className: "w-5 h-5 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-white",
                                                            children: "Station Directory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-400",
                                                            children: "Browse all stations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserPanel"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this),
            showDirectory && isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 z-50",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/80",
                        onClick: ()=>setShowDirectory(false)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-20 bottom-20 left-4 right-4 rounded-xl overflow-hidden",
                        initial: {
                            scale: 0.8,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 0.8,
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationDirectory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StationDirectory"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 z-50 bg-black flex items-center justify-center",
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: 0
                },
                transition: {
                    delay: 1,
                    duration: 0.5
                },
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white text-lg",
                            children: "Loading Radio Globe..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Connecting to global stations..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Home, "W54NHP531ommyn44BZIgSWAMGBM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_210f9b0f._.js.map