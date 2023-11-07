/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'yekan': ['Yekan', 'sans-serif']
      },
      fontSize: {
        xs: '13px',
        sm: '15px',
      },
      colors: {
        blue: {
          50: '#f4f4fb',
          100: '#e6e7fe',
          200: '#cecefd',
          300: '#b5b6fd',
          400: '#8385fb',
          500: '#5255fa',
          600: '#2e31f8',
          700: '#070adf',
          800: '#0508ad',
          900: '#04067c',
          950: '#02034a',
        }
      }
    }
  },
  plugins: [],
}

