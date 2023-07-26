/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "bgd-primary": "#efece5",
        "txt-primary": "#5c4d4d",
        "secondary": "#475751",
        "gree-complement": "#5da4a8",
        "gree-clear": "#a1dbc3"
      }
    },
  },
  plugins: [],
}
