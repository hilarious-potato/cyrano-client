const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Oswald', sans-serif",
        mono: ["CamingoCode", ...defaultTheme.fontFamily.mono],
        body: ["CamingoCode", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
