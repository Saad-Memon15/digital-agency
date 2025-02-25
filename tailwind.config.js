/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bootFont: ["Poppins", "sans-serif"], // Google Font
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
