/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          500: '#17E6AD',
          600: '#12C69A',
        },
        grey: {
          700: '#323232',
          800: '#1E1E1E',
          900: '#121212',
        },
      },
    },
  },
  plugins: [],
}