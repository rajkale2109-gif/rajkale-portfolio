import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0D14",
          50: "#F5F6F8",
          100: "#E7E9ED",
          200: "#C7CCD6",
          300: "#9AA2B2",
          400: "#6B7385",
          500: "#4A5164",
          600: "#353A4A",
          700: "#242835",
          800: "#161923",
          900: "#0F1119",
          950: "#0A0D14",
        },
        parchment: "#EDEEF2",
        amber: {
          DEFAULT: "#D4A857",
          light: "#E6C888",
          dark: "#B48A3C",
        },
        teal: {
          DEFAULT: "#4FD1C5",
          light: "#7EE0D6",
          dark: "#2FA89C",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      animation: {
        "spec-scan": "spec-scan 3s linear infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-slower": "float-slow 12s ease-in-out infinite",
      },
      keyframes: {
        "spec-scan": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
