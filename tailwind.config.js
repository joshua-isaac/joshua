module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "680px",
        md: "680px",
        lg: "680px",
        xl: "800px",
        "2xl": "680px",
      },
    },
    fontFamily: {
      sans: [
        "Avenir\\ Next",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe\\ UI",
        "Roboto",
        "Helvetica\\ Neue",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        blue: "#3b82f6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
