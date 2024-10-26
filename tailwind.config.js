/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#A1223B",
        secondary: "#FCF7F7",
      },
      fontFamily: {
        "cairo": ["Cairo", "Almarai", "Montserrat"],
        "almarai": ["Almarai", "Cairo", "Montserrat"],
        "montserrat": ["Montserrat", "Cairo", "Almarai"],
      }
    },
  },
  plugins: [],
}

{/* #A1223B */}