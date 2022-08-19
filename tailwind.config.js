/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#395B64',
        'bgColor': '#2C3333',
        'secondaryColor': '#A5C9CA',
        'lightColor': '#E7F6F2'
      }
    },
    // container: {
    //   center: true,
    //   padding: '2rem'
    // }
  },
  plugins: [],
}
