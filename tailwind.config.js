/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        colors: {
            current: "currentColor",
            transparent: "transparent",
            white: "#FFFFFF",
            black: "#090E34",
            dark: "#1D2144",
            primary: "#572e76",
            yellow: "#FBB040",
            "body-color": "#62687e",
            purple: {
                100: "#8a44a8",
                500: "#572e76",
            },
        },
        screens: {
            xs: "450px",
            // => @media (min-width: 450px) { ... }

            sm: "575px",
            // => @media (min-width: 576px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "992px",
            // => @media (min-width: 992px) { ... }

            xl: "1200px",
            // => @media (min-width: 1200px) { ... }

            "2xl": "1400px",
            // => @media (min-width: 1400px) { ... }
        },
        extend: {
            boxShadow: {
                signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
                one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
                sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
                purple: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
                "purple-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
            },
            extend: {
                borderRadius: {
                    extraLarge: '12rem'
                }
            }
        },
    },
    variants: {
        extend: {
            boxShadow: ["active", "hover"],
        },
    },
    plugins: [],
};
