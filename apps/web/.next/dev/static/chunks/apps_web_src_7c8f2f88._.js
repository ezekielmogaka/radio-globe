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
function createCameraDestination(station) {
    return {
        destination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromDegrees(station.location.lng, station.location.lat, 1500000),
        orientation: {
            heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(0),
            pitch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(-45),
            roll: 0
        }
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
                alpha: 0.8
            }; // Blue
        case "CA":
        case "Canada":
            return {
                red: 1.0,
                green: 0.0,
                blue: 0.0,
                alpha: 0.8
            }; // Red
        case "MX":
        case "Mexico":
            return {
                red: 0.0,
                green: 1.0,
                blue: 0.0,
                alpha: 0.8
            }; // Green
        // Europe
        case "UK":
        case "GB":
        case "United Kingdom":
            return {
                red: 1.0,
                green: 0.0,
                blue: 0.5,
                alpha: 0.8
            }; // Pink
        case "DE":
        case "Germany":
            return {
                red: 1.0,
                green: 1.0,
                blue: 0.0,
                alpha: 0.8
            }; // Yellow
        case "FR":
        case "France":
            return {
                red: 0.5,
                green: 0.0,
                blue: 1.0,
                alpha: 0.8
            }; // Purple
        case "IT":
        case "Italy":
            return {
                red: 0.0,
                green: 1.0,
                blue: 0.5,
                alpha: 0.8
            }; // Light Green
        case "ES":
        case "Spain":
            return {
                red: 1.0,
                green: 0.5,
                blue: 0.0,
                alpha: 0.8
            }; // Orange
        case "NL":
        case "Netherlands":
            return {
                red: 1.0,
                green: 0.5,
                blue: 0.5,
                alpha: 0.8
            }; // Light Pink
        case "SE":
        case "Sweden":
            return {
                red: 0.0,
                green: 0.7,
                blue: 1.0,
                alpha: 0.8
            }; // Light Blue
        case "NO":
        case "Norway":
            return {
                red: 0.0,
                green: 0.3,
                blue: 0.7,
                alpha: 0.8
            }; // Dark Blue
        case "DK":
        case "Denmark":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.3,
                alpha: 0.8
            }; // Dark Pink
        case "FI":
        case "Finland":
            return {
                red: 0.0,
                green: 0.8,
                blue: 0.8,
                alpha: 0.8
            }; // Cyan
        case "CH":
        case "Switzerland":
            return {
                red: 0.7,
                green: 0.7,
                blue: 0.7,
                alpha: 0.8
            }; // Light Gray
        case "AT":
        case "Austria":
            return {
                red: 0.5,
                green: 0.5,
                blue: 0.0,
                alpha: 0.8
            }; // Olive
        case "BE":
        case "Belgium":
            return {
                red: 0.3,
                green: 0.0,
                blue: 0.0,
                alpha: 0.8
            }; // Dark Red
        case "PL":
        case "Poland":
            return {
                red: 0.8,
                green: 0.8,
                blue: 0.0,
                alpha: 0.8
            }; // Bright Yellow
        case "RU":
        case "Russia":
            return {
                red: 0.0,
                green: 0.0,
                blue: 0.8,
                alpha: 0.8
            }; // Dark Blue
        // Asia Pacific
        case "JP":
        case "Japan":
            return {
                red: 1.0,
                green: 0.0,
                blue: 1.0,
                alpha: 0.8
            }; // Magenta
        case "CN":
        case "China":
            return {
                red: 1.0,
                green: 0.8,
                blue: 0.0,
                alpha: 0.8
            }; // Gold
        case "KR":
        case "Korea":
        case "South Korea":
            return {
                red: 0.5,
                green: 1.0,
                blue: 0.5,
                alpha: 0.8
            }; // Light Green
        case "IN":
        case "India":
            return {
                red: 1.0,
                green: 0.5,
                blue: 0.2,
                alpha: 0.8
            }; // Saffron
        case "AU":
        case "Australia":
            return {
                red: 0.0,
                green: 0.6,
                blue: 0.0,
                alpha: 0.8
            }; // Forest Green
        case "NZ":
        case "New Zealand":
            return {
                red: 0.0,
                green: 0.4,
                blue: 0.0,
                alpha: 0.8
            }; // Dark Green
        case "TH":
        case "Thailand":
            return {
                red: 0.8,
                green: 0.4,
                blue: 0.8,
                alpha: 0.8
            }; // Light Purple
        case "SG":
        case "Singapore":
            return {
                red: 0.0,
                green: 0.8,
                blue: 0.6,
                alpha: 0.8
            }; // Teal
        case "MY":
        case "Malaysia":
            return {
                red: 0.6,
                green: 0.8,
                blue: 0.0,
                alpha: 0.8
            }; // Lime
        case "ID":
        case "Indonesia":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.8,
                alpha: 0.8
            }; // Purple
        case "PH":
        case "Philippines":
            return {
                red: 0.0,
                green: 0.0,
                blue: 1.0,
                alpha: 0.8
            }; // Blue
        // South America
        case "BR":
        case "Brazil":
            return {
                red: 0.0,
                green: 0.8,
                blue: 0.2,
                alpha: 0.8
            }; // Brazilian Green
        case "AR":
        case "Argentina":
            return {
                red: 0.5,
                green: 0.8,
                blue: 1.0,
                alpha: 0.8
            }; // Sky Blue
        case "CL":
        case "Chile":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.0,
                alpha: 0.8
            }; // Red
        case "PE":
        case "Peru":
            return {
                red: 0.8,
                green: 0.2,
                blue: 0.0,
                alpha: 0.8
            }; // Dark Orange
        case "CO":
        case "Colombia":
            return {
                red: 1.0,
                green: 1.0,
                blue: 0.0,
                alpha: 0.8
            }; // Yellow
        // Africa
        case "ZA":
        case "South Africa":
            return {
                red: 0.0,
                green: 0.5,
                blue: 0.0,
                alpha: 0.8
            }; // Green
        case "NG":
        case "Nigeria":
            return {
                red: 0.0,
                green: 0.7,
                blue: 0.0,
                alpha: 0.8
            }; // Green
        case "KE":
        case "Kenya":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.0,
                alpha: 0.8
            }; // Red
        case "EG":
        case "Egypt":
            return {
                red: 0.8,
                green: 0.6,
                blue: 0.0,
                alpha: 0.8
            }; // Gold
        case "MA":
        case "Morocco":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.0,
                alpha: 0.8
            }; // Red
        // Middle East
        case "AE":
        case "UAE":
            return {
                red: 0.0,
                green: 0.6,
                blue: 0.8,
                alpha: 0.8
            }; // Turquoise
        case "SA":
        case "Saudi Arabia":
            return {
                red: 0.0,
                green: 0.5,
                blue: 0.0,
                alpha: 0.8
            }; // Green
        case "IL":
        case "Israel":
            return {
                red: 0.0,
                green: 0.0,
                blue: 0.8,
                alpha: 0.8
            }; // Blue
        case "TR":
        case "Turkey":
            return {
                red: 0.8,
                green: 0.0,
                blue: 0.0,
                alpha: 0.8
            }; // Red
        case "IR":
        case "Iran":
            return {
                red: 0.0,
                green: 0.8,
                blue: 0.0,
                alpha: 0.8
            }; // Green
        // Default for unspecified countries
        default:
            return {
                red: 0.7,
                green: 0.7,
                blue: 0.7,
                alpha: 0.8
            }; // Light Gray
    }
}
function getStationScale(station) {
    // Scale based on language or listener count (if available)
    if (station.language === "en") return 1.2;
    if (station.tags?.includes("popular")) return 1.1;
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
   * Create a radio station entity
   */ createStationEntity(station) {
        const stationEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationToEntity"])(station);
        const entity = this.viewer.entities.add({
            id: station.id,
            position: stationEntity.position,
            billboard: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$BillboardGraphics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BillboardGraphics$3e$__["BillboardGraphics"]({
                image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"]("/radio-station-icon.svg"),
                show: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](true),
                scale: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStationScale"])(station)),
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].WHITE),
                scaleByDistance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$NearFarScalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NearFarScalar$3e$__["NearFarScalar"](1.5e6, 2.0, 2.0e7, 0.5)),
                heightReference: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$HeightReference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeightReference$3e$__["HeightReference"].RELATIVE_TO_GROUND),
                disableDepthTestDistance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](Number.POSITIVE_INFINITY)
            }),
            label: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$LabelGraphics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LabelGraphics$3e$__["LabelGraphics"]({
                text: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](station.name),
                font: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"]("12pt monospace"),
                style: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$LabelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LabelStyle$3e$__["LabelStyle"].FILL_AND_OUTLINE),
                outlineWidth: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](2),
                verticalOrigin: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$VerticalOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VerticalOrigin$3e$__["VerticalOrigin"].BOTTOM),
                pixelOffset: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"](0, -32)),
                show: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](false),
                fillColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].WHITE),
                outlineColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Color$3e$__["Color"].BLACK),
                scaleByDistance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$DataSources$2f$ConstantProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ConstantProperty$3e$__["ConstantProperty"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$NearFarScalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NearFarScalar$3e$__["NearFarScalar"](1.5e6, 1.0, 2.0e7, 0.0))
            })
        });
        // Store station data on the entity
        entity.station = station;
        this.entities.set(station.id, entity);
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
    }
    /**
   * Remove specific entity
   */ removeEntity(stationId) {
        const entity = this.entities.get(stationId);
        if (entity) {
            this.viewer.entities.remove(entity);
            this.entities.delete(stationId);
        }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$widgets$2f$Source$2f$Viewer$2f$Viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Viewer$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/widgets/Source/Viewer/Viewer.js [app-client] (ecmascript) <export default as Viewer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$ScreenSpaceEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenSpaceEventType$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/ScreenSpaceEventType.js [app-client] (ecmascript) <export default as ScreenSpaceEventType>");
// import 'cesium/Build/Cesium/Widgets/widgets.css'
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioDiscoveryService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/cesiumUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumEntityManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/cesiumEntityManager.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
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
        if (event.reason && (event.reason.toString().includes("ImageryLayer") || event.reason.toString().includes("cesium") || event.reason.toString().includes("imagery"))) {
            console.warn("Cesium imagery error caught and handled:", event.reason);
            event.preventDefault();
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
    const { selectedStation, hoveredStation, selectStation, hoverStation, addMarker } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    // Load radio stations and create entities
    const loadStations = async ()=>{
        console.log("Loading stations...", {
            entityManager: !!entityManagerRef.current
        });
        if (!entityManagerRef.current) {
            console.warn("Entity manager not available");
            return;
        }
        try {
            console.log("Fetching top stations from API...");
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(100);
            console.log("Fetched stations:", stations.length);
            if (stations.length === 0) {
                console.warn("No stations received from API");
                return;
            }
            // Clear existing entities
            entityManagerRef.current.clearAll();
            // Add station entities
            let successCount = 0;
            stations.forEach((station)=>{
                try {
                    entityManagerRef.current.createStationEntity(station);
                    addMarker(station);
                    successCount++;
                } catch (err) {
                    console.warn("Failed to create entity for station:", station.name, err);
                }
            });
            console.log(`Successfully added ${successCount} stations to globe`);
        } catch (error) {
            console.error("Failed to load radio stations:", error);
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
    };
    // Initialize Cesium viewer and entity manager
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CesiumGlobeRenderer.useEffect": ()=>{
            console.log("Initializing Cesium...", {
                container: !!containerRef.current,
                viewer: !!viewerRef.current
            });
            if (!containerRef.current || viewerRef.current) return;
            try {
                console.log("Creating Cesium viewer...");
                // Create viewer with minimal config and reliable imagery
                const viewer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$widgets$2f$Source$2f$Viewer$2f$Viewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Viewer$3e$__["Viewer"](containerRef.current, {
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
                    scene3DOnly: true,
                    shouldAnimate: false,
                    showRenderLoopErrors: false
                });
                viewerRef.current = viewer;
                console.log("Cesium viewer created successfully");
                // Add error event listeners but don't let them break the app
                viewer.scene.renderError.addEventListener({
                    "CesiumGlobeRenderer.useEffect": (scene, error)=>{
                        console.warn("Cesium render error (handled):", error);
                    }
                }["CesiumGlobeRenderer.useEffect"]);
                // Handle imagery errors gracefully
                if (viewer.imageryLayers && viewer.imageryLayers.length > 0) {
                    viewer.imageryLayers.get(0).errorEvent.addEventListener({
                        "CesiumGlobeRenderer.useEffect": (error)=>{
                            console.warn("Imagery error (handled):", error);
                        }
                    }["CesiumGlobeRenderer.useEffect"]);
                }
                // Wait for viewer to fully initialize
                viewer.scene.globe.enableLighting = false; // Disable lighting for better performance
                viewer.scene.debugShowFramesPerSecond = false;
                viewer.scene.globe.showGroundAtmosphere = true;
                if (viewer.scene.skyBox) viewer.scene.skyBox.show = false; // Disable skybox for better performance
                if (viewer.scene.sun) viewer.scene.sun.show = false; // Disable sun
                if (viewer.scene.moon) viewer.scene.moon.show = false; // Disable moon
                if (viewer.scene.skyAtmosphere) viewer.scene.skyAtmosphere.show = true; // Keep atmosphere
                // Create entity manager
                console.log("Creating entity manager...");
                entityManagerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumEntityManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CesiumEntityManager"](viewer);
                console.log("Entity manager created");
                // Simple click handler for now
                viewer.cesiumWidget.screenSpaceEventHandler.setInputAction({
                    "CesiumGlobeRenderer.useEffect": ()=>{
                        console.log("Globe clicked");
                    }
                }["CesiumGlobeRenderer.useEffect"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$ScreenSpaceEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScreenSpaceEventType$3e$__["ScreenSpaceEventType"].LEFT_CLICK);
                // Load initial stations after a brief delay to ensure viewer is ready
                console.log("Loading stations...");
                setTimeout({
                    "CesiumGlobeRenderer.useEffect": ()=>{
                        loadStations();
                    }
                }["CesiumGlobeRenderer.useEffect"], 100);
                // Hide loading screen after a delay
                setTimeout({
                    "CesiumGlobeRenderer.useEffect": ()=>{
                        const loadingEl = document.getElementById("cesium-loading");
                        if (loadingEl) {
                            loadingEl.style.display = "none";
                            console.log("Hiding loading screen");
                        }
                    }
                }["CesiumGlobeRenderer.useEffect"], 1000);
            } catch (error) {
                console.error("Failed to initialize Cesium viewer:", error);
                const err = error;
                console.error("Error details:", err.stack);
                // Try to show fallback content
                const loadingEl = document.getElementById("cesium-loading");
                if (loadingEl) {
                    loadingEl.innerHTML = `
          <div class="text-white text-center">
            <div class="text-red-500 mb-2">Failed to initialize 3D Globe</div>
            <div class="text-sm">Error: ${err.message}</div>
          </div>
        `;
                }
            }
            return ({
                "CesiumGlobeRenderer.useEffect": ()=>{
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
            if (!viewerRef.current || !selectedStation) return;
            const viewer = viewerRef.current;
            const destination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$cesiumUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCameraDestination"])(selectedStation);
            viewer.camera.flyTo({
                destination: destination.destination,
                orientation: destination.orientation,
                duration: 2.0
            });
        }
    }["CesiumGlobeRenderer.useEffect"], [
        selectedStation
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
    };
    return null;
}
_s(CesiumGlobeRenderer, "UsYbyCvW9eLI5MkwOLzHS+OFd/Q=", false, function() {
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

//# sourceMappingURL=apps_web_src_7c8f2f88._.js.map