/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html",
    "./public/output.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Outfit"],
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  plugins: [],
};
