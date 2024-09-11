import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { createPreset } from "fumadocs-ui/tailwind-plugin";

export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  presets: [createPreset({ preset: "vitepress", addGlobalColors: true })],
} satisfies Config;
