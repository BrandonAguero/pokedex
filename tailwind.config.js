/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        titleRed: "#FE1936",
        button: "#D93F3F",
        firstFooter: "#DD1A1A",
        secondFooter: "#0C0C0C",
        paragraph: "#302F2F",
      },
      width: {
        nine: "90%",
      },
      minWidth: {
        base: "32rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
