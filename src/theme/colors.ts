export const colors = {
  background: "#2A0C0D",
  surface: "#3A1517",
  border: "#5A2A2C",
  accent: "#E7B24C",
  text: "#F5E4DA",
  muted: "#A88F84",
  danger: "#E5484D",

  // status da fila
  aguardando: "#A88F84",
  tocando: "#E7B24C",
  concluida: "#4CAF7A",

  // níveis de insígnia
  bronze: "#B87333",
  prata: "#C0C0C0",
  ouro: "#E7B24C",
} as const;

export type ColorToken = keyof typeof colors;
