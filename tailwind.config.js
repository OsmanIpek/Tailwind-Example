/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      margin:{
        '120': '30rem',
        '140': '35rem',
        '68': '17rem',
      },
      borderWidth: {
        '6': '6px',
        '12': '12px',
      }
  },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),],
}
