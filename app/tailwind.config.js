const plugin = require('tailwindcss/plugin')

const defaultSpacing = '8px 0'
const titleSpacing = '0 0 16px 0'

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    translate: {
      full: '200%',
    },
    extend: {
      fontSize: {
        tiny: '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl'), margin: titleSpacing },
        h2: { margin: titleSpacing },
        h3: { margin: defaultSpacing },
        h4: { margin: defaultSpacing },
        h5: { margin: defaultSpacing },
        p: { margin: defaultSpacing },
      })
    }),
  ],
}
