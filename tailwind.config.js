/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    '@/app/**/*.{js,ts,jsx,tsx}', // Adjust this based on your project structure
    './pages/**/*.{js,ts,jsx,tsx}', // Include any pages
   // './components/**/*.{js,ts,jsx,tsx}', // Include any components
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

