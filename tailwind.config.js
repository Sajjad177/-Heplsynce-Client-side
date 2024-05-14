/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: "'Roboto', sans-serif",
        shadows: "'Shadows Into Light', cursive",
      },
    },
  },
  plugins: [require('daisyui', 'flowbite'),],
}

