/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        bodyFont: ["Inter", "Poppins", "sans-serif"],
        titleFont: ["Plus Jakarta Sans", "Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: {
          DEFAULT: "#0f172a", // Slate 900
          light: "#f8fafc",   // Slate 50
        },
        surfaceColor: {
          DEFAULT: "#1e293b", // Slate 800
          light: "#ffffff",
        },
        surfaceMuted: {
          DEFAULT: "#334155", // Slate 700
          light: "#f1f5f9",   // Slate 100
        },
        lightText: "#94a3b8", // Slate 400
        headingColor: {
          DEFAULT: "#f1f5f9", // Slate 100
          light: "#0f172a",   // Slate 900
        },
        designColor: "#0284c7", // Sky 600
        designColorHover: "#0369a1", // Sky 700
        designColorDark: "#38bdf8", // Sky 400
        accentCyan: "#06b6d4",
      },
      boxShadow: {
        cardDark: "0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.2)",
        cardLight: "0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        cardHoverDark: "0 12px 30px -4px rgba(0, 0, 0, 0.6), 0 4px 12px -2px rgba(0, 0, 0, 0.3)",
        cardHoverLight: "0 12px 30px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
