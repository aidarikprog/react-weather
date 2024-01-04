// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // ubuntu: ["Ubuntu", "sans-serif"],
      // roboto: ["Roboto", "sans-serif"],
      // poppins: ["Poppins", "sans-serif"],
    },
    container: {
      // center: true,
      // padding: "10px",
    },
    extend: {
      gridTemplateColumns: {
        // "press": "repeat(auto-fill, 360px)",
      },
      maxWidth: {
        // w: '1172px',
      },
      backgroundImage: {
        // 'mainImage': "url('./assets/mainImage.jpg')",
      }
      // colors:{
      //   red: '#fff'
      // }
    },
    screens: {
      // 530: { max: "530px" },
      // xs: "480px",
      // ss: "620px",
      // sm: "768px",
      // md: "1060px",
      // lg: "1200px",
      // xl: "1700px",
    },
  },
  plugins: [],
}