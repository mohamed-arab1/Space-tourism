/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navColor: "#ffffff4d"
      },
      backgroundImage: {
        'home-desktop': "url('/src/assets/home/background-home-desktop.jpg')",
        'destination-desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
      }
    },
  },
  plugins: [],
}
