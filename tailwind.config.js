/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'app-green': {
          200: '#ACEF75',
          300: '#91EE77',
          400: '#17E880',
          500: '#2E482C',
          600: '#16281F',
          700: '#0F1C15',
          800: '#030504',
        }
      }
    },
  },
  plugins: [],
}

