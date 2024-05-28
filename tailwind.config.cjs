/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gul500: "#EDE937",
      blå400: "#0081A8",
      blå500: "#004155",
      lyseblå200: "#E2EAEE",
      lyseblå800: "#3B5563",
      grøn100: "#D3E4E0",
      lysegrøn700: "#648C7F",
      lysegrøn300: "#D8E3E0",
      lysebrun100: "#E0DAD6",
      lysebrun50: "#F0ECEB",
    },
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },

  plugins: [],
};
