module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "november-yellow": "#fcb81a",
        "fall-blue": "#00335c",
        "september-green": "#215738",
        "october-red": "#eb5e1c",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Antique", "sans-serif"],
    },
  },
  plugins: [],
};
