import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      
        lightPrime:'#192f59',
        primary:'#1b2945',
        secondBlue:'#192f59',
     
    
        secondary:'#249d8a',
      },
    },
  },
  plugins: [],
} satisfies Config;
