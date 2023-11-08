/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        text: "#DFE2E7",
        background: "#12121a",
      },
    },
  },
  plugins: [],
};
