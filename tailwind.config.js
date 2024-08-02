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
        lightPinkText: "0 5px 20px #C8759F",
        purpleShadow: "0 5px 20px #A15EE4",
        lightBlueShadow: "0 5px 20px #5582E6",
      },
    },
  },
  plugins: [],
};
