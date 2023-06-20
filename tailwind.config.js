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
        dragon: "#68aeb8",
        ice: "#91d0ea",
        steel: "#799289",
        dark: "#1b1d1d",
        fairy: "#ac375f",
        ground: "#87570f",
        psychic: "#e8ce55",
        fighting: "#b94b2f",
        rock: "#a8a8a8",
        ghost: "#4f55bd",
        electric: "#5258cd",
        poison: "#9766c7",
        bug: "#4ab648",
        water: "#1479fb",
        normal: "#735259",
        fire: "#e75c35",
        grass: "#416460",
        gray: "#E5E5E5",
      },
      width: {
        nine: "90%",
        five: "50%",
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
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      backgroundImage: {
        electric:
          "linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)",
        poison: "linear-gradient(180.57deg, #5b3184 -45.23%, #c48ef9 158.14%)",
        normal:
          "linear-gradient(181.51deg, #735259 -6.44%, #bc6b7c 121.95%,#7c3f4c 186.11%)",
        bug: "linear-gradient(177.56deg,#62db60 -58.92%,#3bb039 16.57%, #aaffa8 209.53%)",
        water:
          "linear-gradient(179.57deg, #133258 -70.14%,#1479fb 56.16%,#82b2f1 214.85%)",
        fire: "linear-gradient(176.37deg, #f96d6f -32.26%, #e35825 22.55%, #e8ae1b 125.72%)",
        grass:
          "linear-gradient(178.92deg, #7ec6c5 0.92%, #abdac6 47.96%, #cae099 99.08%)",
        dragon:
          "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)",
        ice: "linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)",
        steel:
          "linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)",
        dark: "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)",
        fairy:
          "linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)",
        ground:
          "linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)",
        psychic:
          "linear-gradient(180deg, #fffc9d 0, #f1eb85 25%, #d8d86c 50%, #bec653 75%, #a6b53c 100%)",
        fighting:
          "linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)",
        rock: "linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)",
        ghost:
          "linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)",
        life: "linear-gradient(90deg, rgba(255,45,0,1) 0%, rgba(251,255,0,1) 23%, rgba(0,255,85,1) 60%)",
        elipsePoke: "url('/png/elipse.png')",
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
      "3sm": "800px",
      lg: "1024px",
      "2lg": "1330px",
      "max-lg": { max: "1330px" },
      "max-sm": { max: "599px" },
      "max-m": { max: "360px" },
    },
  },
  plugins: [],
};
