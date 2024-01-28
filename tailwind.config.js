/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-grey-50)",
        secondary: "var(--color-grey-0)",
        borderColor: "var(--color-grey-100)",
        textColor: "var(--color-grey-600)",
        hoverText: "var( --color-grey-400)",
      },
    },
  },
  plugins: [],
};
