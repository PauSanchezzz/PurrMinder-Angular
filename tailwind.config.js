/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        lightPinkSecond: "#F6D4E7",
        darkPinkText: "#660C44",
        lightPink: "#C8759F",
      },
      dropShadow: {
        darkPinkText: "0 5px 20px #660C44",
      },
    },
  },
  plugins: [],
};
