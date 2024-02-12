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
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
    },
  },
  presets: [createPreset()],
} satisfies Config;
