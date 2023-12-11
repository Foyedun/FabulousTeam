/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#57bbbd',
        lightGreen: '#92d6d6',
        skyBlue: '#4FB9E7',
        darkBlue: '#252641',
        blueGreen: '#EBF5FE',
      },
      height: {
        12.5: '3rem', //50px
      },
    },
  },
  plugins: [],
};
