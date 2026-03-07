/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f7f1e6",
        secondary: "#7e6a56",
        tertiary: "#fffaf1",
        "black-100": "#efe3d1",
        "black-200": "#e5d5bf",
        "white-100": "#3d2d21",
      },
      boxShadow: {
        card: "0px 22px 70px -15px rgba(111, 83, 58, 0.28)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
