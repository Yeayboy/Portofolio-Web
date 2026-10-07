/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "comic-black": "#0a0a0a",
        "comic-yellow": "#FFE135",
        "comic-red": "#e63946",
        "comic-blue": "#1e40af",
        "comic-dark": "#0d1b2a",
        "comic-cream": "#FFF8E7",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        comic: "4px 4px 0px 0px #0a0a0a",
        "comic-lg": "6px 6px 0px 0px #0a0a0a",
        "comic-xl": "8px 8px 0px 0px #0a0a0a",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
