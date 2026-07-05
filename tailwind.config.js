/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // carbon-fiber base
        ink: "#08090b",
        night: "#0e1013",
        panel: "#14171c",
        // racing-red accent (keeps the old "magenta/hotpink" class names)
        magenta: "#ff3b30",
        hotpink: "#ff5a4e",
        // brushed steel / silver (keeps the old "cyan/electric" class names)
        cyan: "#aab6c2",
        electric: "#dfe5ec",
        // titanium warm accent
        gold: "#c9a15a",
        haze: "#2b3037",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        racing: ["var(--font-racing)", "var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        "glow-pink": "0 0 26px rgba(255,59,48,0.5), 0 0 60px rgba(255,59,48,0.22)",
        "glow-cyan": "0 0 22px rgba(170,182,194,0.35), 0 0 50px rgba(170,182,194,0.15)",
      },
    },
  },
  plugins: [],
};
