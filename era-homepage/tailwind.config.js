/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0D0D0D",     // Jet Black
        textPrimary: "#FFFFFF",   // White
        accent: "#D4AF37",        // Champagne Gold
        textSecondary: "#B0B0B0", // Soft Gray
        border: "#1F1F1F",        // Dark Gray
        star: "#F5C518",          // Warm Yellow-Gold
        altMobileBg: "#FAF8F5"    // Cream/Off White
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}