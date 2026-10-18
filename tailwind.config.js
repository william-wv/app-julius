// Cores vêm de theme/colors.ts (mesma fonte usada nos headers e componentes com style).
// camelCase do TS vira kebab-case nas classes: textoClaro → text-texto-claro.
const { colors } = require("./theme/colors.ts");

const kebab = (s) => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
const palette = Object.fromEntries(Object.entries(colors).map(([k, v]) => [kebab(k), v]));

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: palette,
      // Uma família por peso (nomes carregados em theme/fonts.ts).
      fontFamily: {
        inter: ["Inter_400Regular"],
        "inter-medium": ["Inter_500Medium"],
        "inter-semibold": ["Inter_600SemiBold"],
        oswald: ["Oswald_700Bold"],
      },
      // Escala tipográfica do Figma.
      fontSize: {
        numero: ["64px", { lineHeight: "76px" }],
        marca: ["34px", { lineHeight: "42px" }],
        titulo: ["22px", { lineHeight: "28px" }],
        destaque: ["18px", { lineHeight: "24px" }],
        botao: ["16px", { lineHeight: "20px" }],
        corpo: ["14px", { lineHeight: "20px" }],
        apoio: ["13px", { lineHeight: "18px" }],
        rotulo: ["12px", { lineHeight: "16px" }],
        mini: ["11px", { lineHeight: "14px" }],
      },
      borderRadius: {
        campo: "12px",
        botao: "14px",
      },
      spacing: {
        tela: "28px",
      },
    },
  },
  plugins: [],
};
