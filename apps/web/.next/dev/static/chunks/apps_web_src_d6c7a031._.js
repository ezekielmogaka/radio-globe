(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/Earth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Earth",
    ()=>Earth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Earth() {
    _s();
    const earthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nightLightsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cloudsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const atmosphereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load real Earth day texture using NASA-style satellite imagery
    const dayTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Earth.useMemo[dayTexture]": ()=>{
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 2048;
            canvas.height = 1024;
            // Create high-contrast realistic Earth texture
            createSatelliteEarthTexture(ctx, canvas.width, canvas.height);
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
            texture.generateMipmaps = false;
            texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
            return texture;
        }
    }["Earth.useMemo[dayTexture]"], []);
    // Create realistic night lights from satellite data
    const nightTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Earth.useMemo[nightTexture]": ()=>{
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 2048;
            canvas.height = 1024;
            // Black background
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Add NASA-style night lights
            addNASAStyleNightLights(ctx, canvas.width, canvas.height);
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
            return texture;
        }
    }["Earth.useMemo[nightTexture]"], []);
    // Create realistic cloud texture
    const cloudTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Earth.useMemo[cloudTexture]": ()=>{
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 1024;
            canvas.height = 512;
            createRealisticClouds(ctx, canvas.width, canvas.height);
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
            return texture;
        }
    }["Earth.useMemo[cloudTexture]"], []);
    // Create topographical normal map
    const normalTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Earth.useMemo[normalTexture]": ()=>{
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 1024;
            canvas.height = 512;
            createTopographicalNormalMap(ctx, canvas.width, canvas.height);
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
            texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
            return texture;
        }
    }["Earth.useMemo[normalTexture]"], []);
    // Animation with realistic rotation speed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Earth.useFrame": (state, delta)=>{
            if (earthRef.current && nightLightsRef.current && cloudsRef.current) {
                // Earth rotates once every 24 hours - scale it for demo (much faster)
                earthRef.current.rotation.y += delta * 0.1;
                nightLightsRef.current.rotation.y += delta * 0.1;
                cloudsRef.current.rotation.y += delta * 0.12; // Clouds move slightly faster
                // Dynamic atmosphere
                if (atmosphereRef.current && atmosphereRef.current.material) {
                    const material = atmosphereRef.current.material;
                    if (material.uniforms) {
                        material.uniforms.time.value = state.clock.getElapsedTime();
                    }
                }
            }
        }
    }["Earth.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: earthRef,
                args: [
                    2,
                    128,
                    64
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhongMaterial", {
                    map: dayTexture,
                    normalMap: normalTexture,
                    normalScale: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.2, 1.2),
                    shininess: 0.5,
                    specular: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000),
                    transparent: false,
                    flatShading: false
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Earth.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Earth.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: nightLightsRef,
                args: [
                    2.001,
                    64,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    map: nightTexture,
                    transparent: true,
                    opacity: 1,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Earth.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Earth.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: cloudsRef,
                args: [
                    2.008,
                    64,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshLambertMaterial", {
                    map: cloudTexture,
                    transparent: true,
                    opacity: 0.4,
                    alphaTest: 0.1
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Earth.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Earth.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: atmosphereRef,
                args: [
                    2.15,
                    64,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                    uniforms: {
                        time: {
                            value: 0
                        },
                        color: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0.4, 0.7, 1.0)
                        }
                    },
                    vertexShader: `
            varying vec3 vNormal;
            varying vec3 vPositionNormal;
            
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
                    fragmentShader: `
            uniform float time;
            uniform vec3 color;
            varying vec3 vNormal;
            varying vec3 vPositionNormal;
            
            void main() {
              float intensity = pow(0.6 - dot(vNormal, vPositionNormal), 2.0);
              vec3 atmosphere = color * pow(intensity, 0.8);
              float alpha = intensity * 0.4;
              gl_FragColor = vec4(atmosphere, alpha);
            }
          `,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                    transparent: true
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Earth.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Earth.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Earth.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(Earth, "k8nq4eQnCWa0802SGtlwQuLpqDE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Earth;
// Create satellite-style Earth texture with high contrast between land and water
function createSatelliteEarthTexture(ctx, width, height) {
    // Create ultra-realistic ocean background with deep blue-black gradients
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, height);
    oceanGradient.addColorStop(0, "#000814"); // Arctic black-blue
    oceanGradient.addColorStop(0.15, "#001d3d"); // Northern deep blue  
    oceanGradient.addColorStop(0.35, "#003566"); // Temperate ocean blue
    oceanGradient.addColorStop(0.5, "#0a4f8c"); // Equatorial bright blue
    oceanGradient.addColorStop(0.65, "#003566"); // Southern temperate
    oceanGradient.addColorStop(0.85, "#001d3d"); // Southern deep blue
    oceanGradient.addColorStop(1, "#000814"); // Antarctic black-blue
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, width, height);
    // Add ultra-detailed, photorealistic continent definitions
    const continents = [
        {
            name: "North America",
            regions: [
                // Canadian Arctic Archipelago
                {
                    x: 0.08,
                    y: 0.08,
                    w: 0.28,
                    h: 0.08,
                    color: "#c8d5b9",
                    type: "arctic_tundra"
                },
                // Boreal Forest Belt (Canada)
                {
                    x: 0.06,
                    y: 0.15,
                    w: 0.30,
                    h: 0.12,
                    color: "#2d5016",
                    type: "boreal_forest"
                },
                // Great Lakes Region
                {
                    x: 0.18,
                    y: 0.28,
                    w: 0.12,
                    h: 0.08,
                    color: "#4a7c59",
                    type: "temperate_forest"
                },
                // Eastern Deciduous Forest
                {
                    x: 0.20,
                    y: 0.32,
                    w: 0.10,
                    h: 0.15,
                    color: "#6b8e23",
                    type: "deciduous_forest"
                },
                // Great Plains
                {
                    x: 0.14,
                    y: 0.35,
                    w: 0.12,
                    h: 0.15,
                    color: "#daa520",
                    type: "grassland"
                },
                // Rocky Mountains
                {
                    x: 0.10,
                    y: 0.30,
                    w: 0.04,
                    h: 0.20,
                    color: "#8b7355",
                    type: "mountains"
                },
                // Pacific Northwest
                {
                    x: 0.02,
                    y: 0.30,
                    w: 0.08,
                    h: 0.15,
                    color: "#355e3b",
                    type: "temperate_rainforest"
                },
                // California Central Valley
                {
                    x: 0.04,
                    y: 0.42,
                    w: 0.06,
                    h: 0.10,
                    color: "#9acd32",
                    type: "mediterranean"
                },
                // Southwest Desert
                {
                    x: 0.08,
                    y: 0.45,
                    w: 0.12,
                    h: 0.12,
                    color: "#cd853f",
                    type: "desert"
                },
                // Mexican Highland
                {
                    x: 0.12,
                    y: 0.50,
                    w: 0.10,
                    h: 0.08,
                    color: "#d2b48c",
                    type: "highland"
                },
                // Central America
                {
                    x: 0.15,
                    y: 0.55,
                    w: 0.08,
                    h: 0.08,
                    color: "#228b22",
                    type: "tropical_forest"
                }
            ]
        },
        {
            name: "South America",
            regions: [
                // Amazon Basin - The lung of the Earth
                {
                    x: 0.22,
                    y: 0.58,
                    w: 0.18,
                    h: 0.15,
                    color: "#013220",
                    type: "amazon_rainforest"
                },
                // Brazilian Highlands (Cerrado)
                {
                    x: 0.30,
                    y: 0.62,
                    w: 0.10,
                    h: 0.12,
                    color: "#8fbc8f",
                    type: "cerrado_savanna"
                },
                // Andes Mountain Chain
                {
                    x: 0.18,
                    y: 0.58,
                    w: 0.04,
                    h: 0.28,
                    color: "#696969",
                    type: "andes_mountains"
                },
                // Patagonian Steppe
                {
                    x: 0.20,
                    y: 0.82,
                    w: 0.12,
                    h: 0.12,
                    color: "#bdb76b",
                    type: "patagonian_steppe"
                },
                // Pampas Grassland
                {
                    x: 0.25,
                    y: 0.78,
                    w: 0.10,
                    h: 0.08,
                    color: "#9acd32",
                    type: "pampas"
                },
                // Atlantic Coastal Forest
                {
                    x: 0.32,
                    y: 0.68,
                    w: 0.06,
                    h: 0.15,
                    color: "#2e8b57",
                    type: "atlantic_forest"
                },
                // Guiana Highlands
                {
                    x: 0.28,
                    y: 0.54,
                    w: 0.08,
                    h: 0.06,
                    color: "#8b4513",
                    type: "guiana_highlands"
                }
            ]
        },
        {
            name: "Europe",
            regions: [
                // Scandinavian Peninsula
                {
                    x: 0.48,
                    y: 0.15,
                    w: 0.08,
                    h: 0.12,
                    color: "#2f4f2f",
                    type: "taiga"
                },
                // British Isles
                {
                    x: 0.45,
                    y: 0.22,
                    w: 0.03,
                    h: 0.06,
                    color: "#6b8e23",
                    type: "maritime_temperate"
                },
                // Central European Plain
                {
                    x: 0.48,
                    y: 0.25,
                    w: 0.15,
                    h: 0.08,
                    color: "#90ee90",
                    type: "temperate_broadleaf"
                },
                // Mediterranean Basin
                {
                    x: 0.48,
                    y: 0.33,
                    w: 0.18,
                    h: 0.06,
                    color: "#daa520",
                    type: "mediterranean_shrubland"
                },
                // Eastern European Forest
                {
                    x: 0.58,
                    y: 0.22,
                    w: 0.12,
                    h: 0.12,
                    color: "#556b2f",
                    type: "mixed_forest"
                },
                // Iberian Peninsula
                {
                    x: 0.46,
                    y: 0.36,
                    w: 0.06,
                    h: 0.06,
                    color: "#cd853f",
                    type: "iberian_plateau"
                },
                // Italian Peninsula
                {
                    x: 0.52,
                    y: 0.36,
                    w: 0.02,
                    h: 0.08,
                    color: "#daa520",
                    type: "mediterranean"
                }
            ]
        },
        {
            name: "Africa",
            regions: [
                // Sahara Desert
                {
                    x: 0.48,
                    y: 0.38,
                    w: 0.22,
                    h: 0.12,
                    color: "#faa460",
                    type: "sahara_desert"
                },
                // Sahel Transition Zone
                {
                    x: 0.48,
                    y: 0.48,
                    w: 0.20,
                    h: 0.04,
                    color: "#ddbf94",
                    type: "sahel"
                },
                // Central African Rainforest
                {
                    x: 0.52,
                    y: 0.52,
                    w: 0.15,
                    h: 0.10,
                    color: "#013220",
                    type: "congo_rainforest"
                },
                // East African Rift Valley
                {
                    x: 0.60,
                    y: 0.48,
                    w: 0.08,
                    h: 0.18,
                    color: "#cd853f",
                    type: "savanna"
                },
                // Kalahari Desert
                {
                    x: 0.52,
                    y: 0.72,
                    w: 0.08,
                    h: 0.08,
                    color: "#d2b48c",
                    type: "kalahari"
                },
                // Ethiopian Highlands
                {
                    x: 0.62,
                    y: 0.50,
                    w: 0.06,
                    h: 0.08,
                    color: "#8fbc8f",
                    type: "highlands"
                },
                // Madagascar
                {
                    x: 0.68,
                    y: 0.72,
                    w: 0.02,
                    h: 0.08,
                    color: "#228b22",
                    type: "tropical_highland"
                },
                // Atlas Mountains
                {
                    x: 0.48,
                    y: 0.35,
                    w: 0.12,
                    h: 0.03,
                    color: "#a0522d",
                    type: "atlas_mountains"
                },
                // Cape Region
                {
                    x: 0.52,
                    y: 0.82,
                    w: 0.04,
                    h: 0.03,
                    color: "#daa520",
                    type: "fynbos"
                }
            ]
        },
        {
            name: "Asia",
            regions: [
                // Siberian Taiga
                {
                    x: 0.65,
                    y: 0.12,
                    w: 0.32,
                    h: 0.20,
                    color: "#1a4f2b",
                    type: "siberian_taiga"
                },
                // Central Asian Steppes
                {
                    x: 0.68,
                    y: 0.30,
                    w: 0.18,
                    h: 0.10,
                    color: "#ddd08b",
                    type: "steppe"
                },
                // Gobi Desert
                {
                    x: 0.78,
                    y: 0.35,
                    w: 0.12,
                    h: 0.06,
                    color: "#c19a6b",
                    type: "gobi_desert"
                },
                // Tibetan Plateau
                {
                    x: 0.74,
                    y: 0.38,
                    w: 0.10,
                    h: 0.08,
                    color: "#8b7355",
                    type: "tibetan_plateau"
                },
                // Himalayas
                {
                    x: 0.72,
                    y: 0.42,
                    w: 0.12,
                    h: 0.04,
                    color: "#696969",
                    type: "himalayas"
                },
                // Indian Subcontinent
                {
                    x: 0.70,
                    y: 0.46,
                    w: 0.12,
                    h: 0.12,
                    color: "#9acd32",
                    type: "indian_plains"
                },
                // Indochina Peninsula
                {
                    x: 0.78,
                    y: 0.52,
                    w: 0.08,
                    h: 0.10,
                    color: "#228b22",
                    type: "monsoon_forest"
                },
                // East China Plains
                {
                    x: 0.82,
                    y: 0.38,
                    w: 0.12,
                    h: 0.15,
                    color: "#adff2f",
                    type: "temperate_plains"
                },
                // Southeast Asian Islands
                {
                    x: 0.82,
                    y: 0.58,
                    w: 0.15,
                    h: 0.12,
                    color: "#32cd32",
                    type: "tropical_rainforest"
                },
                // Japanese Archipelago
                {
                    x: 0.90,
                    y: 0.40,
                    w: 0.04,
                    h: 0.10,
                    color: "#2e8b57",
                    type: "temperate_forest"
                },
                // Arabian Peninsula
                {
                    x: 0.58,
                    y: 0.40,
                    w: 0.12,
                    h: 0.10,
                    color: "#daa520",
                    type: "arabian_desert"
                },
                // Anatolia and Levant
                {
                    x: 0.55,
                    y: 0.36,
                    w: 0.08,
                    h: 0.06,
                    color: "#d2b48c",
                    type: "mediterranean_highland"
                },
                // Iranian Plateau
                {
                    x: 0.62,
                    y: 0.36,
                    w: 0.10,
                    h: 0.08,
                    color: "#bc9a6a",
                    type: "iranian_plateau"
                }
            ]
        },
        {
            name: "Australia and Oceania",
            regions: [
                // Australian Outback
                {
                    x: 0.82,
                    y: 0.70,
                    w: 0.15,
                    h: 0.12,
                    color: "#cd853f",
                    type: "outback_desert"
                },
                // Eastern Australian Forests
                {
                    x: 0.92,
                    y: 0.72,
                    w: 0.04,
                    h: 0.12,
                    color: "#228b22",
                    type: "eucalyptus_forest"
                },
                // New Zealand
                {
                    x: 0.96,
                    y: 0.78,
                    w: 0.02,
                    h: 0.06,
                    color: "#2e8b57",
                    type: "temperate_oceanic"
                },
                // Great Dividing Range
                {
                    x: 0.90,
                    y: 0.70,
                    w: 0.02,
                    h: 0.15,
                    color: "#8b7355",
                    type: "australian_alps"
                },
                // Tropical North Australia
                {
                    x: 0.84,
                    y: 0.68,
                    w: 0.12,
                    h: 0.04,
                    color: "#9acd32",
                    type: "tropical_savanna"
                }
            ]
        },
        {
            name: "Antarctica",
            regions: [
                // Antarctic Ice Sheet
                {
                    x: 0.0,
                    y: 0.92,
                    w: 1.0,
                    h: 0.08,
                    color: "#f0f8ff",
                    type: "ice_sheet"
                }
            ]
        }
    ];
    // Render continents with photorealistic detail
    continents.forEach((continent)=>{
        continent.regions.forEach((region)=>{
            renderPhotorealisticTerrain(ctx, region, width, height);
        });
    });
    // Add atmospheric perspective
    addAtmosphericHaze(ctx, width, height);
}
function renderPhotorealisticTerrain(ctx, region, width, height) {
    const x = region.x * width;
    const y = region.y * height;
    const w = region.w * width;
    const h = region.h * height;
    ctx.save();
    // Create highly irregular, coastline-like shapes
    drawNaturalCoastline(ctx, x, y, w, h, region.type);
    // Apply terrain-specific rendering
    switch(region.type){
        case "amazon_rainforest":
        case "congo_rainforest":
            renderDenseRainforest(ctx, x, y, w, h, region.color);
            break;
        case "sahara_desert":
        case "gobi_desert":
        case "arabian_desert":
        case "outback_desert":
            renderDesertTerrain(ctx, x, y, w, h, region.color);
            break;
        case "himalayas":
        case "andes_mountains":
        case "atlas_mountains":
            renderMountainTerrain(ctx, x, y, w, h, region.color);
            break;
        case "ice_sheet":
            renderIceSheet(ctx, x, y, w, h, region.color);
            break;
        case "siberian_taiga":
        case "boreal_forest":
            renderBorealForest(ctx, x, y, w, h, region.color);
            break;
        default:
            renderStandardTerrain(ctx, x, y, w, h, region.color, region.type);
    }
    ctx.restore();
}
function drawNaturalCoastline(ctx, x, y, w, h, terrainType) {
    ctx.beginPath();
    // Determine irregularity based on terrain type
    let irregularity = 0.3;
    if (terrainType.includes("mountain")) irregularity = 0.5;
    if (terrainType.includes("island")) irregularity = 0.6;
    if (terrainType.includes("arctic")) irregularity = 0.4;
    const numPoints = Math.max(16, Math.floor((w + h) / 8));
    for(let i = 0; i <= numPoints; i++){
        const angle = i / numPoints * Math.PI * 2;
        const baseRadius = Math.min(w, h) / 2;
        // Multiple levels of coastal variation
        const largeScale = Math.sin(angle * 3) * 0.3;
        const mediumScale = Math.sin(angle * 8) * 0.15;
        const smallScale = (Math.random() - 0.5) * irregularity;
        const radiusVariation = 1 + largeScale + mediumScale + smallScale;
        const px = x + w / 2 + Math.cos(angle) * (w / 2) * radiusVariation;
        const py = y + h / 2 + Math.sin(angle) * (h / 2) * radiusVariation;
        if (i === 0) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.closePath();
}
function renderDenseRainforest(ctx, x, y, w, h, baseColor) {
    // Create canopy gradient
    const canopyGrad = ctx.createRadialGradient(x + w / 2, y + h / 2, 0, x + w / 2, y + h / 2, Math.max(w, h) / 2);
    canopyGrad.addColorStop(0, lightenColor(baseColor, 0.2));
    canopyGrad.addColorStop(0.7, baseColor);
    canopyGrad.addColorStop(1, darkenColor(baseColor, 0.3));
    ctx.fillStyle = canopyGrad;
    ctx.fill();
    // Add dense tree texture
    ctx.fillStyle = darkenColor(baseColor, 0.2);
    for(let i = 0; i < w * h / 100; i++){
        const tx = x + Math.random() * w;
        const ty = y + Math.random() * h;
        const size = 1 + Math.random() * 2;
        ctx.fillRect(tx, ty, size, size);
    }
    // River patterns
    ctx.strokeStyle = darkenColor(baseColor, 0.5);
    ctx.lineWidth = 0.5;
    for(let r = 0; r < 3; r++){
        ctx.beginPath();
        ctx.moveTo(x + Math.random() * w, y);
        ctx.quadraticCurveTo(x + Math.random() * w, y + h / 2 + (Math.random() - 0.5) * h / 3, x + Math.random() * w, y + h);
        ctx.stroke();
    }
}
function renderDesertTerrain(ctx, x, y, w, h, baseColor) {
    // Desert base with heat shimmer effect
    const desertGrad = ctx.createLinearGradient(x, y, x + w, y + h);
    desertGrad.addColorStop(0, lightenColor(baseColor, 0.3));
    desertGrad.addColorStop(0.5, baseColor);
    desertGrad.addColorStop(1, darkenColor(baseColor, 0.2));
    ctx.fillStyle = desertGrad;
    ctx.fill();
    // Sand dune patterns
    for(let d = 0; d < 8; d++){
        const duneX = x + Math.random() * w;
        const duneY = y + Math.random() * h;
        const duneW = 20 + Math.random() * 40;
        const duneH = 5 + Math.random() * 15;
        ctx.fillStyle = lightenColor(baseColor, 0.1);
        ctx.beginPath();
        ctx.ellipse(duneX, duneY, duneW / 2, duneH / 2, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    }
    // Sand particle texture
    ctx.fillStyle = lightenColor(baseColor, 0.15);
    for(let p = 0; p < w * h / 150; p++){
        const px = x + Math.random() * w;
        const py = y + Math.random() * h;
        ctx.fillRect(px, py, Math.random() * 3, Math.random() * 2);
    }
}
function renderMountainTerrain(ctx, x, y, w, h, baseColor) {
    // Mountain base
    ctx.fillStyle = baseColor;
    ctx.fill();
    // Create mountain peaks
    const numPeaks = Math.floor(w / 15) + 2;
    for(let p = 0; p < numPeaks; p++){
        const peakX = x + p / numPeaks * w + (Math.random() - 0.5) * w / numPeaks;
        const peakY = y + h * (0.3 + Math.random() * 0.4);
        const peakW = 8 + Math.random() * 20;
        const peakH = h * (0.2 + Math.random() * 0.6);
        // Mountain shadow gradient
        const peakGrad = ctx.createLinearGradient(peakX, peakY, peakX + peakW, peakY + peakH);
        peakGrad.addColorStop(0, lightenColor(baseColor, 0.4));
        peakGrad.addColorStop(0.3, baseColor);
        peakGrad.addColorStop(1, darkenColor(baseColor, 0.4));
        ctx.fillStyle = peakGrad;
        ctx.beginPath();
        ctx.moveTo(peakX, peakY + peakH);
        ctx.lineTo(peakX + peakW / 2, peakY);
        ctx.lineTo(peakX + peakW, peakY + peakH);
        ctx.closePath();
        ctx.fill();
    }
    // Snow caps for high peaks
    if (h > 20) {
        ctx.fillStyle = "#f0f8ff";
        for(let s = 0; s < numPeaks / 2; s++){
            const snowX = x + Math.random() * w;
            const snowY = y + h * 0.1;
            const snowSize = 3 + Math.random() * 8;
            ctx.fillRect(snowX, snowY, snowSize, snowSize / 2);
        }
    }
}
function renderIceSheet(ctx, x, y, w, h, baseColor) {
    // Ice gradient
    const iceGrad = ctx.createLinearGradient(x, y, x + w, y + h);
    iceGrad.addColorStop(0, baseColor);
    iceGrad.addColorStop(0.5, lightenColor(baseColor, 0.1));
    iceGrad.addColorStop(1, darkenColor(baseColor, 0.1));
    ctx.fillStyle = iceGrad;
    ctx.fill();
    // Ice cracks and crevasses
    ctx.strokeStyle = darkenColor(baseColor, 0.2);
    ctx.lineWidth = 1;
    for(let c = 0; c < 10; c++){
        ctx.beginPath();
        ctx.moveTo(x + Math.random() * w, y + Math.random() * h);
        ctx.lineTo(x + Math.random() * w, y + Math.random() * h);
        ctx.stroke();
    }
    // Glacial texture
    ctx.fillStyle = lightenColor(baseColor, 0.05);
    for(let g = 0; g < w * h / 200; g++){
        const gx = x + Math.random() * w;
        const gy = y + Math.random() * h;
        ctx.fillRect(gx, gy, 2, 1);
    }
}
function renderBorealForest(ctx, x, y, w, h, baseColor) {
    // Forest gradient
    const forestGrad = ctx.createLinearGradient(x, y, x, y + h);
    forestGrad.addColorStop(0, lightenColor(baseColor, 0.1));
    forestGrad.addColorStop(1, darkenColor(baseColor, 0.2));
    ctx.fillStyle = forestGrad;
    ctx.fill();
    // Coniferous tree texture pattern
    ctx.fillStyle = darkenColor(baseColor, 0.3);
    for(let t = 0; t < w * h / 80; t++){
        const treeX = x + Math.random() * w;
        const treeY = y + Math.random() * h;
        // Draw small triangular trees
        ctx.beginPath();
        ctx.moveTo(treeX, treeY + 3);
        ctx.lineTo(treeX + 1.5, treeY);
        ctx.lineTo(treeX + 3, treeY + 3);
        ctx.closePath();
        ctx.fill();
    }
    // Forest clearings and lakes
    ctx.fillStyle = darkenColor(baseColor, 0.4);
    for(let l = 0; l < 3; l++){
        const lakeX = x + Math.random() * w;
        const lakeY = y + Math.random() * h;
        const lakeSize = 3 + Math.random() * 8;
        ctx.beginPath();
        ctx.arc(lakeX, lakeY, lakeSize, 0, Math.PI * 2);
        ctx.fill();
    }
}
function renderStandardTerrain(ctx, x, y, w, h, baseColor, terrainType) {
    // Standard terrain with elevation shading
    const terrainGrad = ctx.createRadialGradient(x + w / 2, y + h / 3, 0, x + w / 2, y + h / 2, Math.max(w, h) / 2);
    terrainGrad.addColorStop(0, lightenColor(baseColor, 0.2));
    terrainGrad.addColorStop(0.6, baseColor);
    terrainGrad.addColorStop(1, darkenColor(baseColor, 0.2));
    ctx.fillStyle = terrainGrad;
    ctx.fill();
    // Add terrain-specific details
    if (terrainType.includes("temperate") || terrainType.includes("forest")) {
        // Forest texture
        ctx.fillStyle = darkenColor(baseColor, 0.2);
        for(let f = 0; f < w * h / 120; f++){
            const fx = x + Math.random() * w;
            const fy = y + Math.random() * h;
            ctx.fillRect(fx, fy, 1 + Math.random(), 1 + Math.random());
        }
    } else if (terrainType.includes("grassland") || terrainType.includes("plains") || terrainType.includes("savanna")) {
        // Grassland texture
        ctx.strokeStyle = darkenColor(baseColor, 0.1);
        ctx.lineWidth = 0.5;
        for(let g = 0; g < w * h / 300; g++){
            const gx = x + Math.random() * w;
            const gy = y + Math.random() * h;
            ctx.beginPath();
            ctx.moveTo(gx, gy);
            ctx.lineTo(gx + Math.random() * 3, gy + Math.random() * 2);
            ctx.stroke();
        }
    }
}
function addAtmosphericHaze(ctx, width, height) {
    // Add subtle atmospheric perspective
    const atmosphere = ctx.createLinearGradient(0, 0, 0, height);
    atmosphere.addColorStop(0, "rgba(135, 206, 235, 0.05)"); // Sky blue at top
    atmosphere.addColorStop(0.5, "rgba(255, 255, 255, 0.02)"); // Slight haze in middle
    atmosphere.addColorStop(1, "rgba(135, 206, 235, 0.05)"); // Sky blue at bottom
    ctx.fillStyle = atmosphere;
    ctx.fillRect(0, 0, width, height);
}
// Enhanced color utility functions
function darkenColor(color, factor) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.floor(parseInt(hex.substr(0, 2), 16) * (1 - factor)));
    const g = Math.max(0, Math.floor(parseInt(hex.substr(2, 2), 16) * (1 - factor)));
    const b = Math.max(0, Math.floor(parseInt(hex.substr(4, 2), 16) * (1 - factor)));
    return `rgb(${r}, ${g}, ${b})`;
}
function lightenColor(color, factor) {
    const hex = color.replace('#', '');
    const r = Math.min(255, Math.floor(parseInt(hex.substr(0, 2), 16) * (1 + factor)));
    const g = Math.min(255, Math.floor(parseInt(hex.substr(2, 2), 16) * (1 + factor)));
    const b = Math.min(255, Math.floor(parseInt(hex.substr(4, 2), 16) * (1 + factor)));
    return `rgb(${r}, ${g}, ${b})`;
}
function drawSatelliteRegion(ctx, region, width, height) {
    // Base terrain color with enhanced contrast
    ctx.fillStyle = region.color;
    drawOrganicShape(ctx, region, width, height, 0.4);
    // Add strong border for maximum definition
    ctx.strokeStyle = region.color;
    ctx.lineWidth = 2;
    ctx.stroke();
    // Add a darker outline for even more contrast
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Add terrain texture variation with higher contrast
    const imageData = ctx.getImageData(region.x * width - region.w * width * 0.1, region.y * height - region.h * height * 0.1, region.w * width * 1.2, region.h * height * 1.2);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        // Add much more pronounced terrain variation
        const variation = (Math.random() - 0.5) * 60;
        data[i] = Math.max(0, Math.min(255, data[i] + variation));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + variation));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + variation));
    }
    ctx.putImageData(imageData, region.x * width - region.w * width * 0.1, region.y * height - region.h * height * 0.1);
}
function drawOrganicShape(ctx, shape, canvasWidth, canvasHeight, variation = 0.4) {
    const centerX = shape.x * canvasWidth;
    const centerY = shape.y * canvasHeight;
    const radiusX = shape.w * canvasWidth / 2;
    const radiusY = shape.h * canvasHeight / 2;
    ctx.beginPath();
    // Create irregular, realistic coastlines
    for(let i = 0; i <= 64; i++){
        const angle = i / 64 * Math.PI * 2;
        const randomVariation = 0.5 + Math.random() * variation;
        const x = centerX + Math.cos(angle) * radiusX * randomVariation;
        const y = centerY + Math.sin(angle) * radiusY * randomVariation;
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fill();
}
function addMountainRanges(ctx, width, height) {
    const mountains = [
        // Himalayas
        {
            x: 0.72,
            y: 0.42,
            w: 0.12,
            h: 0.03,
            color: "#8b7355"
        },
        // Andes
        {
            x: 0.22,
            y: 0.55,
            w: 0.02,
            h: 0.35,
            color: "#a0522d"
        },
        // Rocky Mountains
        {
            x: 0.16,
            y: 0.32,
            w: 0.03,
            h: 0.18,
            color: "#696969"
        },
        // Alps
        {
            x: 0.51,
            y: 0.31,
            w: 0.06,
            h: 0.02,
            color: "#708090"
        },
        // Urals
        {
            x: 0.58,
            y: 0.25,
            w: 0.01,
            h: 0.15,
            color: "#778899"
        }
    ];
    mountains.forEach((range)=>{
        ctx.fillStyle = range.color;
        drawOrganicShape(ctx, range, width, height, 0.2);
    });
}
function addRiverSystems(ctx, width, height) {
    ctx.strokeStyle = "#4169e1";
    ctx.lineWidth = 1;
    // Amazon River
    ctx.beginPath();
    ctx.moveTo(0.18 * width, 0.62 * height);
    ctx.quadraticCurveTo(0.25 * width, 0.60 * height, 0.32 * width, 0.62 * height);
    ctx.stroke();
    // Nile River
    ctx.beginPath();
    ctx.moveTo(0.54 * width, 0.38 * height);
    ctx.quadraticCurveTo(0.55 * width, 0.50 * height, 0.54 * width, 0.65 * height);
    ctx.stroke();
    // Mississippi River
    ctx.beginPath();
    ctx.moveTo(0.20 * width, 0.32 * height);
    ctx.quadraticCurveTo(0.21 * width, 0.40 * height, 0.23 * width, 0.48 * height);
    ctx.stroke();
}
function addDesertDetails(ctx, width, height) {
    const deserts = [
        // Sahara with dune patterns
        {
            x: 0.50,
            y: 0.40,
            w: 0.18,
            h: 0.08,
            color: "#f4e4bc"
        },
        // Arabian Desert
        {
            x: 0.58,
            y: 0.42,
            w: 0.08,
            h: 0.06,
            color: "#ddbf94"
        },
        // Gobi Desert
        {
            x: 0.78,
            y: 0.35,
            w: 0.12,
            h: 0.06,
            color: "#c19a6b"
        },
        // Mojave
        {
            x: 0.14,
            y: 0.43,
            w: 0.06,
            h: 0.04,
            color: "#d2b48c"
        }
    ];
    deserts.forEach((desert)=>{
        ctx.fillStyle = desert.color;
        drawOrganicShape(ctx, desert, width, height, 0.3);
        // Add dune patterns
        for(let i = 0; i < 5; i++){
            const duneX = (desert.x + (Math.random() - 0.5) * desert.w) * width;
            const duneY = (desert.y + (Math.random() - 0.5) * desert.h) * height;
            ctx.fillStyle = `rgba(240, 230, 180, 0.3)`;
            ctx.beginPath();
            ctx.ellipse(duneX, duneY, 8, 4, Math.random() * Math.PI, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}
// Enhanced night lights based on NASA satellite imagery patterns
function addNASAStyleNightLights(ctx, width, height) {
    // Major megalopolis regions with accurate light distribution
    const lightRegions = [
        // Northeast US Corridor (Boston-NYC-Washington)
        {
            centerX: 0.22,
            centerY: 0.39,
            density: 80,
            spread: 0.08,
            intensity: 1.0
        },
        // California Coast (SF-LA)
        {
            centerX: 0.13,
            centerY: 0.45,
            density: 60,
            spread: 0.06,
            intensity: 0.9
        },
        // European Megalopolis (London-Paris-Amsterdam-Ruhr)
        {
            centerX: 0.51,
            centerY: 0.30,
            density: 100,
            spread: 0.12,
            intensity: 1.0
        },
        // Tokyo-Osaka Corridor
        {
            centerX: 0.89,
            centerY: 0.43,
            density: 70,
            spread: 0.08,
            intensity: 1.0
        },
        // East China Coast (Shanghai-Beijing corridor)
        {
            centerX: 0.84,
            centerY: 0.40,
            density: 120,
            spread: 0.15,
            intensity: 1.1
        },
        // Delhi-Mumbai Corridor
        {
            centerX: 0.77,
            centerY: 0.47,
            density: 90,
            spread: 0.10,
            intensity: 0.8
        },
        // São Paulo-Rio de Janeiro
        {
            centerX: 0.28,
            centerY: 0.72,
            density: 50,
            spread: 0.06,
            intensity: 0.8
        },
        // Cairo-Nile Delta
        {
            centerX: 0.54,
            centerY: 0.45,
            density: 40,
            spread: 0.04,
            intensity: 0.7
        },
        // Mexico City
        {
            centerX: 0.18,
            centerY: 0.52,
            density: 30,
            spread: 0.04,
            intensity: 0.8
        },
        // Nigeria Coast (Lagos)
        {
            centerX: 0.51,
            centerY: 0.58,
            density: 25,
            spread: 0.03,
            intensity: 0.6
        }
    ];
    lightRegions.forEach((region)=>{
        for(let i = 0; i < region.density; i++){
            // Use normal distribution for realistic city clustering
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.abs(normalRandom()) * region.spread * 0.5;
            const x = (region.centerX + Math.cos(angle) * distance) * width;
            const y = (region.centerY + Math.sin(angle) * distance) * height;
            // Variable light sizes for cities, towns, and suburbs
            const lightType = Math.random();
            let size, brightness, color;
            if (lightType < 0.1) {
                // Major cities - bright white/blue
                size = 3 + Math.random() * 5;
                brightness = 0.9 * region.intensity;
                color = [
                    255,
                    245,
                    220
                ]; // Warm white
            } else if (lightType < 0.3) {
                // Medium cities - yellow-white
                size = 2 + Math.random() * 3;
                brightness = 0.7 * region.intensity;
                color = [
                    255,
                    220,
                    180
                ]; // Warm yellow
            } else {
                // Towns and suburbs - orange
                size = 1 + Math.random() * 2;
                brightness = 0.4 * region.intensity;
                color = [
                    255,
                    180,
                    120
                ]; // Orange
            }
            // Create realistic light bloom effect
            const maxRadius = size * 12;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, maxRadius);
            gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${brightness})`);
            gradient.addColorStop(0.2, `rgba(${color[0]}, ${color[1] * 0.9}, ${color[2] * 0.8}, ${brightness * 0.8})`);
            gradient.addColorStop(0.5, `rgba(${color[0] * 0.9}, ${color[1] * 0.7}, ${color[2] * 0.5}, ${brightness * 0.4})`);
            gradient.addColorStop(0.8, `rgba(${color[0] * 0.8}, ${color[1] * 0.5}, ${color[2] * 0.3}, ${brightness * 0.1})`);
            gradient.addColorStop(1, "transparent");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, maxRadius, 0, Math.PI * 2);
            ctx.fill();
            // Bright core
            ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${brightness})`;
            ctx.beginPath();
            ctx.arc(x, y, size * 0.8, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}
// Create realistic cloud patterns using multiple noise octaves
function createRealisticClouds(ctx, width, height) {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            // Multiple octaves of noise for realistic cloud formation
            const scale1 = 0.005;
            const scale2 = 0.01;
            const scale3 = 0.02;
            const scale4 = 0.04;
            const noise = Math.sin(x * scale1) * Math.cos(y * scale1) * 0.4 + Math.sin(x * scale2) * Math.cos(y * scale2) * 0.3 + Math.sin(x * scale3) * Math.cos(y * scale3) * 0.2 + Math.sin(x * scale4) * Math.cos(y * scale4) * 0.1;
            // Create realistic cloud density
            let cloudDensity = Math.max(0, noise + 0.2);
            // Add weather patterns - more clouds in certain latitudes
            const latitude = Math.abs(y / height - 0.5) * 2; // 0 at equator, 1 at poles
            if (latitude > 0.3 && latitude < 0.7) {
                cloudDensity *= 1.3; // More clouds in temperate zones
            }
            const alpha = cloudDensity * 255;
            const brightness = Math.min(255, alpha * 1.2);
            data[i] = brightness; // Red
            data[i + 1] = brightness; // Green
            data[i + 2] = brightness; // Blue
            data[i + 3] = alpha; // Alpha
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
// Enhanced topographical normal map with real elevation data patterns
function createTopographicalNormalMap(ctx, width, height) {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            // Create elevation-based normal mapping
            const elevation = Math.sin(x * 0.02) * Math.sin(y * 0.02) * 0.3 + // Large features
            Math.sin(x * 0.05) * Math.sin(y * 0.05) * 0.2 + // Medium features
            Math.sin(x * 0.1) * Math.sin(y * 0.1) * 0.1; // Fine detail
            const normalizedElevation = (elevation + 0.6) * 0.8;
            const normalValue = normalizedElevation * 255;
            data[i] = normalValue * 0.6 + 127; // Red (X normal)
            data[i + 1] = normalValue * 0.6 + 127; // Green (Y normal)
            data[i + 2] = 255; // Blue (Z normal)
            data[i + 3] = 255; // Alpha
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
// Helper function for normal distribution (Box-Muller transform)
function normalRandom() {
    const u1 = Math.random();
    const u2 = Math.random();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}
var _c;
__turbopack_context__.k.register(_c, "Earth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/events/GlobeEventBus.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Event types for the Globe Observer system
 */ __turbopack_context__.s([
    "GlobeEventBus",
    ()=>GlobeEventBus,
    "GlobeEventType",
    ()=>GlobeEventType,
    "GlobeObserver",
    ()=>GlobeObserver,
    "createGlobeEvent",
    ()=>createGlobeEvent,
    "globeEventBus",
    ()=>globeEventBus
]);
var GlobeEventType = /*#__PURE__*/ function(GlobeEventType) {
    GlobeEventType["STATION_SELECTED"] = "station_selected";
    GlobeEventType["STATION_HOVERED"] = "station_hovered";
    GlobeEventType["STATIONS_LOADED"] = "stations_loaded";
    GlobeEventType["ZOOM_CHANGED"] = "zoom_changed";
    GlobeEventType["LOCATION_CHANGED"] = "location_changed";
    GlobeEventType["AUDIO_STATE_CHANGED"] = "audio_state_changed";
    GlobeEventType["ERROR_OCCURRED"] = "error_occurred";
    return GlobeEventType;
}({});
class GlobeEventBus {
    observers = new Map();
    eventHistory = [];
    maxHistorySize = 100;
    /**
   * Subscribe an observer to specific event types
   */ subscribe(observer, eventTypes) {
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
   */ unsubscribe(observerId) {
        if (this.observers.delete(observerId)) {
            console.log(`Observer ${observerId} unsubscribed`);
        }
    }
    /**
   * Notify all subscribed observers of an event
   */ notify(event) {
        // Add to event history
        this.addToHistory(event);
        // Notify relevant observers
        Array.from(this.observers.entries()).forEach(([observerId, { observer, eventTypes }])=>{
            if (eventTypes.has(event.type)) {
                try {
                    observer.onEvent(event);
                } catch (error) {
                    console.error(`Error in observer ${observerId}:`, error);
                    // Emit error event
                    this.notify({
                        type: "error_occurred",
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
   */ getObservers() {
        return Array.from(this.observers.keys());
    }
    /**
   * Get event history
   */ getEventHistory(eventType) {
        if (eventType) {
            return this.eventHistory.filter((event)=>event.type === eventType);
        }
        return [
            ...this.eventHistory
        ];
    }
    /**
   * Clear event history
   */ clearHistory() {
        this.eventHistory = [];
    }
    /**
   * Get statistics about event bus usage
   */ getStats() {
        const eventTypeCounts = {};
        this.eventHistory.forEach((event)=>{
            eventTypeCounts[event.type] = (eventTypeCounts[event.type] || 0) + 1;
        });
        return {
            observerCount: this.observers.size,
            eventHistorySize: this.eventHistory.length,
            eventTypeCounts
        };
    }
    addToHistory(event) {
        this.eventHistory.push(event);
        // Maintain max history size
        if (this.eventHistory.length > this.maxHistorySize) {
            this.eventHistory.shift();
        }
    }
}
const globeEventBus = new GlobeEventBus();
class GlobeObserver {
    eventBus;
    observerId;
    constructor(observerId, eventBus = globeEventBus){
        this.observerId = observerId;
        this.eventBus = eventBus;
    }
    getObserverId() {
        return this.observerId;
    }
    subscribe(eventTypes) {
        this.eventBus.subscribe(this, eventTypes);
    }
    unsubscribe() {
        this.eventBus.unsubscribe(this.observerId);
    }
    emit(event) {
        this.eventBus.notify({
            ...event,
            timestamp: Date.now()
        });
    }
}
const createGlobeEvent = {
    stationSelected: (stationId, station)=>({
            type: "station_selected",
            timestamp: Date.now(),
            data: {
                stationId,
                station
            }
        }),
    stationsLoaded: (count, region, zoomLevel = 1)=>({
            type: "stations_loaded",
            timestamp: Date.now(),
            data: {
                count,
                region,
                zoomLevel
            }
        }),
    zoomChanged: (oldZoom, newZoom, cameraDistance)=>({
            type: "zoom_changed",
            timestamp: Date.now(),
            data: {
                oldZoom,
                newZoom,
                cameraDistance
            }
        }),
    error: (message, source, error)=>({
            type: "error_occurred",
            timestamp: Date.now(),
            data: {
                message,
                source,
                error
            }
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/commands/GlobeCommands.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Command pattern implementation for Globe actions
 * Provides undo/redo functionality and action queuing
 */ __turbopack_context__.s([
    "BaseCommand",
    ()=>BaseCommand,
    "BatchCommand",
    ()=>BatchCommand,
    "CommandInvoker",
    ()=>CommandInvoker,
    "FilterStationsCommand",
    ()=>FilterStationsCommand,
    "LoadStationsCommand",
    ()=>LoadStationsCommand,
    "SelectStationCommand",
    ()=>SelectStationCommand,
    "SetCameraPositionCommand",
    ()=>SetCameraPositionCommand,
    "createCommand",
    ()=>createCommand,
    "globeCommandInvoker",
    ()=>globeCommandInvoker
]);
class BaseCommand {
    timestamp;
    executed = false;
    constructor(){
        this.timestamp = Date.now();
    }
    canUndo() {
        return this.executed;
    }
    markExecuted() {
        this.executed = true;
    }
    markUndo() {
        this.executed = false;
    }
    getTimestamp() {
        return this.timestamp;
    }
}
class SelectStationCommand extends BaseCommand {
    stationId;
    station;
    onExecute;
    onUndo;
    previousSelection;
    constructor(stationId, station, onExecute, onUndo, previousSelection){
        super(), this.stationId = stationId, this.station = station, this.onExecute = onExecute, this.onUndo = onUndo, this.previousSelection = previousSelection;
    }
    execute() {
        this.onExecute(this.stationId, this.station);
        this.markExecuted();
    }
    undo() {
        if (this.previousSelection) {
            this.onExecute(this.previousSelection.stationId, this.previousSelection.station);
        } else {
            this.onUndo();
        }
        this.markUndo();
    }
    getDescription() {
        return `Select station: ${this.station?.name || this.stationId}`;
    }
}
class SetCameraPositionCommand extends BaseCommand {
    newPosition;
    setCameraPosition;
    previousPosition;
    constructor(newPosition, setCameraPosition, previousPosition){
        super(), this.newPosition = newPosition, this.setCameraPosition = setCameraPosition, this.previousPosition = previousPosition;
    }
    execute() {
        this.setCameraPosition(this.newPosition);
        this.markExecuted();
    }
    undo() {
        this.setCameraPosition(this.previousPosition);
        this.markUndo();
    }
    getDescription() {
        return `Move camera to ${this.newPosition.join(', ')}`;
    }
}
class LoadStationsCommand extends BaseCommand {
    region;
    onLoad;
    onUnload;
    constructor(region, onLoad, onUnload){
        super(), this.region = region, this.onLoad = onLoad, this.onUnload = onUnload;
    }
    async execute() {
        await this.onLoad(this.region);
        this.markExecuted();
    }
    undo() {
        this.onUnload();
        this.markUndo();
    }
    getDescription() {
        return `Load stations for region: ${this.region}`;
    }
}
class FilterStationsCommand extends BaseCommand {
    filterCriteria;
    onFilter;
    onClearFilter;
    constructor(filterCriteria, onFilter, onClearFilter){
        super(), this.filterCriteria = filterCriteria, this.onFilter = onFilter, this.onClearFilter = onClearFilter;
    }
    execute() {
        this.onFilter(this.filterCriteria);
        this.markExecuted();
    }
    undo() {
        this.onClearFilter();
        this.markUndo();
    }
    getDescription() {
        return `Apply filter: ${JSON.stringify(this.filterCriteria)}`;
    }
}
class BatchCommand extends BaseCommand {
    commands;
    description;
    constructor(commands, description){
        super(), this.commands = commands, this.description = description;
    }
    async execute() {
        for (const command of this.commands){
            await command.execute();
        }
        this.markExecuted();
    }
    async undo() {
        // Undo in reverse order
        for(let i = this.commands.length - 1; i >= 0; i--){
            const command = this.commands[i];
            if (command.canUndo()) {
                await command.undo();
            }
        }
        this.markUndo();
    }
    canUndo() {
        return this.executed && this.commands.some((cmd)=>cmd.canUndo());
    }
    getDescription() {
        return this.description;
    }
}
class CommandInvoker {
    history = [];
    currentPosition = -1;
    maxHistorySize;
    constructor(maxHistorySize = 50){
        this.maxHistorySize = maxHistorySize;
    }
    /**
   * Execute a command and add it to history
   */ async execute(command) {
        try {
            await command.execute();
            // Remove any commands after current position (when doing new action after undo)
            this.history = this.history.slice(0, this.currentPosition + 1);
            // Add new command
            this.history.push(command);
            this.currentPosition++;
            // Maintain max history size
            if (this.history.length > this.maxHistorySize) {
                this.history.shift();
                this.currentPosition--;
            }
            console.log(`Executed command: ${command.getDescription()}`);
        } catch (error) {
            console.error(`Failed to execute command: ${command.getDescription()}`, error);
            throw error;
        }
    }
    /**
   * Undo the last command
   */ async undo() {
        if (!this.canUndo()) {
            return false;
        }
        const command = this.history[this.currentPosition];
        try {
            await command.undo();
            this.currentPosition--;
            console.log(`Undid command: ${command.getDescription()}`);
            return true;
        } catch (error) {
            console.error(`Failed to undo command: ${command.getDescription()}`, error);
            return false;
        }
    }
    /**
   * Redo the next command
   */ async redo() {
        if (!this.canRedo()) {
            return false;
        }
        this.currentPosition++;
        const command = this.history[this.currentPosition];
        try {
            await command.execute();
            console.log(`Redid command: ${command.getDescription()}`);
            return true;
        } catch (error) {
            console.error(`Failed to redo command: ${command.getDescription()}`, error);
            this.currentPosition--;
            return false;
        }
    }
    /**
   * Check if undo is possible
   */ canUndo() {
        return this.currentPosition >= 0 && this.history[this.currentPosition]?.canUndo();
    }
    /**
   * Check if redo is possible
   */ canRedo() {
        return this.currentPosition < this.history.length - 1;
    }
    /**
   * Get command history
   */ getHistory() {
        return this.history.map((cmd, index)=>({
                description: cmd.getDescription(),
                canUndo: cmd.canUndo(),
                timestamp: cmd.getTimestamp?.() || 0,
                isCurrent: index === this.currentPosition
            }));
    }
    /**
   * Clear command history
   */ clearHistory() {
        this.history = [];
        this.currentPosition = -1;
    }
    /**
   * Get current command
   */ getCurrentCommand() {
        return this.history[this.currentPosition];
    }
    /**
   * Get statistics
   */ getStats() {
        return {
            totalCommands: this.history.length,
            currentPosition: this.currentPosition,
            canUndo: this.canUndo(),
            canRedo: this.canRedo()
        };
    }
}
const globeCommandInvoker = new CommandInvoker();
const createCommand = {
    selectStation: (stationId, station, onExecute, onUndo, previousSelection)=>new SelectStationCommand(stationId, station, onExecute, onUndo, previousSelection),
    setCameraPosition: (newPosition, setCameraPosition, previousPosition)=>new SetCameraPositionCommand(newPosition, setCameraPosition, previousPosition),
    loadStations: (region, onLoad, onUnload)=>new LoadStationsCommand(region, onLoad, onUnload),
    filterStations: (filterCriteria, onFilter, onClearFilter)=>new FilterStationsCommand(filterCriteria, onFilter, onClearFilter),
    batch: (commands, description)=>new BatchCommand(commands, description)
};
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
"[project]/apps/web/src/usecases/StationUseCases.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationLoadingUseCase",
    ()=>StationLoadingUseCase,
    "StationSelectionUseCase",
    ()=>StationSelectionUseCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/events/GlobeEventBus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$commands$2f$GlobeCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/commands/GlobeCommands.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$coordinates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/coordinates.ts [app-client] (ecmascript)");
;
;
;
class StationLoadingUseCase {
    stationRepository;
    eventBus;
    constructor(stationRepository, eventBus){
        this.stationRepository = stationRepository;
        this.eventBus = eventBus;
    }
    async loadStationsForView(zoomLevel) {
        try {
            this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobeEvent"].zoomChanged(0, zoomLevel, zoomLevel * 2));
            // Load comprehensive global station data with country distribution
            const stations = await this.stationRepository.getGlobalStationsWithDistribution();
            console.log(`Loaded ${stations.length} stations from global distribution`);
            // If no stations or stations without coordinates, add enhanced test data
            if (stations.length === 0 || stations.every((s)=>!s.location?.lat && !s.location?.lng)) {
                console.log('Adding enhanced fallback test stations with real coordinates');
                const enhancedTestStations = this.getEnhancedTestStations();
                return this.clusterStationsByCountryAndCity(enhancedTestStations, zoomLevel);
            }
            // Group stations by country and city for intelligent clustering
            const clusteredMarkers = this.clusterStationsByCountryAndCity(stations, zoomLevel);
            const totalStations = clusteredMarkers.reduce((sum, marker)=>sum + marker.stations.length, 0);
            console.log(`Created ${clusteredMarkers.length} marker clusters with ${totalStations} total stations`);
            this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobeEvent"].stationsLoaded(totalStations, 'global', zoomLevel));
            return clusteredMarkers;
        } catch (error) {
            console.error('Error in loadStationsForView:', error);
            // Enhanced fallback with comprehensive test data
            const testStations = this.getEnhancedTestStations();
            const clusteredMarkers = this.clusterStationsByCountryAndCity(testStations, zoomLevel);
            const totalStations = clusteredMarkers.reduce((sum, marker)=>sum + marker.stations.length, 0);
            this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobeEvent"].stationsLoaded(totalStations, 'global', zoomLevel));
            this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobeEvent"].error('Failed to load stations, using fallback', 'StationLoadingUseCase', error instanceof Error ? error : new Error(String(error))));
            return clusteredMarkers;
        }
    }
    /**
   * Enhanced clustering by country first, then by city for better organization
   */ clusterStationsByCountryAndCity(stations, zoomLevel) {
        const markers = [];
        // Group by country first, then by city/region within country
        const stationsByCountry = new Map();
        stations.forEach((station)=>{
            const country = station.location?.country || station.country || 'Unknown';
            if (!stationsByCountry.has(country)) {
                stationsByCountry.set(country, []);
            }
            stationsByCountry.get(country).push(station);
        });
        // Process each country based on zoom level with more conservative clustering
        stationsByCountry.forEach((countryStations, country)=>{
            if (zoomLevel <= 2) {
                // Country-level clustering for far zoom - always cluster
                const countryCenter = this.getCountryCenter(country);
                if (countryCenter && countryStations.length > 0) {
                    markers.push({
                        id: `country-${country}`,
                        type: 'cluster',
                        position: countryCenter,
                        stations: countryStations,
                        metadata: {
                            name: `${country} (${countryStations.length} stations)`,
                            country: country,
                            stationCount: countryStations.length,
                            density: this.getDensityLevel(countryStations.length),
                            type: 'country'
                        }
                    });
                }
            } else if (zoomLevel <= 4) {
                // City-level clustering for medium zoom - be more conservative
                if (countryStations.length <= 3) {
                    // If very few stations, still cluster at country level
                    const countryCenter = this.getCountryCenter(country);
                    if (countryCenter) {
                        markers.push({
                            id: `country-${country}`,
                            type: 'cluster',
                            position: countryCenter,
                            stations: countryStations,
                            metadata: {
                                name: `${country} (${countryStations.length} stations)`,
                                country: country,
                                stationCount: countryStations.length,
                                density: this.getDensityLevel(countryStations.length),
                                type: 'country'
                            }
                        });
                    }
                } else {
                    // City-level clustering for countries with many stations
                    // Group by major cities and towns within the country
                    const cityClusters = this.clusterStationsByCity(countryStations, country, zoomLevel);
                    markers.push(...cityClusters);
                }
            } else {
                // Individual stations for close zoom - but limit to prevent overcrowding
                const maxIndividualStations = 15; // Limit individual stations per country
                const stationsToShow = countryStations.slice(0, maxIndividualStations);
                if (countryStations.length > maxIndividualStations) {
                    // If too many stations, show a few individuals plus a cluster for the rest
                    stationsToShow.forEach((station)=>{
                        if (station.location?.lat && station.location?.lng) {
                            markers.push({
                                id: `station-${station.id}`,
                                type: 'single',
                                position: [
                                    station.location.lng,
                                    station.location.lat,
                                    0
                                ],
                                stations: [
                                    station
                                ],
                                metadata: {
                                    name: station.name,
                                    country: station.location.country,
                                    city: station.location.city,
                                    stationCount: 1,
                                    density: 'low',
                                    type: 'cluster'
                                }
                            });
                        }
                    });
                    // Add a cluster for remaining stations
                    const remaining = countryStations.slice(maxIndividualStations);
                    const countryCenter = this.getCountryCenter(country);
                    if (countryCenter && remaining.length > 0) {
                        markers.push({
                            id: `country-overflow-${country}`,
                            type: 'cluster',
                            position: countryCenter,
                            stations: remaining,
                            metadata: {
                                name: `${country} (+${remaining.length} more)`,
                                country: country,
                                stationCount: remaining.length,
                                density: this.getDensityLevel(remaining.length),
                                type: 'country'
                            }
                        });
                    }
                } else {
                    // Show all individual stations if manageable count
                    stationsToShow.forEach((station)=>{
                        if (station.location?.lat && station.location?.lng) {
                            markers.push({
                                id: `station-${station.id}`,
                                type: 'single',
                                position: [
                                    station.location.lng,
                                    station.location.lat,
                                    0
                                ],
                                stations: [
                                    station
                                ],
                                metadata: {
                                    name: station.name,
                                    country: station.location.country,
                                    city: station.location.city,
                                    stationCount: 1,
                                    density: 'low',
                                    type: 'cluster'
                                }
                            });
                        }
                    });
                }
            }
        });
        return markers;
    }
    /**
   * Get approximate center coordinates for major countries
   */ getCountryCenter(country) {
        const countryCenters = {
            'US': [
                -98.5,
                39.8,
                0
            ],
            'United States': [
                -98.5,
                39.8,
                0
            ],
            'GB': [
                -3.4,
                55.4,
                0
            ],
            'United Kingdom': [
                -3.4,
                55.4,
                0
            ],
            'DE': [
                10.5,
                51.2,
                0
            ],
            'Germany': [
                10.5,
                51.2,
                0
            ],
            'FR': [
                2.2,
                46.2,
                0
            ],
            'France': [
                2.2,
                46.2,
                0
            ],
            'ES': [
                -3.7,
                40.5,
                0
            ],
            'Spain': [
                -3.7,
                40.5,
                0
            ],
            'IT': [
                12.6,
                41.9,
                0
            ],
            'Italy': [
                12.6,
                41.9,
                0
            ],
            'NL': [
                5.3,
                52.1,
                0
            ],
            'Netherlands': [
                5.3,
                52.1,
                0
            ],
            'SE': [
                18.6,
                60.1,
                0
            ],
            'Sweden': [
                18.6,
                60.1,
                0
            ],
            'NO': [
                10.7,
                59.9,
                0
            ],
            'Norway': [
                10.7,
                59.9,
                0
            ],
            'DK': [
                9.5,
                56.3,
                0
            ],
            'Denmark': [
                9.5,
                56.3,
                0
            ],
            'JP': [
                138.3,
                36.2,
                0
            ],
            'Japan': [
                138.3,
                36.2,
                0
            ],
            'KR': [
                127.8,
                35.9,
                0
            ],
            'South Korea': [
                127.8,
                35.9,
                0
            ],
            'CN': [
                104.2,
                35.9,
                0
            ],
            'China': [
                104.2,
                35.9,
                0
            ],
            'IN': [
                78.9,
                20.6,
                0
            ],
            'India': [
                78.9,
                20.6,
                0
            ],
            'AU': [
                133.8,
                -25.3,
                0
            ],
            'Australia': [
                133.8,
                -25.3,
                0
            ],
            'NZ': [
                174.9,
                -40.9,
                0
            ],
            'New Zealand': [
                174.9,
                -40.9,
                0
            ],
            'BR': [
                -51.9,
                -14.2,
                0
            ],
            'Brazil': [
                -51.9,
                -14.2,
                0
            ],
            'MX': [
                -102.6,
                23.6,
                0
            ],
            'Mexico': [
                -102.6,
                23.6,
                0
            ],
            'CA': [
                -106.3,
                56.1,
                0
            ],
            'Canada': [
                -106.3,
                56.1,
                0
            ],
            'RU': [
                105.3,
                61.5,
                0
            ],
            'Russia': [
                105.3,
                61.5,
                0
            ],
            'ZA': [
                22.9,
                -30.6,
                0
            ],
            'South Africa': [
                22.9,
                -30.6,
                0
            ],
            'AR': [
                -63.6,
                -38.4,
                0
            ],
            'Argentina': [
                -63.6,
                -38.4,
                0
            ],
            'CL': [
                -71.5,
                -35.7,
                0
            ],
            'Chile': [
                -71.5,
                -35.7,
                0
            ],
            'EG': [
                30.8,
                26.8,
                0
            ],
            'Egypt': [
                30.8,
                26.8,
                0
            ],
            'NG': [
                8.7,
                9.1,
                0
            ],
            'Nigeria': [
                8.7,
                9.1,
                0
            ],
            'TR': [
                35.2,
                39.0,
                0
            ],
            'Turkey': [
                35.2,
                39.0,
                0
            ]
        };
        return countryCenters[country] || null;
    }
    /**
   * Calculate density level based on station count
   */ getDensityLevel(stationCount) {
        if (stationCount > 20) return 'very-high';
        if (stationCount > 10) return 'high';
        if (stationCount > 5) return 'medium';
        return 'low';
    }
    /**
   * Get coordinates for major cities worldwide
   */ getCityCoordinates(cityName, country) {
        const cityCoords = {
            'Zambia': {
                'Lusaka': {
                    lat: -15.3875,
                    lng: 28.3228
                },
                'Ndola': {
                    lat: -12.9687,
                    lng: 28.6366
                },
                'Kitwe': {
                    lat: -12.8024,
                    lng: 28.2132
                },
                'Kabwe': {
                    lat: -14.4469,
                    lng: 28.4464
                },
                'Chingola': {
                    lat: -12.5289,
                    lng: 27.8811
                },
                'Mufulira': {
                    lat: -12.5443,
                    lng: 28.2405
                },
                'Livingstone': {
                    lat: -17.8419,
                    lng: 25.8544
                }
            },
            'Nigeria': {
                'Lagos': {
                    lat: 6.5244,
                    lng: 3.3792
                },
                'Abuja': {
                    lat: 9.0765,
                    lng: 7.3986
                },
                'Kano': {
                    lat: 12.0022,
                    lng: 8.5920
                },
                'Ibadan': {
                    lat: 7.3775,
                    lng: 3.9470
                },
                'Port Harcourt': {
                    lat: 4.8156,
                    lng: 7.0498
                }
            },
            'Kenya': {
                'Nairobi': {
                    lat: -1.2921,
                    lng: 36.8219
                },
                'Mombasa': {
                    lat: -4.0435,
                    lng: 39.6682
                },
                'Kisumu': {
                    lat: -0.0917,
                    lng: 34.7680
                },
                'Eldoret': {
                    lat: 0.5143,
                    lng: 35.2698
                }
            },
            'South Africa': {
                'Johannesburg': {
                    lat: -26.2041,
                    lng: 28.0473
                },
                'Cape Town': {
                    lat: -33.9249,
                    lng: 18.4241
                },
                'Durban': {
                    lat: -29.8587,
                    lng: 31.0218
                },
                'Pretoria': {
                    lat: -25.7479,
                    lng: 28.2293
                }
            },
            'United States': {
                'New York': {
                    lat: 40.7128,
                    lng: -74.0060
                },
                'Los Angeles': {
                    lat: 34.0522,
                    lng: -118.2437
                },
                'Chicago': {
                    lat: 41.8781,
                    lng: -87.6298
                },
                'Houston': {
                    lat: 29.7604,
                    lng: -95.3698
                }
            },
            'United Kingdom': {
                'London': {
                    lat: 51.5074,
                    lng: -0.1278
                },
                'Manchester': {
                    lat: 53.4808,
                    lng: -2.2426
                },
                'Birmingham': {
                    lat: 52.4862,
                    lng: -1.8904
                },
                'Liverpool': {
                    lat: 53.4084,
                    lng: -2.9916
                }
            }
        };
        return cityCoords[country]?.[cityName] || null;
    }
    /**
   * Get approximate country boundaries for coordinate generation
   */ getCountryBounds(country) {
        const countryBounds = {
            'Zambia': {
                minLat: -18.0,
                maxLat: -8.2,
                minLng: 21.9,
                maxLng: 33.7
            },
            'Nigeria': {
                minLat: 4.3,
                maxLat: 13.9,
                minLng: 2.7,
                maxLng: 14.7
            },
            'Kenya': {
                minLat: -4.7,
                maxLat: 5.5,
                minLng: 33.9,
                maxLng: 41.9
            },
            'South Africa': {
                minLat: -34.8,
                maxLat: -22.1,
                minLng: 16.3,
                maxLng: 32.9
            },
            'United States': {
                minLat: 25.0,
                maxLat: 49.0,
                minLng: -125.0,
                maxLng: -66.0
            },
            'United Kingdom': {
                minLat: 49.9,
                maxLat: 58.7,
                minLng: -8.6,
                maxLng: 1.8
            },
            'Germany': {
                minLat: 47.3,
                maxLat: 55.1,
                minLng: 5.9,
                maxLng: 15.0
            },
            'France': {
                minLat: 41.3,
                maxLat: 51.1,
                minLng: -5.1,
                maxLng: 9.6
            },
            'Brazil': {
                minLat: -33.7,
                maxLat: 5.3,
                minLng: -73.9,
                maxLng: -28.8
            },
            'Australia': {
                minLat: -43.6,
                maxLat: -10.7,
                minLng: 113.3,
                maxLng: 153.6
            }
        };
        return countryBounds[country] || null;
    }
    /**
   * Enhanced test stations with global coverage
   */ getEnhancedTestStations() {
        return [
            // North America
            {
                id: 'test-us-1',
                name: 'KQED FM',
                url: 'http://kqed.org/stream',
                country: 'US',
                city: 'San Francisco',
                genre: 'News',
                location: {
                    lat: 37.7749,
                    lng: -122.4194
                }
            },
            {
                id: 'test-us-2',
                name: 'WNYC FM',
                url: 'http://wnyc.org/stream',
                country: 'US',
                city: 'New York',
                genre: 'News',
                location: {
                    lat: 40.7589,
                    lng: -73.9851
                }
            },
            {
                id: 'test-us-3',
                name: 'WXPN',
                url: 'http://wxpn.org/stream',
                country: 'US',
                city: 'Philadelphia',
                genre: 'Music',
                location: {
                    lat: 39.9526,
                    lng: -75.1652
                }
            },
            {
                id: 'test-ca-1',
                name: 'CBC Radio One',
                url: 'http://cbc.ca/stream',
                country: 'CA',
                city: 'Toronto',
                genre: 'News',
                location: {
                    lat: 43.6532,
                    lng: -79.3832
                }
            },
            {
                id: 'test-ca-2',
                name: 'Radio-Canada',
                url: 'http://radio-canada.ca/stream',
                country: 'CA',
                city: 'Montreal',
                genre: 'News',
                location: {
                    lat: 45.5017,
                    lng: -73.5673
                }
            },
            // Europe
            {
                id: 'test-gb-1',
                name: 'BBC Radio 1',
                url: 'http://bbc.co.uk/stream',
                country: 'GB',
                city: 'London',
                genre: 'Music',
                location: {
                    lat: 51.5074,
                    lng: -0.1278
                }
            },
            {
                id: 'test-gb-2',
                name: 'BBC Radio 4',
                url: 'http://bbc.co.uk/radio4',
                country: 'GB',
                city: 'London',
                genre: 'News',
                location: {
                    lat: 51.5074,
                    lng: -0.1278
                }
            },
            {
                id: 'test-de-1',
                name: 'Deutschlandfunk',
                url: 'http://dradio.de/stream',
                country: 'DE',
                city: 'Berlin',
                genre: 'News',
                location: {
                    lat: 52.5200,
                    lng: 13.4050
                }
            },
            {
                id: 'test-de-2',
                name: 'Bayern 3',
                url: 'http://br.de/stream',
                country: 'DE',
                city: 'Munich',
                genre: 'Music',
                location: {
                    lat: 48.1351,
                    lng: 11.5820
                }
            },
            {
                id: 'test-fr-1',
                name: 'France Inter',
                url: 'http://radiofrance.fr/stream',
                country: 'FR',
                city: 'Paris',
                genre: 'News',
                location: {
                    lat: 48.8566,
                    lng: 2.3522
                }
            },
            {
                id: 'test-es-1',
                name: 'RNE Radio 1',
                url: 'http://rtve.es/stream',
                country: 'ES',
                city: 'Madrid',
                genre: 'News',
                location: {
                    lat: 40.4168,
                    lng: -3.7038
                }
            },
            {
                id: 'test-it-1',
                name: 'RAI Radio 1',
                url: 'http://rai.it/stream',
                country: 'IT',
                city: 'Rome',
                genre: 'News',
                location: {
                    lat: 41.9028,
                    lng: 12.4964
                }
            },
            {
                id: 'test-nl-1',
                name: 'NPO Radio 1',
                url: 'http://npo.nl/stream',
                country: 'NL',
                city: 'Amsterdam',
                genre: 'News',
                location: {
                    lat: 52.3676,
                    lng: 4.9041
                }
            },
            {
                id: 'test-se-1',
                name: 'SVT P1',
                url: 'http://svt.se/stream',
                country: 'SE',
                city: 'Stockholm',
                genre: 'News',
                location: {
                    lat: 59.3293,
                    lng: 18.0686
                }
            },
            {
                id: 'test-no-1',
                name: 'NRK P1',
                url: 'http://nrk.no/stream',
                country: 'NO',
                city: 'Oslo',
                genre: 'News',
                location: {
                    lat: 59.9139,
                    lng: 10.7522
                }
            },
            // Asia-Pacific
            {
                id: 'test-jp-1',
                name: 'NHK Radio',
                url: 'http://nhk.or.jp/stream',
                country: 'JP',
                city: 'Tokyo',
                genre: 'News',
                location: {
                    lat: 35.6762,
                    lng: 139.6503
                }
            },
            {
                id: 'test-jp-2',
                name: 'J-Wave',
                url: 'http://j-wave.co.jp/stream',
                country: 'JP',
                city: 'Tokyo',
                genre: 'Music',
                location: {
                    lat: 35.6762,
                    lng: 139.6503
                }
            },
            {
                id: 'test-kr-1',
                name: 'KBS Radio',
                url: 'http://kbs.co.kr/stream',
                country: 'KR',
                city: 'Seoul',
                genre: 'News',
                location: {
                    lat: 37.5665,
                    lng: 126.9780
                }
            },
            {
                id: 'test-au-1',
                name: 'ABC Radio',
                url: 'http://abc.net.au/stream',
                country: 'AU',
                city: 'Sydney',
                genre: 'News',
                location: {
                    lat: -33.8688,
                    lng: 151.2093
                }
            },
            {
                id: 'test-au-2',
                name: 'Triple J',
                url: 'http://triplej.net.au/stream',
                country: 'AU',
                city: 'Sydney',
                genre: 'Music',
                location: {
                    lat: -33.8688,
                    lng: 151.2093
                }
            },
            {
                id: 'test-nz-1',
                name: 'RNZ National',
                url: 'http://rnz.co.nz/stream',
                country: 'NZ',
                city: 'Wellington',
                genre: 'News',
                location: {
                    lat: -41.2865,
                    lng: 174.7762
                }
            },
            {
                id: 'test-in-1',
                name: 'All India Radio',
                url: 'http://allindiaradio.gov.in/stream',
                country: 'IN',
                city: 'New Delhi',
                genre: 'News',
                location: {
                    lat: 28.7041,
                    lng: 77.1025
                }
            },
            {
                id: 'test-in-2',
                name: 'Radio City',
                url: 'http://radiocity.in/stream',
                country: 'IN',
                city: 'Mumbai',
                genre: 'Music',
                location: {
                    lat: 19.0760,
                    lng: 72.8777
                }
            },
            // Latin America
            {
                id: 'test-br-1',
                name: 'CBN Radio',
                url: 'http://cbn.globoradio.globo.com/stream',
                country: 'BR',
                city: 'São Paulo',
                genre: 'News',
                location: {
                    lat: -23.5558,
                    lng: -46.6396
                }
            },
            {
                id: 'test-br-2',
                name: 'Rádio Nacional',
                url: 'http://radios.ebc.com.br/stream',
                country: 'BR',
                city: 'Rio de Janeiro',
                genre: 'Music',
                location: {
                    lat: -22.9068,
                    lng: -43.1729
                }
            },
            {
                id: 'test-mx-1',
                name: 'Radio Universidad',
                url: 'http://radio.unam.mx/stream',
                country: 'MX',
                city: 'Mexico City',
                genre: 'Culture',
                location: {
                    lat: 19.4326,
                    lng: -99.1332
                }
            },
            {
                id: 'test-ar-1',
                name: 'Radio Nacional',
                url: 'http://radionacional.com.ar/stream',
                country: 'AR',
                city: 'Buenos Aires',
                genre: 'News',
                location: {
                    lat: -34.6118,
                    lng: -58.3960
                }
            },
            {
                id: 'test-cl-1',
                name: 'Radio Cooperativa',
                url: 'http://cooperativa.cl/stream',
                country: 'CL',
                city: 'Santiago',
                genre: 'News',
                location: {
                    lat: -33.4489,
                    lng: -70.6693
                }
            },
            // Africa & Middle East
            {
                id: 'test-za-1',
                name: 'SAfm',
                url: 'http://sabc.co.za/stream',
                country: 'ZA',
                city: 'Johannesburg',
                genre: 'News',
                location: {
                    lat: -26.2041,
                    lng: 28.0473
                }
            },
            {
                id: 'test-eg-1',
                name: 'Radio Cairo',
                url: 'http://ertu.org/stream',
                country: 'EG',
                city: 'Cairo',
                genre: 'News',
                location: {
                    lat: 30.0444,
                    lng: 31.2357
                }
            },
            {
                id: 'test-ng-1',
                name: 'Radio Nigeria',
                url: 'http://frcn.gov.ng/stream',
                country: 'NG',
                city: 'Lagos',
                genre: 'News',
                location: {
                    lat: 6.5244,
                    lng: 3.3792
                }
            },
            {
                id: 'test-il-1',
                name: 'Kol Israel',
                url: 'http://kan.org.il/stream',
                country: 'IL',
                city: 'Tel Aviv',
                genre: 'News',
                location: {
                    lat: 32.0853,
                    lng: 34.7818
                }
            },
            // Russia & Eastern Europe
            {
                id: 'test-ru-1',
                name: 'Radio Russia',
                url: 'http://radiorus.ru/stream',
                country: 'RU',
                city: 'Moscow',
                genre: 'News',
                location: {
                    lat: 55.7558,
                    lng: 37.6173
                }
            },
            {
                id: 'test-ru-2',
                name: 'Echo Moscow',
                url: 'http://echo.msk.ru/stream',
                country: 'RU',
                city: 'Moscow',
                genre: 'Talk',
                location: {
                    lat: 55.7558,
                    lng: 37.6173
                }
            },
            {
                id: 'test-tr-1',
                name: 'TRT Radyo 1',
                url: 'http://trt.net.tr/stream',
                country: 'TR',
                city: 'Istanbul',
                genre: 'News',
                location: {
                    lat: 41.0082,
                    lng: 28.9784
                }
            }
        ];
    }
    clusterStationsByCity(stations, country, zoomLevel) {
        const cityGroups = new Map();
        console.log(`Clustering ${stations.length} stations for ${country}`);
        // Group stations by city, creating major urban centers as cluster points
        stations.forEach((station, index)=>{
            const city = station.location?.city || 'Unknown City';
            const cityKey = `${city}-${country}`;
            if (!cityGroups.has(cityKey)) {
                cityGroups.set(cityKey, []);
            }
            cityGroups.get(cityKey).push(station);
            // Log first few stations to debug location data
            if (index < 3) {
                console.log(`Station ${index} in ${country}:`, {
                    name: station.name,
                    city,
                    lat: station.location?.lat,
                    lng: station.location?.lng
                });
            }
        });
        console.log(`Created ${cityGroups.size} city clusters for ${country}`);
        // Convert city groups to marker data representing urban centers
        return Array.from(cityGroups.entries()).map(([cityKey, groupStations])=>{
            const representative = groupStations[0];
            const cityName = cityKey.split('-')[0];
            let lat = representative.location?.lat || 0;
            let lng = representative.location?.lng || 0;
            // If no coordinates, use enhanced city coordinate lookup
            if (lat === 0 && lng === 0) {
                const cityCoords = this.getCityCoordinates(cityName, country);
                if (cityCoords) {
                    lat = cityCoords.lat;
                    lng = cityCoords.lng;
                } else {
                    // Fallback: generate realistic coordinates within country bounds
                    const countryBounds = this.getCountryBounds(country);
                    if (countryBounds) {
                        const hash = this.hashString(cityKey);
                        lat = countryBounds.minLat + hash % 100 / 100 * (countryBounds.maxLat - countryBounds.minLat);
                        lng = countryBounds.minLng + hash * 7 % 100 / 100 * (countryBounds.maxLng - countryBounds.minLng);
                    }
                }
            }
            const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$coordinates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latLngToPosition"])(lat, lng, 1.01);
            return {
                id: cityKey,
                position,
                stations: groupStations,
                type: 'city',
                metadata: {
                    name: `${cityName} (${groupStations.length} stations)`,
                    city: cityName,
                    country: country,
                    stationCount: groupStations.length,
                    density: this.getDensityLevel(groupStations.length),
                    type: 'city'
                }
            };
        }).filter((marker)=>// Filter out markers with invalid coordinates
            marker.position[0] !== 0 || marker.position[1] !== 0);
    }
    hashString(str) {
        let hash = 0;
        for(let i = 0; i < str.length; i++){
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }
}
class StationSelectionUseCase {
    eventBus;
    commandInvoker;
    currentSelection;
    constructor(eventBus, commandInvoker){
        this.eventBus = eventBus;
        this.commandInvoker = commandInvoker;
        this.currentSelection = null;
    }
    async selectStation(stationId, station) {
        const previousSelection = this.currentSelection;
        // Create selection command
        const command = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$commands$2f$GlobeCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommand"].selectStation(stationId, station, (id, st)=>this.executeSelection(id, st), ()=>this.clearSelection(), previousSelection || undefined);
        // Execute through command invoker for undo/redo support
        await this.commandInvoker.execute(command);
    }
    async clearSelection() {
        if (!this.currentSelection) return;
        const previousSelection = this.currentSelection;
        this.currentSelection = null;
        // Emit selection cleared event
        this.eventBus.notify({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobeEventType"].STATION_SELECTED,
            timestamp: Date.now(),
            data: {
                stationId: null,
                station: null,
                previousSelection
            }
        });
    }
    getCurrentSelection() {
        return this.currentSelection;
    }
    async hoverStation(stationId) {
        this.eventBus.notify({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobeEventType"].STATION_HOVERED,
            timestamp: Date.now(),
            data: {
                stationId
            }
        });
    }
    executeSelection(stationId, station) {
        this.currentSelection = {
            stationId,
            station
        };
        // Emit selection event
        this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobeEvent"].stationSelected(stationId, station));
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/strategies/MarkerStrategy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseMarkerStrategy",
    ()=>BaseMarkerStrategy,
    "ClusterMarkerStrategy",
    ()=>ClusterMarkerStrategy,
    "MarkerFactory",
    ()=>MarkerFactory,
    "SingleStationMarkerStrategy",
    ()=>SingleStationMarkerStrategy
]);
class BaseMarkerStrategy {
}
class SingleStationMarkerStrategy extends BaseMarkerStrategy {
    calculateStyle(data, cameraDistance) {
        // Much smaller markers when zoomed in
        const baseSize = Math.max(0.015, Math.min(0.05, 0.1 / cameraDistance));
        return {
            size: baseSize,
            color: "#5f72ff",
            opacity: 0.9,
            // Only show labels when extremely close
            hasLabel: cameraDistance < 2.0,
            labelText: data.stations[0]?.name,
            pulseEffect: false,
            glowEffect: false
        };
    }
    shouldShow(data, zoomLevel) {
        return zoomLevel > 3.5; // Show individual stations at closer zoom
    }
    handleInteraction(data, interactionType) {
        if (interactionType === 'click' && data.stations[0]) {
            // Dispatch station selection event
            window.dispatchEvent(new CustomEvent('stationSelected', {
                detail: data.stations[0]
            }));
        }
    }
}
class ClusterMarkerStrategy extends BaseMarkerStrategy {
    calculateStyle(data, cameraDistance) {
        const stationCount = data.stations.length;
        // Even more conservative base size
        const baseSize = Math.max(0.025, Math.min(0.1, 0.18 / cameraDistance));
        // Further reduce size multiplier to prevent huge markers
        const sizeMultiplier = Math.log(stationCount + 1) * 0.08;
        const densityColors = {
            'low': "#5f72ff",
            'medium': "#ffde59",
            'high': "#ffa502",
            'very-high': "#ff4757"
        };
        // Special styling for country-level clusters
        const isCountryCluster = data.metadata.type === 'country';
        const color = isCountryCluster ? this.getCountryColor(data.metadata.country || 'Unknown') : densityColors[data.metadata.density || 'low'];
        return {
            size: baseSize + sizeMultiplier,
            color: color,
            opacity: isCountryCluster ? 0.8 : 0.9,
            // More restrictive label showing - show country names for country clusters
            hasLabel: cameraDistance < (isCountryCluster ? 4.0 : 2.5) && stationCount <= (isCountryCluster ? 200 : 5),
            labelText: isCountryCluster ? data.metadata.name : data.metadata.city || `${stationCount}`,
            pulseEffect: false,
            glowEffect: true
        };
    }
    getCountryColor(country) {
        // Assign distinctive colors to major countries
        const countryColors = {
            'US': '#ff6b6b',
            'United States': '#ff6b6b',
            'GB': '#4ecdc4',
            'United Kingdom': '#4ecdc4',
            'DE': '#45b7d1',
            'Germany': '#45b7d1',
            'FR': '#96ceb4',
            'France': '#96ceb4',
            'JP': '#ffeaa7',
            'Japan': '#ffeaa7',
            'AU': '#fd79a8',
            'Australia': '#fd79a8',
            'BR': '#00b894',
            'Brazil': '#00b894',
            'CA': '#e17055',
            'Canada': '#e17055',
            'IN': '#a29bfe',
            'India': '#a29bfe',
            'RU': '#636e72',
            'Russia': '#636e72',
            'CN': '#fd63a3',
            'China': '#fd63a3',
            'KR': '#fdcb6e',
            'South Korea': '#fdcb6e',
            'ES': '#e84393',
            'Spain': '#e84393',
            'IT': '#00cec9',
            'Italy': '#00cec9'
        };
        return countryColors[country] || '#74b9ff'; // Default blue
    }
    shouldShow(data, zoomLevel) {
        return zoomLevel >= 1 && zoomLevel <= 4; // Stop showing clusters before single stations appear
    }
    handleInteraction(data, interactionType) {
        if (interactionType === 'click') {
            if (data.stations.length === 1) {
                // Handle single station case - dispatch selection event directly
                window.dispatchEvent(new CustomEvent('stationSelected', {
                    detail: data.stations[0]
                }));
            } else {
                // Show cluster expansion or select most popular
                const popularStation = data.stations.reduce((prev, current)=>current.listeners > prev.listeners ? current : prev);
                window.dispatchEvent(new CustomEvent('stationSelected', {
                    detail: popularStation
                }));
            }
        }
    }
}
class MarkerFactory {
    strategies = new Map();
    constructor(){
        this.strategies.set('single', new SingleStationMarkerStrategy());
        this.strategies.set('cluster', new ClusterMarkerStrategy());
    }
    createMarker(data, cameraDistance) {
        const strategy = this.strategies.get(data.type) || this.strategies.get('single');
        return {
            style: strategy.calculateStyle(data, cameraDistance),
            strategy
        };
    }
    shouldShowMarker(data, zoomLevel) {
        const strategy = this.strategies.get(data.type) || this.strategies.get('single');
        return strategy.shouldShow(data, zoomLevel);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/stationCacheHelpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCityIndex",
    ()=>buildCityIndex,
    "buildCountryIndex",
    ()=>buildCountryIndex,
    "buildGenreIndex",
    ()=>buildGenreIndex,
    "distributeStationsByCountry",
    ()=>distributeStationsByCountry,
    "filterStationsByCity",
    ()=>filterStationsByCity,
    "filterStationsByCountry",
    ()=>filterStationsByCountry,
    "filterStationsByTag",
    ()=>filterStationsByTag,
    "searchStationsInCache",
    ()=>searchStationsInCache,
    "summarizeCountries",
    ()=>summarizeCountries,
    "summarizeTags",
    ()=>summarizeTags
]);
const UNKNOWN = "unknown";
function buildCountryIndex(stations) {
    const byCountry = new Map();
    stations.forEach((station)=>{
        const key = station.location.country?.toLowerCase() || UNKNOWN;
        if (!byCountry.has(key)) {
            byCountry.set(key, []);
        }
        byCountry.get(key).push(station);
    });
    return byCountry;
}
function buildCityIndex(stations) {
    const byCity = new Map();
    stations.forEach((station)=>{
        const city = station.location.city?.toLowerCase();
        if (!city) return;
        if (!byCity.has(city)) {
            byCity.set(city, []);
        }
        byCity.get(city).push(station);
    });
    return byCity;
}
function buildGenreIndex(stations) {
    const byGenre = new Map();
    stations.forEach((station)=>{
        const genre = station.genre?.toLowerCase() || UNKNOWN;
        if (!byGenre.has(genre)) {
            byGenre.set(genre, []);
        }
        byGenre.get(genre).push(station);
        station.tags?.forEach((tag)=>{
            const key = tag.toLowerCase();
            if (!byGenre.has(key)) {
                byGenre.set(key, []);
            }
            byGenre.get(key).push(station);
        });
    });
    return byGenre;
}
function filterStationsByCountry(stations, normalizedCountry) {
    return stations.filter((station)=>{
        const name = station.location?.country?.toLowerCase() || "";
        const code = station.location?.countryCode?.toLowerCase() || "";
        return name === normalizedCountry || name.startsWith(normalizedCountry) || code === normalizedCountry;
    }).sort((a, b)=>(b.listeners || 0) - (a.listeners || 0));
}
function filterStationsByCity(stations, normalizedCity) {
    return stations.filter((station)=>station.location.city?.toLowerCase().includes(normalizedCity)).sort((a, b)=>(b.listeners || 0) - (a.listeners || 0));
}
function filterStationsByTag(stations, normalizedTag) {
    return stations.filter((station)=>{
        const genre = station.genre?.toLowerCase() || "";
        const tags = station.tags?.map((tag)=>tag.toLowerCase()) || [];
        return genre.includes(normalizedTag) || tags.some((tag)=>tag.includes(normalizedTag));
    }).sort((a, b)=>(b.listeners || 0) - (a.listeners || 0));
}
function searchStationsInCache(stations, query) {
    const searchTerm = query.trim().toLowerCase();
    if (!searchTerm) return [];
    const results = stations.filter((station)=>station.name?.toLowerCase().includes(searchTerm) || station.location?.country?.toLowerCase().includes(searchTerm) || station.location?.city?.toLowerCase().includes(searchTerm) || station.genre?.toLowerCase().includes(searchTerm) || station.language?.toLowerCase().includes(searchTerm) || station.description?.toLowerCase().includes(searchTerm) || station.tags?.some((tag)=>tag.toLowerCase().includes(searchTerm)));
    return results.sort((a, b)=>{
        const aExact = a.name?.toLowerCase() === searchTerm;
        const bExact = b.name?.toLowerCase() === searchTerm;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        return (b.listeners || 0) - (a.listeners || 0);
    });
}
function distributeStationsByCountry(stations, targetLimit) {
    const byCountry = buildCountryIndex(stations);
    const result = [];
    const maxPerCountry = Math.min(20, Math.ceil(targetLimit / Math.max(byCountry.size, 1)));
    const countryGroups = Array.from(byCountry.values());
    for(let index = 0; index < countryGroups.length; index += 1){
        const selected = countryGroups[index].slice(0, maxPerCountry);
        result.push(...selected);
        if (result.length >= targetLimit) break;
    }
    return result.slice(0, targetLimit);
}
function summarizeCountries(stations) {
    const counts = new Map();
    stations.forEach((station)=>{
        const country = station.location.country || "Unknown";
        const iso = station.location.countryCode || "";
        if (!counts.has(country)) {
            counts.set(country, {
                name: country,
                iso,
                stationcount: 0
            });
        }
        counts.get(country).stationcount += 1;
    });
    return Array.from(counts.values()).sort((a, b)=>b.stationcount - a.stationcount);
}
function summarizeTags(stations) {
    const counts = new Map();
    stations.forEach((station)=>{
        if (station.genre) {
            const key = station.genre.toLowerCase();
            counts.set(key, (counts.get(key) || 0) + 1);
        }
        station.tags?.forEach((tag)=>{
            const key = tag.toLowerCase();
            counts.set(key, (counts.get(key) || 0) + 1);
        });
    });
    return Array.from(counts.entries()).map(([name, stationcount])=>({
            name,
            stationcount
        })).sort((a, b)=>b.stationcount - a.stationcount);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/location/wofEnrichmentService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enrichStationsWithWof",
    ()=>enrichStationsWithWof
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$boolean$2d$point$2d$in$2d$polygon$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@turf/boolean-point-in-polygon/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$turf$2f$helpers$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@turf/helpers/dist/esm/index.js [app-client] (ecmascript)");
;
;
function getBoundsFromFeature(feature) {
    const [minLng, minLat, maxLng, maxLat] = feature.bbox;
    return {
        minLat,
        minLng,
        maxLat,
        maxLng
    };
}
function isWithinBounds(bounds, lat, lng) {
    return lat >= bounds.minLat && lat <= bounds.maxLat && lng >= bounds.minLng && lng <= bounds.maxLng;
}
function containsPoint(feature, lat, lng) {
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
function ensureNaturalEarthFeature(feature) {
    if (!feature) return null;
    const candidate = feature;
    if (Array.isArray(candidate.bbox) && candidate.bbox.length === 4) {
        return candidate;
    }
    return null;
}
function hashIdentifier(value) {
    let hash = 0;
    for(let index = 0; index < value.length; index += 1){
        hash = hash * 31 + value.charCodeAt(index) | 0;
    }
    return Math.abs(hash) || 1;
}
function buildHierarchyEntry(id, placetype, name, feature) {
    const [minLng, minLat, maxLng, maxLat] = feature.bbox;
    return {
        id,
        placetype,
        name,
        bbox: [
            minLng,
            minLat,
            maxLng,
            maxLat
        ]
    };
}
function pickCountryFeature(station, countries) {
    const isoCandidates = [
        station.location.countryCode?.toUpperCase()
    ].filter(Boolean);
    for (const iso of isoCandidates){
        const match = countries.features.find((feature)=>{
            const props = feature.properties;
            return props.isoA2?.toUpperCase() === iso || props.isoA3?.toUpperCase() === iso;
        });
        const natural = ensureNaturalEarthFeature(match);
        if (natural) {
            return natural;
        }
    }
    const name = station.location.country.trim().toLowerCase();
    if (name) {
        const byName = ensureNaturalEarthFeature(countries.features.find((feature)=>feature.properties.name.toLowerCase() === name));
        if (byName) return byName;
    }
    const { lat, lng } = station.location;
    const fallback = countries.features.find((feature)=>{
        const candidate = ensureNaturalEarthFeature(feature);
        if (!candidate) {
            return false;
        }
        const bounds = getBoundsFromFeature(candidate);
        return isWithinBounds(bounds, lat, lng) && containsPoint(candidate, lat, lng);
    });
    return ensureNaturalEarthFeature(fallback);
}
function pickRegionFeature(station, regions, countryFeature) {
    if (!countryFeature) return null;
    const iso3166Candidate = station.location.city ? `${countryFeature.properties.isoA2}-${station.location.city}` : null;
    if (iso3166Candidate) {
        const match = ensureNaturalEarthFeature(regions.features.find((feature)=>feature.properties.iso3166_2?.toUpperCase() === iso3166Candidate.toUpperCase()));
        if (match) return match;
    }
    const { lat, lng } = station.location;
    const countryIso = countryFeature.properties.isoA2?.toUpperCase();
    const fallback = regions.features.find((feature)=>{
        const props = feature.properties;
        if (countryIso && props.isoA2?.toUpperCase() !== countryIso) {
            return false;
        }
        const candidate = ensureNaturalEarthFeature(feature);
        if (!candidate) {
            return false;
        }
        const bounds = getBoundsFromFeature(candidate);
        return isWithinBounds(bounds, lat, lng) && containsPoint(candidate, lat, lng);
    });
    return ensureNaturalEarthFeature(fallback);
}
function createLocationDetail(country, region) {
    if (!country) {
        return {
            hierarchy: [],
            source: "natural-earth"
        };
    }
    const countryId = hashIdentifier(country.properties.isoA3 || country.properties.name);
    const hierarchy = [
        buildHierarchyEntry(countryId, "country", country.properties.name, country)
    ];
    const detail = {
        countryId,
        hierarchy,
        centroid: country.properties.centroid,
        bbox: getBoundsFromFeature(country),
        countryIsoA2: country.properties.isoA2 ?? undefined,
        countryIsoA3: country.properties.isoA3 ?? undefined,
        source: "natural-earth"
    };
    if (region) {
        const regionId = hashIdentifier(region.properties.iso3166_2 || region.properties.name);
        detail.regionId = regionId;
        detail.regionIso3166 = region.properties.iso3166_2 ?? undefined;
        detail.hierarchy.push(buildHierarchyEntry(regionId, "region", region.properties.name, region));
        detail.bbox = getBoundsFromFeature(region);
        detail.centroid = region.properties.centroid;
    }
    return detail;
}
async function enrichStationsWithWof(stations, countries, regions) {
    return stations.map((station)=>{
        if (station.location.wof?.source === "natural-earth") {
            return station;
        }
        const countryFeature = pickCountryFeature(station, countries);
        const regionFeature = pickRegionFeature(station, regions, countryFeature);
        const wofDetail = createLocationDetail(countryFeature, regionFeature);
        return {
            ...station,
            location: {
                ...station.location,
                wof: wofDetail
            }
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/location/naturalEarthService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findCountryFeatureByIso",
    ()=>findCountryFeatureByIso,
    "findRegionFeature",
    ()=>findRegionFeature,
    "loadNaturalEarthCountries",
    ()=>loadNaturalEarthCountries,
    "loadNaturalEarthRegions",
    ()=>loadNaturalEarthRegions
]);
const NATURAL_EARTH_BASE_PATH = "/naturalearth";
const COUNTRIES_PATH = `${NATURAL_EARTH_BASE_PATH}/admin0-countries.json`;
const REGIONS_PATH = `${NATURAL_EARTH_BASE_PATH}/admin1-regions.json`;
let countryCache = null;
let regionCache = null;
function normalizeCollection(parsed) {
    return {
        ...parsed,
        features: parsed.features ?? []
    };
}
async function fetchCollection(path) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const response = await fetch(path, {
        cache: "force-cache"
    });
    if (!response.ok) {
        throw new Error(`Failed to load Natural Earth data from ${path}: ${response.status} ${response.statusText}`);
    }
    const parsed = await response.json();
    return normalizeCollection(parsed);
}
async function loadNaturalEarthCountries() {
    if (!countryCache) {
        countryCache = await fetchCollection(COUNTRIES_PATH);
    }
    return countryCache;
}
async function loadNaturalEarthRegions() {
    if (!regionCache) {
        regionCache = await fetchCollection(REGIONS_PATH);
    }
    return regionCache;
}
function ensureFeature(feature) {
    if (!feature) return null;
    const candidate = feature;
    return Array.isArray(candidate.bbox) && candidate.bbox.length === 4 ? candidate : null;
}
function findCountryFeatureByIso(isoCode) {
    if (!countryCache || !isoCode) return null;
    const normalized = isoCode.trim().toUpperCase();
    const byIsoA2 = ensureFeature(countryCache.features.find((feature)=>feature.properties.isoA2?.toUpperCase() === normalized));
    if (byIsoA2) return byIsoA2;
    return ensureFeature(countryCache.features.find((feature)=>feature.properties.isoA3?.toUpperCase() === normalized));
}
function findRegionFeature(isoA2, iso3166_2) {
    if (!regionCache) return null;
    const inCountry = isoA2 ? isoA2.trim().toUpperCase() : null;
    const normalizedIso3166 = iso3166_2 ? iso3166_2.trim().toUpperCase() : null;
    const directMatch = ensureFeature(regionCache.features.find((feature)=>{
        const props = feature.properties;
        if (normalizedIso3166 && props.iso3166_2?.toUpperCase() === normalizedIso3166) {
            return true;
        }
        if (normalizedIso3166 && props.isoA3?.toUpperCase() === normalizedIso3166) {
            return true;
        }
        return false;
    }));
    if (directMatch) return directMatch;
    const fallback = ensureFeature(regionCache.features.find((feature)=>{
        const props = feature.properties;
        if (inCountry && props.isoA2?.toUpperCase() !== inCountry) {
            return false;
        }
        return true;
    }));
    return fallback;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/stationCacheHelpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$wofEnrichmentService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/location/wofEnrichmentService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$naturalEarthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/location/naturalEarthService.ts [app-client] (ecmascript)");
;
;
;
function resolveApiUrl(path) {
    if ("TURBOPACK compile-time truthy", 1) {
        return path;
    }
    //TURBOPACK unreachable
    ;
    const envBase = undefined;
    const fallbackBase = undefined;
    const base = undefined;
    const normalizedBase = undefined;
}
class RadioDiscoveryService {
    cache = new Map();
    meta = new Map();
    cacheExpiryMs = 5 * 60 * 1000;
    cacheWarmupPromise;
    hydrated = false;
    constructor(){
        this.cacheWarmupPromise = this.hydrateFromServerCache();
    }
    /**
   * Get ALL stations from server-side cache (JSON file)
   */ async getAllStations() {
        await this.cacheWarmupPromise;
        const cached = this.cache.get("all");
        if (cached) {
            return cached.data;
        }
        return this.getFallbackStations();
    }
    /**
   * Force refresh the server cache
   */ async refreshCache() {
        try {
            const response = await fetch(resolveApiUrl("/api/stations/refresh"), {
                method: "POST"
            });
            if (!response.ok) {
                throw new Error("Failed to trigger cache refresh");
            }
            await this.hydrateFromServerCache(true);
        } catch (error) {
            console.warn("Failed to refresh cache:", error);
        }
    }
    /**
   * Search radio stations from Radio Browser API
   */ async searchOnlineStations(query, limit = 50) {
        await this.cacheWarmupPromise;
        const cacheKey = `search:${query.toLowerCase()}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) {
            return cached.slice(0, limit);
        }
        const stations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchStationsInCache"])(this.getAllCachedStations(), query);
        this.setCache(cacheKey, stations);
        return stations.slice(0, limit);
    }
    /**
   * Get stations by country from Radio Browser API
   */ async getStationsByCountry(country, limit = 100) {
        await this.cacheWarmupPromise;
        const normalized = this.normalizeCountryKey(country);
        const cacheKey = `country:${normalized}`;
        const cached = this.getFromCache(cacheKey);
        const base = cached || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterStationsByCountry"])(this.getAllCachedStations(), normalized);
        this.setCache(cacheKey, base);
        return base.slice(0, limit);
    }
    /**
   * Get top stations globally with country-based distribution
   */ async getTopStations(limit = 5000) {
        await this.cacheWarmupPromise;
        const cacheKey = `top:${limit}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) {
            return cached;
        }
        const sorted = this.getAllCachedStations().slice().sort((a, b)=>(b.listeners || 0) - (a.listeners || 0));
        const result = sorted.slice(0, limit);
        this.setCache(cacheKey, result);
        return result;
    }
    /**
   * Load stations with geographic distribution for better global coverage
   */ async getGlobalStationsWithDistribution() {
        await this.cacheWarmupPromise;
        const cacheKey = "global_distributed";
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
        const distributed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distributeStationsByCountry"])(this.getAllCachedStations(), 5000);
        this.setCache(cacheKey, distributed);
        return distributed;
    }
    /**
   * Get stations within a geographic region
   */ async getStationsByRegion(bounds, limit = 500) {
        const cacheKey = `region:${bounds.north}:${bounds.south}:${bounds.east}:${bounds.west}:${limit}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached.slice(0, limit);
        try {
            // Radio Browser doesn't have direct geographic bounds API, so we'll get by popular countries in region
            const countriesInRegion = this.getCountriesInBounds(bounds);
            const allStations = [];
            for (const country of countriesInRegion){
                const countryStations = await this.getStationsByCountry(country, Math.floor(limit / countriesInRegion.length));
                allStations.push(...countryStations);
            }
            // Filter stations that are actually within bounds
            const stationsInBounds = allStations.filter((station)=>station.location.lat >= bounds.south && station.location.lat <= bounds.north && station.location.lng >= bounds.west && station.location.lng <= bounds.east);
            this.setCache(cacheKey, stationsInBounds);
            return stationsInBounds.slice(0, limit);
        } catch (error) {
            console.warn("Failed to fetch regional stations:", error);
            return [];
        }
    }
    /**
   * Get progressive stations based on zoom level
   */ async getProgressiveStations(zoomLevel, visibleRegion) {
        // Adjust station count based on zoom level
        const stationCount = Math.min(2000, Math.max(100, Math.floor(zoomLevel * 300)));
        if (visibleRegion && zoomLevel > 3) {
            // High zoom - get regional stations
            return this.getStationsByRegion(visibleRegion, stationCount);
        } else {
            // Low zoom - get global top stations
            return this.getTopStations(stationCount);
        }
    }
    /**
   * Get stations by tag/genre
   */ async getStationsByTag(tag, limit = 50) {
        const normalized = tag.trim().toLowerCase();
        const cacheKey = `tag:${normalized}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached.slice(0, limit);
        const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterStationsByTag"])(this.getAllCachedStations(), normalized);
        this.setCache(cacheKey, sorted);
        return sorted.slice(0, limit);
    }
    /**
   * Get stations by city from Radio Browser API
   */ async getStationsByCity(city, limit = 50) {
        const normalized = city.trim().toLowerCase();
        const cacheKey = `city:${normalized}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached.slice(0, limit);
        const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterStationsByCity"])(this.getAllCachedStations(), normalized);
        this.setCache(cacheKey, sorted);
        return sorted.slice(0, limit);
    }
    /**
   * Get available countries
   */ async getCountries() {
        await this.cacheWarmupPromise;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeCountries"])(this.getAllCachedStations());
    }
    /**
   * Get available tags/genres
   */ async getTags() {
        await this.cacheWarmupPromise;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeTags"])(this.getAllCachedStations());
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
                    countryCode: station.countrycode || undefined,
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
   */ wrap(data, source) {
        return {
            data,
            timestamp: Date.now(),
            source
        };
    }
    getAllCachedStations() {
        return this.cache.get("all")?.data || [];
    }
    getFromCache(key) {
        const cached = this.cache.get(key);
        if (!cached) return null;
        if (Date.now() - cached.timestamp > this.cacheExpiryMs) {
            this.cache.delete(key);
            return null;
        }
        return cached.data;
    }
    setCache(key, data, source = "file") {
        this.cache.set(key, this.wrap(data, source));
    }
    async hydrateFromServerCache(force = false) {
        if (this.hydrated && !force) return;
        const [countries, regions] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$naturalEarthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadNaturalEarthCountries"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$naturalEarthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadNaturalEarthRegions"])()
        ]);
        try {
            const response = await fetch(resolveApiUrl("/api/stations"));
            if (!response.ok) {
                throw new Error("Failed to fetch stations from cache API");
            }
            const payload = await response.json();
            const mappedStations = this.mapRadioBrowserStations(payload.stations || []);
            const stations = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$wofEnrichmentService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enrichStationsWithWof"])(mappedStations, countries, regions);
            this.setCache("all", stations, payload.cached ? "file" : "api");
            this.meta.set("all", {
                total: stations.length,
                version: payload.version ?? null,
                generatedAt: payload.timestamp ?? null
            });
            // Precompute indexes for quicker lookups
            this.indexCountries(stations);
            this.indexGenres(stations);
            this.indexCities(stations);
            this.hydrated = true;
        } catch (error) {
            console.warn("Failed to hydrate cache:", error);
            const fallback = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$location$2f$wofEnrichmentService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enrichStationsWithWof"])(this.getFallbackStations(), countries, regions);
            this.setCache("all", fallback, "fallback");
        }
    }
    indexCountries(stations) {
        const countryIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCountryIndex"])(stations);
        countryIndex.forEach((list, key)=>{
            this.setCache(`country:${key}`, list);
        });
    }
    indexGenres(stations) {
        const genreIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildGenreIndex"])(stations);
        genreIndex.forEach((list, key)=>{
            this.setCache(`genre:${key}`, list);
            this.setCache(`tag:${key}`, list);
        });
    }
    indexCities(stations) {
        const cityIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$stationCacheHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCityIndex"])(stations);
        cityIndex.forEach((list, key)=>{
            this.setCache(`city:${key}`, list);
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
    /**
   * Get countries that intersect with geographic bounds
   */ getCountriesInBounds(bounds) {
        // Simplified region to country mapping
        const allCountries = [
            "United States",
            "Canada",
            "Mexico",
            "Brazil",
            "Argentina",
            "Chile",
            "United Kingdom",
            "France",
            "Germany",
            "Italy",
            "Spain",
            "Netherlands",
            "Russia",
            "China",
            "Japan",
            "South Korea",
            "India",
            "Australia",
            "South Africa",
            "Egypt",
            "Nigeria",
            "Kenya"
        ];
        // For now, return all major countries. In a real implementation,
        // you'd have a proper geographic database
        return allCountries.slice(0, 8);
    }
    /**
   * Get fallback stations when API fails
   */ getFallbackStations() {
        // Return a small set of popular global stations as fallback
        return [
            {
                id: "fallback-bbc1",
                name: "BBC Radio 1",
                url: "http://stream.live.vc.bbcmedia.co.uk/bbc_radio_one",
                location: {
                    city: "London",
                    country: "United Kingdom",
                    lat: 51.5074,
                    lng: -0.1278
                },
                genre: "Pop",
                language: "English",
                listeners: 1000000,
                source: "curated"
            },
            {
                id: "fallback-npr",
                name: "NPR News",
                url: "https://npr-ice.streamguys1.com/live.mp3",
                location: {
                    city: "Washington DC",
                    country: "United States",
                    lat: 38.9072,
                    lng: -77.0369
                },
                genre: "News",
                language: "English",
                listeners: 500000,
                source: "curated"
            }
        ];
    }
    normalizeCountryKey(country) {
        return country.trim().toLowerCase();
    }
}
const radioDiscoveryService = new RadioDiscoveryService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/repositories/StationRepository.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationRepository",
    ()=>StationRepository,
    "stationRepository",
    ()=>stationRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioDiscoveryService.ts [app-client] (ecmascript)");
;
class StationRepository {
    cache = new Map();
    cacheTimeout = 5 * 60 * 1000;
    cacheTimestamps = new Map();
    async getStationsByRegion(region) {
        const cacheKey = `region:${region}`;
        if (this.isValidCache(cacheKey)) {
            return this.cache.get(cacheKey) || [];
        }
        try {
            // For better distribution, get diverse global stations
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getGlobalStationsWithDistribution();
            this.updateCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.error(`Failed to fetch stations for region ${region}:`, error);
            return this.cache.get(cacheKey) || [];
        }
    }
    async getGlobalStationsWithDistribution() {
        const cacheKey = 'global_distribution';
        if (this.isValidCache(cacheKey)) {
            return this.cache.get(cacheKey) || [];
        }
        try {
            // Use the new getAllStations method with IndexedDB caching
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getAllStations();
            this.updateCache(cacheKey, stations);
            console.log(`StationRepository: Loaded ${stations.length} stations`);
            return stations;
        } catch (error) {
            console.error('Failed to fetch all stations:', error);
            // Try cache first before falling back
            const cached = this.cache.get(cacheKey);
            if (cached) return cached;
            // Last resort fallback
            const fallback = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(5000);
            this.updateCache(cacheKey, fallback);
            return fallback;
        }
    }
    async getStationsByCountry(country) {
        const cacheKey = `country:${country}`;
        if (this.isValidCache(cacheKey)) {
            return this.cache.get(cacheKey) || [];
        }
        try {
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByCountry(country);
            this.updateCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.error(`Failed to fetch stations for country ${country}:`, error);
            return this.cache.get(cacheKey) || [];
        }
    }
    async getStationsByGenre(genre) {
        const cacheKey = `genre:${genre}`;
        if (this.isValidCache(cacheKey)) {
            return this.cache.get(cacheKey) || [];
        }
        try {
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByTag(genre);
            this.updateCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.error(`Failed to fetch stations for genre ${genre}:`, error);
            return this.cache.get(cacheKey) || [];
        }
    }
    async searchStations(query) {
        const cacheKey = `search:${query.toLowerCase()}`;
        if (this.isValidCache(cacheKey)) {
            return this.cache.get(cacheKey) || [];
        }
        try {
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].searchOnlineStations(query);
            this.updateCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.error(`Failed to search stations for query ${query}:`, error);
            return this.cache.get(cacheKey) || [];
        }
    }
    async getProgressiveStations(limit, offset) {
        const cacheKey = `progressive:${limit}:${offset}`;
        if (this.isValidCache(cacheKey)) {
            return this.cache.get(cacheKey) || [];
        }
        try {
            // Use zoomLevel calculation based on limit for progressive loading
            const zoomLevel = Math.max(1, Math.floor(limit / 100));
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getProgressiveStations(zoomLevel);
            // Apply offset and limit manually since the service doesn't support it directly
            const paginatedStations = stations.slice(offset, offset + limit);
            this.updateCache(cacheKey, paginatedStations);
            return paginatedStations;
        } catch (error) {
            console.error(`Failed to fetch progressive stations:`, error);
            return this.cache.get(cacheKey) || [];
        }
    }
    async getPopularStations(limit = 50) {
        const cacheKey = `popular:${limit}`;
        if (this.isValidCache(cacheKey)) {
            return this.cache.get(cacheKey) || [];
        }
        try {
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(limit);
            this.updateCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.error(`Failed to fetch popular stations:`, error);
            return this.cache.get(cacheKey) || [];
        }
    }
    /**
   * Clear cache for specific key or all cache
   */ clearCache(key) {
        if (key) {
            this.cache.delete(key);
            this.cacheTimestamps.delete(key);
        } else {
            this.cache.clear();
            this.cacheTimestamps.clear();
        }
    }
    /**
   * Get cache statistics for monitoring
   */ getCacheStats() {
        return {
            size: this.cache.size,
            keys: Array.from(this.cache.keys())
        };
    }
    isValidCache(key) {
        const timestamp = this.cacheTimestamps.get(key);
        if (!timestamp) return false;
        const now = Date.now();
        return now - timestamp < this.cacheTimeout;
    }
    updateCache(key, data) {
        this.cache.set(key, data);
        this.cacheTimestamps.set(key, Date.now());
    }
}
const stationRepository = new StationRepository();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/infrastructure/ServiceContainer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCommandInvoker",
    ()=>createCommandInvoker,
    "createGlobeEventBus",
    ()=>createGlobeEventBus,
    "createMarkerFactory",
    ()=>createMarkerFactory,
    "createStationLoadingUseCase",
    ()=>createStationLoadingUseCase,
    "createStationRepository",
    ()=>createStationRepository,
    "createStationSelectionUseCase",
    ()=>createStationSelectionUseCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$usecases$2f$StationUseCases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/usecases/StationUseCases.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$strategies$2f$MarkerStrategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/strategies/MarkerStrategy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$repositories$2f$StationRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/repositories/StationRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/events/GlobeEventBus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$commands$2f$GlobeCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/commands/GlobeCommands.ts [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Dependency Injection Container
 * Manages service instances and their dependencies using Singleton pattern
 * Implements Inversion of Control (IoC) principle
 */ class ServiceContainer {
    static instance;
    services = new Map();
    singletons = new Map();
    constructor(){
        this.registerServices();
    }
    static getInstance() {
        if (!ServiceContainer.instance) {
            ServiceContainer.instance = new ServiceContainer();
        }
        return ServiceContainer.instance;
    }
    registerServices() {
        // Register Repositories (Singleton)
        this.registerSingleton("StationRepository", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$repositories$2f$StationRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StationRepository"]());
        // Register Event Bus (Singleton)
        this.registerSingleton("GlobeEventBus", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobeEventBus"]());
        // Register Command Invoker (Singleton)
        this.registerSingleton("CommandInvoker", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$commands$2f$GlobeCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandInvoker"]());
        // Register Use Cases (Factory - new instance each time)
        this.register("StationLoadingUseCase", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$usecases$2f$StationUseCases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StationLoadingUseCase"](this.resolveSingleton("StationRepository"), this.resolveSingleton("GlobeEventBus")));
        this.register("StationSelectionUseCase", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$usecases$2f$StationUseCases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StationSelectionUseCase"](this.resolveSingleton("GlobeEventBus"), this.resolveSingleton("CommandInvoker")));
        // Register Factories (Factory - new instance each time)
        this.register("MarkerFactory", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$strategies$2f$MarkerStrategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerFactory"]());
    }
    /**
   * Register a factory function for transient services (new instance each time)
   */ register(key, factory) {
        this.services.set(key, factory);
    }
    /**
   * Register a factory function for singleton services (same instance always)
   */ registerSingleton(key, factory) {
        this.services.set(key, factory);
    }
    /**
   * Resolve a transient service (new instance each time)
   */ resolve(key) {
        const factory = this.services.get(key);
        if (!factory) {
            throw new Error(`Service ${key} not registered`);
        }
        return factory();
    }
    /**
   * Resolve a singleton service (cached instance)
   */ resolveSingleton(key) {
        // Check if already instantiated
        if (this.singletons.has(key)) {
            return this.singletons.get(key);
        }
        // Create and cache instance
        const factory = this.services.get(key);
        if (!factory) {
            throw new Error(`Service ${key} not registered`);
        }
        const instance = factory();
        this.singletons.set(key, instance);
        return instance;
    }
    /**
   * Clear all singleton instances (useful for testing)
   */ clearSingletons() {
        this.singletons.clear();
    }
    /**
   * Get service registry information
   */ getServiceInfo() {
        return {
            registeredServices: Array.from(this.services.keys()),
            activeSingletons: Array.from(this.singletons.keys()),
            totalServices: this.services.size
        };
    }
    // Legacy methods for backward compatibility
    get(key) {
        if (this.services.has(key)) {
            return this.resolve(key);
        }
        throw new Error(`Service ${key} not found`);
    }
    // Convenience methods for common services
    getStationLoadingUseCase() {
        return this.resolve("StationLoadingUseCase");
    }
    getStationSelectionUseCase() {
        return this.resolve("StationSelectionUseCase");
    }
    getMarkerFactory() {
        return this.resolve("MarkerFactory");
    }
    getStationRepository() {
        return this.resolveSingleton("StationRepository");
    }
    getGlobeEventBus() {
        return this.resolveSingleton("GlobeEventBus");
    }
    getCommandInvoker() {
        return this.resolveSingleton("CommandInvoker");
    }
}
const createStationLoadingUseCase = ()=>ServiceContainer.getInstance().getStationLoadingUseCase();
const createStationSelectionUseCase = ()=>ServiceContainer.getInstance().getStationSelectionUseCase();
const createMarkerFactory = ()=>ServiceContainer.getInstance().getMarkerFactory();
const createStationRepository = ()=>ServiceContainer.getInstance().getStationRepository();
const createGlobeEventBus = ()=>{
    const eventBus = ServiceContainer.getInstance().getGlobeEventBus();
    console.log('ServiceContainer: Creating/returning GlobeEventBus instance:', eventBus);
    return eventBus;
};
const createCommandInvoker = ()=>ServiceContainer.getInstance().getCommandInvoker();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ClusteredStationMarkers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusteredStationMarkers",
    ()=>ClusteredStationMarkers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/infrastructure/ServiceContainer.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ClusteredStationMarkers() {
    _s();
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    // Use cases (clean architecture) - memoized to prevent infinite loops
    const stationLoadingUseCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClusteredStationMarkers.useMemo[stationLoadingUseCase]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStationLoadingUseCase"])()
    }["ClusteredStationMarkers.useMemo[stationLoadingUseCase]"], []);
    const stationSelectionUseCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClusteredStationMarkers.useMemo[stationSelectionUseCase]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStationSelectionUseCase"])()
    }["ClusteredStationMarkers.useMemo[stationSelectionUseCase]"], []);
    const markerFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClusteredStationMarkers.useMemo[markerFactory]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMarkerFactory"])()
    }["ClusteredStationMarkers.useMemo[markerFactory]"], []);
    // Local state
    const [markers, setMarkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hoveredMarkerId, setHoveredMarkerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Calculate camera distance and zoom level - throttled to prevent constant updates
    const [cameraDistance, setCameraDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [zoomLevel, setZoomLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Throttled camera distance calculation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClusteredStationMarkers.useEffect": ()=>{
            const updateCameraDistance = {
                "ClusteredStationMarkers.useEffect.updateCameraDistance": ()=>{
                    const distance = camera.position.length();
                    const zoom = Math.max(1, 8 - distance);
                    const roundedZoom = Math.round(zoom * 2) / 2; // Round to nearest 0.5
                    setCameraDistance(distance);
                    if (Math.abs(roundedZoom - zoomLevel) > 0.25) {
                        setZoomLevel(roundedZoom);
                    }
                }
            }["ClusteredStationMarkers.useEffect.updateCameraDistance"];
            const interval = setInterval(updateCameraDistance, 500); // Update every 500ms
            return ({
                "ClusteredStationMarkers.useEffect": ()=>clearInterval(interval)
            })["ClusteredStationMarkers.useEffect"];
        }
    }["ClusteredStationMarkers.useEffect"], [
        camera,
        zoomLevel
    ]);
    // Load markers based on zoom level
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClusteredStationMarkers.useEffect": ()=>{
            const loadMarkers = {
                "ClusteredStationMarkers.useEffect.loadMarkers": async ()=>{
                    setIsLoading(true);
                    try {
                        const newMarkers = await stationLoadingUseCase.loadStationsForView(zoomLevel);
                        setMarkers(newMarkers);
                    } catch (error) {
                        console.error('Failed to load markers:', error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["ClusteredStationMarkers.useEffect.loadMarkers"];
            loadMarkers();
        }
    }["ClusteredStationMarkers.useEffect"], [
        zoomLevel,
        stationLoadingUseCase
    ]);
    // Handle marker interactions
    const handleMarkerClick = (markerData, event)=>{
        event.stopPropagation();
        const { strategy } = markerFactory.createMarker(markerData, cameraDistance);
        strategy.handleInteraction(markerData, 'click');
    };
    const handleMarkerHover = (markerId)=>{
        setHoveredMarkerId(markerId);
    };
    // Update marker facing direction
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ClusteredStationMarkers.useFrame": ()=>{
            if (!markersRef.current) return;
            markersRef.current.children.forEach({
                "ClusteredStationMarkers.useFrame": (marker)=>{
                    if (marker.children.length > 0) {
                        marker.children.forEach({
                            "ClusteredStationMarkers.useFrame": (child)=>{
                                if (child.type === 'Mesh') {
                                    child.lookAt(camera.position);
                                }
                            }
                        }["ClusteredStationMarkers.useFrame"]);
                    }
                }
            }["ClusteredStationMarkers.useFrame"]);
        }
    }["ClusteredStationMarkers.useFrame"]);
    // Filter and style markers
    const visibleMarkers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClusteredStationMarkers.useMemo[visibleMarkers]": ()=>{
            return markers.filter({
                "ClusteredStationMarkers.useMemo[visibleMarkers]": (marker)=>markerFactory.shouldShowMarker(marker, zoomLevel)
            }["ClusteredStationMarkers.useMemo[visibleMarkers]"]).map({
                "ClusteredStationMarkers.useMemo[visibleMarkers]": (marker)=>({
                        data: marker,
                        ...markerFactory.createMarker(marker, cameraDistance)
                    })
            }["ClusteredStationMarkers.useMemo[visibleMarkers]"]);
        }
    }["ClusteredStationMarkers.useMemo[visibleMarkers]"], [
        markers,
        zoomLevel,
        cameraDistance,
        markerFactory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: markersRef,
        children: [
            visibleMarkers.map(({ data, style, strategy })=>{
                const isHovered = hoveredMarkerId === data.id;
                const stationCount = data.stations.length;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: data.position,
                    onClick: (e)=>handleMarkerClick(data, e),
                    onPointerOver: (e)=>{
                        e.stopPropagation();
                        handleMarkerHover(data.id);
                        document.body.style.cursor = "pointer";
                    },
                    onPointerOut: ()=>{
                        handleMarkerHover(null);
                        document.body.style.cursor = "auto";
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                                    args: [
                                        style.size,
                                        32
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: style.color,
                                    transparent: true,
                                    opacity: style.opacity
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                                    args: [
                                        style.size * 0.6,
                                        16
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: "#ffffff",
                                    transparent: true,
                                    opacity: 0.8
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        stationCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                    position: [
                                        0,
                                        0,
                                        0.001
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                                            args: [
                                                style.size * 0.35,
                                                16
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                            color: style.color,
                                            transparent: true,
                                            opacity: 1
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    position: [
                                        0,
                                        0,
                                        0.002
                                    ],
                                    fontSize: style.size * 0.4,
                                    color: "white",
                                    anchorX: "center",
                                    anchorY: "middle",
                                    children: stationCount
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        style.glowEffect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                                    args: [
                                        style.size * 1.2,
                                        style.size * 1.5,
                                        32
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: style.color,
                                    transparent: true,
                                    opacity: 0.3,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                        }, this),
                        isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                                    args: [
                                        style.size * 1.1,
                                        style.size * 1.3,
                                        32
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: style.color,
                                    transparent: true,
                                    opacity: 0.5,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, this),
                        style.hasLabel && style.labelText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            position: [
                                0,
                                -style.size * 1.8,
                                0
                            ],
                            fontSize: style.size * 0.3,
                            color: "rgba(255, 255, 255, 0.9)",
                            anchorX: "center",
                            anchorY: "middle",
                            maxWidth: 2,
                            textAlign: "center",
                            children: style.labelText
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 194,
                            columnNumber: 15
                        }, this)
                    ]
                }, data.id, true, {
                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this);
            }),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    3,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.05,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#00d4ff"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(ClusteredStationMarkers, "TY4tttrkVUsoYYAkOZkMDmt/Wxs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ClusteredStationMarkers;
var _c;
__turbopack_context__.k.register(_c, "ClusteredStationMarkers");
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
        playlist: [],
        playlistIndex: -1,
        currentRegion: null,
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
        clearMarkers: ()=>{
            set({
                markers: []
            });
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
        },
        // Playlist actions
        setPlaylist: (stations, region)=>{
            set({
                playlist: stations,
                playlistIndex: stations.length > 0 ? 0 : -1,
                currentRegion: region ?? null
            });
        },
        nextStation: ()=>{
            const { playlist, playlistIndex, selectStation } = get();
            if (playlist.length === 0) return null;
            const nextIndex = (playlistIndex + 1) % playlist.length;
            const nextStation = playlist[nextIndex];
            set({
                playlistIndex: nextIndex
            });
            selectStation(nextStation);
            return nextStation;
        },
        previousStation: ()=>{
            const { playlist, playlistIndex, selectStation } = get();
            if (playlist.length === 0) return null;
            const prevIndex = playlistIndex <= 0 ? playlist.length - 1 : playlistIndex - 1;
            const prevStation = playlist[prevIndex];
            set({
                playlistIndex: prevIndex
            });
            selectStation(prevStation);
            return prevStation;
        },
        setPlaylistIndex: (index)=>{
            const { playlist, selectStation } = get();
            if (index >= 0 && index < playlist.length) {
                set({
                    playlistIndex: index
                });
                selectStation(playlist[index]);
            }
        },
        buildRegionPlaylist: ()=>{
            const { selectedStation, markers, setPlaylist } = get();
            if (!selectedStation) return;
            const region = selectedStation.location.country;
            const regionStations = markers.filter((m)=>m.station.location.country === region).map((m)=>m.station).sort((a, b)=>(b.listeners || 0) - (a.listeners || 0));
            const currentIndex = regionStations.findIndex((s)=>s.id === selectedStation.id);
            set({
                playlist: regionStations,
                playlistIndex: currentIndex >= 0 ? currentIndex : 0,
                currentRegion: region
            });
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
"[project]/apps/web/src/components/GlobeControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobeControls",
    ()=>GlobeControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GlobeControls() {
    _s();
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const { isAutoRotating, setCameraPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect mobile device
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobeControls.useEffect": ()=>{
            const checkIfMobile = {
                "GlobeControls.useEffect.checkIfMobile": ()=>{
                    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
                }
            }["GlobeControls.useEffect.checkIfMobile"];
            checkIfMobile();
            window.addEventListener("resize", checkIfMobile);
            return ({
                "GlobeControls.useEffect": ()=>window.removeEventListener("resize", checkIfMobile)
            })["GlobeControls.useEffect"];
        }
    }["GlobeControls.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "GlobeControls.useFrame": ()=>{
            if (controlsRef.current) {
                // Update camera position in store
                setCameraPosition([
                    camera.position.x,
                    camera.position.y,
                    camera.position.z
                ]);
            }
        }
    }["GlobeControls.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
        ref: controlsRef,
        enablePan: false,
        enableZoom: true,
        enableRotate: true,
        autoRotate: isAutoRotating,
        autoRotateSpeed: isMobile ? 0.3 : 0.5,
        minDistance: isMobile ? 2.5 : 1.5,
        maxDistance: isMobile ? 8 : 5,
        minPolarAngle: Math.PI / 6,
        maxPolarAngle: Math.PI - Math.PI / 6,
        zoomSpeed: isMobile ? 1.2 : 0.8,
        rotateSpeed: isMobile ? 0.8 : 0.5,
        enableDamping: true,
        dampingFactor: isMobile ? 0.1 : 0.05,
        touches: {
            ONE: isMobile ? 2 : 2,
            TWO: isMobile ? 1 : 1
        },
        mouseButtons: {
            LEFT: 2,
            MIDDLE: 1,
            RIGHT: undefined
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/GlobeControls.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(GlobeControls, "8Aqkga00n6ea2B2MlxeFxB502hQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = GlobeControls;
var _c;
__turbopack_context__.k.register(_c, "GlobeControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/FallbackMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FallbackMap",
    ()=>FallbackMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FallbackMap({ stations = [] }) {
    _s();
    const { selectedStation, setSelectedStation, setAudioSource } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const [mapError, setMapError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStationClick = (station)=>{
        setSelectedStation(station);
        if (station.streamUrl) {
            setAudioSource(station.streamUrl);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-4xl h-96 bg-blue-800/30 rounded-lg border border-blue-600/50 shadow-2xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-green-900/20 via-brown-800/20 to-green-900/20"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-16 left-16 w-24 h-16 bg-green-700/60 rounded-lg transform rotate-12",
                            title: "North America"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-20 left-40 w-16 h-20 bg-green-700/60 rounded-lg transform -rotate-6",
                            title: "South America"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-12 left-64 w-32 h-24 bg-green-700/60 rounded-lg transform rotate-3",
                            title: "Europe/Africa"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-8 right-32 w-28 h-20 bg-green-700/60 rounded-lg transform -rotate-12",
                            title: "Asia"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-16 right-16 w-16 h-12 bg-green-700/60 rounded-lg transform rotate-45",
                            title: "Australia"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        stations.map((station, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `
                absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-200 z-10
                ${selectedStation?.name === station.name ? 'bg-red-500 shadow-lg shadow-red-500/50 scale-150' : 'bg-yellow-400 hover:bg-yellow-300 hover:scale-125'}
              `,
                                style: {
                                    left: `${(station.longitude + 180) / 360 * 100}%`,
                                    top: `${(90 - station.latitude) / 180 * 100}%`
                                },
                                onClick: ()=>handleStationClick(station),
                                title: `${station.name} - ${station.country}`
                            }, `${station.name}-${index}`, false, {
                                fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 left-4 text-white/80 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-yellow-400 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Radio Stations"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-red-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Currently Playing"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            selectedStation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm max-w-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-2",
                        children: selectedStation.name
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 text-sm mb-1",
                        children: selectedStation.country
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    selectedStation.genre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-300 text-sm mb-2",
                        children: selectedStation.genre
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this),
                    selectedStation.streamUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors",
                        onClick: ()=>setAudioSource(selectedStation.streamUrl),
                        children: "Play Station"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 bg-black/60 text-white p-3 rounded-lg backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold mb-2",
                        children: "🗺️ 2D Map Mode"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-300",
                        children: "Click on yellow dots to select radio stations"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/FallbackMap.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(FallbackMap, "0pTEEc8XAh6k+dD36a+QDxesf0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"]
    ];
});
_c = FallbackMap;
var _c;
__turbopack_context__.k.register(_c, "FallbackMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Globe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>Globe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Earth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Earth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ClusteredStationMarkers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ClusteredStationMarkers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$GlobeControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/GlobeControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FallbackMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/FallbackMap.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// WebGL capability detection
function detectWebGLCapability() {
    try {
        const canvas = document.createElement('canvas');
        // Check for WebGL2
        const gl2 = canvas.getContext('webgl2');
        if (gl2) {
            gl2.getExtension('WEBGL_lose_context')?.loseContext();
            return 'webgl2';
        }
        // Check for WebGL1
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            gl.getExtension('WEBGL_lose_context')?.loseContext();
            return 'webgl';
        }
        return 'none';
    } catch (error) {
        console.error('WebGL detection failed:', error);
        return 'none';
    }
}
// Detect browser for specific messaging
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    const isEdge = userAgent.includes('Edg/');
    const isIE = userAgent.includes('MSIE') || userAgent.includes('Trident/');
    const isChrome = userAgent.includes('Chrome/') && !isEdge;
    const isFirefox = userAgent.includes('Firefox/');
    const isSafari = userAgent.includes('Safari/') && !isChrome && !isEdge;
    return {
        isEdge,
        isIE,
        isChrome,
        isFirefox,
        isSafari
    };
}
// Fallback component when WebGL is not available
function WebGLFallback() {
    _s();
    const [showMap, setShowMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { stations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const browserInfo = getBrowserInfo();
    if (showMap) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FallbackMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FallbackMap"], {
            stations: stations
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Globe.tsx",
            lineNumber: 57,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 to-black flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-white p-8 bg-black/20 rounded-lg backdrop-blur-sm max-w-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "🌍"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "3D Globe Unavailable"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300 mb-6",
                    children: browserInfo.isEdge ? "Microsoft Edge requires hardware acceleration to be enabled for 3D graphics." : "Your browser or device doesn't support WebGL, which is required for the 3D globe."
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg mb-6 transition-colors",
                    onClick: ()=>setShowMap(true),
                    children: "Use 2D Map Instead"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2",
                            children: browserInfo.isEdge ? "To enable 3D mode in Edge:" : "To enable 3D mode, try:"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside space-y-1 text-left",
                            children: browserInfo.isEdge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Type 'edge://settings/system' in the address bar"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: 'Enable "Use hardware acceleration when available"'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Restart Edge browser"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Alternatively, try Chrome or Firefox"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Enabling hardware acceleration in your browser"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Updating your browser to the latest version"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Using a different browser (Chrome, Firefox, Safari)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Updating your graphics drivers"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/Globe.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/Globe.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(WebGLFallback, "6yvhMgBeV194RcQfXEpIUqBJq78=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"]
    ];
});
_c = WebGLFallback;
class WebGLErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        // Check if it's a WebGL-related error
        if (error.message.includes('WebGL') || error.message.includes('context')) {
            return {
                hasError: true
            };
        }
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('WebGL Error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebGLFallback, {}, void 0, false, {
                fileName: "[project]/apps/web/src/components/Globe.tsx",
                lineNumber: 135,
                columnNumber: 14
            }, this);
        }
        return this.props.children;
    }
}
function Globe() {
    _s1();
    const [webglSupport, setWebglSupport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('checking');
    const [showFallbackMap, setShowFallbackMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe.useEffect": ()=>{
            // Delay WebGL detection to avoid SSR issues
            const timer = setTimeout({
                "Globe.useEffect.timer": ()=>{
                    setWebglSupport(detectWebGLCapability());
                }
            }["Globe.useEffect.timer"], 100);
            return ({
                "Globe.useEffect": ()=>clearTimeout(timer)
            })["Globe.useEffect"];
        }
    }["Globe.useEffect"], []);
    if (webglSupport === 'checking') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-screen relative overflow-hidden bg-black flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-xl",
                children: "Loading Globe..."
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Globe.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Globe.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this);
    }
    if (showFallbackMap) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FallbackMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FallbackMap"], {
            stations: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"].getState().stations
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Globe.tsx",
            lineNumber: 164,
            columnNumber: 12
        }, this);
    }
    if (webglSupport === 'none') {
        const browserInfo = getBrowserInfo();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 to-black flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-white p-8 bg-black/20 rounded-lg backdrop-blur-sm max-w-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "🌍"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "3D Globe Unavailable"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 mb-6",
                        children: browserInfo.isEdge ? "Microsoft Edge requires hardware acceleration to be enabled for 3D graphics." : "Your browser or device doesn't support WebGL, which is required for the 3D globe."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2",
                                onClick: ()=>window.location.reload(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🔄"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Retry 3D"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/Globe.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-green-600 hover:green-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2",
                                onClick: ()=>setShowFallbackMap(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🗺️"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Use 2D Map"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/Globe.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: browserInfo.isEdge ? "To enable 3D mode in Edge:" : "To enable 3D mode, try:"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Globe.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc list-inside space-y-1 text-left",
                                children: browserInfo.isEdge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Copy this URL: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-gray-800 px-1 rounded",
                                                    children: "edge://settings/system"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: 'Enable "Use hardware acceleration when available"'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 206,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Restart Edge browser completely"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: 'Return here and click "Retry 3D"'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Alternative: Try Chrome or Firefox instead"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Enabling hardware acceleration in your browser"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Updating your browser to the latest version"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Using a different browser (Chrome, Firefox, Safari)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Updating your graphics drivers"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Globe.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Globe.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/Globe.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen relative overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebGLErrorBoundary, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    camera: {
                        position: [
                            0,
                            0,
                            4
                        ],
                        fov: 60
                    },
                    gl: {
                        antialias: webglSupport === 'webgl2',
                        alpha: false,
                        powerPreference: "default",
                        failIfMajorPerformanceCaveat: false,
                        preserveDrawingBuffer: false,
                        stencil: false,
                        depth: true,
                        premultipliedAlpha: false,
                        logarithmicDepthBuffer: false // Disable for better compatibility
                    },
                    onCreated: ({ gl })=>{
                        gl.setClearColor("#000000", 1);
                        // Get the actual WebGL context from the Three.js renderer
                        const context = gl.getContext();
                        console.log('WebGL Context Info:', {
                            webglSupport: webglSupport,
                            vendor: context.getParameter(context.VENDOR),
                            renderer: context.getParameter(context.RENDERER),
                            version: context.getParameter(context.VERSION),
                            maxTextureSize: context.getParameter(context.MAX_TEXTURE_SIZE),
                            maxVertexAttribs: context.getParameter(context.MAX_VERTEX_ATTRIBS)
                        });
                    },
                    onError: (error)=>{
                        console.error('Canvas Error:', error);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                            intensity: 0.6
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                            position: [
                                10,
                                10,
                                10
                            ],
                            intensity: 1.5
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                            position: [
                                -10,
                                -10,
                                5
                            ],
                            intensity: 0.8,
                            color: "#ffffff"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: null,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                                    radius: 300,
                                    depth: 60,
                                    count: webglSupport === 'webgl2' ? 20000 : 10000,
                                    factor: 7
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Earth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Earth"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ClusteredStationMarkers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClusteredStationMarkers"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$GlobeControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobeControls"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/Globe.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/Globe.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Globe.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 text-white z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-2",
                        children: "Radio Globe"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-75",
                        children: "Explore radio stations around the world"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Globe.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Globe.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s1(Globe, "XN8l2IZp1SVvXOJgR2Y4Qb17MDU=");
_c1 = Globe;
var _c, _c1;
__turbopack_context__.k.register(_c, "WebGLFallback");
__turbopack_context__.k.register(_c1, "Globe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/utils/streamValidator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stream URL Validator - Helps identify and test radio stream URLs
 */ __turbopack_context__.s([
    "StreamValidator",
    ()=>StreamValidator,
    "testCurrentStations",
    ()=>testCurrentStations
]);
class StreamValidator {
    static TIMEOUT_MS = 5000;
    static VALID_CONTENT_TYPES = [
        'audio/mpeg',
        'audio/mp3',
        'audio/aac',
        'audio/ogg',
        'audio/x-mpegurl',
        'application/ogg',
        'application/vnd.apple.mpegurl'
    ];
    /**
   * Quick validation of URL format
   */ static isValidUrlFormat(url) {
        try {
            const urlObj = new URL(url);
            return [
                'http:',
                'https:'
            ].includes(urlObj.protocol) && !url.includes('localhost') && !url.includes('127.0.0.1') && urlObj.hostname.length > 0;
        } catch  {
            return false;
        }
    }
    /**
   * Test if a stream URL is accessible (HEAD request)
   */ static async testStreamUrl(url) {
        const result = {
            url,
            isValid: false,
            accessible: false
        };
        if (!this.isValidUrlFormat(url)) {
            result.error = 'Invalid URL format';
            return result;
        }
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), this.TIMEOUT_MS);
            const response = await fetch(url, {
                method: 'HEAD',
                signal: controller.signal,
                mode: 'cors',
                cache: 'no-cache'
            });
            clearTimeout(timeoutId);
            result.httpStatus = response.status;
            result.contentType = response.headers.get('content-type') || undefined;
            result.accessible = response.ok;
            if (response.ok) {
                const contentType = result.contentType?.toLowerCase();
                result.isValid = !contentType || this.VALID_CONTENT_TYPES.some((type)=>contentType.includes(type.toLowerCase()));
                if (!result.isValid && contentType) {
                    result.error = `Unsupported content type: ${contentType}`;
                } else {
                    result.isValid = true;
                }
            } else {
                result.error = `HTTP ${response.status}: ${response.statusText}`;
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                result.error = 'Request timeout';
            } else if (error.name === 'TypeError' && error.message.includes('CORS')) {
                result.error = 'CORS policy blocked';
            } else {
                result.error = error.message || 'Network error';
            }
        }
        return result;
    }
    /**
   * Validate a station's stream URLs
   */ static async validateStation(station) {
        console.log(`🔍 Validating station: ${station.name}`);
        const result = await this.testStreamUrl(station.url);
        if (result.isValid) {
            console.log(`✅ ${station.name}: Valid stream`);
        } else {
            console.warn(`❌ ${station.name}: ${result.error || 'Invalid stream'}`);
        }
        return result;
    }
    /**
   * Batch validate multiple stations
   */ static async validateStations(stations, maxConcurrent = 5) {
        const results = new Map();
        // Process stations in batches to avoid overwhelming the browser
        for(let i = 0; i < stations.length; i += maxConcurrent){
            const batch = stations.slice(i, i + maxConcurrent);
            const batchPromises = batch.map(async (station)=>{
                const result = await this.validateStation(station);
                return {
                    station,
                    result
                };
            });
            const batchResults = await Promise.all(batchPromises);
            batchResults.forEach(({ station, result })=>{
                results.set(station.id, result);
            });
            // Small delay between batches
            if (i + maxConcurrent < stations.length) {
                await new Promise((resolve)=>setTimeout(resolve, 100));
            }
        }
        return results;
    }
    /**
   * Get working fallback URLs for a failed station
   */ static getGenericFallbackUrls(genre) {
        const genericFallbacks = [
            // SomaFM - Very reliable
            'https://ice1.somafm.com/groovesalad-256-mp3',
            'https://ice1.somafm.com/dronezone-256-mp3',
            'https://ice1.somafm.com/deepspaceone-128-mp3',
            // Radio Swiss - Reliable European streams
            'https://stream.srg-ssr.ch/m/rsc_de/mp3_128',
            'https://stream.srg-ssr.ch/m/rsp/mp3_128',
            // Other reliable streams
            'https://streams.radiomast.io/7e59e0b8-5d34-4bb6-8bb2-b0601db043a8',
            'https://stream.radiojar.com/4wqre78phm8uv'
        ];
        // Genre-specific fallbacks
        const genreMap = {
            'Ambient': [
                'https://ice1.somafm.com/groovesalad-256-mp3',
                'https://ice1.somafm.com/dronezone-256-mp3'
            ],
            'Electronic': [
                'https://ice1.somafm.com/beatblender-128-mp3',
                'https://ice1.somafm.com/digitalis-128-mp3'
            ],
            'Classical': [
                'https://stream.srg-ssr.ch/m/rsc_de/mp3_128'
            ],
            'Jazz': [
                'https://ice1.somafm.com/jazzgroove-256-mp3'
            ]
        };
        if (genre && genreMap[genre]) {
            return [
                ...genreMap[genre],
                ...genericFallbacks
            ];
        }
        return genericFallbacks;
    }
}
const testCurrentStations = async (stations)=>{
    console.log('🧪 Testing radio stations...');
    const results = await StreamValidator.validateStations(stations);
    const valid = Array.from(results.values()).filter((r)=>r.isValid).length;
    const total = results.size;
    console.log(`📊 Stream validation complete: ${valid}/${total} stations working`);
    // Log problematic stations
    const problematic = Array.from(results.entries()).filter(([, result])=>!result.isValid).slice(0, 10); // Limit output
    if (problematic.length > 0) {
        console.group('❌ Problematic stations:');
        problematic.forEach(([stationId, result])=>{
            console.log(`${stationId}: ${result.error}`);
        });
        console.groupEnd();
    }
    return results;
};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$streamValidator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/streamValidator.ts [app-client] (ecmascript)");
;
class AudioService {
    audio = null;
    state = "idle";
    config;
    listeners = {};
    retryCount = 0;
    currentStation = null;
    currentUrlIndex = 0;
    lastTimeUpdate = 0;
    TIME_UPDATE_THROTTLE = 100;
    availableUrls = [];
    constructor(config = {}){
        this.config = {
            volume: 0.7,
            crossOrigin: "anonymous",
            preload: "none",
            retryAttempts: 3,
            retryDelay: 2000,
            enableFallbackUrls: true,
            fallbackUrls: [
                // Fallback stream URLs for when primary fails
                'https://streams.radiomast.io/7e59e0b8-5d34-4bb6-8bb2-b0601db043a8',
                'https://stream.radiojar.com/4wqre78phm8uv',
                'https://streams.live365.com/a17297'
            ],
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
        console.warn(`Audio error: ${errorMessage}`);
        // Try next URL if available
        if (this.tryNextUrl()) {
            return; // Don't report error yet, trying fallback
        }
        // Attempt retry with current URL if configured
        if (this.retryCount < this.config.retryAttempts) {
            this.scheduleRetry();
        } else {
            // All retries exhausted, report final error
            this.listeners.error?.(this.getFinalErrorMessage());
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
    tryNextUrl() {
        if (!this.config.enableFallbackUrls || !this.availableUrls.length) {
            return false;
        }
        this.currentUrlIndex++;
        if (this.currentUrlIndex >= this.availableUrls.length) {
            return false; // No more URLs to try
        }
        const nextUrl = this.availableUrls[this.currentUrlIndex];
        console.log(`Trying fallback URL (${this.currentUrlIndex + 1}/${this.availableUrls.length}): ${nextUrl}`);
        if (this.audio) {
            this.audio.src = nextUrl;
            this.retryCount = 0; // Reset retry count for new URL
            this.audio.load();
        }
        return true;
    }
    isValidStreamUrl(url) {
        try {
            const urlObj = new URL(url);
            return [
                'http:',
                'https:'
            ].includes(urlObj.protocol) && !url.includes('localhost') && !url.includes('127.0.0.1');
        } catch  {
            return false;
        }
    }
    buildUrlList(station) {
        const urls = [];
        // Add primary station URL if valid
        if (station.url && this.isValidStreamUrl(station.url)) {
            urls.push(station.url);
        }
        // Add fallback URLs if enabled
        if (this.config.enableFallbackUrls) {
            // Get genre-specific fallbacks first
            const genreFallbacks = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$streamValidator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamValidator"].getGenericFallbackUrls(station.genre);
            urls.push(...genreFallbacks.filter((url)=>this.isValidStreamUrl(url)));
            // Add configured fallbacks
            urls.push(...this.config.fallbackUrls.filter((url)=>this.isValidStreamUrl(url)));
        }
        // Remove duplicates
        return urls.filter((url, index, self)=>self.indexOf(url) === index);
    }
    getFinalErrorMessage() {
        const baseMessage = this.getErrorMessage();
        const urlCount = this.availableUrls.length;
        if (urlCount > 1) {
            return `${baseMessage} (tried ${urlCount} different sources)`;
        }
        return `${baseMessage}. This station may be temporarily unavailable.`;
    }
    scheduleRetry() {
        setTimeout(()=>{
            if (this.audio && this.availableUrls.length > 0) {
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
        this.currentUrlIndex = 0;
        // Build list of URLs to try
        if (streamUrl) {
            this.availableUrls = [
                streamUrl
            ];
        } else {
            this.availableUrls = this.buildUrlList(station);
        }
        if (this.availableUrls.length === 0) {
            this.listeners.error?.('No valid stream URLs available for this station');
            return;
        }
        const primaryUrl = this.availableUrls[0];
        console.log(`Loading station: ${station.name} with ${this.availableUrls.length} URLs available`);
        if (this.audio.src !== primaryUrl) {
            this.audio.src = primaryUrl;
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
    allCachedStations = [];
    cacheLoaded = false;
    /**
   * Load all stations from cache (once per session)
   */ async ensureCacheLoaded() {
        if (this.cacheLoaded) return;
        try {
            this.allCachedStations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getAllStations();
            this.cacheLoaded = true;
            console.log(`Loaded ${this.allCachedStations.length} stations into search cache`);
        } catch (error) {
            console.warn('Failed to load station cache:', error);
            this.allCachedStations = [];
        }
    }
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
   * Enhanced search that searches ALL cached stations (fast, comprehensive)
   */ async searchStations(query, includeOnline = true) {
        await this.ensureCacheLoaded();
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return [];
        // Search across ALL cached stations (fast in-memory search)
        const results = this.allCachedStations.filter((station)=>station.name.toLowerCase().includes(searchTerm) || station.location?.country?.toLowerCase().includes(searchTerm) || station.location?.city?.toLowerCase().includes(searchTerm) || station.genre?.toLowerCase().includes(searchTerm) || station.language?.toLowerCase().includes(searchTerm) || station.description && station.description.toLowerCase().includes(searchTerm));
        // Sort by relevance: exact matches first, then by listeners/popularity
        const sorted = results.sort((a, b)=>{
            const aExact = a.name.toLowerCase() === searchTerm;
            const bExact = b.name.toLowerCase() === searchTerm;
            if (aExact && !bExact) return -1;
            if (!aExact && bExact) return 1;
            return (b.listeners || 0) - (a.listeners || 0);
        });
        return sorted.slice(0, 100); // Return top 100 matches
    }
    /**
   * Search only local curated stations
   */ searchLocalStations(query) {
        const searchTerm = query.toLowerCase();
        return this.stations.filter((station)=>station.name.toLowerCase().includes(searchTerm) || station.location.city.toLowerCase().includes(searchTerm) || station.location.country.toLowerCase().includes(searchTerm) || station.genre.toLowerCase().includes(searchTerm) || station.language.toLowerCase().includes(searchTerm) || station.description && station.description.toLowerCase().includes(searchTerm));
    }
    /**
   * Enhanced country search that works with comprehensive cached data
   */ async getStationsByCountry(country, includeOnline = true) {
        await this.ensureCacheLoaded();
        const countryLower = country.trim().toLowerCase();
        const normalizedCode = this.getCountryCode(countryLower) || (countryLower.length > 0 && countryLower.length <= 3 ? countryLower.toUpperCase() : null);
        const normalizedCodeLower = normalizedCode?.toLowerCase() || null;
        const countryStations = this.allCachedStations.filter((station)=>{
            const name = station.location?.country?.toLowerCase() || "";
            const code = station.location?.countryCode?.toLowerCase() || "";
            if (normalizedCodeLower && code === normalizedCodeLower) {
                return true;
            }
            if (name === countryLower) {
                return true;
            }
            // Support partial matches while avoiding overly broad contains() matches
            return !normalizedCodeLower && name.startsWith(countryLower);
        });
        // Sort by popularity (listeners/clicks)
        const sorted = countryStations.sort((a, b)=>(b.listeners || 0) - (a.listeners || 0));
        console.log(`Found ${sorted.length} stations for country: ${country}`);
        return sorted.slice(0, 100); // Return top 100
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
   * Get stations by genre from cached data (fast search)
   */ async getStationsByGenre(genre, includeOnline = true) {
        await this.ensureCacheLoaded();
        const genreLower = genre.toLowerCase();
        const genreStations = this.allCachedStations.filter((station)=>station.genre?.toLowerCase().includes(genreLower) || station.tags?.some((tag)=>tag.toLowerCase().includes(genreLower)));
        // Sort by popularity
        const sorted = genreStations.sort((a, b)=>(b.listeners || 0) - (a.listeners || 0));
        console.log(`Found ${sorted.length} stations for genre: ${genre}`);
        return sorted.slice(0, 100);
    }
    /**
   * Get all unique cities from cached stations
   */ async getAvailableCities() {
        await this.ensureCacheLoaded();
        const cities = Array.from(new Set(this.allCachedStations.map((station)=>station.location?.city).filter((city)=>city && city.trim() !== '')));
        return cities.sort();
    }
    /**
   * Get stations by city from cached data (fast search)
   */ async getStationsByCity(city, includeOnline = true) {
        await this.ensureCacheLoaded();
        const cityLower = city.toLowerCase();
        const cityStations = this.allCachedStations.filter((station)=>station.location?.city?.toLowerCase().includes(cityLower));
        // Sort by popularity
        const sorted = cityStations.sort((a, b)=>(b.listeners || 0) - (a.listeners || 0));
        console.log(`Found ${sorted.length} stations for city: ${city}`);
        return sorted.slice(0, 100);
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
    getCountryCode(countryName) {
        // Comprehensive country code mapping for global radio stations
        const countryMap = {
            // North America
            "united states": "US",
            "usa": "US",
            "us": "US",
            "canada": "CA",
            "ca": "CA",
            "mexico": "MX",
            "mx": "MX",
            // Europe
            "united kingdom": "GB",
            "uk": "GB",
            "gb": "GB",
            "britain": "GB",
            "germany": "DE",
            "de": "DE",
            "france": "FR",
            "fr": "FR",
            "italy": "IT",
            "it": "IT",
            "spain": "ES",
            "es": "ES",
            "netherlands": "NL",
            "nl": "NL",
            "holland": "NL",
            "sweden": "SE",
            "se": "SE",
            "norway": "NO",
            "no": "NO",
            "denmark": "DK",
            "dk": "DK",
            "finland": "FI",
            "fi": "FI",
            "switzerland": "CH",
            "ch": "CH",
            "austria": "AT",
            "at": "AT",
            "belgium": "BE",
            "be": "BE",
            "poland": "PL",
            "pl": "PL",
            "russia": "RU",
            "ru": "RU",
            "turkey": "TR",
            "tr": "TR",
            // Asia-Pacific
            "japan": "JP",
            "jp": "JP",
            "south korea": "KR",
            "korea": "KR",
            "kr": "KR",
            "china": "CN",
            "cn": "CN",
            "india": "IN",
            "in": "IN",
            "australia": "AU",
            "au": "AU",
            "new zealand": "NZ",
            "nz": "NZ",
            "singapore": "SG",
            "sg": "SG",
            "thailand": "TH",
            "th": "TH",
            "malaysia": "MY",
            "my": "MY",
            "indonesia": "ID",
            "id": "ID",
            "philippines": "PH",
            "ph": "PH",
            // Latin America
            "brazil": "BR",
            "br": "BR",
            "argentina": "AR",
            "ar": "AR",
            "chile": "CL",
            "cl": "CL",
            "colombia": "CO",
            "co": "CO",
            "peru": "PE",
            "pe": "PE",
            "venezuela": "VE",
            "ve": "VE",
            "uruguay": "UY",
            "uy": "UY",
            // Africa
            "south africa": "ZA",
            "za": "ZA",
            "nigeria": "NG",
            "ng": "NG",
            "egypt": "EG",
            "eg": "EG",
            "kenya": "KE",
            "ke": "KE",
            "ethiopia": "ET",
            "et": "ET",
            "ghana": "GH",
            "gh": "GH",
            "tunisia": "TN",
            "tn": "TN",
            "morocco": "MA",
            "ma": "MA",
            "zambia": "ZM",
            "zm": "ZM",
            "zimbabwe": "ZW",
            "zw": "ZW",
            "tanzania": "TZ",
            "tz": "TZ",
            "uganda": "UG",
            "ug": "UG",
            "mozambique": "MZ",
            "mz": "MZ",
            "botswana": "BW",
            "bw": "BW",
            "namibia": "NA",
            "na": "NA",
            "angola": "AO",
            "ao": "AO",
            "mali": "ML",
            "ml": "ML",
            "senegal": "SN",
            "sn": "SN",
            "burkina faso": "BF",
            "bf": "BF",
            "ivory coast": "CI",
            "ci": "CI",
            "cote divoire": "CI",
            "cameroon": "CM",
            "cm": "CM",
            "democratic republic of congo": "CD",
            "drc": "CD",
            "congo": "CG",
            "rwanda": "RW",
            "rw": "RW",
            "madagascar": "MG",
            "mg": "MG",
            "algeria": "DZ",
            "dz": "DZ",
            "libya": "LY",
            "ly": "LY",
            "sudan": "SD",
            "sd": "SD",
            "chad": "TD",
            "td": "TD",
            "niger": "NE",
            "ne": "NE",
            // Middle East
            "israel": "IL",
            "il": "IL",
            "saudi arabia": "SA",
            "sa": "SA",
            "united arab emirates": "AE",
            "uae": "AE",
            "ae": "AE",
            "qatar": "QA",
            "qa": "QA",
            "kuwait": "KW",
            "kw": "KW",
            "iran": "IR",
            "ir": "IR"
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
                "Egypt",
                "Zambia",
                "Zimbabwe",
                "Tanzania",
                "Uganda",
                "Ghana",
                "Ethiopia",
                "Morocco",
                "Algeria",
                "Tunisia",
                "Rwanda",
                "Botswana",
                "Namibia",
                "Angola",
                "Mozambique",
                "Mali",
                "Senegal",
                "Cameroon",
                "Madagascar"
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
   * Get unique countries from cached stations
   */ async getAvailableCountries() {
        await this.ensureCacheLoaded();
        const countries = Array.from(new Set(this.allCachedStations.map((station)=>station.location?.country).filter((country)=>country && country !== 'Unknown')));
        return countries.sort((a, b)=>a.localeCompare(b));
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
    audioContext = null;
    analyser = null;
    source = null;
    dataArray = null;
    animationFrame = null;
    renderers;
    currentRenderer = null;
    currentType = "bars";
    config;
    initialized = false;
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
        // Prevent re-initialization
        if (this.initialized) {
            return true;
        }
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            // Create source node only once
            // Note: This will fail if the element is already connected to a source
            try {
                this.source = this.audioContext.createMediaElementSource(audioElement);
            } catch (sourceError) {
                console.warn("Cannot create media element source (already in use). Visualization disabled.");
                // Clean up and return true - audio will still work without visualization
                this.audioContext.close();
                this.audioContext = null;
                this.initialized = true; // Mark as initialized to prevent retrying
                return true; // Return true so audio continues to work
            }
            this.analyser = this.audioContext.createAnalyser();
            // Configure analyser
            this.analyser.fftSize = this.config.fftSize;
            this.analyser.smoothingTimeConstant = this.config.smoothingTimeConstant;
            this.analyser.minDecibels = this.config.minDecibels;
            this.analyser.maxDecibels = this.config.maxDecibels;
            // Connect audio graph: source -> analyser -> destination
            // This ensures audio passes through the analyser but still plays
            this.source.connect(this.analyser);
            this.analyser.connect(this.audioContext.destination);
            this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
            // Resume audio context if suspended
            if (this.audioContext.state === "suspended") {
                this.audioContext.resume();
            }
            this.initialized = true;
            return true;
        } catch (error) {
            console.warn("Audio visualization initialization failed:", error);
            this.initialized = true; // Mark as initialized to prevent retrying
            return true; // Return true so audio continues to work
        }
    }
    start(canvas, type = "bars") {
        this.currentType = type;
        this.currentRenderer = this.renderers.get(type) || null;
        if (!this.analyser || !this.dataArray || !this.currentRenderer) {
            return;
        }
        // Resume audio context if suspended (required for iOS and other browsers)
        if (this.audioContext && this.audioContext.state === "suspended") {
            this.audioContext.resume();
        }
        const animate = ()=>{
            if (!this.analyser || !this.dataArray || !this.currentRenderer) return;
            if (this.dataArray) {
                if (this.currentType === "waveform") {
                    this.analyser.getByteTimeDomainData(this.dataArray);
                } else {
                    this.analyser.getByteFrequencyData(this.dataArray);
                }
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
        this.currentType = type;
        this.currentRenderer = this.renderers.get(type) || null;
    }
    updateConfig(newConfig) {
        const oldFftSize = this.config.fftSize;
        this.config = {
            ...this.config,
            ...newConfig
        };
        if (this.analyser) {
            this.analyser.smoothingTimeConstant = this.config.smoothingTimeConstant;
            this.analyser.minDecibels = this.config.minDecibels;
            this.analyser.maxDecibels = this.config.maxDecibels;
            if (this.config.fftSize !== oldFftSize) {
                this.analyser.fftSize = this.config.fftSize;
                this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
            }
        }
    }
    // Get available visualization types
    getAvailableTypes() {
        return Array.from(this.renderers.keys());
    }
    destroy() {
        this.stop();
        // Disconnect audio nodes
        if (this.source) {
            this.source.disconnect();
            this.source = null;
        }
        if (this.analyser) {
            this.analyser.disconnect();
            this.analyser = null;
        }
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        this.dataArray = null;
        this.currentRenderer = null;
        this.initialized = false;
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
    }["ModularAudioVisualizer.useEffect"], []);
    // Handle audio element changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioVisualizer.useEffect": ()=>{
            if (!audioElement || !visualizationServiceRef.current) {
                return;
            }
            const success = visualizationServiceRef.current.initialize(audioElement);
            if (!success) {
                console.warn("Audio visualization disabled - element already in use");
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
    // Handle prop changes (type, colors)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioVisualizer.useEffect": ()=>{
            if (visualizationServiceRef.current) {
                visualizationServiceRef.current.updateConfig({
                    fftSize: type === "waveform" ? 2048 : 256,
                    primaryColor: colors.primary || "#60a5fa",
                    secondaryColor: colors.secondary || "#3b82f6",
                    backgroundColor: colors.background || "rgba(0, 0, 0, 0.1)"
                });
                visualizationServiceRef.current.changeType(type);
            }
            setCurrentType(type);
        }
    }["ModularAudioVisualizer.useEffect"], [
        type,
        colors.primary,
        colors.secondary,
        colors.background
    ]);
    if (!isSupported) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center justify-center ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-500 text-sm",
                children: "Audio visualization not supported"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
            lineNumber: 100,
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
                lineNumber: 119,
                columnNumber: 7
            }, this),
            isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-lg shadow-inner pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                        lineNumber: 133,
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
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        "Ready"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
        lineNumber: 109,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
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
function ModularAudioPlayer({ className = "", showVisualizer = true, compactMode = false, autoPlay = false }) {
    _s();
    const { selectedStation, playlist, playlistIndex, currentRegion, nextStation, previousStation, buildRegionPlaylist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioState, audioActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModularAudio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModularAudio"])({
        autoPlay,
        volume: 0.7
    });
    const { currentType, availableTypes, nextType, setType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioVisualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVisualizationType"])();
    // Enhanced features state
    const [isFavorite, setIsFavorite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEnhancedControls, setShowEnhancedControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localTime, setLocalTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stationLocalTime, setStationLocalTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [timeDifference, setTimeDifference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [playTime, setPlayTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ambientMode, setAmbientMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [culturalInfo, setCulturalInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [weatherMood, setWeatherMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    // Local time updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioPlayer.useEffect": ()=>{
            const updateTimes = {
                "ModularAudioPlayer.useEffect.updateTimes": ()=>{
                    const now = new Date();
                    // User's local time
                    setLocalTime(now.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    }));
                    if (selectedStation) {
                        // Get station's local time (simplified - would use actual timezone data in production)
                        try {
                            const stationTime = new Date().toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                                timeZone: getTimezoneForCountry(selectedStation.location.country)
                            });
                            setStationLocalTime(stationTime);
                            // Calculate time difference
                            const userOffset = now.getTimezoneOffset();
                            const stationOffset = getOffsetForCountry(selectedStation.location.country);
                            const diffHours = Math.abs((userOffset - stationOffset) / 60);
                            setTimeDifference(diffHours > 0 ? `${diffHours}h ahead` : 'Same time');
                        } catch (e) {
                            setStationLocalTime(localTime);
                            setTimeDifference('Same time');
                        }
                        // Generate cultural context
                        generateCulturalContext();
                    }
                }
            }["ModularAudioPlayer.useEffect.updateTimes"];
            updateTimes();
            const interval = setInterval(updateTimes, 60000); // Update every minute
            return ({
                "ModularAudioPlayer.useEffect": ()=>clearInterval(interval)
            })["ModularAudioPlayer.useEffect"];
        }
    }["ModularAudioPlayer.useEffect"], [
        selectedStation,
        localTime
    ]);
    // Play time tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioPlayer.useEffect": ()=>{
            let interval;
            if (audioState.isPlaying) {
                interval = setInterval({
                    "ModularAudioPlayer.useEffect": ()=>{
                        setPlayTime({
                            "ModularAudioPlayer.useEffect": (prev)=>prev + 1
                        }["ModularAudioPlayer.useEffect"]);
                    }
                }["ModularAudioPlayer.useEffect"], 1000);
            } else {
                setPlayTime(0);
            }
            return ({
                "ModularAudioPlayer.useEffect": ()=>clearInterval(interval)
            })["ModularAudioPlayer.useEffect"];
        }
    }["ModularAudioPlayer.useEffect"], [
        audioState.isPlaying
    ]);
    // Enhanced helper functions
    const getTimezoneForCountry = (country)=>{
        const timezones = {
            'United States': 'America/New_York',
            'United Kingdom': 'Europe/London',
            'Germany': 'Europe/Berlin',
            'Japan': 'Asia/Tokyo',
            'Australia': 'Australia/Sydney',
            'Brazil': 'America/Sao_Paulo',
            'India': 'Asia/Kolkata',
            'China': 'Asia/Shanghai',
            'Russia': 'Europe/Moscow',
            'France': 'Europe/Paris',
            'Italy': 'Europe/Rome',
            'Spain': 'Europe/Madrid',
            'Canada': 'America/Toronto',
            'Mexico': 'America/Mexico_City'
        };
        return timezones[country] || 'UTC';
    };
    const getOffsetForCountry = (country)=>{
        // Simplified offset calculation (would use proper timezone library in production)
        const offsets = {
            'United Kingdom': 0,
            'Germany': -60,
            'United States': 300,
            'Japan': -540,
            'Australia': -600
        };
        return offsets[country] || 0;
    };
    const generateCulturalContext = ()=>{
        if (!selectedStation) return;
        const hour = new Date().getHours();
        const contexts = {
            morning: `🌅 Morning vibes in ${selectedStation.location.city} - perfect time for news and energetic music`,
            afternoon: `☀️ Afternoon flow in ${selectedStation.location.country} - workspace soundtrack time`,
            evening: `🌆 Evening hours in ${selectedStation.location.city} - winding down with local culture`,
            night: `🌙 Late night in ${selectedStation.location.country} - intimate radio for night owls`
        };
        let period = 'night';
        if (hour >= 6 && hour < 12) period = 'morning';
        else if (hour >= 12 && hour < 18) period = 'afternoon';
        else if (hour >= 18 && hour < 22) period = 'evening';
        setCulturalInfo(contexts[period]);
        // Generate weather mood
        const moods = [
            '☀️ Sunny & Upbeat',
            '🌧️ Cozy & Mellow',
            '⛅ Balanced & Chill',
            '❄️ Cool & Crisp'
        ];
        setWeatherMood(moods[Math.floor(Math.random() * moods.length)]);
    };
    const formatPlayTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    const toggleFavorite = ()=>{
        if (!selectedStation) return;
        const favorites = JSON.parse(localStorage.getItem('radioFavorites') || '[]');
        if (isFavorite) {
            const updated = favorites.filter((fav)=>fav.name !== selectedStation.name);
            localStorage.setItem('radioFavorites', JSON.stringify(updated));
            setIsFavorite(false);
        } else {
            favorites.push(selectedStation);
            localStorage.setItem('radioFavorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };
    // Check if favorite on station change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModularAudioPlayer.useEffect": ()=>{
            if (selectedStation) {
                const favorites = JSON.parse(localStorage.getItem('radioFavorites') || '[]');
                setIsFavorite(favorites.some({
                    "ModularAudioPlayer.useEffect": (fav)=>fav.name === selectedStation.name
                }["ModularAudioPlayer.useEffect"]));
                buildRegionPlaylist();
            }
        }
    }["ModularAudioPlayer.useEffect"], [
        selectedStation,
        buildRegionPlaylist
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
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-sm mb-1",
                    children: "Select a Radio Station"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-xs",
                    children: "Click on any station marker on the globe"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 flex items-center justify-center space-x-1 text-white/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: [
                                "Local time: ",
                                localTime || new Date().toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
            lineNumber: 221,
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
                                    className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-sm",
                                            children: selectedStation.name.charAt(0)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        audioState.isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center",
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.2,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 1,
                                                repeat: Infinity
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-white rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 253,
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
                                        lineNumber: 272,
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
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    audioState.isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 mt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-400 text-xs px-2 py-0.5 bg-green-500/20 rounded-full flex items-center space-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "LIVE ",
                                                        formatPlayTime(playTime)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-1 text-white text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: localTime
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            stationLocalTime && stationLocalTime !== localTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/60 text-xs",
                                children: [
                                    "Station: ",
                                    stationLocalTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            timeDifference && timeDifference !== 'Same time' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-blue-300 text-xs",
                                children: timeDifference
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            culturalInfo && !compactMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mb-4 p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-white/10",
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: 'auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/80 text-xs",
                        children: culturalInfo
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this),
                    weatherMood && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-300/80 text-xs mt-1",
                        children: [
                            "Mood: ",
                            weatherMood
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 322,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 315,
                columnNumber: 9
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
                            lineNumber: 343,
                            columnNumber: 13
                        }, this) : audioState.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            className: `${compactMode ? "w-4 h-4" : "w-5 h-5"} text-white`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: `${compactMode ? "w-4 h-4" : "w-5 h-5"} text-white ml-0.5`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 333,
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
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: compactMode ? "w-4 h-4" : "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 359,
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
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 371,
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
                                lineNumber: 388,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 358,
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
                                        lineNumber: 402,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-500 text-xs font-medium",
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleFavorite,
                                    className: `p-1 rounded transition-all ${isFavorite ? 'text-red-500' : 'text-white/60 hover:text-red-400'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: `w-3 h-3 ${isFavorite ? 'fill-current' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 426,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 418,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            currentRegion && playlist && playlist.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center justify-between text-xs text-white/60 border-t border-white/10 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentRegion
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    (playlistIndex || 0) + 1,
                                    " / ",
                                    playlist.length,
                                    " stations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>previousStation(),
                                        disabled: playlist.length <= 1,
                                        className: "p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>nextStation(),
                                        disabled: playlist.length <= 1,
                                        className: "p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 440,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 435,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: audioState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-3 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm flex items-start justify-between",
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 pr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium mb-1",
                                    children: "Audio Error"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-red-300/80",
                                    children: audioState.error
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, this),
                                audioState.error.includes('not supported') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-red-300/60 mt-2",
                                    children: "💡 Try: Different station, refresh page, or check network connection"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 475,
                                    columnNumber: 17
                                }, this),
                                selectedStation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        audioActions.clearError();
                                        audioActions.loadStation(selectedStation);
                                    },
                                    className: "mt-2 px-2 py-1 bg-red-500/30 hover:bg-red-500/50 rounded text-xs transition-colors",
                                    children: "🔄 Retry Station"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 480,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: audioActions.clearError,
                            className: "text-red-300 hover:text-red-100 ml-2 flex-shrink-0",
                            title: "Dismiss error",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 465,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 463,
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
                                        lineNumber: 513,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSettings(false),
                                        className: `w-8 h-4 rounded-full transition-colors ${showVisualizer ? "bg-blue-500" : "bg-gray-600"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-3 h-3 bg-white rounded-full transition-transform ${showVisualizer ? "translate-x-4" : "translate-x-0.5"}`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                            lineNumber: 520,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 514,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                lineNumber: 512,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400",
                                children: [
                                    "Station: ",
                                    selectedStation.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 530,
                                        columnNumber: 17
                                    }, this),
                                    "Genre: ",
                                    selectedStation.genre,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 532,
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
                                lineNumber: 528,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                        lineNumber: 511,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 505,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
}
_s(ModularAudioPlayer, "oqioHHyVBt7XwXH83af6SNqQEeE=", false, function() {
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
    const [fullResults, setFullResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [resultLimit, setResultLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [totalResults, setTotalResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [popularStations, setPopularStations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchFilter, setSearchFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [availableCountries, setAvailableCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableCities, setAvailableCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { selectStation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const getDefaultLimit = (filter)=>{
        switch(filter){
            case "country":
                return 60;
            case "city":
                return 40;
            default:
                return 20;
        }
    };
    // Load popular stations, countries, and cities once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPanel.useEffect": ()=>{
            const fetchData = {
                "SearchPanel.useEffect.fetchData": async ()=>{
                    try {
                        const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getPopularStations(8);
                        setPopularStations(stations);
                        // Load available countries and cities for filtering (from cache)
                        const countries = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getAvailableCountries();
                        setAvailableCountries(countries);
                        const cities = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getAvailableCities();
                        setAvailableCities(cities);
                        console.log(`Loaded ${countries.length} countries and ${cities.length} cities from cache`);
                    } catch (error) {
                        console.error("Failed to load station data:", error);
                    }
                }
            }["SearchPanel.useEffect.fetchData"];
            fetchData();
        }
    }["SearchPanel.useEffect"], []);
    // Enhanced smart search with proper filtering logic and faster debounce
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPanel.useEffect": ()=>{
            let timer;
            // For country/city search, allow shorter search terms
            const minLength = searchFilter === "country" || searchFilter === "city" ? 2 : 3;
            if (searchTerm.length >= minLength) {
                setIsLoading(true);
                // Faster debounce for better UX (200ms instead of 300ms)
                timer = setTimeout({
                    "SearchPanel.useEffect": async ()=>{
                        let results = [];
                        try {
                            console.log(`🔍 Smart search: filter=${searchFilter}, term="${searchTerm}"`);
                            const startTime = performance.now();
                            switch(searchFilter){
                                case "all":
                                    // Search across all fields: station name, country, city, genre
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].searchStations(searchTerm);
                                    break;
                                case "genre":
                                    // Search specifically by genre/music type
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByGenre(searchTerm);
                                    break;
                                case "country":
                                    // Filter stations by country location
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByCountry(searchTerm);
                                    break;
                                case "city":
                                    // Filter stations by city location
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByCity(searchTerm);
                                    break;
                                default:
                                    results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radioStationService"].searchStations(searchTerm);
                            }
                            const searchTime = (performance.now() - startTime).toFixed(0);
                            console.log(`✅ Found ${results.length} results in ${searchTime}ms`);
                            // Results are already sorted by relevance in the service
                            const defaultLimit = getDefaultLimit(searchFilter);
                            const limit = Math.min(defaultLimit, results.length);
                            setFullResults(results);
                            setTotalResults(results.length);
                            setResultLimit(limit);
                            setSearchResults(results.slice(0, limit));
                        } catch (error) {
                            console.error("Search error:", error);
                            setFullResults([]);
                            setTotalResults(0);
                            setSearchResults([]);
                        } finally{
                            setIsLoading(false);
                        }
                    }
                }["SearchPanel.useEffect"], 200);
            } else {
                setSearchResults([]);
                setFullResults([]);
                setTotalResults(0);
                setResultLimit(getDefaultLimit(searchFilter));
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
        setFullResults([]);
        setTotalResults(0);
        setResultLimit(getDefaultLimit(searchFilter));
    };
    const handleLoadMoreResults = ()=>{
        if (fullResults.length === 0) return;
        const nextLimit = Math.min(resultLimit + 20, fullResults.length);
        if (nextLimit > resultLimit) {
            setResultLimit(nextLimit);
            setSearchResults(fullResults.slice(0, nextLimit));
        }
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
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            onFocus: ()=>setIsOpen(true),
                            placeholder: searchFilter === "country" ? "Search countries (e.g. Germany, Japan, Brazil)..." : searchFilter === "genre" ? "Search genres (e.g. rock, jazz, news, classical)..." : searchFilter === "city" ? `Search cities (e.g. ${availableCities.slice(0, 3).join(", ") || "London, Tokyo, New York"}...)` : "Search stations, countries, cities, or genres...",
                            className: "glass pl-10 pr-4 py-2 w-64 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-3 top-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                lineNumber: 169,
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
                                        onClick: ()=>{
                                            const nextFilter = filter;
                                            setSearchFilter(nextFilter);
                                            setSearchTerm(""); // Clear search when changing filter
                                            setSearchResults([]);
                                            setFullResults([]);
                                            setTotalResults(0);
                                            setResultLimit(getDefaultLimit(nextFilter));
                                        },
                                        className: `px-3 py-1 text-xs rounded-full transition-colors ${searchFilter === filter ? "bg-blue-500 text-white shadow-lg" : "bg-white/10 text-gray-300 hover:bg-white/20"}`,
                                        children: [
                                            filter === "country" && "🌍 ",
                                            filter === "city" && "🏙️ ",
                                            filter === "genre" && "🎵 ",
                                            filter === "all" && "🔍 ",
                                            filter.charAt(0).toUpperCase() + filter.slice(1)
                                        ]
                                    }, filter, true, {
                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                        lineNumber: 206,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400 px-2 py-1 flex items-center gap-2",
                                    children: [
                                        searchFilter === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 237,
                                            columnNumber: 46
                                        }, this),
                                        searchFilter === "country" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 238,
                                            columnNumber: 50
                                        }, this),
                                        searchFilter === "city" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 239,
                                            columnNumber: 47
                                        }, this),
                                        searchFilter === "genre" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 240,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Showing ",
                                                searchResults.length,
                                                totalResults > searchResults.length ? ` of ${totalResults}` : "",
                                                " ",
                                                searchFilter === "all" ? "stations" : searchFilter,
                                                " results",
                                                searchFilter === "country" && searchTerm && ` in ${searchTerm}`,
                                                searchFilter === "city" && searchTerm && ` in ${searchTerm}`,
                                                searchFilter === "genre" && searchTerm && ` for ${searchTerm}`,
                                                searchFilter === "all" && searchTerm && ` for "${searchTerm}"`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 236,
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
                                                        lineNumber: 259,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 258,
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
                                                            lineNumber: 262,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-400 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                                    lineNumber: 266,
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
                                                                    lineNumber: 268,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 261,
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
                                                    lineNumber: 273,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 257,
                                            columnNumber: 21
                                        }, this)
                                    }, station.id, false, {
                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                        lineNumber: 251,
                                        columnNumber: 19
                                    }, this)),
                                totalResults > searchResults.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-2 pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLoadMoreResults,
                                        className: "w-full py-2 text-xs text-blue-300 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",
                                        children: [
                                            "Show more stations (",
                                            totalResults - searchResults.length,
                                            " more)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                        lineNumber: 281,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 280,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 235,
                            columnNumber: 15
                        }, this),
                        searchFilter === "country" && searchTerm.length === 0 && availableCountries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400 px-2 py-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this),
                                        "Select a Country"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-1 max-h-48 overflow-y-auto",
                                    children: availableCountries.slice(0, 20).map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSearchTerm(country);
                                                setSearchFilter("country");
                                                setSearchResults([]);
                                                setFullResults([]);
                                                setTotalResults(0);
                                                setResultLimit(getDefaultLimit("country"));
                                            },
                                            className: "p-2 text-left text-sm text-gray-300 hover:bg-white/10 rounded transition-colors truncate",
                                            children: country
                                        }, country, false, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 301,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, this),
                                availableCountries.length > 20 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 px-2 py-1",
                                    children: [
                                        "+",
                                        availableCountries.length - 20,
                                        " more countries... Start typing to search"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 318,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 294,
                            columnNumber: 15
                        }, this),
                        searchTerm.length === 0 && searchFilter !== "country" && popularStations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400 px-2 py-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 329,
                                            columnNumber: 19
                                        }, this),
                                        "Popular Stations"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 328,
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
                                                        lineNumber: 341,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 340,
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
                                                            lineNumber: 346,
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
                                                            lineNumber: 349,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                    lineNumber: 345,
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
                                                    lineNumber: 353,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                            lineNumber: 339,
                                            columnNumber: 21
                                        }, this)
                                    }, station.id, false, {
                                        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                        lineNumber: 333,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 327,
                            columnNumber: 15
                        }, this),
                        searchTerm.length > 2 && searchResults.length === 0 && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 text-center text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    className: "w-8 h-8 mx-auto mb-2 opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 367,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: "No stations found"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 368,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs",
                                    children: "Try searching by genre or country"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 369,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 366,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 border-t border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsOpen(false);
                                    setSearchTerm("");
                                    setSearchResults([]);
                                    setFullResults([]);
                                    setTotalResults(0);
                                    setResultLimit(getDefaultLimit(searchFilter));
                                },
                                className: "w-full py-2 text-xs text-gray-400 hover:text-white transition-colors",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                lineNumber: 377,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 376,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>{
                    setIsOpen(false);
                    setSearchTerm("");
                    setSearchResults([]);
                    setFullResults([]);
                    setTotalResults(0);
                    setResultLimit(getDefaultLimit(searchFilter));
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                lineNumber: 397,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s(SearchPanel, "XSOlMo0G8+x0n3J3n93O5qhFd+w=", false, function() {
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
                className: "p-6 border-b border-white/10 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "w-6 h-6 text-gradient"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 animate-pulse-glow rounded-full bg-blue-400/20"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-white tracking-tight",
                                                children: "Stations"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400 font-mono",
                                                children: [
                                                    displayData.length,
                                                    " available"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 glass px-3 py-2 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-300 font-medium",
                                    children: [
                                        timeOfDay === "morning" && "☀️ Good morning",
                                        timeOfDay === "afternoon" && "🌤️ Good afternoon",
                                        timeOfDay === "evening" && "🌅 Good evening",
                                        timeOfDay === "night" && "🌙 Night mode"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 bg-surface-card/50 p-1.5 rounded-xl",
                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm rounded-lg font-medium transition-all ${activeTab === tab.id ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"}`,
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline tracking-wide",
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    tab.count !== undefined && tab.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-1 text-xs rounded-full font-mono ${activeTab === tab.id ? "bg-white/20 text-white" : "bg-white/10 text-gray-300"}`,
                                        children: tab.count
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 208,
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
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Filter by genre"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 242,
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
                                        lineNumber: 263,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 261,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 255,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 241,
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
                            lineNumber: 286,
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
            activeTab === "nearby" && location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            className: "w-3.5 h-3.5 text-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 300,
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
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 299,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 298,
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
                        lineNumber: 315,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 314,
                    columnNumber: 11
                }, this) : displayData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                            className: "w-8 h-8 mx-auto mb-2 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 319,
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
                            lineNumber: 320,
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
                            lineNumber: 326,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 318,
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
                            lineNumber: 335,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 333,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 312,
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
                            lineNumber: 352,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: location?.city && `📍 ${location.city}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                lineNumber: 350,
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
                                lineNumber: 396,
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
                                lineNumber: 400,
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
                                lineNumber: 404,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 395,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: station.name.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                        lineNumber: 410,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 387,
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
                                lineNumber: 419,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 418,
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
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                station.genre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate text-gray-400",
                                            children: station.genre.split(",")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 428,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 417,
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
                            lineNumber: 444,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: station.listeners >= 1000 ? `${(station.listeners / 1000).toFixed(0)}k` : station.listeners
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 449,
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
                                lineNumber: 470,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
            lineNumber: 385,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
        lineNumber: 378,
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
"[project]/apps/web/src/hooks/useStationCount.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStationCount",
    ()=>useStationCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/events/GlobeEventBus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/infrastructure/ServiceContainer.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useStationCount() {
    _s();
    const [stationCount, setStationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStationCount.useEffect": ()=>{
            const eventBus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobeEventBus"])();
            // Create observer manually since we're in a React hook
            const observerId = 'useStationCount-hook';
            const observer = {
                getObserverId: {
                    "useStationCount.useEffect": ()=>observerId
                }["useStationCount.useEffect"],
                onEvent: {
                    "useStationCount.useEffect": (event)=>{
                        if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobeEventType"].STATIONS_LOADED) {
                            const count = event.data?.count || 0;
                            setStationCount(count);
                        }
                    }
                }["useStationCount.useEffect"]
            };
            // Subscribe to station loading events
            eventBus.subscribe(observer, [
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobeEventType"].STATIONS_LOADED
            ]);
            return ({
                "useStationCount.useEffect": ()=>{
                    eventBus.unsubscribe(observerId);
                }
            })["useStationCount.useEffect"];
        }
    }["useStationCount.useEffect"], []);
    return stationCount;
}
_s(useStationCount, "5JmGbtvkhlyrdOn3N15vLl807qM=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Globe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ModularAudioPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/StationPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SearchPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationDirectory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/StationDirectory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/UserPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useStationCount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useStationCount.ts [app-client] (ecmascript)");
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
;
function Home() {
    _s();
    const { selectedStation, addMarker } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"])(); // Removed markers from destructuring
    const stationCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useStationCount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStationCount"])(); // Use new architecture station count
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 right-0 z-40 p-6",
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
                            className: "flex items-center gap-3 glass rounded-2xl px-6 py-3",
                            whileHover: {
                                scale: 1.02
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                            className: "w-8 h-8 text-gradient"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 animate-pulse-glow rounded-full bg-blue-400/20"
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
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gradient tracking-tight",
                                            children: "Radio Globe"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 font-mono",
                                            children: "Discover global radio stations"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchPanel"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setShowDirectory(!showDirectory),
                                    className: `glass px-6 py-3 rounded-xl flex items-center gap-3 transition-all font-medium ${showDirectory ? "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 border-cyan-400/30" : "text-white hover:bg-white/10 border-white/10"}`,
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm tracking-wide",
                                            children: "Directory"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-mono opacity-60",
                                            children: stationCount
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 72,
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
                                lineNumber: 101,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 43,
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
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 112,
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
                    lineNumber: 134,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 124,
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
                                lineNumber: 148,
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
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 151,
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
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this),
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "glass px-6 py-4 rounded-2xl flex-shrink-0 border border-white/10",
                                whileHover: {
                                    scale: 1.02
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400 font-mono uppercase tracking-wide",
                                            children: "Global Stations"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-gradient mt-1",
                                            children: stationCount
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 139,
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
                        lineNumber: 205,
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
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowMobileMenu(false),
                                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchPanel"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 227,
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
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-white",
                                                            children: "Station Directory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-400",
                                                            children: "Browse all stations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UserPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserPanel"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 199,
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
                        lineNumber: 263,
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
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 257,
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
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white text-lg",
                            children: "Loading Radio Globe..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Connecting to global stations..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Home, "N4ci3sw4QHdhS+4/rVpbkHMRjRE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useStationCount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStationCount"]
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

//# sourceMappingURL=apps_web_src_d6c7a031._.js.map