/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F43F46", // Red
        secondary: "#C9242A", // Dark Red
        accent: "#FFC107", // Yellow accent
        textDark: "#2F2222", //Text Color
        textLight: "#595959", //border
        border: "#D3D3D3",
        bgShade: "#F9F9F9",
        redShade: "#FFF8F8",
        modifier: "#060749",
        combo: "#492F06",
        comboShade: "#593616",
        modifierShade: "#161759",
        // Add more as needed
      },
      backgroundImage: {
        "promo-bg": "url('/src/assets/bgpromo.png')",
        "account-bg": "url('/src/assets/Account/bgAccount.svg')",
        "banner-gradient":
          "linear-gradient(180deg, rgba(16,16,16,0.00) 0%, #101010 100%)",
        "custom-red-gradient":
          "linear-gradient(92deg, #E01E26 0%, #FF9393 100%)",
      },
      fontFamily: {
        sfDisplay: ["SF Pro Display", "-apple-system", "sans-serif"],
        sfText: ["SF Pro Text", "-apple-system", "sans-serif"],
        rare: ['"Rare Script"', "cursive"],
      },
      dropShadow: {
        reverse: "0 -4px 10px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
};
