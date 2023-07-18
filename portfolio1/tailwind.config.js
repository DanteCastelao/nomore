/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "IBM-Plex-Sans": ['"IBM Plex Sans"', 'sans-serif'],
      "Farro": ['"Farro"', 'serif'],
    },
    backgroundImage: {
      'noise': "url('./assets/noise-background.png')"
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [],
}