/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-2': '#0b1d27',
        'dark-blue': '#374758',
        'star-yellow': '#FFE26E'
      }
    },
  },
  plugins: [],
}