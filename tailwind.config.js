const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./contents/**/*.mdx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"__Synonym__"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-dark-aware")],
};
