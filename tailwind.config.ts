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
        brand: {
          dark: "#0D1B2A",      // Background Utama
          card: "#1B263B",      // Background Kotak Bento
          accent: "#F9D923",    // Kuning Cerah (Dark Mode)
          accentLight: "#E6B800" // Kuning Emas (Light Mode)
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        
      },
  
    },
  },
  plugins: [],
};
export default config;