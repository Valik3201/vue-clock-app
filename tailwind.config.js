/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1100px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.625rem",
        md: "4rem",
        lg: "6rem",
        xl: "10.625rem",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      h1: ["12.5rem", { lineHeight: "12.5rem", letterSpacing: "-0.3125rem" }],
      h2: ["3.5rem", { lineHeight: "4.25rem" }],
      h3: [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0.2rem",
          textTransform: "uppercase",
        },
      ],
      h4: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.25rem" }],
      h5: ["1.125rem", { lineHeight: "1.75rem" }],
      h6: ["0.9375rem", { lineHeight: "1.75rem", letterSpacing: "0.1875rem" }],
      body: ["1.125rem", { lineHeight: "1.75rem" }],
      abbreviation: [
        "2.5rem",
        {
          lineHeight: "0.7",
          textTransform: "uppercase",
          letterSpacing: "0.025rem",
        },
      ],
      button: [
        "1rem",
        {
          lineHeight: "1.75",
          letterSpacing: "0.3rem",
        },
      ],
    },
    extend: {
      colors: {
        black: "#000000",
        "dark-gray": "#303030",
        gray: "#979797",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
