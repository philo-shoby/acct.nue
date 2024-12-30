/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],  // Add DM Sans to the default sans font stack
        heading: ['Futura', 'Arial', 'sans-serif'], // For headings
      },
    },
  },
  plugins: [],
};
