/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      body: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('./assets/bg.webp')",
      }),
    },
    colors: {
      colors,
      white: colors.white,
      gray: colors.coolGray,
      bluegray: colors.blueGray,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.blue,
      customDarkBlue: "#0B4F6C",
      customDarkerBlue: "#073b52",
      transparent: colors.transparent,
    },
  },
  plugins: [],
};
