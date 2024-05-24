import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js', "./node_modules/flowbite/**/*.js",flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
        "url('https://cdn.sanity.io/images/u8qx4arf/production/127dd48360c111c02642c5b7d3eda6cc26a303f4-2560x1305.png')",
        newCollection:
          "url('https://cdn.sanity.io/images/u8qx4arf/production/6c1d7502c2d96b086051b64cbe9f7e165a6cae7f-636x809.png')",
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
