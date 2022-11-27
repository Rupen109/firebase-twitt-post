/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poopins","sans-sarif"],
      },
      // backgroundImage: {
      //   'bgs' : "url('./src/MAN_TELECONFERENCE_WITH_TEAM-removebg.png')",
      // }
    },
  },
  plugins: [],
}