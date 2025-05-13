export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-thiny': '#FEF3ED',
        'orange': '#FD752D',
        'yellow': '#F4D47D',
        'blue-strong': '#00274E',
        'orange-thiny': '#FFC6B6',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite', // o el tiempo que desees por defecto
      },
    },
  },
  plugins: [],
};
