import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#00f5ff",
        "neon-purple": "#bf00ff",
        "neon-green": "#39ff14",
        "dark-900": "#060612",
        "dark-800": "#0d0d1f",
        "dark-700": "#13132b",
        "dark-600": "#1a1a38",
        "dark-500": "#252550",
        "card-bg": "#111128",
      },
      fontFamily: {
        display: ["'Exo 2'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #060612 0%, #0d0d2b 40%, #1a0a2e 70%, #060612 100%)",
        "card-gradient":
          "linear-gradient(145deg, #111128 0%, #1a1a38 100%)",
        "neon-gradient":
          "linear-gradient(90deg, #00f5ff, #bf00ff)",
        "purple-glow":
          "radial-gradient(ellipse at center, rgba(191,0,255,0.15) 0%, transparent 70%)",
        "cyan-glow":
          "radial-gradient(ellipse at center, rgba(0,245,255,0.1) 0%, transparent 70%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0,245,255,0.4), 0 0 40px rgba(0,245,255,0.2)",
        "neon-purple": "0 0 20px rgba(191,0,255,0.4), 0 0 40px rgba(191,0,255,0.2)",
        "card-hover": "0 8px 40px rgba(0,245,255,0.15)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "from": { boxShadow: "0 0 10px rgba(0,245,255,0.3)" },
          "to": { boxShadow: "0 0 30px rgba(0,245,255,0.7), 0 0 60px rgba(0,245,255,0.3)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
