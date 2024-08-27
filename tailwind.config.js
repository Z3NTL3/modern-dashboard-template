/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./assets/**/*.{js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        modern: {       
          "base-100": "#F5F6F9",
          "base-200": "#151C28"
          },
        },
      ],
  }
}

