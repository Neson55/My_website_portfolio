/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '240px', 'max': '500px'},
      'm': {'min': '501px', 'max': '865px'},}
    
  },
  plugins: [    
    require('./node_modules/tailwind-percentage-heights-plugin')()
  ],
  darkMode: 'selector',
}
