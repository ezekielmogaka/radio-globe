/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#0066ff",
          600: "#0052cc",
          700: "#1d4ed8",
        },
        accent: {
          cyan: "#00d4ff",
          purple: "#8b5cf6",
        },
        surface: {
          dark: "#0a0a0b",
          card: "#1a1a1c", 
          hover: "#2a2a2e",
        }
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { "box-shadow": "0 0 0 0 rgba(59, 130, 246, 0.4)" },
          "50%": { "box-shadow": "0 0 0 8px transparent" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1", 
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
