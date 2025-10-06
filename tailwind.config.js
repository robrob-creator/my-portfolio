/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        secondary: "#3b82f6", // Professional blue
        accent: "#06b6d4", // Cyan
        "accent-light": "#67e8f9", // Light cyan
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)",
        strong:
          "0 10px 40px -10px rgba(0, 0, 0, 0.2), 0 20px 50px -10px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-strong": "0 0 30px rgba(59, 130, 246, 0.5)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
