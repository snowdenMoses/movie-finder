/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssm': '580px',
      },
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'custom': ['MuseoModerno', 'sans-serif'],
    },
    screens: {
      'sm': '450px',
      // => @media (min-width: 576px) { ... }

      'md': '760px',
      // => @media (min-width: 960px) { ... }

      'lg': '1040px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

