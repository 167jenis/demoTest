/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-contrast": "#fff",
        "input-color": "#224957",
        primary: "#2bd17e",
        "card-color": "#092c39",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#303030",
          "400": "#093545",
        },
        orange: "#f99a0e",
        gray: {
          "100": "#8e8e94",
          "200": "rgba(0, 0, 0, 0.87)",
          "300": "rgba(0, 0, 0, 0.23)",
          "400": "rgba(0, 0, 0, 0.6)",
          "500": "rgba(255, 255, 255, 0.2)",
        },
        aliceblue: "#f3f7fb",
        whitesmoke: "#eaeaea",
        saddlebrown: "#99600a",
        peru: "#9e6104",
        slategray: "#576074",
        cornflowerblue: {
          "100": "#4dabff",
          "200": "#1262af",
          "300": "#1262ae",
        },
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        lavender: "#ccdcec",
        darkgray: "#999",
        yellowgreen: "#79ca00",
        gold: "#fdbf00",
        sandybrown: "#ff9b53",
        lightgray: "#cecece",
        silver: "#bdbdbd",
        dimgray: "#616161",
        skyblue: "#99d2f5",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "body-small": "Montserrat",
        roboto: "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        "3xs": "10px",
        "10xs": "3px",
        "4xl-2": "23.2px",
        "5xs-5": "7.5px",
        xs: "12px",
        "28xl-8": "47.8px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "45xl": "64px",
      "29xl": "48px",
      xs: "12px",
      mini: "15px",
      "sm-5": "13.5px",
      "xs-2": "11.2px",
      "3xl-4": "22.4px",
      "base-5": "16.5px",
      "3xl": "22px",
      "4xl-9": "23.9px",
      "9xl-4": "28.4px",
      "2xs-5": "10.5px",
      "mid-9": "17.9px",
      "3xs-7": "9.7px",
      "4xs": "9px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};