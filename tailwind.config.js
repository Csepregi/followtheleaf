/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-pic": "url('/coverleaf.jpg')",
        "introduction-pic": "url('/introduction.jpg')",
        "whatwe-pic": "url('/whatwe.png')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f8fafc",
      black: "#18181b",
      white: "rgb(255 255 255)",
      orange: "rgb(180 83 9)",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  plugins: [
    "@tailwindcss/aspect-ratio",
    function ({ addComponents }) {
      const navbar = {
        ".navbar": {
          position: "sticky",
          top: 0,
          padding: "8px",
          boxShadow: "0px 2px 5px hsl(0deg 0% 0% / 0.2)",
          display: "flex",
          justifyContent: "start",
          background: "white",
          transition: "transform 350ms",
        },
      };
      addComponents(navbar);
    },
  ],
};
