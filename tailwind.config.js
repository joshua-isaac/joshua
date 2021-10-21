module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "780px",
        md: "780px",
        lg: "780px",
        xl: "780px",
        "2xl": "780px",
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
