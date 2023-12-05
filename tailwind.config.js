/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'r': "url('../images/R.png')",
        'r2': "url('../images/R2.png')",
        'city': "url('../images/home/city.png')",
        'banner': "url('../images/home/banner.png')"
      },
      backgroundSize: {
        '1000': '1000px'
      },
      fontFamily: {
        'yekan': ['Yekan', 'sans-serif'],
        'modam': ['Modam', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
      },
      fontSize: {
        '2xs': '12px',
        xs: '13px',
        sm: '14px',
        '2xl': '22px'
      },
      borderWidth: {
        3:'3px',
        5:'5px',
        6:'6px',
        8:'8px',
        12:'12px'
      },
      borderRadius: {
        "lg":'10px',
        '2xl': '15px',
        '3xl': '20px',
        '4xl': '30px',
        '5xl': '50px',
      },
      boxShadow: {
        'light': '0 0 20px 0 rgba(0, 0, 0, 0.07)',
      },
      height:{
        .75: '3px',
        4.5:'1.125rem',
        18: '4.5rem',
        100: '25rem'
      },
      width:{
        'screen/2':'50vw'
      },
      maxHeight: {
        '100': '25rem',
      },
      maxWidth: {
        '2xs': '12rem',
      },
      colors: {
        blue: {
          50: '#f2f2fa',
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
        },
        neutral:{
          100:"#f7f7f7",
          150:"#f2f2f2",
          200:'#efefef',
          300:'#e6e6e6',
          350:'#dadada'
        },
        violet:{
          500:'#6b4ded'
        }
      }
    }
  },
  plugins: [],
}

