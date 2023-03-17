/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-pic": "url('/flamingo.jpg')",
        "mare-pic": "url('/mare.JPG')",
        "turk-steps": "url('/turksteps.jpg')",
        "introduction-pic": "url('/introduction.jpg')",
        "whatwe-pic": "url('/whatwe.png')",
        "intro-back": "url('/leaf.jpg')",
        "logo-leaf": "url('/logoLeaf.png')",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      sans: ["Helvetica Neue"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f8fafc",
      black: "#18181b",
      white: "rgb(255 255 255)",
      orange: "rgb(146 64 14)",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      green: "rgb(22 101 52)",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
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
