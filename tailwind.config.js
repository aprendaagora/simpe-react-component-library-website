/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
       'spin-slow': 'spin 7s linear infinite',
      }
    },
  },
  plugins: [],
  important: true
}
