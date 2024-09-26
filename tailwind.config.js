/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default  withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { mixBlendMode: {
      multiply: 'multiply',
    },
    fontFamily:{
      grotesk:["Space Grotesk","sans-serif"],
      poppins:["Poppins", "sans-serif"],
    }
  },
},
  plugins: [],
});

