/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azull': '#022859',
        'blu': '#010D26',
        'wht': '#FFFFFF',
        'but': '#1A1E26',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

