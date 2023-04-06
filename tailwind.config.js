/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./contents/**/*.mdx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-dark-aware")],
};
