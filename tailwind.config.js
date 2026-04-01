/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sporty/Athletic Professional Cycling Theme
        cycling: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#bae6ff",
          300: "#7dd3ff",
          400: "#38bdf8",
          500: "#0ea5e9", // Primary - Professional blue
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c3d66",
        },
        trail: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80", // Secondary accent - Trail green
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
