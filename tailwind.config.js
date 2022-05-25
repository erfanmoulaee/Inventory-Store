module.exports = {
  content: ["./public/**/*.{html,js}", "./src/js/theme.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazir"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
