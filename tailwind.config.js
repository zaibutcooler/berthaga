/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,js}", "./components/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "sans-serif"],
        sans: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
