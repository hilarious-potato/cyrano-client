const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF550B",
        },
        secondary: {
          DEFAULT: "#0F81C7",
        },
        warning: {
          DEFAULT: "#FF304F",
        },
      },
      fontFamily: {
        heading: ["CamingoCode", ...defaultTheme.fontFamily.mono],
        mono: ["CamingoCode", ...defaultTheme.fontFamily.mono],
        body: ["CamingoCode", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
