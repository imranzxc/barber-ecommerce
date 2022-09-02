/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      "xs": "360px",
      ...defaultTheme.screens,
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      colors: {
        brown: "#d79468;",
      },
    
    },
  },
  plugins: [],
}
