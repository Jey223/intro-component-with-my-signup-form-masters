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
        'ad': {'max': '768px'},
        // => @media (max-width: 768px) { ... }
        'mx': {'max': '1000px'}
        // => @media (max-width: 1000px)
        
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
        'darkblue': 'hsl(249, 10%, 26%)',
        'Grayishblue': 'hsl(246, 25%, 77%)',
      },
    },
   
  },
  plugins: [],
}
