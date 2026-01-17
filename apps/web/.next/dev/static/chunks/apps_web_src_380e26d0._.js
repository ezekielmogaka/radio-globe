(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/utils/cesiumUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateDistance",
    ()=>calculateDistance,
    "createCameraDestination",
    ()=>createCameraDestination,
    "filterStationsByDistance",
    ()=>filterStationsByDistance,
    "getStationCameraPosition",
    ()=>getStationCameraPosition,
    "getStationColor",
    ()=>getStationColor,
    "getStationScale",
    ()=>getStationScale,
    "latLngToCartesian3",
    ()=>latLngToCartesian3,
    "radioStationToEntity",
    ()=>radioStationToEntity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Cartesian3.js [app-client] (ecmascript) <export default as Cartesian3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Math.js [app-client] (ecmascript) <export default as Math>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Cartographic.js [app-client] (ecmascript) <export default as Cartographic>");
;
function latLngToCartesian3(lat, lng, height = 0) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromDegrees(lng, lat, height);
}
function radioStationToEntity(station) {
    const coordinate = {
        longitude: station.location.lng,
        latitude: station.location.lat,
        height: 10000
    };
    return {
        id: station.id,
        station,
        position: latLngToCartesian3(coordinate.latitude, coordinate.longitude, coordinate.height),
        coordinate
    };
}
function calculateDistance(coord1, coord2) {
    const R = 6371; // Earth's radius in km
    const dLat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(coord2.latitude - coord1.latitude);
    const dLon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(coord2.longitude - coord1.longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(coord1.latitude)) * Math.cos(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(coord2.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
function getStationCameraPosition(station) {
    const distance = 2000000; // 2000km from surface
    return latLngToCartesian3(station.location.lat, station.location.lng, distance);
}
function estimateAltitudeFromBoundingBox(bbox) {
    const latSpan = Math.max(Math.abs(bbox.maxLat - bbox.minLat), 0.5);
    const lngSpan = Math.max(Math.abs(bbox.maxLng - bbox.minLng), 0.5);
    const dominantSpan = Math.max(latSpan, lngSpan);
    const meters = dominantSpan * 111_000;
    const altitude = meters * 3;
    return Math.min(2_500_000, Math.max(220_000, altitude));
}
function estimateDurationFromAltitude(altitude) {
    const normalized = altitude / 1_000_000;
    return Math.min(3.5, Math.max(1.25, normalized + 0.75));
}
function createCameraDestination(station) {
    const wof = station.location.wof;
    const targetLat = wof?.centroid?.lat ?? station.location.lat;
    const targetLng = wof?.centroid?.lng ?? station.location.lng;
    const altitude = wof?.bbox ? estimateAltitudeFromBoundingBox(wof.bbox) : 1_500_000;
    const duration = estimateDurationFromAltitude(altitude);
    return {
        destination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromDegrees(targetLng, targetLat, altitude),
        orientation: {
            heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(0),
            pitch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(-40),
            roll: 0
        },
        duration
    };
}
function filterStationsByDistance(stations, cameraPosition, maxDistance = 5000) {
    const cameraCartographic = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"].fromCartesian(cameraPosition);
    const cameraCoord = {
        longitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toDegrees(cameraCartographic.longitude),
        latitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toDegrees(cameraCartographic.latitude)
    };
    return stations.filter((station)=>{
        const stationCoord = {
            longitude: station.location.lng,
            latitude: station.location.lat
        };
        return calculateDistance(cameraCoord, stationCoord) <= maxDistance;
    });
}
function getStationColor(station, isSelected = false, isHovered = false) {
    if (isSelected) return {
        red: 1.0,
        green: 0.0,
        blue: 0.0,
        alpha: 1.0
    }; // Red
    if (isHovered) return {
        red: 1.0,
        green: 1.0,
        blue: 0.0,
        alpha: 1.0
    }; // Yellow
    // Special handling for clusters - brighter colors
    const isCluster = station.isCluster || station.stationCount && station.stationCount > 1;
    const alphaMultiplier = isCluster ? 1.0 : 0.8; // Clusters are more opaque
    // Color by region/country with extensive coverage
    const country = station.location.country || "default";
    switch(country){
        // North America
        case "US":
        case "USA":
            return {
                red: 0.0,
                green: 0.5,
                blue: 1.0,
                alpha: alphaMultiplier
            }; // Blue
        case "CA":
        case "Canada":
            return {
                red: 1.0,
                green: 0.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Red
        case "MX":
        case "Mexico":
            return {
                red: 0.0,
                green: 1.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Green
        // Europe
        case "UK":
        case "GB":
        case "United Kingdom":
            return {
                red: 1.0,
                green: 0.0,
                blue: 0.5,
                alpha: alphaMultiplier
            }; // Pink
        case "DE":
        case "Germany":
            return {
                red: 1.0,
                green: 1.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Yellow
        case "FR":
        case "France":
            return {
                red: 0.5,
                green: 0.0,
                blue: 1.0,
                alpha: alphaMultiplier
            }; // Purple
        case "IT":
        case "Italy":
            return {
                red: 0.0,
                green: 1.0,
                blue: 0.5,
                alpha: alphaMultiplier
            }; // Light Green
        case "ES":
        case "Spain":
            return {
                red: 1.0,
                green: 0.5,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Orange
        case "NL":
        case "Netherlands":
            return {
                red: 1.0,
                green: 0.5,
                blue: 0.5,
                alpha: alphaMultiplier
            }; // Light Pink
        case "SE":
        case "Sweden":
            return {
                red: 0.0,
                green: 0.7,
                blue: 1.0,
                alpha: alphaMultiplier
            }; // Light Blue
        case "NO":
        case "Norway":
            return {
                red: 0.0,
                green: 0.3,
                blue: 0.7,
                alpha: alphaMultiplier
            }; // Dark Blue
        case "DK":
        case "Denmark":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.3,
                alpha: alphaMultiplier
            }; // Dark Pink
        case "FI":
        case "Finland":
            return {
                red: 0.0,
                green: 0.8,
                blue: 0.8,
                alpha: alphaMultiplier
            }; // Cyan
        case "CH":
        case "Switzerland":
            return {
                red: 0.7,
                green: 0.7,
                blue: 0.7,
                alpha: alphaMultiplier
            }; // Light Gray
        case "AT":
        case "Austria":
            return {
                red: 0.5,
                green: 0.5,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Olive
        case "BE":
        case "Belgium":
            return {
                red: 0.3,
                green: 0.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Dark Red
        case "PL":
        case "Poland":
            return {
                red: 0.8,
                green: 0.8,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Bright Yellow
        case "RU":
        case "Russia":
            return {
                red: 0.0,
                green: 0.0,
                blue: 0.8,
                alpha: alphaMultiplier
            }; // Dark Blue
        // Asia Pacific
        case "JP":
        case "Japan":
            return {
                red: 1.0,
                green: 0.0,
                blue: 1.0,
                alpha: alphaMultiplier
            }; // Magenta
        case "CN":
        case "China":
            return {
                red: 1.0,
                green: 0.8,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Gold
        case "KR":
        case "Korea":
        case "South Korea":
            return {
                red: 0.5,
                green: 1.0,
                blue: 0.5,
                alpha: alphaMultiplier
            }; // Light Green
        case "IN":
        case "India":
            return {
                red: 1.0,
                green: 0.5,
                blue: 0.2,
                alpha: alphaMultiplier
            }; // Saffron
        case "AU":
        case "Australia":
            return {
                red: 0.0,
                green: 0.6,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Forest Green
        case "NZ":
        case "New Zealand":
            return {
                red: 0.0,
                green: 0.4,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Dark Green
        case "TH":
        case "Thailand":
            return {
                red: 0.8,
                green: 0.4,
                blue: 0.8,
                alpha: alphaMultiplier
            }; // Light Purple
        case "SG":
        case "Singapore":
            return {
                red: 0.0,
                green: 0.8,
                blue: 0.6,
                alpha: alphaMultiplier
            }; // Teal
        case "MY":
        case "Malaysia":
            return {
                red: 0.6,
                green: 0.8,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Lime
        case "ID":
        case "Indonesia":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.8,
                alpha: alphaMultiplier
            }; // Purple
        case "PH":
        case "Philippines":
            return {
                red: 0.0,
                green: 0.0,
                blue: 1.0,
                alpha: alphaMultiplier
            }; // Blue
        // South America
        case "BR":
        case "Brazil":
            return {
                red: 0.0,
                green: 0.8,
                blue: 0.2,
                alpha: alphaMultiplier
            }; // Brazilian Green
        case "AR":
        case "Argentina":
            return {
                red: 0.5,
                green: 0.8,
                blue: 1.0,
                alpha: alphaMultiplier
            }; // Sky Blue
        case "CL":
        case "Chile":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Red
        case "PE":
        case "Peru":
            return {
                red: 0.8,
                green: 0.2,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Dark Orange
        case "CO":
        case "Colombia":
            return {
                red: 1.0,
                green: 1.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Yellow
        // Africa
        case "ZA":
        case "South Africa":
            return {
                red: 0.0,
                green: 0.5,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Green
        case "NG":
        case "Nigeria":
            return {
                red: 0.0,
                green: 0.7,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Green
        case "KE":
        case "Kenya":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Red
        case "EG":
        case "Egypt":
            return {
                red: 0.8,
                green: 0.6,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Gold
        case "MA":
        case "Morocco":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Red
        // Middle East
        case "AE":
        case "UAE":
            return {
                red: 0.0,
                green: 0.6,
                blue: 0.8,
                alpha: alphaMultiplier
            }; // Turquoise
        case "SA":
        case "Saudi Arabia":
            return {
                red: 0.0,
                green: 0.5,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Green
        case "IL":
        case "Israel":
            return {
                red: 0.0,
                green: 0.0,
                blue: 0.8,
                alpha: alphaMultiplier
            }; // Blue
        case "TR":
        case "Turkey":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Red
        case "IR":
        case "Iran":
            return {
                red: 0.0,
                green: 0.8,
                blue: 0.0,
                alpha: alphaMultiplier
            }; // Green
        // Default for unspecified countries
        default:
            return {
                red: 0.7,
                green: 0.7,
                blue: 0.7,
                alpha: alphaMultiplier
            }; // Light Gray
    }
}
function getStationScale(station) {
    // Handle clusters with dynamic scaling based on station count
    if (station.isCluster && station.stationCount) {
        if (station.stationCount > 20) return 2.5; // Very large clusters
        if (station.stationCount > 10) return 2.0; // Large clusters
        if (station.stationCount > 5) return 1.7; // Medium clusters
        if (station.stationCount > 1) return 1.4; // Small clusters
    }
    // Scale based on language or listener count (for individual stations)
    if (station.language === "en") return 1.2;
    if (station.tags?.includes("popular")) return 1.1;
    if (station.listeners && station.listeners > 10000) return 1.3;
    return 1.0;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/utils/cesiumEntityManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CesiumEntityManager",
    ()=>CesiumEntityManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Color.js [app-client] (ecmascript) <export default as Color>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/DataSources/ConstantProperty.js [app-client] (ecmascript) <export default as ConstantProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$BillboardGraphics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BillboardGraphics$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/DataSources/BillboardGraphics.js [app-client] (ecmascript) <export default as BillboardGraphics>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$LabelGraphics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LabelGraphics$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/DataSources/LabelGraphics.js [app-client] (ecmascript) <export default as LabelGraphics>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$HeightReference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeightReference$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/HeightReference.js [app-client] (ecmascript) <export default as HeightReference>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$NearFarScalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NearFarScalar$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/NearFarScalar.js [app-client] (ecmascript) <export default as NearFarScalar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$DistanceDisplayCondition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistanceDisplayCondition$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/DistanceDisplayCondition.js [app-client] (ecmascript) <export default as DistanceDisplayCondition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Cartesian2.js [app-client] (ecmascript) <export default as Cartesian2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$VerticalOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VerticalOrigin$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/VerticalOrigin.js [app-client] (ecmascript) <export default as VerticalOrigin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$LabelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LabelStyle$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/LabelStyle.js [app-client] (ecmascript) <export default as LabelStyle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/cesiumUtils.ts [app-client] (ecmascript)");
;
;
class CesiumEntityManager {
    entities = new Map();
    viewer;
    constructor(viewer){
        this.viewer = viewer;
    }
    /**
   * Create a radio station entity with cluster support
   */ createStationEntity(station) {
        const stationEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationToEntity"])(station);
        // Choose icon based on whether it's a cluster or individual station
        const iconImage = station.isCluster ? station.stationCount && station.stationCount > 10 ? "/cluster-large.svg" : "/cluster-small.svg" : "/radio-station-icon.svg";
        const distanceFadeLimit = station.isCluster ? 6.5e6 : 3.0e6;
        const entity = this.viewer.entities.add({
            id: station.id,
            position: stationEntity.position,
            billboard: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$BillboardGraphics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BillboardGraphics$3e$__["BillboardGraphics"]({
                image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](iconImage),
                show: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](true),
                scale: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStationScale"])(station)),
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].WHITE),
                scaleByDistance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](station.isCluster ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$NearFarScalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NearFarScalar$3e$__["NearFarScalar"](8.0e5, 2.2, 2.0e7, 0.6) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$NearFarScalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NearFarScalar$3e$__["NearFarScalar"](6.0e5, 1.4, 1.5e7, 0.2)),
                translucencyByDistance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](station.isCluster ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$NearFarScalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NearFarScalar$3e$__["NearFarScalar"](8.0e5, 1.0, 2.5e7, 0.1) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$NearFarScalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NearFarScalar$3e$__["NearFarScalar"](5.0e5, 1.0, 1.2e7, 0.05)),
                distanceDisplayCondition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$DistanceDisplayCondition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistanceDisplayCondition$3e$__["DistanceDisplayCondition"](0.0, distanceFadeLimit)),
                heightReference: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$HeightReference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeightReference$3e$__["HeightReference"].RELATIVE_TO_GROUND),
                disableDepthTestDistance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](Number.POSITIVE_INFINITY)
            }),
            label: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$LabelGraphics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LabelGraphics$3e$__["LabelGraphics"]({
                text: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](station.isCluster ? `${station.name}` // Simplified cluster text to reduce clutter
                 : station.name),
                font: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](station.isCluster ? "bold 12pt sans-serif" // Slightly smaller font
                 : "10pt sans-serif" // Smaller font for individual stations
                ),
                style: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$LabelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LabelStyle$3e$__["LabelStyle"].FILL_AND_OUTLINE),
                outlineWidth: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](3),
                verticalOrigin: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$VerticalOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VerticalOrigin$3e$__["VerticalOrigin"].BOTTOM),
                pixelOffset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"](0, -40)),
                show: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](false),
                distanceDisplayCondition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$DistanceDisplayCondition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DistanceDisplayCondition$3e$__["DistanceDisplayCondition"](0.0, station.isCluster ? 5.0e6 : 1.8e6)),
                fillColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](station.isCluster ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].YELLOW : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].WHITE),
                outlineColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].BLACK),
                scaleByDistance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$NearFarScalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NearFarScalar$3e$__["NearFarScalar"](8.0e5, 1.05, 1.2e7, 0.0)),
                // Add collision detection to prevent overlapping labels
                disableDepthTestDistance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](Number.POSITIVE_INFINITY)
            })
        });
        // Store station data on the entity
        entity.station = station;
        this.entities.set(station.id, entity);
        // Request render since we're using requestRenderMode
        this.viewer.scene.requestRender();
        return entity;
    }
    /**
   * Update entity appearance based on selection/hover state
   */ updateEntityAppearance(stationId, isSelected, isHovered) {
        const entity = this.entities.get(stationId);
        if (!entity) return;
        const station = entity.station;
        if (entity.billboard) {
            // Update billboard color and scale
            const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStationColor"])(station, isSelected, isHovered);
            entity.billboard.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].fromBytes(Math.round(color.red * 255), Math.round(color.green * 255), Math.round(color.blue * 255), Math.round(color.alpha * 255)));
            const newScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStationScale"])(station) * (isSelected ? 1.5 : isHovered ? 1.2 : 1.0);
            entity.billboard.scale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](newScale);
        }
        if (entity.label) {
            // Show label on hover or selection
            entity.label.show = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](isHovered || isSelected);
        }
        // Request render for appearance updates
        this.viewer.scene.requestRender();
    }
    /**
   * Get entity by station ID
   */ getEntity(stationId) {
        return this.entities.get(stationId);
    }
    /**
   * Get all entities
   */ getAllEntities() {
        return this.entities;
    }
    /**
   * Clear all entities
   */ clearAll() {
        this.viewer.entities.removeAll();
        this.entities.clear();
        this.viewer.scene.requestRender();
    }
    /**
   * Remove specific entity
   */ removeEntity(stationId) {
        const entity = this.entities.get(stationId);
        if (entity) {
            this.viewer.entities.remove(entity);
            this.entities.delete(stationId);
            this.viewer.scene.requestRender();
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/utils/cesiumViewerConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CESIUM_CONFIG",
    ()=>DEFAULT_CESIUM_CONFIG,
    "createCesiumViewer",
    ()=>createCesiumViewer,
    "createEventHandlers",
    ()=>createEventHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$widgets$2f$Source$2f$Viewer$2f$Viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Viewer$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/widgets/Source/Viewer/Viewer.js [app-client] (ecmascript) <export default as Viewer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$ScreenSpaceEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenSpaceEventType$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/ScreenSpaceEventType.js [app-client] (ecmascript) <export default as ScreenSpaceEventType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$ScreenSpaceEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenSpaceEventHandler$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/ScreenSpaceEventHandler.js [app-client] (ecmascript) <export default as ScreenSpaceEventHandler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Math.js [app-client] (ecmascript) <export default as Math>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Cartesian3.js [app-client] (ecmascript) <export default as Cartesian3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$ShadowMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShadowMode$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/ShadowMode.js [app-client] (ecmascript) <export default as ShadowMode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Color.js [app-client] (ecmascript) <export default as Color>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$EllipsoidTerrainProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EllipsoidTerrainProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/EllipsoidTerrainProvider.js [app-client] (ecmascript) <export default as EllipsoidTerrainProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SceneMode$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/SceneMode.js [app-client] (ecmascript) <export default as SceneMode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/defined.js [app-client] (ecmascript) <export default as defined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$ImageryLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageryLayer$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/ImageryLayer.js [app-client] (ecmascript) <export default as ImageryLayer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$createWorldImageryAsync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createWorldImageryAsync$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/createWorldImageryAsync.js [app-client] (ecmascript) <export default as createWorldImageryAsync>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$IonWorldImageryStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IonWorldImageryStyle$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/IonWorldImageryStyle.js [app-client] (ecmascript) <export default as IonWorldImageryStyle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$ArcGisMapServerImageryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArcGisMapServerImageryProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/ArcGisMapServerImageryProvider.js [app-client] (ecmascript) <export default as ArcGisMapServerImageryProvider>");
;
const DEFAULT_CESIUM_CONFIG = {
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    vrButton: false,
    scene3DOnly: true,
    shadows: false,
    terrainShadows: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$ShadowMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShadowMode$3e$__["ShadowMode"].DISABLED
};
async function createCesiumViewer(container, config = DEFAULT_CESIUM_CONFIG) {
    // Create hidden credit container
    const creditContainer = document.createElement("div");
    creditContainer.style.display = "none";
    document.body.appendChild(creditContainer);
    let imageryProvider;
    try {
        // Try to use Cesium World Imagery (Bing Maps Aerial) for realism
        imageryProvider = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$createWorldImageryAsync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createWorldImageryAsync$3e$__["createWorldImageryAsync"])({
            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$IonWorldImageryStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IonWorldImageryStyle$3e$__["IonWorldImageryStyle"].AERIAL
        });
    } catch (error) {
        console.warn("Failed to load Cesium World Imagery, falling back to ArcGIS:", error);
        // Fallback to ArcGIS World Imagery (High Res Satellite)
        imageryProvider = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$ArcGisMapServerImageryProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArcGisMapServerImageryProvider$3e$__["ArcGisMapServerImageryProvider"].fromUrl("https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer");
    }
    const viewer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$widgets$2f$Source$2f$Viewer$2f$Viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Viewer$3e$__["Viewer"](container, {
        ...config,
        baseLayerPicker: false,
        terrainProvider: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$EllipsoidTerrainProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EllipsoidTerrainProvider$3e$__["EllipsoidTerrainProvider"](),
        baseLayer: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$ImageryLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageryLayer$3e$__["ImageryLayer"](imageryProvider),
        // Rendering settings for stability
        // Disable requestRenderMode to prevent flickering on some devices
        requestRenderMode: false,
        targetFrameRate: 60,
        useBrowserRecommendedResolution: true,
        // Scene configuration
        scene3DOnly: true,
        sceneMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SceneMode$3e$__["SceneMode"].SCENE3D,
        orderIndependentTranslucency: false,
        // Credits
        creditContainer: creditContainer,
        // WebGL context options for stable rendering
        contextOptions: {
            webgl: {
                alpha: false,
                antialias: false,
                preserveDrawingBuffer: false,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: false
            }
        }
    });
    const scene = viewer.scene;
    // Disable ALL visual effects that can cause flickering
    scene.globe.enableLighting = false;
    scene.globe.showGroundAtmosphere = false;
    scene.globe.showWaterEffect = false;
    scene.globe.backFaceCulling = true;
    scene.globe.depthTestAgainstTerrain = false;
    // Solid background - no transparency
    scene.globe.baseColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].BLACK;
    scene.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].BLACK;
    // Disable all sky elements
    if (scene.skyBox) scene.skyBox.show = false;
    if (scene.sun) scene.sun.show = false;
    if (scene.moon) scene.moon.show = false;
    if (scene.skyAtmosphere) scene.skyAtmosphere.show = false;
    // Disable atmospheric effects
    scene.fog.enabled = false;
    scene.highDynamicRange = false;
    scene.logarithmicDepthBuffer = false;
    // Disable ALL post-processing
    const stages = scene.postProcessStages;
    if (stages) {
        stages.fxaa.enabled = false;
        stages.ambientOcclusion.enabled = false;
        stages.bloom.enabled = false;
    }
    // Disable ground primitives that can flicker
    scene.groundPrimitives.show = true;
    // Initial camera
    viewer.camera.setView({
        destination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromDegrees(0, 20, 20000000),
        orientation: {
            heading: 0,
            pitch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(-90),
            roll: 0
        }
    });
    console.log("Cesium viewer created with stable local imagery");
    return viewer;
}
function createEventHandlers(viewer, onStationClick, onStationHover) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$ScreenSpaceEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenSpaceEventHandler$3e$__["ScreenSpaceEventHandler"](viewer.scene.canvas);
    handler.setInputAction((click)=>{
        const pickedObject = viewer.scene.pick(click.position);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(pickedObject) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(pickedObject.id) && pickedObject.id.station) {
            onStationClick(pickedObject.id.station.id);
        } else {
            onStationClick(null);
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$ScreenSpaceEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenSpaceEventType$3e$__["ScreenSpaceEventType"].LEFT_CLICK);
    handler.setInputAction((movement)=>{
        const pickedObject = viewer.scene.pick(movement.endPosition);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(pickedObject) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(pickedObject.id) && pickedObject.id.station) {
            onStationHover(pickedObject.id.station.id);
            viewer.canvas.style.cursor = "pointer";
        } else {
            onStationHover(null);
            viewer.canvas.style.cursor = "default";
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$ScreenSpaceEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenSpaceEventType$3e$__["ScreenSpaceEventType"].MOUSE_MOVE);
    return handler;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/utils/cesiumRegionOverlay.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CesiumRegionOverlayManager",
    ()=>CesiumRegionOverlayManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Color.js [app-client] (ecmascript) <export default as Color>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ColorMaterialProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorMaterialProperty$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/DataSources/ColorMaterialProperty.js [app-client] (ecmascript) <export default as ColorMaterialProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/DataSources/ConstantProperty.js [app-client] (ecmascript) <export default as ConstantProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$GeoJsonDataSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GeoJsonDataSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/DataSources/GeoJsonDataSource.js [app-client] (ecmascript) <export default as GeoJsonDataSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@turf/boolean-point-in-polygon/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$naturalEarthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/location/naturalEarthService.ts [app-client] (ecmascript)");
;
;
;
;
const DEFAULT_FILL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].fromCssColorString("#2563eb").withAlpha(0.15);
const DEFAULT_STROKE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].fromCssColorString("#2563eb").withAlpha(0.8);
const SECONDARY_FILL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].fromCssColorString("#facc15").withAlpha(0.2);
const SECONDARY_STROKE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].fromCssColorString("#fde047").withAlpha(0.9);
class CesiumRegionOverlayManager {
    viewer;
    cache = new Map();
    activeKeys = [];
    countryCollectionPromise = null;
    regionCollectionPromise = null;
    constructor(viewer){
        this.viewer = viewer;
    }
    async highlightStation(station) {
        this.hideActiveSources();
        if (!station?.location.wof) {
            return;
        }
        const detail = station.location.wof;
        const centroid = detail.centroid ?? {
            lat: station.location.lat,
            lng: station.location.lng
        };
        const highlightQueue = [];
        if (detail.countryIsoA3 || detail.countryIsoA2) {
            highlightQueue.push({
                descriptor: {
                    key: `country:${detail.countryIsoA3 ?? detail.countryIsoA2 ?? detail.countryId}`,
                    type: "country",
                    isoA2: detail.countryIsoA2,
                    isoA3: detail.countryIsoA3,
                    centroid
                },
                fill: DEFAULT_FILL,
                stroke: DEFAULT_STROKE
            });
        }
        if (detail.regionIso3166 || detail.regionId) {
            highlightQueue.push({
                descriptor: {
                    key: `region:${detail.regionIso3166 ?? detail.regionId}`,
                    type: "region",
                    isoA2: detail.countryIsoA2,
                    iso3166: detail.regionIso3166,
                    centroid
                },
                fill: SECONDARY_FILL,
                stroke: SECONDARY_STROKE
            });
        }
        for (const item of highlightQueue){
            const source = await this.ensureSource(item.descriptor, item.fill, item.stroke);
            if (!source) continue;
            source.show = true;
            this.activeKeys.push(item.descriptor.key);
        }
    }
    dispose() {
        this.cache.forEach((entry)=>{
            this.viewer.dataSources.remove(entry.source, true);
        });
        this.cache.clear();
        this.activeKeys = [];
    }
    hideActiveSources() {
        for (const key of this.activeKeys){
            const entry = this.cache.get(key);
            if (entry) {
                entry.source.show = false;
            }
        }
        this.activeKeys = [];
    }
    async ensureSource(descriptor, fill, stroke) {
        const cached = this.cache.get(descriptor.key);
        if (cached) {
            this.applyMaterial(cached.source, fill, stroke);
            return cached.source;
        }
        const feature = await this.findFeature(descriptor);
        if (!feature) return null;
        const collection = {
            type: "FeatureCollection",
            features: [
                feature
            ]
        };
        const source = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$GeoJsonDataSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GeoJsonDataSource$3e$__["GeoJsonDataSource"].load(collection, {
            stroke,
            strokeWidth: 2,
            fill,
            clampToGround: true
        });
        this.viewer.dataSources.add(source);
        this.cache.set(descriptor.key, {
            source
        });
        return source;
    }
    async findFeature(descriptor) {
        if (descriptor.type === "country") {
            const collection = await this.ensureCountries();
            const { isoA2, isoA3, centroid } = descriptor;
            const matchByIso = collection.features.find((feature)=>{
                const props = feature.properties;
                if (isoA3 && props.isoA3?.toUpperCase() === isoA3.toUpperCase()) return true;
                if (isoA2 && props.isoA2?.toUpperCase() === isoA2.toUpperCase()) return true;
                return props.name.toLowerCase() === descriptor.key.replace("country:", "").toLowerCase();
            });
            if (matchByIso && this.isNaturalEarthFeature(matchByIso)) {
                return matchByIso;
            }
            const matchByPoint = collection.features.find((feature)=>{
                if (!this.isNaturalEarthFeature(feature)) {
                    return false;
                }
                return this.isFeatureContainingPoint(feature, centroid.lat, centroid.lng);
            });
            if (matchByPoint && this.isNaturalEarthFeature(matchByPoint)) {
                return matchByPoint;
            }
            return null;
        }
        const collection = await this.ensureRegions();
        const { iso3166, isoA2, centroid } = descriptor;
        const matchByCode = collection.features.find((feature)=>iso3166 && feature.properties.iso3166_2?.toUpperCase() === iso3166.toUpperCase());
        if (matchByCode && this.isNaturalEarthFeature(matchByCode)) {
            return matchByCode;
        }
        const matchByPoint = collection.features.find((feature)=>{
            if (isoA2 && feature.properties.isoA2?.toUpperCase() !== isoA2.toUpperCase()) {
                return false;
            }
            if (!this.isNaturalEarthFeature(feature)) {
                return false;
            }
            return this.isFeatureContainingPoint(feature, centroid.lat, centroid.lng);
        });
        if (matchByPoint && this.isNaturalEarthFeature(matchByPoint)) {
            return matchByPoint;
        }
        return null;
    }
    async ensureCountries() {
        if (!this.countryCollectionPromise) {
            this.countryCollectionPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$naturalEarthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadNaturalEarthCountries"])();
        }
        return this.countryCollectionPromise;
    }
    async ensureRegions() {
        if (!this.regionCollectionPromise) {
            this.regionCollectionPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$naturalEarthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadNaturalEarthRegions"])();
        }
        return this.regionCollectionPromise;
    }
    isFeatureContainingPoint(feature, lat, lng) {
        const [minLng, minLat, maxLng, maxLat] = feature.bbox;
        if (lat < minLat || lat > maxLat || lng < minLng || lng > maxLng) {
            return false;
        }
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])([
                lng,
                lat
            ]), feature);
        } catch (error) {
            console.warn("Failed to evaluate Natural Earth polygon", error);
            return false;
        }
    }
    isNaturalEarthFeature(feature) {
        const bbox = feature.bbox;
        return Array.isArray(bbox) && bbox.length === 4;
    }
    applyMaterial(source, fill, stroke) {
        source.entities.values.forEach((entity)=>{
            if (entity.polygon) {
                entity.polygon.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ColorMaterialProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorMaterialProperty$3e$__["ColorMaterialProperty"](fill);
                entity.polygon.outlineColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](stroke);
                entity.polygon.outlineWidth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](2);
            }
            if (entity.polyline) {
                entity.polyline.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ColorMaterialProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorMaterialProperty$3e$__["ColorMaterialProperty"](stroke);
                entity.polyline.width = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](2);
            }
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/CesiumGlobeRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CesiumGlobeRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Ion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ion$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Ion.js [app-client] (ecmascript) <export default as Ion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/Cartesian3.js [app-client] (ecmascript) <export default as Cartesian3>");
// import 'cesium/Build/Cesium/Widgets/widgets.css'
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/infrastructure/ServiceContainer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioDiscoveryService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/cesiumUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumEntityManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/cesiumEntityManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumViewerConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/cesiumViewerConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumRegionOverlay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/cesiumRegionOverlay.ts [app-client] (ecmascript)");
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
// Set Cesium base URL as early as possible
if ("TURBOPACK compile-time truthy", 1) {
    window.CESIUM_BASE_URL = "/cesium/";
    // Add global error handler for Cesium imagery errors specifically
    window.addEventListener("unhandledrejection", (event)=>{
        const reason = event.reason;
        if (reason) {
            const errorStr = reason.toString ? reason.toString() : String(reason);
            const message = reason.message || errorStr;
            // Suppress Cesium-related imagery/tile loading errors
            if (errorStr.includes("ImageryLayer") || errorStr.includes("cesium") || errorStr.includes("imagery") || errorStr.includes("tile") || errorStr.includes("Tile") || message.includes("ImageryLayer") || message.includes("Failed to load")) {
                // Silently handle - these are usually transient network issues
                event.preventDefault();
                return;
            }
        }
    });
    // Also catch regular errors from Cesium
    window.addEventListener("error", (event)=>{
        if (event.message && (event.message.includes("cesium") || event.message.includes("Cesium") || event.message.includes("ImageryLayer") || event.message.includes("tile"))) {
            event.preventDefault();
            return;
        }
    });
}
// Set Cesium Ion access token
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Ion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ion$3e$__["Ion"].defaultAccessToken = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1NGU5Ny05OGNlLTQ4Y2MtOGEyNC0yOGQ1NGM2YmJmMzgiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNzM2NjkwMzIxfQ.aF1ggEQ-dJfCOoAGiU5pynhQD7q4aaUOMkFD2C7sZS8") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1NGU5Ny05OGNlLTQ4Y2MtOGEyNC0yOGQ1NGM2YmJmMzgiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNzM2NjkwMzIxfQ.aF1ggEQ-dJfCOoAGiU5pynhQD7q4aaUOMkFD2C7sZS8";
function CesiumGlobeRenderer({ containerRef }) {
    _s();
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const entityManagerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayManagerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { selectedStation, hoveredStation, selectStation, hoverStation, addMarker, flyToTarget, clearFlyToTarget } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    // Load radio stations using the comprehensive country-based system
    const loadStations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CesiumGlobeRenderer.useCallback[loadStations]": async ()=>{
            console.log("Loading stations with country-based organization...", {
                entityManager: !!entityManagerRef.current
            });
            if (!entityManagerRef.current) {
                console.warn("Entity manager not available");
                return;
            }
            try {
                // Create service instances
                const stationLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStationLoadingUseCase"])();
                // Get current camera height and calculate proper zoom level
                const cameraHeight = viewerRef.current?.camera.positionCartographic.height || 15000000;
                console.log("Camera height:", cameraHeight);
                // More conservative zoom levels to prevent overcrowding
                let currentZoom = 1; // Default to country level
                if (cameraHeight < 2000000) currentZoom = 5; // Very close - individual stations
                else if (cameraHeight < 5000000) currentZoom = 4; // Close - city clusters
                else if (cameraHeight < 10000000) currentZoom = 3; // Medium - city clusters
                else if (cameraHeight < 20000000) currentZoom = 2; // Far - country clusters
                else currentZoom = 1; // Very far - country clusters only
                console.log("Loading stations for zoom level:", currentZoom);
                const markerData = await stationLoader.loadStationsForView(currentZoom);
                console.log("Received marker data:", markerData.length, "markers");
                if (markerData.length === 0) {
                    console.warn("No markers received from station loader - trying fallback");
                    // Fallback: try to load some test stations directly
                    try {
                        const fallbackStations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(20);
                        console.log("Loaded fallback stations:", fallbackStations.length);
                        fallbackStations.forEach({
                            "CesiumGlobeRenderer.useCallback[loadStations]": (station, index)=>{
                                try {
                                    if (station.location?.lat && station.location?.lng) {
                                        console.log(`Creating entity ${index + 1}/${fallbackStations.length}: ${station.name}`);
                                        entityManagerRef.current.createStationEntity(station);
                                        addMarker(station);
                                    } else {
                                        console.warn(`Station ${station.name} has no valid coordinates`);
                                    }
                                } catch (entityError) {
                                    console.error(`Failed to create entity for ${station.name}:`, entityError);
                                }
                            }
                        }["CesiumGlobeRenderer.useCallback[loadStations]"]);
                        return;
                    } catch (fallbackError) {
                        console.error("Fallback station loading failed:", fallbackError);
                    }
                    return;
                }
                // Clear existing entities before adding new ones
                entityManagerRef.current.clearAll();
                console.log("Cleared existing entities");
                // Add marker entities based on the new system with better validation
                let successCount = 0;
                let errorCount = 0;
                markerData.forEach({
                    "CesiumGlobeRenderer.useCallback[loadStations]": (marker, index)=>{
                        try {
                            console.log(`Processing marker ${index + 1}/${markerData.length}:`, marker.id, marker.type);
                            // Validate marker position
                            if (!marker.position || marker.position.length !== 3) {
                                console.error(`Invalid position for marker ${marker.id}:`, marker.position);
                                errorCount++;
                                return;
                            }
                            const [lng, lat, height] = marker.position;
                            // Validate coordinates
                            if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
                                console.error(`Invalid coordinates for marker ${marker.id}: lat=${lat}, lng=${lng}`);
                                errorCount++;
                                return;
                            }
                            // Create appropriate station data for the entity
                            if (marker.type === 'cluster' || marker.type === 'city') {
                                const stationData = {
                                    id: marker.id,
                                    name: marker.metadata.name || `Cluster ${marker.metadata.stationCount}`,
                                    location: {
                                        lat: lat,
                                        lng: lng,
                                        country: marker.metadata.country || 'Unknown',
                                        city: marker.metadata.city || 'Unknown'
                                    },
                                    url: marker.stations[0]?.url || 'http://example.com',
                                    genre: marker.metadata.type === 'country' ? 'Country Cluster' : 'City Cluster',
                                    language: 'Multiple',
                                    listeners: (marker.metadata.stationCount || 1) * 1000,
                                    stationCount: marker.metadata.stationCount,
                                    isCluster: true
                                };
                                console.log(`Creating cluster entity: ${stationData.name} ${marker.type === 'city' ? '(City)' : '(Country)'}`);
                                entityManagerRef.current.createStationEntity(stationData);
                                addMarker(stationData);
                            } else {
                                // Individual station
                                const station = marker.stations[0];
                                if (station && station.location?.lat && station.location?.lng) {
                                    console.log(`Creating individual station entity: ${station.name}`);
                                    entityManagerRef.current.createStationEntity(station);
                                    addMarker(station);
                                } else {
                                    console.error(`Invalid station data for marker ${marker.id}:`, station);
                                    errorCount++;
                                    return;
                                }
                            }
                            successCount++;
                        } catch (err) {
                            console.error(`Failed to create entity for marker ${marker.id}:`, err);
                            errorCount++;
                        }
                    }
                }["CesiumGlobeRenderer.useCallback[loadStations]"]);
                console.log(`Marker creation complete: ${successCount} successful, ${errorCount} errors`);
                console.log(`Total stations represented: ${markerData.reduce({
                    "CesiumGlobeRenderer.useCallback[loadStations]": (sum, m)=>sum + (m.metadata.stationCount || 1)
                }["CesiumGlobeRenderer.useCallback[loadStations]"], 0)}`);
                if (successCount === 0) {
                    console.error("No markers were successfully created! Trying emergency fallback...");
                    // Emergency fallback - add a few test markers
                    const testStations = [
                        {
                            id: 'test-1',
                            name: 'Test Station NYC',
                            location: {
                                lat: 40.7128,
                                lng: -74.0060,
                                country: 'US',
                                city: 'New York'
                            },
                            url: 'http://test.com',
                            genre: 'Test',
                            language: 'English',
                            listeners: 1000
                        },
                        {
                            id: 'test-2',
                            name: 'Test Station London',
                            location: {
                                lat: 51.5074,
                                lng: -0.1278,
                                country: 'GB',
                                city: 'London'
                            },
                            url: 'http://test.com',
                            genre: 'Test',
                            language: 'English',
                            listeners: 1000
                        }
                    ];
                    testStations.forEach({
                        "CesiumGlobeRenderer.useCallback[loadStations]": (station)=>{
                            try {
                                entityManagerRef.current.createStationEntity(station);
                                addMarker(station);
                                console.log(`Added emergency test station: ${station.name}`);
                            } catch (testError) {
                                console.error(`Failed to add test station ${station.name}:`, testError);
                            }
                        }
                    }["CesiumGlobeRenderer.useCallback[loadStations]"]);
                }
            } catch (error) {
                console.error("Failed to load comprehensive station system:", error);
                // Try a simple test to add one marker
                try {
                    const testStation = {
                        id: "test-station",
                        name: "Test Station",
                        location: {
                            lat: 40.7128,
                            lng: -74.006,
                            country: "USA",
                            city: "New York"
                        },
                        url: "http://test.com",
                        genre: "Test",
                        language: "English",
                        listeners: 1000
                    };
                    addMarker(testStation);
                    console.log("Added test station");
                } catch (testError) {
                    console.error("Failed to add test station:", testError);
                }
            }
        }
    }["CesiumGlobeRenderer.useCallback[loadStations]"], [
        addMarker
    ]);
    // Initialize Cesium viewer and entity manager
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CesiumGlobeRenderer.useEffect": ()=>{
            console.log("Initializing Cesium...", {
                container: !!containerRef.current,
                viewer: !!viewerRef.current
            });
            if (!containerRef.current || viewerRef.current) return;
            let cancelled = false;
            const initViewer = {
                "CesiumGlobeRenderer.useEffect.initViewer": async ()=>{
                    try {
                        console.log("Creating Cesium viewer...");
                        const viewer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumViewerConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCesiumViewer"])(containerRef.current);
                        if (cancelled) {
                            viewer.destroy();
                            return;
                        }
                        viewerRef.current = viewer;
                        console.log("Cesium viewer created successfully");
                        // Hide loading indicator
                        const loadingEl = document.getElementById("cesium-loading");
                        if (loadingEl) {
                            loadingEl.style.display = "none";
                        }
                        // Add error event listeners but don't let them break the app
                        viewer.scene.renderError.addEventListener({
                            "CesiumGlobeRenderer.useEffect.initViewer": (scene, error)=>{
                                console.warn("Cesium render error (handled):", error);
                            }
                        }["CesiumGlobeRenderer.useEffect.initViewer"]);
                        viewer.scene.debugShowFramesPerSecond = false;
                        // Create entity manager
                        console.log("Creating entity manager...");
                        entityManagerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumEntityManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CesiumEntityManager"](viewer);
                        console.log("Entity manager created");
                        overlayManagerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumRegionOverlay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CesiumRegionOverlayManager"](viewer);
                        const resolveStation = {
                            "CesiumGlobeRenderer.useEffect.initViewer.resolveStation": (stationId)=>{
                                if (!stationId || !entityManagerRef.current) return null;
                                const entity = entityManagerRef.current.getEntity(stationId);
                                const station = entity ? entity.station : undefined;
                                return station ?? null;
                            }
                        }["CesiumGlobeRenderer.useEffect.initViewer.resolveStation"];
                        handlerRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumViewerConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventHandlers"])(viewer, {
                            "CesiumGlobeRenderer.useEffect.initViewer": (stationId)=>{
                                const station = resolveStation(stationId);
                                selectStation(station);
                            }
                        }["CesiumGlobeRenderer.useEffect.initViewer"], {
                            "CesiumGlobeRenderer.useEffect.initViewer": (stationId)=>{
                                const station = resolveStation(stationId);
                                hoverStation(station);
                            }
                        }["CesiumGlobeRenderer.useEffect.initViewer"]);
                        // Add camera movement event listener for dynamic loading
                        let lastZoomLevel = 1;
                        viewer.camera.moveEnd.addEventListener({
                            "CesiumGlobeRenderer.useEffect.initViewer": ()=>{
                                const height = viewer.camera.positionCartographic.height;
                                let newZoom = 1;
                                if (height < 2000000) newZoom = 5;
                                else if (height < 5000000) newZoom = 4;
                                else if (height < 10000000) newZoom = 3;
                                else if (height < 20000000) newZoom = 2;
                                else newZoom = 1;
                                console.log(`Camera moved to height: ${height}, zoom level: ${newZoom}`);
                                // Only reload if zoom level actually changed
                                if (newZoom !== lastZoomLevel) {
                                    lastZoomLevel = newZoom;
                                    setTimeout({
                                        "CesiumGlobeRenderer.useEffect.initViewer": ()=>{
                                            loadStations();
                                        }
                                    }["CesiumGlobeRenderer.useEffect.initViewer"], 300);
                                }
                            }
                        }["CesiumGlobeRenderer.useEffect.initViewer"]);
                        // Load initial stations after a brief delay to ensure viewer is ready
                        console.log("Loading stations...");
                        setTimeout({
                            "CesiumGlobeRenderer.useEffect.initViewer": ()=>{
                                loadStations();
                            }
                        }["CesiumGlobeRenderer.useEffect.initViewer"], 500);
                    } catch (error) {
                        console.error("Failed to initialize Cesium viewer:", error);
                        let errorMessage = "Unknown error";
                        if (error instanceof Error) {
                            errorMessage = error.message;
                            console.error("Error details:", error.stack);
                        } else if (typeof error === "string") {
                            errorMessage = error;
                        } else {
                            try {
                                errorMessage = JSON.stringify(error);
                            } catch (e) {
                                errorMessage = String(error);
                            }
                        }
                        // Try to show fallback content
                        const loadingEl = document.getElementById("cesium-loading");
                        if (loadingEl) {
                            loadingEl.innerHTML = `
            <div class="text-white text-center">
              <div class="text-red-500 mb-2">Failed to initialize 3D Globe</div>
              <div class="text-sm">Error: ${errorMessage}</div>
            </div>
          `;
                        }
                    }
                }
            }["CesiumGlobeRenderer.useEffect.initViewer"];
            initViewer();
            return ({
                "CesiumGlobeRenderer.useEffect": ()=>{
                    cancelled = true;
                    cleanup();
                }
            })["CesiumGlobeRenderer.useEffect"];
        }
    }["CesiumGlobeRenderer.useEffect"], [
        containerRef,
        selectStation,
        hoverStation,
        loadStations
    ]);
    // Update entity appearance based on selection/hover state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CesiumGlobeRenderer.useEffect": ()=>{
            if (!entityManagerRef.current) return;
            entityManagerRef.current.getAllEntities().forEach({
                "CesiumGlobeRenderer.useEffect": (entity, stationId)=>{
                    const isSelected = selectedStation?.id === stationId;
                    const isHovered = hoveredStation?.id === stationId;
                    entityManagerRef.current.updateEntityAppearance(stationId, isSelected, isHovered);
                }
            }["CesiumGlobeRenderer.useEffect"]);
        }
    }["CesiumGlobeRenderer.useEffect"], [
        selectedStation,
        hoveredStation
    ]);
    // Animate camera to selected station
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CesiumGlobeRenderer.useEffect": ()=>{
            if (overlayManagerRef.current) {
                void overlayManagerRef.current.highlightStation(selectedStation ?? null);
            }
            if (!viewerRef.current || !selectedStation) return;
            const viewer = viewerRef.current;
            const destination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCameraDestination"])(selectedStation);
            viewer.camera.flyTo({
                destination: destination.destination,
                orientation: destination.orientation,
                duration: destination.duration
            });
        }
    }["CesiumGlobeRenderer.useEffect"], [
        selectedStation
    ]);
    // Handle flyToTarget from store (for search/discovery)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CesiumGlobeRenderer.useEffect": ()=>{
            if (!viewerRef.current || !flyToTarget) return;
            const viewer = viewerRef.current;
            const { latitude, longitude, height = 2000000, duration = 2 } = flyToTarget;
            viewer.camera.flyTo({
                destination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromDegrees(longitude, latitude, height),
                duration: duration,
                complete: {
                    "CesiumGlobeRenderer.useEffect": ()=>{
                        // Clear the target after animation completes
                        clearFlyToTarget();
                    }
                }["CesiumGlobeRenderer.useEffect"]
            });
        }
    }["CesiumGlobeRenderer.useEffect"], [
        flyToTarget,
        clearFlyToTarget
    ]);
    // Cleanup function
    const cleanup = ()=>{
        if (handlerRef.current) {
            handlerRef.current.destroy();
            handlerRef.current = null;
        }
        if (viewerRef.current) {
            viewerRef.current.destroy();
            viewerRef.current = null;
        }
        entityManagerRef.current = null;
        if (overlayManagerRef.current) {
            overlayManagerRef.current.dispose();
            overlayManagerRef.current = null;
        }
    };
    return null;
}
_s(CesiumGlobeRenderer, "toMS0WZTHt6dN8lj/MdHoJhUzVk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"]
    ];
});
_c = CesiumGlobeRenderer;
var _c;
__turbopack_context__.k.register(_c, "CesiumGlobeRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/CesiumGlobeRenderer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/components/CesiumGlobeRenderer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_380e26d0._.js.map