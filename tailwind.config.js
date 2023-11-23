/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}

