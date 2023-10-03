/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      alata: ["var(--font-Alata)"],
      saira_extra_condensed: ["var(--font-saira_extra_condensed)"],
    }
  },
  plugins: [],
}

