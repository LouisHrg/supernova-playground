const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.vue",
  ],
  theme: {
    fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        "sn-primary": "var(--sn-primary)",
        "sn-secondary": "var(--sn-secondary)",
        "sn-transparent": "var(--sn-transparent)",
        "sn-accent": "var(--sn-accent)",
        "sn-accent-lighter": "var(--sn-accent-lighter)",
      },
    },
  },
  plugins: [
  ]
}
