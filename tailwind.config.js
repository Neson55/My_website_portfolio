/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '240px', 'max': '767px'},}
    
  },
  plugins: [    
    require('./node_modules/tailwind-percentage-heights-plugin')()
  ],
}
