/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        verdeClaro: "#D0E6B5",
        verdeManzana: "#8FBF26",
        verdeOscuro: "#89A64B",
        verdeAmarillo: "#E2F2A7",
        grisClaro: "#A7A7A7",
        verdeOscuroFuerte: "#0B751C",
        primaryColor: "var(--primary-color)",
        secundaryColor: "var(--secundary-color)",
        neutralColor: "var(--neutral-color)",
        contrastPrimaryColor: "var(--contrast-primary-color)",
        contrastSecundaryColor: "var(--contrast-secundary-color)",
        contrastNeutralColor: "var(--contrast-neutral-color)",
        compPrimaryColor: "var(--comp-primary)",
        compSecundaryColor: "var(--comp-secundary)",
        bgColor: "var(--bg-color)",
        textColor: "var(--text-color)"
      },
      fontFamily: {
        signikaNegative: ["Signika Negative", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        principal: "url('./src/assets/img-principal.jpg')",
      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
