module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   primary       : "#222222",
      //   secondary     : "#444444",
      //   text_primary  : "#f5f5f5",
      //   text_secondary: "#bbb",
      //   accent        : "#f58545"
      // },
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
