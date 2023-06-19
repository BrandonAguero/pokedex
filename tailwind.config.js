/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        titleRed: "#FE1936",
        button: "#D93F3F",
        first: "#DD1A1A",
        second: "#0C0C0C",
        paragraph: "#302F2F",
        titleBlack: "#4F4F4F",
        subParagraph: "#9F9F9F",
      },
      width: {
        nine: "90%",
      },
      minWidth: {
        base: "32rem",
      },
      height: {
        sixFive: "65%",
        threeFive: "35%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        elipsePoke: "url('/png/elipse.png')",
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRowStart: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },
    screens: {
      m: "360px",
      "2m": "500px",
      sm: "600px",
      lg: "1024px",
      "max-sm": { max: "599px" },
    },
  },
  plugins: [],
};
