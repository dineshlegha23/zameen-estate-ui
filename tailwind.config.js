/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      lg: { max: "1366px" },
      md: { max: "1024px" },
      sm: { max: "738px" },
    },
  },
  plugins: [],
};
