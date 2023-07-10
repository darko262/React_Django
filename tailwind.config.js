/** @type {import('tailwindcss').Config} */
// import { config } from "/src/assets/img/fondo";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // mask: {
      //   '-webkit-mask-image': 'radial-gradient(circle at center, transparent 100px, black 200px)',
      //   'mask-image': 'radial-gradient(circle at center, transparent 100px, black 200px);',
      // },
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