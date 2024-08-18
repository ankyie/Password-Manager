/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        primarybg: "rgba(var(--primary-bg))",
        primarybody: "rgba(var(--primary-body))",

        maintext: "rgba(var(--main-text))",
        themetext: "rgba(var(--theme-text))",
        bodytext: "rgba(var(--body-text))",

        themeborder: "rgba(var(--theme-border))",
        
        deletebg: "rgba(var(--delete-bg))",

        footerbg: "rgba(var(--footer-bg))",

        inputbg: "rgba(var(--input-bg))"
      }
    },
  },
  plugins: [],
}