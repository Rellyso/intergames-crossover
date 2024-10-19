/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      'inter': ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui']
    },

    extend: {
      colors: {
        crossover: '#009340FF'
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
}
