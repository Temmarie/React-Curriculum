/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './counter-app/public/**/*.html',  // Include public HTML files
  './todo-app/public/**/*.html',
  './counter-app/src/**/*.{js,jsx,ts,tsx}',  // Source files
  './todo-app/src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
