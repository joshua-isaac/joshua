module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "700px",
        md: "700px",
        lg: "700px",
        xl: "700px",
        "2xl": "700px",
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
