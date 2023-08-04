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
        'crew-desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'technology-desktop': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'home-tablet': "url('/src/assets/home/background-home-tablet.jpg')",
        'destination-tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",
        'crew-tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'home-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
        'destination-mobile': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'crew-mobile': "url('/src/assets/crew/background-crew-mobile.jpg')",
      }
    },
  },
  plugins: [],
}

