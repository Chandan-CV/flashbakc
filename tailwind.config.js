import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js', "./node_modules/flowbite/**/*.js",flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
        "url('/src/assets/images/tj.svg')",
        newCollection:
          "url('src/assets/images/actualtj.svg')",
          aboutbrand :
          "url('src/assets/images/about.svg')",
          "texture":
          "url('src/assets/images/aboutus/dust scratches.png')",
          "footertext":
          "url('src/assets/images/aboutus/dust scratches1.png')",
          "mywed" : 
          "url('src/assets/images/mywed.png')",
      },
      theme: {
        fontFamily: {
          boldy: ["boldy", "sans-serif"],
          oswald: ["Oswald", "sans-serif"],
        },
        colors: {
          transparent : ' transparent' , 
        
        }
      },
    },
    
  },
  plugins: [require('flowbite/plugin'),flowbite.plugin(),],
};
