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
        "green-complement": "#5da4a8",
        "green-clear": "#a1dbc3",
        "green-dark": "#475751",
      }
    },
  },
  plugins: [],
}
