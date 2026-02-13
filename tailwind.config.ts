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
        primary: "#0a0f1c", // Army Deep Navy Black
        secondary: "#d4af37", // Accent Gold
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
        background: "#0a0f1c",
        foreground: "#cbd5e1",
        navy: {
          900: "#0a0f1c", // Deep Navy Black
          800: "#10172a", // Card Background
          700: "#1e293b", // Lighter Navy
        },
        gold: {
          DEFAULT: "#d4af37",
          400: "#e6c35c",
          500: "#d4af37",
          600: "#b59230",
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
