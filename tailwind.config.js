/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      's': {'min': '0px', 'max': '374px'},
      'sm': {'min': '375px', 'max': '500px'},
      'm': {'min': '501px', 'max': '1450px'},
      tall: { 'max': '760px'},
    }
    
  },
  plugins: [    
    require('./node_modules/tailwind-percentage-heights-plugin')()
  ],
  darkMode: 'selector',
}
