/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#3F7E61",
        //   'pantone-274': '#1E1A78',
        // 'pantone-555c': '#2A4B2B',
        //   green: '#57BBBD',
        //   lightGreen: '#92D6D6',
        //   skyBlue: '#4FB9E7',
        //   darkBlue: '#252641',
        //   mediumDarkBlue: '#2F327D',
        //   blueGreen: '#EBF5FE',
        //   footerText: '#B2B3CF',
        //   orange: '#F48C06',
        //   grayText: '#696984',
      },

    },
  },
  plugins: [require('tailwindcss-gradient-text')],
};
