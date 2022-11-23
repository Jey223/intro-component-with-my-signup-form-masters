/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/images/bg-intro-desktop.png')",
        'mobile': "url('/images/bg-intro-mobile.png')",
      },
      screens: {
        'ms': {'max': '375px'},
        // => @media (max-width: 375px)
        'ma': {'min': '376px'},
        // => @media (max-width: 376px)
        'ad': {'max': '768px'},
        // => @media (max-width: 768px)
        'mx': {'max': '1000px'},
        // => @media (max-width: 1000px)
        'mn': {'max': '566px'},
        // => @media (max-width: 566px)
       


        
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        fs: '16px',
      },
      colors: {
        'red': 'hsl(0, 100%, 74%)',
        'green': 'hsl(154, 59%, 51%)',
        'blue': 'hsl(248, 32%, 49%)',
        'darkblue': 'hsla(249, 10%, 26%, .2)',
        'Grayishblue': 'hsl(246, 25%, 77%)',
      },
    },
   
  },
  plugins: [],
}
