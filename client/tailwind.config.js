/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      // Twitter Colors
      'blue': '#1DA1F2',
      'white': '#F5F8FA'
      }
    },
  },
  plugins: [],
}