module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "240px",
      xs: "350px",
      '2xs': '580px',
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: '16px',
      screens: {
        lg: "1440px",
        xl: "1440px",
        '2xl': "1440px",
      },
    },
    extend: {
      colors: {
        "new" : {
          50: '#ff9a9e',
          100: '#fad0c4',
        },
      },
    },
  },
  plugins: [],
}
