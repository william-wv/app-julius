// Paleta do Figma "Julius Fila — Telas (mobile)". Nomes iguais às variáveis do Figma.
export const colors = {
  palco: "#2A0C0D", // fundo do hero, texto principal
  vinho: "#541C1D", // CTA, aba Home, cabeçalho do perfil
  luz: "#E7B24C", // marca, destaque, "tocando", insígnia conquistada
  textoClaro: "#F5E4DA", // texto sobre palco/vinho
  pessego: "#FCCAAF", // sua entrada na fila
  branco: "#FFFFFF",

  // neutros
  superficie: "#F7F5F2", // item da fila
  bloqueado: "#F2EFEB", // insígnia bloqueada
  borda: "#D9CCC7", // inputs, chips e botão secundário
  tracejado: "#BFADA1", // borda tracejada do quadro de foto
  divisor: "#E5DED9", // borda da BottomNav
  perigo: "#B24D4D", // ação destrutiva
} as const;

export type ColorToken = keyof typeof colors;
