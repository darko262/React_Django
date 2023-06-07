/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'inset 0px 0px 25px #1479EA'
      },
      webkittextstroke2:{
        'webkit':'.7px white' 
      }
    },
  },
  plugins: [],
}