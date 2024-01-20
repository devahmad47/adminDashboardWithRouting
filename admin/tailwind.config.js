/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js','./src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, 
  theme: {
  },
  variants: {
     extend: {
      colors:{
        "dark-purple": "#081A51",
"light-white":"rgb(255,255,255,0.18)",
      },
      throwIfNamespace: false,
     }
  },
  plugins:[require('@tailwindcss/forms'), require('flowbite/plugin')]
 }


