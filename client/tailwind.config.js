module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
