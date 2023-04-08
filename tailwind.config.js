/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '100': '10rem',
      },
      backgroundColor: {
        'dark-green': '#264653'
      }
    },
  },
  plugins: [],
}
