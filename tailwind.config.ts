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
        midnight: "#0A1128",
        ink: "#111111",
        cream: "#FDFBF7",
        section: "#F8F9FA",
        gold: {
          DEFAULT: "#C5A880",
          light: "#E5BA73",
          dark: "#A8895E",
        },
        sapphire: {
          DEFAULT: "#1A365D",
          bright: "#2B6CB0",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 12px 40px -12px rgba(10, 17, 40, 0.15)",
        soft: "0 4px 24px -4px rgba(10, 17, 40, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
