/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      container: {
        center: true,
        padding: "2rem"
      },
      aspectRatio: {
        poster: "10/11"
      },
      backgroundImage: {
        wave: "linear-gradient(to left, #9cf2ed, #f3f4f6)"
      },
      screens: {
        "xs": "480px",
        "ipad": "992px"
      },
      fontFamily: {
        cursive: "cursive"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    }
  ],
}

