import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",   // ✅ ditambahin di sini, format yang benar
        foreground: "var(--foreground)",   // ✅ ditambahin di sini, format yang benar
        brand: {
          dark: "#120f16",
          card: "#1B263B",

          accent: "#A3E635",
          accentLight: "#BEF264",
          accentBorder: "#84CC16",

          accentOnLight: "#4D7C0F",
          accentOnLightHover: "#3F6212",
          accentBorderOnLight: "#65A30D",

          textPrimary: "#F4F4F5",
          textSecondary: "#D4D4D8",
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;