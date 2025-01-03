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
          700: '#2E482C',
          800: '#16281F',
          900: '#0F1C15',
          950: '#030504',
        }
      },
      container: {
        center: true,
        padding: {
          default: '0.5rem',
          sm: '1rem',
        }
      }
    },
  },
  plugins: [],
}

