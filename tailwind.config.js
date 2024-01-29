/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cafesillo": "#B06C64",
        "primary-pink": "hsl(322, 100%, 66%)",
        "light-cyan": "hsl(193, 100%, 96%)",
        "dark-cyan": "hsl(192, 100%, 9%)",
        "footer-cyan": "hsl(192, 100%, 5%)",
        "dark-blue": "hsl(208, 11%, 55%)",
        "normal-white": "#ECF0F1 "
      },
      fontFamily: {
        "headings": ['Poppins', 'sans-serif'],
        "body": ['Open Sans', 'sans-serif'],
      },
      customShadow: {
        'card': '0 35px 60px -15px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  plugins: [],
};


 