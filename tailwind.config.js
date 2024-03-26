/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#03204C",
        "hover-text": "#3bc4e2",
        "hamburger-hover": "rgb(55,65,81)",
      },
    },
  },
  plugins: [],
};
