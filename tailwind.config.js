/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      "blue-dark" :"#385A7C",
      "blue-pale" :"#8AD6CC",
      "blue-light" :"#5CE1E6",
      "white" :"#FFFFFF",
      "black" :"#000000",
      "red" :"#F97171",
      "rose" :"#F99192",
    },
  },
  plugins: [],
}