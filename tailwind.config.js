/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        rocket: ' rocket 2.5s  infinite',
      },
      keyframes: {
       
        rocket: {
          "0% ":{
            transform: 'rotate(0deg)'
          },
          "10%": {
            transform: 'rotate(14deg)'
          },
          "20%": {
            transform: 'rotate(-8deg)'
          },
          "30%": {
            transform: 'rotate(14deg)'
          },
          "40%": {
            transform: 'rotate(-4deg)'
          },
          "50%": {
            transform: 'rotate(10deg)'
          },
          "60%": {
            transform: 'rotate(0deg)'
          },
          "100%" : {
            transform: 'rotate(0deg)'
          },
        },
      transitionTimingFunction: {
        'rocket-expo': 'cubic-bezier(0.25, 1, 0.5, 1)',
      }
    }}
  },
  
  plugins: [],
};
