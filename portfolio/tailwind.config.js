/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Farro, sans-serif'],
    },
    backgroundImage: {
      'noise': "url(../public/background.png)",
      'noise-full': "url(../public/backgroundFull.png)",
      'noise-x': "url(../public/backgroundWithoutY.png)",
    },
  },
  plugins: [],
}