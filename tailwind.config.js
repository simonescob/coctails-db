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

        "pink-drink": "#dfbed8",
        "green-drink": "#c5dba1",
        "skin-drink": "#dab5a0",

      }
    },
  },
  plugins: [],
}
