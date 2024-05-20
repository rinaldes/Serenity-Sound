import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        charcoal: "#333333",
        lavender: "#A76BCE",
        "light-lavender": "#e6e6fa",
        "dark-lavender": "#70539f",
        "white-lavender": "#f7f7fd",
        "black-lavender": "#4c3f7b",
        "pale-yellow": "#fff0c7",
        "light-green": "#c2f0f0",
        "soft-blue": "#b2d7ff",
        scrollShadow: "#FF0000",
      },
      fontFamily: {
        body: ["var(--font-body)"],
        title: ["var(--font-title)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
