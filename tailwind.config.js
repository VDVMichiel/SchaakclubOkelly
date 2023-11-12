/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",  // White
        "gray-20": "#F8F4EB", // Light Gray
        "gray-50": "#EFE6E6", // Medium Gray
        "gray-100": "#DFCCCC", // Dark Gray
        "gray-500": "#5E0000", // Very Dark Gray
        "primary-100": "#A8312D", // Primary Color (lighter shade)
        "primary-300": "#A8312D", // Primary Color (standard shade)
        "primary-500": "#A8312D", // Primary Color (darker shade)
        "secondary-400": "#A8312D", // Secondary Color (medium shade)
        "secondary-500": "#9E9E9D", // Secondary Color (darker shade)
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        OKellyText: "url('./assets/OkellyText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },

      
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
