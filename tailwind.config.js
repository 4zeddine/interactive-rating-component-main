/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors:{
        primary:'hsl(25, 97%, 53%)',
        lightGrey:'hsl(217, 10%, 60%)',
        mediumGrey:'hsl(216, 9%, 39%)',
        drakBlue:'hsl(224, 19%, 16%)',
        bgblue:'hsl(213, 19%, 18%)',
        darkerBlue:'hsl(216, 12%, 8%)',
      },
      fontFamily:{
        overpass:'Overpass',
      },
      fontSize:{
        p :'15px',
      },
      maxWidth:{
        small: '23rem',
      },
      screens:{
        md:'875px',
      }
      
    },
  },
  plugins: [],
}
