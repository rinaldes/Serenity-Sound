import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        charcoal: "#333333",
        lavender: "#A76BCE",
        "light-lavender": "#EAE6F7",
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
