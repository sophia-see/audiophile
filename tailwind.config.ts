import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "brown": "#D87D4A",
        "light-brown": "#FBAF85",
        "secondary-black": "#101010",
        "gray": "#F1F1F1",
        "light-gray": "#FAFAFA",

        "error": "#CD2C2C",
        "input": "#CFCFCF",
      },
      spacing: {
        'lg-custom': '80px',
        'xl-custom': '165px',
      },
      screens: {
        'xl-1440': '1440px', // Custom breakpoint for 1440px
      },
    },
  },
  safelist: [
    {
      pattern: /^text-/, 
    },
    {
      pattern: /^bg-/, 
    },
    {
      pattern: /^border-/,
    },
    {
      pattern: /^stroke-/,
    },
  ],
  plugins: [],
} satisfies Config;
