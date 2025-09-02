/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#5937e0",
        black: "#000000",
        yellow: "#ff9e0c",
        gray: "#fafafa",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
