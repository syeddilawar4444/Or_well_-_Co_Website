/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    fontFamily: {
      heading: 'Poppins'
    },
    container: {
      padding: {
        DEFAULT: "0.6rem",
        lg: "3rem", 
      },
    },
    screens: {
      xsm: "320px",
      mm: "375px",
      lm: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [],
}