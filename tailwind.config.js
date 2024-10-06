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
        primary: "#DDBE81",
        secondary: "#272E38",
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