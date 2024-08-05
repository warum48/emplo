/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust this based on your project structure
    './pages/**/*.{js,ts,jsx,tsx}', // Include any pages
   // './components/**/*.{js,ts,jsx,tsx}', // Include any components
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/gradient_border.css',
  ],
  theme: {
    extend: {
      letterSpacing: {
        super: '.425em',
        ultra: '.5em',
      },
      colors: {
        customGray: {
          50: '#f5f5f4',
          100: '#e7e7e5',
          200: '#d6d6d4',
          300: '#b7b7b5',
          400: '#9a9a97',
          500: '#7c7c79',
          600: '#666664',
          700: '#4d4d4b',
          800: '#171b25',
          900: '#1f202a', //'#221f2a'//'#212024',//'#24222a',
          950: '#12141b',//'#14161d',
        },
      //},
      adjGray: {
        50: '#f5f5f4',
        100: '#e7e7e5',
        200: '#d6d6d4',
        300: '#b7b7b5',
        400: '#9a9a97',
        500: '#7c7c79',
        600: '#666664',
        700: '#4d4d4b',
        800: '#333349',
        900: '#14171c', //'#121823',//'#212024',//'#24222a',
        950: '#0d111a',
      },
    },
      fontFamily: {
        'montserrat': ['Montserrat'],// ...defaultTheme.fontFamily.sans],
        'roboto': ['Roboto'],
        'inter': ['Inter'],//, ...defaultTheme.fontFamily.sans],
        'marianna' : ['Marianna']
      },
    }
  },
  plugins: [],
}

