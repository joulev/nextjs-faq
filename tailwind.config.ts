import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { docsUi, docsUiPlugins } from "next-docs-ui/tailwind-plugin";

export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/next-docs-ui/dist/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [...docsUiPlugins, docsUi],
} satisfies Config;
