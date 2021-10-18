module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "860px",
        md: "860px",
        lg: "860px",
        xl: "860px",
        "2xl": "860px",
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
        transparent: "transparent",
        blue: "#3b82f6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
