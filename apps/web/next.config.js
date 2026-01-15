/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@radio-globe/ui", "@radio-globe/api"],
  outputFileTracingRoot: "/Users/ezekiel.mogaka/Desktop/Code/radio-globe-next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  // Turbopack configuration for Next.js 16+
  turbopack: {
    rules: {
      "*.wasm": {
        loaders: ["file-loader"],
      },
      "*.glsl": ["raw-loader"],
      "*.vs": ["raw-loader"],
      "*.fs": ["raw-loader"],
      "*.vert": ["raw-loader"],
      "*.frag": ["raw-loader"],
    },
  },
  webpack: (config, { isServer }) => {
    // Handle Three.js modules (keeping for legacy compatibility)
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader"],
    });

    // Configure Cesium for client-side only
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        Buffer: false,
        http: false,
        https: false,
        zlib: false,
        url: false,
      };

      // Handle Cesium's WASM and other assets
      config.module.rules.push({
        test: /\.wasm$/,
        type: "asset/resource",
      });

      // Copy Cesium static assets
      // config.plugins.push(
      //   new (require('copy-webpack-plugin'))({
      //     patterns: [
      //       {
      //         from: '../../node_modules/cesium/Build/Cesium/Workers',
      //         to: 'static/js/Workers',
      //       },
      //       {
      //         from: '../../node_modules/cesium/Build/Cesium/ThirdParty',
      //         to: 'static/js/ThirdParty',
      //       },
      //       {
      //         from: '../../node_modules/cesium/Build/Cesium/Assets',
      //         to: 'static/js/Assets',
      //       },
      //       {
      //         from: '../../node_modules/cesium/Build/Cesium/Widgets',
      //         to: 'static/css/Widgets',
      //       },
      //     ],
      //   })
      // )

      // Define Cesium base URL
      config.plugins.push(
        new (require("webpack").DefinePlugin)({
          CESIUM_BASE_URL: JSON.stringify("/cesium/"),
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
