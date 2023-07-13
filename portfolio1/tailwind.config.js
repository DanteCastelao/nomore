/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "IBM-Plex-Sans": ['"IBM Plex Sans"', 'sans-serif'],
    },
    backgroundImage: {
      'noise': "url('./assets/noise-background.png')"
    },
  },
  plugins: [],
}