/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#729EA1", //moonstone
        //turquoise 64c9c7
        // "#050816",
        secondary: "#B5BD89", // sage
        // aaa6c3
        tertiary: "#000000", //black
        "beige": "#D6DABE",
        "light-coral": "#EC9192",
        "slate-gray": "#828A95",
        "indigo": "#27476E",
        "redwood": "#B0413E",
        "blush": "#DB5375",
        "dark": "#1D1836",
        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",

        //color palette 1
        // 828A95 //slate gray
        // #CEEAF7 //columbia blue
        // #CCD7E4 // columbia blue towards gray
        // #D5C9DF thistle
        // #DCB8CB lavender

        //color palette 2
        //#729EA1 moonstone
        //#B5BD89 sage
        //#DFBE99 tan
        //#EC9192 light-coral
        //#DB575 blush
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};