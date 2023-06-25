/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Farro, sans-serif'],
    },
    backgroundImage: {
      'noise': "url(../public/background.png)",
    },
  },
  plugins: [],
}