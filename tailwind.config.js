/** @type {import('tailwindcss').Config} */
const defaultTheme =require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width:{
        '400': '25rem',
        '500': '30rem',
        '570': '35rem',
        '700': '44rem'
      },
      height:{
        '600': '38rem',
      },
      colors:{
        green:{
          950: "#17A267",
        },
        facebook:{
          100: "#4c69ba"
        },
      },
      fontFamily:
      {
        "noto": ['Noto Naskh Arabic', ...defaultTheme.fontFamily.sans],
      } 
     },
  },
  plugins: [],
}
