import type { Insignia } from "../types";

// Insígnias do perfil atual. Regra do README: 5 músicas do gênero = bronze, 10 = prata, 20 = ouro.
export const insignias: Insignia[] = [
  { id: "ins_mpb", genero: "MPB", nivel: "ouro", quantidade: 21, conquistadaEm: "2026-10-11T22:15:00Z" },
  { id: "ins_rock", genero: "Rock", nivel: "prata", quantidade: 12, conquistadaEm: "2026-10-11T23:40:00Z" },
  { id: "ins_sertanejo", genero: "Sertanejo", nivel: "bronze", quantidade: 6, conquistadaEm: "2026-10-04T23:05:00Z" },
  { id: "ins_pop", genero: "Pop", nivel: "bronze", quantidade: 5, conquistadaEm: "2026-09-20T22:00:00Z" },
];
