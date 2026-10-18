// Cores vêm de theme/colors.ts (mesma fonte usada nos headers/abas e no tema do RNE).
const { colors } = require("./theme/colors.ts");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      // Escala tipográfica do app: usar pelo nome, não pelo tamanho.
      fontSize: {
        display: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        title: ["36px", { lineHeight: "44px", fontWeight: "700" }],
        body: ["16px", { lineHeight: "24px" }],
        caption: ["14px", { lineHeight: "20px" }],
      },
      borderRadius: {
        card: "16px",
        button: "12px",
      },
      spacing: {
        screen: "16px",
      },
    },
  },
  plugins: [],
};
