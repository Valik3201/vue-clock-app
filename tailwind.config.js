/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "323px",
      md: "640px",
      lg: "1100px",
    },
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      h1: ["12.5rem", { lineHeight: "12.5rem", letterSpacing: "-0.3125rem" }],
      "h1-2": ["10.94rem", { lineHeight: "1", letterSpacing: "-0.3125rem" }],
      "h1-3": ["6.25rem", { lineHeight: "1", letterSpacing: "-0.3125rem" }],
      h2: ["3.5rem", { lineHeight: "4.25rem" }],
      h3: [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0.2rem",
          textTransform: "uppercase",
        },
      ],
      h4: ["1.25rem", { lineHeight: "1.75rem" }],
      h5: ["1.125rem", { lineHeight: "1.75rem" }],
      h6: ["0.9375rem", { lineHeight: "1.75rem", letterSpacing: "0.1875rem" }],
      h7: ["0.75rem", { lineHeight: "1.75rem" }],
      h8: ["0.62rem", { lineHeight: "2.8rem", letterSpacing: "0.1rem" }],
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
