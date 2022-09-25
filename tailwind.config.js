const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
      fontFamily: {
        'primary': ['Poppins', ...defaultTheme.fontFamily.sans],
        'secondary': ['Open Sans', ...defaultTheme.fontFamily.sans]
    },
    
    maxWidth: {
      'container': '1260px'
    },
 
    colors: {
      'primary_color': '#6A983C',
      'secondary': '#46760A',
      'third': '#575757',
      'grey': '#A9A9A9',
      'grey_2': '#D1D1D1',
      'ligth_grey': '#F9F9F9',
      'orange': '#E6704B',
      'white': '#ffffff',
      'black': '#151515',
      'light-green': '#F4F8EC'
    },

    container: {
      center : true,
    },

    fontSize: {
      'sm': '0.75rem',
      'sm_2' : '0.875rem',
      'base': '15px',
      'lg': '1.5rem',
      '18': '1.125rem'
    },

    extend: {
      width: {
        '517': '32.313rem',
        '65' : '268px',
      },

      gap: {
        '18': '1.157rem',
        '200' : '200px'
      },

      margin: {
        '104' : '104px'
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
}
