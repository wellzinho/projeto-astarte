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
        "sapphire-deep": "#071C3D",
        "sapphire-night": "#0B2E59",
        "sapphire-glow": "#175A8F",
        gold: {
          DEFAULT: "#C6A15B",
          light: "#E0C68A",
          dark: "#A8895E",
        },
        paper: "#F5F0E7",
        warm: "#FFFDF8",
        ink: "#111827",
        cream: "#F5F0E7",
        midnight: "#071C3D",
        section: "#F8F4EC",
        sapphire: {
          DEFAULT: "#0B2E59",
          bright: "#175A8F",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 18px 50px -20px rgba(7, 28, 61, 0.35)",
        soft: "0 8px 28px -10px rgba(7, 28, 61, 0.18)",
        glow: "0 0 40px rgba(198, 161, 91, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
