module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        primary       : "#222222",
        secondary     : "#444444",
        text_primary  : "#f5f5f5",
        text_secondary: "#bbb",
        accent        : "#f58545"
      },
      // boxShadow : {
      //   dark : "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
