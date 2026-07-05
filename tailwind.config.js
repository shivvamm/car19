/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // F1 premium base — rich blacks
        ink: "#0a0a0c",
        night: "#101013",
        panel: "#16161a",
        // F1 red (keeps the old "magenta/hotpink" class names)
        magenta: "#e10600",
        hotpink: "#ff2b1f",
        // cool steel / silver (keeps the old "cyan/electric" class names)
        cyan: "#b9c2cc",
        electric: "#e6ebf0",
        // titanium warm accent
        gold: "#c9a15a",
        haze: "#26272c",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        racing: ["var(--font-racing)", "var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        "glow-pink": "0 0 24px rgba(225,6,0,0.45), 0 0 56px rgba(225,6,0,0.2)",
        "glow-cyan": "0 0 20px rgba(185,194,204,0.28), 0 0 46px rgba(185,194,204,0.12)",
      },
    },
  },
  plugins: [],
};
