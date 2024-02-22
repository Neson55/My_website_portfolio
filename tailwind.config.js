/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '300': '58.6rem'
      }
    },
  },
  plugins: [],
}
