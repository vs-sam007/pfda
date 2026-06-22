import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B2620", // Deep Army Green
        secondary: "#FACC15", // Premium Yellow
        accent: "#ff3b3b", // CTA Red
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        background: "#1B2620",
        foreground: "#cbd5e1",
        navy: {
          900: "#1B2620", // Deep Army Green
          800: "#24332B", // Card Background
          700: "#2E4035", // Lighter Army Green
        },
        gold: {
          DEFAULT: "#FACC15",
          400: "#FDE047",
          500: "#FACC15",
          600: "#EAB308",
        },
        red: {
          cta: "#ff3b3b",
          hover: "#d93333",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
