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
          "url('https://cdn.sanity.io/images/u8qx4arf/production/80af94f7be49cf9b3ee4ecd8020cc5591e0895f0-2560x1067.png')",
          aboutbrand :
          "url('src/assets/images/about.svg')",
          "texture":
          "url('https://cdn.sanity.io/images/u8qx4arf/production/f122bf1e621c683803663cd931230b5eaf319955-2530x3486.jpg')",
          "footertext":
          "url('https://cdn.sanity.io/images/u8qx4arf/production/f122bf1e621c683803663cd931230b5eaf319955-2530x3486.jpg')",
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
