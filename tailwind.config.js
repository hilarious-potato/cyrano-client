const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)", // 255 85 11
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)", // 255 85 11
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning) / <alpha-value>)", // 255 85 11
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
