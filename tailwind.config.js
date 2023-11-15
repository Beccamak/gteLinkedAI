/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'dark-blue':'#150E28',
      'white': '#FFFFFF',
      'purple': '#903AFF',
      'pink': '#D434FE'
    },
    
    extend: {
      backgroundImage: theme => ({
        'gradient-primary': 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
      }),
      fontFamily: {
        'clash':['Clash Display',  'sans-serif'],
        'mono': ['Monteserrat', 'sans-serif'],
        'unica': ['Unica One']
      }
    },
  },
  plugins: [],
}

