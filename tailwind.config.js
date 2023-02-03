/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/pages/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "night"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
