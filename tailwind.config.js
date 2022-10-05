/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary_purple: "#7D4AEA", primary_orange: "#F37C34" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
