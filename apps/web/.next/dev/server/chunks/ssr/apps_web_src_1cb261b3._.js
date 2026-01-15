module.exports = [
"[project]/apps/web/src/components/Earth.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Earth",
    ()=>Earth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Earth() {
    const earthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nightLightsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cloudsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const atmosphereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load real Earth day texture using NASA-style satellite imagery
    const dayTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 2048;
        canvas.height = 1024;
        // Create high-contrast realistic Earth texture
        createSatelliteEarthTexture(ctx, canvas.width, canvas.height);
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
        texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
        texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
        texture.generateMipmaps = false;
        texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
        return texture;
    }, []);
    // Create realistic night lights from satellite data
    const nightTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 2048;
        canvas.height = 1024;
        // Black background
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Add NASA-style night lights
        addNASAStyleNightLights(ctx, canvas.width, canvas.height);
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
        texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
        texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
        return texture;
    }, []);
    // Create realistic cloud texture
    const cloudTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 1024;
        canvas.height = 512;
        createRealisticClouds(ctx, canvas.width, canvas.height);
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
        texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
        texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
        return texture;
    }, []);
    // Create topographical normal map
    const normalTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 1024;
        canvas.height = 512;
        createTopographicalNormalMap(ctx, canvas.width, canvas.height);
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
        texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
        texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
        return texture;
    }, []);
    // Animation with realistic rotation speed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state, delta)=>{
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
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: earthRef,
                args: [
                    2,
                    128,
                    64
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhongMaterial", {
                    map: dayTexture,
                    normalMap: normalTexture,
                    normalScale: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0.6, 0.6),
                    shininess: 2,
                    specular: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x222222),
                    transparent: false
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: nightLightsRef,
                args: [
                    2.001,
                    64,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    map: nightTexture,
                    transparent: true,
                    opacity: 1,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Earth.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Earth.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: cloudsRef,
                args: [
                    2.008,
                    64,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshLambertMaterial", {
                    map: cloudTexture,
                    transparent: true,
                    opacity: 0.4,
                    alphaTest: 0.1
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Earth.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Earth.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: atmosphereRef,
                args: [
                    2.15,
                    64,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                    uniforms: {
                        time: {
                            value: 0
                        },
                        color: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0.4, 0.7, 1.0)
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
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackSide"],
                    transparent: true
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/Earth.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/Earth.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Earth.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
// Create satellite-style Earth texture with high contrast between land and water
function createSatelliteEarthTexture(ctx, width, height) {
    // Deep ocean background with realistic color gradients
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, height);
    oceanGradient.addColorStop(0, "#0c1445"); // Arctic waters
    oceanGradient.addColorStop(0.2, "#1a2980"); // Northern ocean
    oceanGradient.addColorStop(0.4, "#26d0ce"); // Tropical waters
    oceanGradient.addColorStop(0.6, "#1a2980"); // Southern ocean  
    oceanGradient.addColorStop(0.8, "#0c1445"); // Antarctic waters
    oceanGradient.addColorStop(1, "#000000"); // Polar ice edge
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, width, height);
    // Add ocean depth variations
    addOceanDepth(ctx, width, height);
    // Define highly detailed continents with realistic satellite colors
    const continentData = [
        // North America with diverse biomes
        {
            name: "North America",
            regions: [
                {
                    x: 0.12,
                    y: 0.15,
                    w: 0.08,
                    h: 0.15,
                    color: "#2d5a0d",
                    type: "tundra"
                },
                {
                    x: 0.15,
                    y: 0.25,
                    w: 0.18,
                    h: 0.25,
                    color: "#4a7c59",
                    type: "forest"
                },
                {
                    x: 0.13,
                    y: 0.35,
                    w: 0.22,
                    h: 0.18,
                    color: "#8fbc8f",
                    type: "plains"
                },
                {
                    x: 0.08,
                    y: 0.42,
                    w: 0.12,
                    h: 0.08,
                    color: "#daa520",
                    type: "desert"
                },
                {
                    x: 0.18,
                    y: 0.48,
                    w: 0.15,
                    h: 0.12,
                    color: "#228b22",
                    type: "subtropical"
                },
                {
                    x: 0.17,
                    y: 0.52,
                    w: 0.08,
                    h: 0.15,
                    color: "#cd853f",
                    type: "desert"
                }
            ]
        },
        // South America
        {
            name: "South America",
            regions: [
                {
                    x: 0.22,
                    y: 0.55,
                    w: 0.15,
                    h: 0.15,
                    color: "#228b22",
                    type: "rainforest"
                },
                {
                    x: 0.24,
                    y: 0.68,
                    w: 0.12,
                    h: 0.12,
                    color: "#9acd32",
                    type: "savanna"
                },
                {
                    x: 0.20,
                    y: 0.78,
                    w: 0.18,
                    h: 0.15,
                    color: "#daa520",
                    type: "pampas"
                },
                {
                    x: 0.22,
                    y: 0.88,
                    w: 0.08,
                    h: 0.08,
                    color: "#708090",
                    type: "patagonia"
                }
            ]
        },
        // Europe
        {
            name: "Europe",
            regions: [
                {
                    x: 0.48,
                    y: 0.18,
                    w: 0.12,
                    h: 0.08,
                    color: "#2f4f2f",
                    type: "nordic"
                },
                {
                    x: 0.46,
                    y: 0.28,
                    w: 0.18,
                    h: 0.15,
                    color: "#6b8e23",
                    type: "temperate"
                },
                {
                    x: 0.48,
                    y: 0.38,
                    w: 0.15,
                    h: 0.08,
                    color: "#daa520",
                    type: "mediterranean"
                }
            ]
        },
        // Africa
        {
            name: "Africa",
            regions: [
                {
                    x: 0.50,
                    y: 0.38,
                    w: 0.20,
                    h: 0.12,
                    color: "#daa520",
                    type: "sahara"
                },
                {
                    x: 0.48,
                    y: 0.48,
                    w: 0.08,
                    h: 0.08,
                    color: "#9acd32",
                    type: "sahel"
                },
                {
                    x: 0.48,
                    y: 0.55,
                    w: 0.18,
                    h: 0.15,
                    color: "#228b22",
                    type: "tropical"
                },
                {
                    x: 0.50,
                    y: 0.68,
                    w: 0.16,
                    h: 0.18,
                    color: "#8fbc8f",
                    type: "savanna"
                }
            ]
        },
        // Asia
        {
            name: "Asia",
            regions: [
                {
                    x: 0.65,
                    y: 0.15,
                    w: 0.30,
                    h: 0.20,
                    color: "#2f4f2f",
                    type: "siberia"
                },
                {
                    x: 0.68,
                    y: 0.32,
                    w: 0.25,
                    h: 0.15,
                    color: "#daa520",
                    type: "centralasia"
                },
                {
                    x: 0.72,
                    y: 0.42,
                    w: 0.08,
                    h: 0.08,
                    color: "#8b4513",
                    type: "himalaya"
                },
                {
                    x: 0.74,
                    y: 0.48,
                    w: 0.18,
                    h: 0.15,
                    color: "#228b22",
                    type: "southasia"
                },
                {
                    x: 0.82,
                    y: 0.45,
                    w: 0.15,
                    h: 0.18,
                    color: "#6b8e23",
                    type: "eastasia"
                },
                {
                    x: 0.75,
                    y: 0.58,
                    w: 0.20,
                    h: 0.12,
                    color: "#32cd32",
                    type: "southeast"
                }
            ]
        },
        // Australia & Oceania
        {
            name: "Australia",
            regions: [
                {
                    x: 0.82,
                    y: 0.72,
                    w: 0.15,
                    h: 0.12,
                    color: "#cd853f",
                    type: "outback"
                },
                {
                    x: 0.83,
                    y: 0.75,
                    w: 0.05,
                    h: 0.05,
                    color: "#228b22",
                    type: "coastal"
                }
            ]
        }
    ];
    // Draw continents with realistic satellite imagery style
    continentData.forEach((continent)=>{
        continent.regions.forEach((region)=>{
            drawSatelliteRegion(ctx, region, width, height);
        });
    });
    // Add topographical features
    addMountainRanges(ctx, width, height);
    addRiverSystems(ctx, width, height);
    addDesertDetails(ctx, width, height);
}
function addOceanDepth(ctx, width, height) {
    // Add darker areas for deep ocean trenches and lighter for shallow seas
    const oceanFeatures = [
        // Mariana Trench
        {
            x: 0.88,
            y: 0.48,
            w: 0.02,
            h: 0.08,
            color: "#000033"
        },
        // Mid-Atlantic Ridge
        {
            x: 0.35,
            y: 0.3,
            w: 0.01,
            h: 0.4,
            color: "#1a4480"
        },
        // Continental shelves (lighter blue)
        {
            x: 0.12,
            y: 0.35,
            w: 0.25,
            h: 0.03,
            color: "#4682b4"
        },
        {
            x: 0.48,
            y: 0.25,
            w: 0.15,
            h: 0.02,
            color: "#4682b4"
        }
    ];
    oceanFeatures.forEach((feature)=>{
        ctx.fillStyle = feature.color;
        drawOrganicShape(ctx, feature, width, height, 0.3);
    });
}
function drawSatelliteRegion(ctx, region, width, height) {
    // Base terrain color
    ctx.fillStyle = region.color;
    drawOrganicShape(ctx, region, width, height, 0.4);
    // Add terrain texture variation
    const imageData = ctx.getImageData(region.x * width - region.w * width * 0.1, region.y * height - region.h * height * 0.1, region.w * width * 1.2, region.h * height * 1.2);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        // Add realistic terrain variation
        const variation = (Math.random() - 0.5) * 30;
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
}),
"[project]/apps/web/src/events/GlobeEventBus.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/web/src/commands/GlobeCommands.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/web/src/usecases/StationUseCases.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationLoadingUseCase",
    ()=>StationLoadingUseCase,
    "StationSelectionUseCase",
    ()=>StationSelectionUseCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/events/GlobeEventBus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$commands$2f$GlobeCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/commands/GlobeCommands.ts [app-ssr] (ecmascript)");
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
            this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlobeEvent"].zoomChanged(0, zoomLevel, zoomLevel * 2));
            let stations;
            // Progressive loading based on zoom level
            if (zoomLevel <= 2) {
                // Very zoomed out - load popular stations only
                stations = await this.stationRepository.getPopularStations(50);
            } else if (zoomLevel <= 4) {
                // Medium zoom - load more stations
                stations = await this.stationRepository.getProgressiveStations(200, 0);
            } else {
                // Close zoom - load comprehensive stations
                stations = await this.stationRepository.getProgressiveStations(1000, 0);
            }
            // Group stations by city for clustering
            const clusteredMarkers = this.clusterStationsByCity(stations, zoomLevel);
            this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlobeEvent"].stationsLoaded(clusteredMarkers.length, 'global', zoomLevel));
            return clusteredMarkers;
        } catch (error) {
            this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlobeEvent"].error('Failed to load stations', 'StationLoadingUseCase', error instanceof Error ? error : new Error(String(error))));
            return [];
        }
    }
    coordinatesToPosition(lat, lng, radius = 1.01) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        return [
            x,
            y,
            z
        ];
    }
    clusterStationsByCity(stations, zoomLevel) {
        const cityGroups = new Map();
        // Group stations by city
        stations.forEach((station)=>{
            const cityKey = `${station.location?.city || 'Unknown'}-${station.location?.country || 'Unknown'}`;
            if (!cityGroups.has(cityKey)) {
                cityGroups.set(cityKey, []);
            }
            cityGroups.get(cityKey).push(station);
        });
        // Convert to marker data
        return Array.from(cityGroups.entries()).map(([cityKey, groupStations])=>{
            const representative = groupStations[0];
            const lat = representative.location?.latitude || representative.location?.lat || 0;
            const lng = representative.location?.longitude || representative.location?.lng || 0;
            return {
                id: cityKey,
                position: this.coordinatesToPosition(lat, lng, 1.01),
                stations: groupStations,
                city: representative.location?.city || 'Unknown',
                country: representative.location?.country || 'Unknown',
                isVisible: true,
                zoomLevel,
                type: zoomLevel > 5 ? 'single' : 'cluster',
                metadata: {
                    city: representative.location?.city || 'Unknown',
                    country: representative.location?.country || 'Unknown',
                    zoomLevel,
                    density: this.calculateDensity(groupStations.length)
                }
            };
        });
    }
    calculateDensity(stationCount) {
        if (stationCount > 20) return 'very-high';
        if (stationCount > 10) return 'high';
        if (stationCount > 5) return 'medium';
        return 'low';
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
        const command = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$commands$2f$GlobeCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCommand"].selectStation(stationId, station, (id, st)=>this.executeSelection(id, st), ()=>this.clearSelection(), previousSelection || undefined);
        // Execute through command invoker for undo/redo support
        await this.commandInvoker.execute(command);
    }
    async clearSelection() {
        if (!this.currentSelection) return;
        const previousSelection = this.currentSelection;
        this.currentSelection = null;
        // Emit selection cleared event
        this.eventBus.notify({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobeEventType"].STATION_SELECTED,
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
            type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobeEventType"].STATION_HOVERED,
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
        this.eventBus.notify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlobeEvent"].stationSelected(stationId, station));
    }
}
}),
"[project]/apps/web/src/strategies/MarkerStrategy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        const baseSize = Math.max(0.05, Math.min(0.15, 0.3 / cameraDistance));
        return {
            size: baseSize,
            color: "#5f72ff",
            opacity: 0.9,
            hasLabel: cameraDistance < 3,
            labelText: data.stations[0]?.name,
            pulseEffect: false,
            glowEffect: false
        };
    }
    shouldShow(data, zoomLevel) {
        return zoomLevel > 4; // Show individual stations only at high zoom
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
        const baseSize = Math.max(0.08, Math.min(0.25, 0.4 / cameraDistance));
        const sizeMultiplier = Math.log(stationCount + 1) * 0.3;
        const densityColors = {
            'low': "#5f72ff",
            'medium': "#ffde59",
            'high': "#ffa502",
            'very-high': "#ff4757"
        };
        return {
            size: baseSize + sizeMultiplier,
            color: densityColors[data.metadata.density || 'low'],
            opacity: 0.9,
            hasLabel: cameraDistance < 6 && stationCount > 3,
            labelText: data.metadata.city || `${stationCount} stations`,
            pulseEffect: false,
            glowEffect: true
        };
    }
    shouldShow(data, zoomLevel) {
        return zoomLevel >= 1 && zoomLevel <= 6;
    }
    handleInteraction(data, interactionType) {
        if (interactionType === 'click') {
            if (data.stations.length === 1) {
                this.handleInteraction(data, interactionType);
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
}),
"[project]/apps/web/src/services/radioDiscoveryService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
   * Get top stations globally with smart loading
   */ async getTopStations(limit = 1000) {
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
            return this.getFallbackStations();
        }
    }
    /**
   * Get stations within a geographic region
   */ async getStationsByRegion(bounds, limit = 500) {
        const cacheKey = `region:${bounds.north}:${bounds.south}:${bounds.east}:${bounds.west}:${limit}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) return cached;
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
            return stationsInBounds;
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
        return allCountries.slice(0, 8); // Limit to avoid too many requests
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
}
const radioDiscoveryService = new RadioDiscoveryService();
}),
"[project]/apps/web/src/repositories/StationRepository.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationRepository",
    ()=>StationRepository,
    "stationRepository",
    ()=>stationRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioDiscoveryService.ts [app-ssr] (ecmascript)");
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
            // For simplicity, we'll just get stations by popular countries
            // In a real app, you'd map region names to geographic bounds
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(200);
            this.updateCache(cacheKey, stations);
            return stations;
        } catch (error) {
            console.error(`Failed to fetch stations for region ${region}:`, error);
            return this.cache.get(cacheKey) || [];
        }
    }
    async getStationsByCountry(country) {
        const cacheKey = `country:${country}`;
        if (this.isValidCache(cacheKey)) {
            return this.cache.get(cacheKey) || [];
        }
        try {
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByCountry(country);
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
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByTag(genre);
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
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].searchOnlineStations(query);
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
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getProgressiveStations(zoomLevel);
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
            const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(limit);
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
}),
"[project]/apps/web/src/infrastructure/ServiceContainer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$usecases$2f$StationUseCases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/usecases/StationUseCases.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$strategies$2f$MarkerStrategy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/strategies/MarkerStrategy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$repositories$2f$StationRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/repositories/StationRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/events/GlobeEventBus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$commands$2f$GlobeCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/commands/GlobeCommands.ts [app-ssr] (ecmascript)");
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
        this.registerSingleton("StationRepository", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$repositories$2f$StationRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StationRepository"]());
        // Register Event Bus (Singleton)
        this.registerSingleton("GlobeEventBus", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$events$2f$GlobeEventBus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobeEventBus"]());
        // Register Command Invoker (Singleton)
        this.registerSingleton("CommandInvoker", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$commands$2f$GlobeCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandInvoker"]());
        // Register Use Cases (Factory - new instance each time)
        this.register("StationLoadingUseCase", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$usecases$2f$StationUseCases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StationLoadingUseCase"](this.resolveSingleton("StationRepository"), this.resolveSingleton("GlobeEventBus")));
        this.register("StationSelectionUseCase", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$usecases$2f$StationUseCases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StationSelectionUseCase"](this.resolveSingleton("GlobeEventBus"), this.resolveSingleton("CommandInvoker")));
        // Register Factories (Factory - new instance each time)
        this.register("MarkerFactory", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$strategies$2f$MarkerStrategy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkerFactory"]());
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
const createGlobeEventBus = ()=>ServiceContainer.getInstance().getGlobeEventBus();
const createCommandInvoker = ()=>ServiceContainer.getInstance().getCommandInvoker();
}),
"[project]/apps/web/src/components/ClusteredStationMarkers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusteredStationMarkers",
    ()=>ClusteredStationMarkers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/infrastructure/ServiceContainer.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ClusteredStationMarkers() {
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    // Use cases (clean architecture)
    const stationLoadingUseCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStationLoadingUseCase"])();
    const stationSelectionUseCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStationSelectionUseCase"])();
    const markerFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$infrastructure$2f$ServiceContainer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMarkerFactory"])();
    // Local state
    const [markers, setMarkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hoveredMarkerId, setHoveredMarkerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Calculate camera distance and zoom level
    const { cameraDistance, zoomLevel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const distance = camera.position.length();
        const zoom = Math.max(1, 8 - distance);
        return {
            cameraDistance: distance,
            zoomLevel: zoom
        };
    }, [
        camera.position
    ]);
    // Load markers based on zoom level
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadMarkers = async ()=>{
            setIsLoading(true);
            try {
                const newMarkers = await stationLoadingUseCase.loadStationsForView(zoomLevel);
                setMarkers(newMarkers);
            } catch (error) {
                console.error('Failed to load markers:', error);
            } finally{
                setIsLoading(false);
            }
        };
        loadMarkers();
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        if (!markersRef.current) return;
        markersRef.current.children.forEach((marker)=>{
            if (marker.children.length > 0) {
                marker.children.forEach((child)=>{
                    if (child.type === 'Mesh') {
                        child.lookAt(camera.position);
                    }
                });
            }
        });
    });
    // Filter and style markers
    const visibleMarkers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return markers.filter((marker)=>markerFactory.shouldShowMarker(marker, zoomLevel)).map((marker)=>({
                data: marker,
                ...markerFactory.createMarker(marker, cameraDistance)
            }));
    }, [
        markers,
        zoomLevel,
        cameraDistance,
        markerFactory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: markersRef,
        children: [
            visibleMarkers.map(({ data, style, strategy })=>{
                const isHovered = hoveredMarkerId === data.id;
                const stationCount = data.stations.length;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                                    args: [
                                        style.size,
                                        32
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: style.color,
                                    transparent: true,
                                    opacity: style.opacity
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                                    args: [
                                        style.size * 0.6,
                                        16
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: "#ffffff",
                                    transparent: true,
                                    opacity: 0.8
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        stationCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                    position: [
                                        0,
                                        0,
                                        0.001
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                                            args: [
                                                style.size * 0.35,
                                                16
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                            color: style.color,
                                            transparent: true,
                                            opacity: 1
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
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
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        style.glowEffect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                                    args: [
                                        style.size * 1.2,
                                        style.size * 1.5,
                                        32
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: style.color,
                                    transparent: true,
                                    opacity: 0.3,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 152,
                            columnNumber: 15
                        }, this),
                        isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                                    args: [
                                        style.size * 1.1,
                                        style.size * 1.3,
                                        32
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: style.color,
                                    transparent: true,
                                    opacity: 0.5,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this),
                        style.hasLabel && style.labelText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
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
                            lineNumber: 178,
                            columnNumber: 15
                        }, this)
                    ]
                }, data.id, true, {
                    fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this);
            }),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    3,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.05,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#00d4ff"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ClusteredStationMarkers.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/utils/coordinates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/web/src/stores/globe-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGlobeStore",
    ()=>useGlobeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$coordinates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/coordinates.ts [app-ssr] (ecmascript)");
;
;
;
const useGlobeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeWithSelector"])((set, get)=>({
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
            const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$coordinates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["latLngToPosition"])(station.location.lat, station.location.lng);
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
        }
    })));
// Subscribe to state changes for analytics or side effects
useGlobeStore.subscribe((state)=>state.selectedStation, (selectedStation)=>{
    if (selectedStation) {
        console.log("Station selected:", selectedStation.name);
    // Track analytics, update URL, etc.
    }
});
}),
"[project]/apps/web/src/components/GlobeControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobeControls",
    ()=>GlobeControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function GlobeControls() {
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const { isAutoRotating, setCameraPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect mobile device
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkIfMobile = ()=>{
            setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
        };
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return ()=>window.removeEventListener("resize", checkIfMobile);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        if (controlsRef.current) {
            // Update camera position in store
            setCameraPosition([
                camera.position.x,
                camera.position.y,
                camera.position.z
            ]);
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
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
}),
"[project]/apps/web/src/components/Globe.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>Globe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Earth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Earth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ClusteredStationMarkers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ClusteredStationMarkers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$GlobeControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/GlobeControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stars.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Globe() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen relative overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        0,
                        4
                    ],
                    fov: 60
                },
                gl: {
                    antialias: true,
                    alpha: false
                },
                onCreated: ({ gl })=>{
                    gl.setClearColor("#000000", 1);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.4
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            10,
                            10,
                            10
                        ],
                        intensity: 1
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: null,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stars"], {
                                radius: 300,
                                depth: 60,
                                count: 20000,
                                factor: 7
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Globe.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Earth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Earth"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Globe.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ClusteredStationMarkers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClusteredStationMarkers"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Globe.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$GlobeControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobeControls"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/Globe.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Globe.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 text-white z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-2",
                        children: "Radio Globe"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-75",
                        children: "Explore radio stations around the world"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/Globe.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/Globe.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/Globe.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/services/audioService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/web/src/services/radioStationService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { globalRadioStations } from '../data/globalRadioStations'
__turbopack_context__.s([
    "RadioStationService",
    ()=>RadioStationService,
    "radioStationService",
    ()=>radioStationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioDiscoveryService.ts [app-ssr] (ecmascript)");
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
            const onlineResults = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].searchOnlineStations(query, 30);
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
                const onlineStations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByCountry(countryCode, 50);
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
            const onlineTop = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(limit);
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
            const onlineStations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByTag(genre, 30);
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
            const onlineStations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getStationsByCity(city, 30);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getCountries()
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
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTags()
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
}),
"[project]/apps/web/src/hooks/useModularAudio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModularAudio",
    ()=>useModularAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$audioService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/audioService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioStationService.ts [app-ssr] (ecmascript)");
;
;
;
function useModularAudio(options = {}) {
    const audioServiceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Memoize options to prevent infinite loops
    const memoizedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            volume: options.volume || 0.7,
            autoPlay: options.autoPlay || false,
            retryAttempts: options.retryAttempts || 3,
            retryDelay: options.retryDelay || 2000
        }), [
        options.volume,
        options.autoPlay,
        options.retryAttempts,
        options.retryDelay
    ]);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            isPlaying: false,
            isLoading: false,
            error: null,
            volume: memoizedOptions.volume,
            isMuted: false,
            currentTime: 0,
            state: "idle",
            currentStation: null
        }));
    // Initialize audio service
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        audioServiceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$audioService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioService"]({
            volume: memoizedOptions.volume,
            retryAttempts: memoizedOptions.retryAttempts,
            retryDelay: memoizedOptions.retryDelay
        });
        const service = audioServiceRef.current;
        // Set up event listeners
        service.on("stateChange", (audioState)=>{
            setState((prev)=>({
                    ...prev,
                    state: audioState,
                    isPlaying: audioState === "playing",
                    isLoading: audioState === "loading"
                }));
        });
        service.on("error", (error)=>{
            setState((prev)=>({
                    ...prev,
                    error,
                    isLoading: false,
                    isPlaying: false
                }));
        });
        service.on("volumeChange", (volume)=>{
            setState((prev)=>({
                    ...prev,
                    volume,
                    isMuted: volume === 0
                }));
        });
        service.on("timeUpdate", (currentTime)=>{
            setState((prev)=>({
                    ...prev,
                    currentTime
                }));
        });
        return ()=>{
            service.destroy();
        };
    }, [
        memoizedOptions.volume,
        memoizedOptions.retryAttempts,
        memoizedOptions.retryDelay
    ]);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!audioServiceRef.current) return;
        try {
            await audioServiceRef.current.play();
            setState((prev)=>({
                    ...prev,
                    error: null
                }));
        } catch (error) {
            setState((prev)=>({
                    ...prev,
                    error: "Failed to play audio. Please try again."
                }));
        }
    }, []);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!audioServiceRef.current) return;
        audioServiceRef.current.pause();
    }, []);
    const setVolume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((volume)=>{
        if (!audioServiceRef.current) return;
        audioServiceRef.current.setVolume(volume);
    }, []);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!audioServiceRef.current) return;
        if (state.isMuted) {
            audioServiceRef.current.setVolume(state.volume > 0 ? state.volume : 0.7);
        } else {
            audioServiceRef.current.mute();
        }
    }, [
        state.isMuted,
        state.volume
    ]);
    const loadStation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (station)=>{
        if (!audioServiceRef.current) return;
        try {
            setState((prev)=>({
                    ...prev,
                    error: null,
                    currentStation: station
                }));
            // Get proxied URL to avoid CORS issues
            const streamUrl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioStationService"].getProxiedStreamUrl(station);
            await audioServiceRef.current.loadStation(station, streamUrl);
            // Auto-play if enabled
            if (memoizedOptions.autoPlay) {
                await play();
            }
        } catch (error) {
            setState((prev)=>({
                    ...prev,
                    error: "Failed to load radio station."
                }));
        }
    }, [
        memoizedOptions.autoPlay,
        play
    ]);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setState((prev)=>({
                ...prev,
                error: null
            }));
    }, []);
    const getAudioElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return audioServiceRef.current?.getAudioElement() || null;
    }, []);
    const playerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...state,
            currentStation: audioServiceRef.current?.getCurrentStation() || state.currentStation
        }), [
        state
    ]);
    const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            play,
            pause,
            setVolume,
            toggleMute,
            loadStation,
            clearError,
            getAudioElement
        }), [
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
}),
"[project]/apps/web/src/services/audioVisualizationService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/web/src/components/ModularAudioVisualizer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModularAudioVisualizer",
    ()=>ModularAudioVisualizer,
    "useVisualizationType",
    ()=>useVisualizationType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$audioVisualizationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/audioVisualizationService.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ModularAudioVisualizer({ audioElement, isPlaying, className = "", type = "bars", width = 300, height = 100, colors = {} }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visualizationServiceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSupported, setIsSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentType, setCurrentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(type);
    // Initialize visualization service
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        visualizationServiceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$audioVisualizationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioVisualizationService"]({
            fftSize: type === "waveform" ? 2048 : 256,
            primaryColor: colors.primary || "#60a5fa",
            secondaryColor: colors.secondary || "#3b82f6",
            backgroundColor: colors.background || "rgba(0, 0, 0, 0.1)"
        });
        return ()=>{
            visualizationServiceRef.current?.destroy();
        };
    }, [
        type,
        colors.primary,
        colors.secondary,
        colors.background
    ]);
    // Handle audio element changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!audioElement || !visualizationServiceRef.current) {
            return;
        }
        const success = visualizationServiceRef.current.initialize(audioElement);
        if (!success) {
            setIsSupported(false);
        }
    }, [
        audioElement
    ]);
    // Handle playback state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!visualizationServiceRef.current || !canvasRef.current) {
            return;
        }
        if (isPlaying && isSupported) {
            visualizationServiceRef.current.start(canvasRef.current, currentType);
        } else {
            visualizationServiceRef.current.stop();
        }
        return ()=>{
            visualizationServiceRef.current?.stop();
        };
    }, [
        isPlaying,
        isSupported,
        currentType
    ]);
    // Handle type changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentType(type);
        if (visualizationServiceRef.current) {
            visualizationServiceRef.current.changeType(type);
        }
    }, [
        type
    ]);
    if (!isSupported) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center justify-center ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
            isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-lg shadow-inner pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ModularAudioVisualizer.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            !isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-gray-400 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
function useVisualizationType() {
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("bars");
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
}),
"[project]/apps/web/src/components/ModularAudioPlayer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModularAudioPlayer",
    ()=>ModularAudioPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-ssr] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModularAudio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useModularAudio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioVisualizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ModularAudioVisualizer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ModularAudioPlayer({ className = "", showVisualizer = true, compactMode = false, autoPlay = false }) {
    const selectedStation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobeStore"])((state)=>state.selectedStation);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioState, audioActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModularAudio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useModularAudio"])({
        autoPlay,
        volume: 0.7
    });
    const { currentType, availableTypes, nextType, setType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioVisualizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVisualizationType"])();
    // Load station when selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedStation) {
            audioActions.loadStation(selectedStation);
        }
    }, [
        selectedStation,
        audioActions.loadStation
    ]);
    const formatTime = (time)=>{
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };
    if (!selectedStation) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-sm mb-1",
                    children: "Select a Radio Station"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3 flex-1 min-w-0",
                        children: [
                            !compactMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-white font-semibold truncate ${compactMode ? "text-sm" : ""}`,
                                        children: selectedStation.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setShowSettings(!showSettings),
                        className: "text-white/60 hover:text-white transition-colors p-1 rounded",
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showVisualizer && audioState.isPlaying && !compactMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/60 text-xs",
                                    children: "Audio Visualization"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-1",
                                    children: availableTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioVisualizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModularAudioVisualizer"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: audioState.isPlaying ? audioActions.pause : audioActions.play,
                        disabled: audioState.isLoading,
                        className: `flex-shrink-0 ${compactMode ? "w-10 h-10" : "w-12 h-12"} bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 rounded-full flex items-center justify-center transition-all`,
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: audioState.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${compactMode ? "w-4 h-4" : "w-5 h-5"} border-2 border-white border-t-transparent rounded-full animate-spin`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this) : audioState.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            className: `${compactMode ? "w-4 h-4" : "w-5 h-5"} text-white`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: audioActions.toggleMute,
                                className: "text-white hover:text-blue-300 transition-colors",
                                whileHover: {
                                    scale: 1.1
                                },
                                children: audioState.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                    className: compactMode ? "w-4 h-4" : "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    audioState.isPlaying && !compactMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-0.5",
                                children: [
                                    ...Array(3)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: audioState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1",
                            children: audioState.error
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-sm",
                                        children: "Show Visualizer"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSettings(false),
                                        className: `w-8 h-4 rounded-full transition-colors ${showVisualizer ? "bg-blue-500" : "bg-gray-600"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400",
                                children: [
                                    "Station: ",
                                    selectedStation.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ModularAudioPlayer.tsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this),
                                    "Genre: ",
                                    selectedStation.genre,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
}),
"[project]/apps/web/src/hooks/useUserData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load favorites from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
            if (stored) {
                setFavorites(JSON.parse(stored));
            }
        } catch (e) {
            console.error("Failed to load favorites:", e);
        }
        setIsLoaded(true);
    }, []);
    // Save favorites to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
        }
    }, [
        favorites,
        isLoaded
    ]);
    const addFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((station)=>{
        setFavorites((prev)=>{
            if (prev.some((s)=>s.id === station.id)) return prev;
            return [
                station,
                ...prev
            ];
        });
    }, []);
    const removeFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((stationId)=>{
        setFavorites((prev)=>prev.filter((s)=>s.id !== stationId));
    }, []);
    const isFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((stationId)=>{
        return favorites.some((s)=>s.id === stationId);
    }, [
        favorites
    ]);
    const toggleFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((station)=>{
        if (isFavorite(station.id)) {
            removeFavorite(station.id);
        } else {
            addFavorite(station);
        }
    }, [
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
function useRecentStations() {
    const [recent, setRecent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load recent from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = localStorage.getItem(STORAGE_KEYS.RECENT);
            if (stored) {
                setRecent(JSON.parse(stored));
            }
        } catch (e) {
            console.error("Failed to load recent stations:", e);
        }
        setIsLoaded(true);
    }, []);
    // Save recent to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recent));
        }
    }, [
        recent,
        isLoaded
    ]);
    const addToRecent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((station)=>{
        setRecent((prev)=>{
            // Remove if already exists
            const filtered = prev.filter((s)=>s.id !== station.id);
            // Add to front and limit size
            return [
                station,
                ...filtered
            ].slice(0, MAX_RECENT);
        });
    }, []);
    const clearRecent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setRecent([]);
    }, []);
    return {
        recent,
        addToRecent,
        clearRecent,
        isLoaded
    };
}
function usePreferences() {
    const [preferences, setPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_PREFERENCES);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load preferences from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
    // Save preferences to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(preferences));
        }
    }, [
        preferences,
        isLoaded
    ]);
    const updatePreference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, value)=>{
        setPreferences((prev)=>({
                ...prev,
                [key]: value
            }));
    }, []);
    const addPreferredGenre = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((genre)=>{
        setPreferences((prev)=>({
                ...prev,
                preferredGenres: Array.from(new Set([
                    ...prev.preferredGenres,
                    genre
                ]))
            }));
    }, []);
    const removePreferredGenre = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((genre)=>{
        setPreferences((prev)=>({
                ...prev,
                preferredGenres: prev.preferredGenres.filter((g)=>g !== genre)
            }));
    }, []);
    return {
        preferences,
        updatePreference,
        addPreferredGenre,
        removePreferredGenre,
        isLoaded
    };
}
function useUserData() {
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
}),
"[project]/apps/web/src/hooks/useUserLocation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        location: null,
        isLoading: true,
        error: null,
        permissionDenied: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            navigator.geolocation.getCurrentPosition(async (position)=>{
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
            }, (error)=>{
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
            }, {
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
    }, []);
    return state;
}
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
}),
"[project]/apps/web/src/components/StationPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationPanel",
    ()=>StationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserLocation.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function StationPanel({ station, onClose }) {
    const { isFavorite, toggleFavorite } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFavorites"])();
    const { location } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserLocation"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isStationFavorite = isFavorite(station.id);
    const currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: station.location.timezone || "UTC",
        hour: "2-digit",
        minute: "2-digit"
    });
    // Calculate distance from user
    const distance = location && station.location.lat && station.location.lng ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateDistance"])(location.latitude, location.longitude, station.location.lat, station.location.lng) : null;
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
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"]
        };
        if (bitrate >= 256) return {
            label: "HD",
            color: "text-green-400",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"]
        };
        if (bitrate >= 128) return {
            label: "Good",
            color: "text-blue-400",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"]
        };
        return {
            label: "Low",
            color: "text-yellow-400",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"]
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-3 right-3 p-1.5 rounded-lg hover:bg-white/10 transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 pr-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg text-white truncate",
                                        children: station.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-gray-400 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3.5 h-3.5 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    distance !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-2.5 bg-white/5 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-4 h-4 mx-auto mb-1 text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-white",
                                children: station.listeners >= 1000 ? `${(station.listeners / 1000).toFixed(0)}k` : station.listeners
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-2.5 bg-white/5 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-4 h-4 mx-auto mb-1 text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-white",
                                children: currentTime
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-2.5 bg-white/5 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(quality.icon, {
                                className: `w-4 h-4 mx-auto mb-1 ${quality.color}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-sm font-semibold ${quality.color}`,
                                children: quality.label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            station.genre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5 mb-4",
                children: station.genre.split(",").slice(0, 3).map((genre, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4 text-sm",
                children: station.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Language"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleFavorite(station),
                        className: `flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${isStationFavorite ? "bg-pink-500/20 text-pink-400 border border-pink-500/30" : "bg-white/10 text-white hover:bg-white/20"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShare,
                        className: "flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors",
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4 text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationPanel.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
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
                    station.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: station.website,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center justify-center px-3 py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
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
}),
"[project]/apps/web/src/components/SearchPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchPanel",
    ()=>SearchPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioStationService.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function SearchPanel({ className = "" }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [popularStations, setPopularStations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchFilter, setSearchFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const { selectStation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    // Load popular stations once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchPopular = async ()=>{
            try {
                const stations = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioStationService"].getPopularStations(8);
                setPopularStations(stations);
            } catch (error) {
                console.error("Failed to load popular stations:", error);
            }
        };
        fetchPopular();
    }, []);
    // Enhanced search with filters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer;
        if (searchTerm.length > 2) {
            setIsLoading(true);
            timer = setTimeout(async ()=>{
                let results = [];
                try {
                    switch(searchFilter){
                        case "genre":
                            results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByGenre(searchTerm);
                            break;
                        case "country":
                            results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByCountry(searchTerm);
                            break;
                        case "city":
                            results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioStationService"].getStationsByCity(searchTerm);
                            break;
                        default:
                            results = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioStationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioStationService"].searchStations(searchTerm);
                    }
                    setSearchResults(results.slice(0, 10)); // Limit results
                } catch (error) {
                    console.error("Search error:", error);
                    setSearchResults([]);
                } finally{
                    setIsLoading(false);
                }
            }, 300);
        } else {
            setSearchResults([]);
            setIsLoading(false);
        }
        return ()=>{
            if (timer) clearTimeout(timer);
        };
    }, [
        searchTerm,
        searchFilter
    ]);
    const handleStationSelect = (station)=>{
        selectStation(station);
        setIsOpen(false);
        setSearchTerm("");
        setSearchResults([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-center",
                whileHover: {
                    scale: 1.02
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-3 w-4 h-4 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-3 top-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-b border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    "all",
                                    "genre",
                                    "country",
                                    "city"
                                ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                searchResults.map((station)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>handleStationSelect(station),
                                        className: "w-full p-3 text-left hover:bg-white/10 rounded-lg transition-colors",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-white text-sm truncate",
                                                            children: station.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-400 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 27
                                                                }, this),
                                                                station.location.city,
                                                                ", ",
                                                                station.location.country,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        searchTerm.length === 0 && popularStations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400 px-2 py-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
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
                                popularStations.map((station)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>handleStationSelect(station),
                                        className: "w-full p-3 text-left hover:bg-white/10 rounded-lg transition-colors",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-white text-sm truncate",
                                                            children: station.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        searchTerm.length > 2 && searchResults.length === 0 && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 text-center text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    className: "w-8 h-8 mx-auto mb-2 opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 229,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: "No stations found"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SearchPanel.tsx",
                                    lineNumber: 230,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 border-t border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/apps/web/src/components/StationDirectory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StationDirectory",
    ()=>StationDirectory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-ssr] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useUserLocation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/radioDiscoveryService.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function StationDirectory({ className = "" }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("discover");
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [stations, setStations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { selectedStation, selectStation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const { favorites, isFavorite, toggleFavorite } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFavorites"])();
    const { recent, addToRecent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecentStations"])();
    const { location, isLoading: locationLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserLocation"])();
    // Load stations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadStations = async ()=>{
            setIsLoading(true);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$radioDiscoveryService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radioDiscoveryService"].getTopStations(100);
                setStations(data);
            } catch (error) {
                console.error("Failed to load stations:", error);
            }
            setIsLoading(false);
        };
        loadStations();
    }, []);
    // Get unique genres
    const genres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const allGenres = stations.flatMap((s)=>s.genre?.split(",").map((g)=>g.trim().toLowerCase()) || []);
        return [
            "all",
            ...Array.from(new Set(allGenres)).slice(0, 10)
        ];
    }, [
        stations
    ]);
    // Time-based recommendations
    const timeOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimeOfDay"])();
    const recommendedGenres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimeBasedGenres"])();
    // Sort stations by distance if location available
    const stationsWithDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!location) return stations.map((s)=>({
                station: s,
                distance: null
            }));
        return stations.map((station)=>{
            const distance = station.location.lat && station.location.lng ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateDistance"])(location.latitude, location.longitude, station.location.lat, station.location.lng) : null;
            return {
                station,
                distance
            };
        }).sort((a, b)=>{
            if (a.distance === null) return 1;
            if (b.distance === null) return -1;
            return a.distance - b.distance;
        });
    }, [
        stations,
        location
    ]);
    // Filter stations by genre
    const filteredStations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedGenre === "all") return stationsWithDistance;
        return stationsWithDistance.filter(({ station })=>station.genre?.toLowerCase().includes(selectedGenre));
    }, [
        stationsWithDistance,
        selectedGenre
    ]);
    // Get display data based on active tab
    const displayData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        switch(activeTab){
            case "nearby":
                return filteredStations.slice(0, 20);
            case "favorites":
                return favorites.map((s)=>({
                        station: s,
                        distance: null
                    }));
            case "recent":
                return recent.map((s)=>({
                        station: s,
                        distance: null
                    }));
            case "discover":
            default:
                // Time-based smart discovery
                const timeFiltered = stationsWithDistance.filter(({ station })=>recommendedGenres.some((genre)=>station.genre?.toLowerCase().includes(genre)));
                // Mix time-relevant with popular
                return [
                    ...timeFiltered.slice(0, 5),
                    ...stationsWithDistance.filter((s)=>!timeFiltered.includes(s)).sort((a, b)=>b.station.listeners - a.station.listeners).slice(0, 15)
                ];
        }
    }, [
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
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
        },
        {
            id: "nearby",
            label: "Near Me",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"]
        },
        {
            id: "favorites",
            label: "Favorites",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            count: favorites.length
        },
        {
            id: "recent",
            label: "Recent",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
            count: recent.length
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-white/10 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "w-6 h-6 text-gradient"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-white tracking-tight",
                                                children: "Stations"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 glass px-3 py-2 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 bg-surface-card/50 p-1.5 rounded-xl",
                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm rounded-lg font-medium transition-all ${activeTab === tab.id ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"}`,
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline tracking-wide",
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    tab.count !== undefined && tab.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            (activeTab === "discover" || activeTab === "nearby") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 border-b border-white/5 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowFilters(!showFilters),
                        className: "flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Filter by genre"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 pt-2",
                                children: genres.map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            activeTab === "discover" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "w-3.5 h-3.5 text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Recommended for ",
                                timeOfDay,
                                ":",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            activeTab === "nearby" && location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            className: "w-3.5 h-3.5 text-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Stations near",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-32",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                }, this) : displayData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                            className: "w-8 h-8 mx-auto mb-2 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-white/5",
                    children: displayData.map(({ station, distance })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StationListItem, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t border-white/10 bg-white/5 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                displayData.length,
                                " stations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function StationListItem({ station, distance, isSelected, isFavorite, onSelect, onToggleFavorite }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `p-3 cursor-pointer transition-colors ${isSelected ? "bg-blue-500/20" : "hover:bg-white/5"}`,
        onClick: onSelect,
        whileTap: {
            scale: 0.98
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isSelected ? "bg-blue-500" : "bg-gradient-to-br from-purple-500/30 to-blue-500/30"}`,
                    children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-0.5 h-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 bg-white rounded-full animate-pulse",
                                style: {
                                    height: "40%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                lineNumber: 396,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs text-gray-500 mt-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: station.location.country
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                station.genre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 flex-shrink-0",
                    children: [
                        distance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full",
                            children: distance
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/StationDirectory.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onToggleFavorite();
                            },
                            className: `p-1.5 rounded-full transition-colors ${isFavorite ? "text-pink-400 bg-pink-500/20" : "text-gray-500 hover:text-pink-400 hover:bg-white/5"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
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
}),
"[project]/apps/web/src/components/UserPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserPanel",
    ()=>UserPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function UserPanel() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Mock auth state
    if (!isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button-secondary text-sm",
                    children: "Sign In"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-3 p-3 glass rounded-lg hover:bg-white/20 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-white",
                                children: "John Doe"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-white",
                                                children: "John Doe"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400",
                                                children: "john@example.com"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "Favorites"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/10 my-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors text-red-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/UserPanel.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/apps/web/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Globe$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Globe.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ModularAudioPlayer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/StationPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SearchPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationDirectory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/StationDirectory.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UserPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/UserPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/globe-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
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
    const { selectedStation, addMarker, markers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$globe$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobeStore"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDirectory, setShowDirectory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMobileMenu, setShowMobileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect mobile device and screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkIfMobile = ()=>{
            setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
        };
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return ()=>window.removeEventListener("resize", checkIfMobile);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative h-screen w-screen overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Globe$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Globe"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex items-center gap-3 glass rounded-2xl px-6 py-3",
                            whileHover: {
                                scale: 1.02
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                            className: "w-8 h-8 text-gradient"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 animate-pulse-glow rounded-full bg-blue-400/20"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gradient tracking-tight",
                                            children: "Radio Globe"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 font-mono",
                                            children: "Discover global radio stations"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchPanel"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setShowDirectory(!showDirectory),
                                    className: `glass px-6 py-3 rounded-xl flex items-center gap-3 transition-all font-medium ${showDirectory ? "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 border-cyan-400/30" : "text-white hover:bg-white/10 border-white/10"}`,
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm tracking-wide",
                                            children: "Directory"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-mono opacity-60",
                                            children: markers.length
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: ()=>setShowMobileMenu(!showMobileMenu),
                            className: "glass p-3 rounded-lg text-white",
                            whileHover: {
                                scale: 1.05
                            },
                            children: showMobileMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 93,
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
            showDirectory && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationDirectory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StationDirectory"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this),
            selectedStation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StationPanel"], {
                    station: selectedStation
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UserPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserPanel"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 146,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-2xl mx-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ModularAudioPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModularAudioPlayer"], {
                                    showVisualizer: !isMobile,
                                    compactMode: isMobile,
                                    autoPlay: false
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setShowDirectory(!showDirectory),
                                    className: `glass p-3 rounded-lg transition-colors ${showDirectory ? "bg-blue-500/20 text-blue-300" : "text-white"}`,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this),
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "glass px-6 py-4 rounded-2xl flex-shrink-0 border border-white/10",
                                whileHover: {
                                    scale: 1.02
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400 font-mono uppercase tracking-wide",
                                            children: "Global Stations"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-gradient mt-1",
                                            children: markers.length
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            showMobileMenu && isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/80",
                        onClick: ()=>setShowMobileMenu(false)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-white",
                                            children: "Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowMobileMenu(false),
                                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SearchPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchPanel"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>{
                                                setShowDirectory(!showDirectory);
                                                setShowMobileMenu(false);
                                            },
                                            className: "w-full glass p-4 rounded-lg flex items-center gap-3 text-left",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                    className: "w-5 h-5 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium text-white",
                                                            children: "Station Directory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-400",
                                                            children: "Browse all stations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$UserPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserPanel"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this),
            showDirectory && isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/80",
                        onClick: ()=>setShowDirectory(false)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$StationDirectory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StationDirectory"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white text-lg",
                            children: "Loading Radio Globe..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Connecting to global stations..."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_src_1cb261b3._.js.map