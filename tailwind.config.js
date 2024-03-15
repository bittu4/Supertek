/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "dark-orange": "#FF5C00",
        "snow-white": "#FAFAFA",
        "dark-orange-100": "rgba(255, 128, 0, 0.1003)",
        "light-black": "#2F2F2F",
        "light-grey": "#EFEFEF",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
        card: "0px 10px 50px 25px rgba(41, 39, 66, 0.04)",
        cardHover: "0px 10px 50px 25px rgba(41, 39, 66, 0.1)",
        faq: "0px 4px 28px 0px rgba(33, 109, 180, 0.10)",
      },
      backgroundImage: {
        work: "url('./assets/images/work-bg.png')",
        banner: "url('./assets/images/banner-bg.png')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
