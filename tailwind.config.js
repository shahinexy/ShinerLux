/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#114232',
        secondary: '#87A922'
      },
      fontFamily: {
        'roboto': '"Roboto Slab", serif'
      }
    },
  },
  plugins: [require("daisyui")],
}

