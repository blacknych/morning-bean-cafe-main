const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "home-bg": "url('/src/assets/bg/home_bg.png')",
            },
            colors: {
                secondary: "#40250D",
                primary: "#FFF4DC",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"),require('@tailwindcss/aspect-ratio'),],
};
