const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'a': {
          'color': colors.blue[600]
        },
        'a:hover': {
          'cursor': 'pointer'
        }
      })
    })
  ],
};
