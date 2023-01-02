/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
      colors: {
        gray: {
          100: '#EEEEEE',
          700: '#393E46',
        },
        cyan: {
          800: '#0E5E6F',
        },
        lime: {
          700: '#008A00',
        },
        red: {
          800: '#A20025',
        },
      },
    },
  },
  plugins: [],
}
