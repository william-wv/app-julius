import type { HistoricoMusica, Musica } from "../types";
import { findMusica } from "./catalogo";

function cantada(id: string, numero: number, cantadaEm: string): HistoricoMusica {
  return { id, musica: findMusica(numero) as Musica, cantadaEm };
}

// Músicas já cantadas pelo perfil atual (mais recente primeiro).
export const historico: HistoricoMusica[] = [
  cantada("his_6", 13311, "2026-10-11T23:40:00Z"),
  cantada("his_5", 20110, "2026-10-11T22:15:00Z"),
  cantada("his_4", 12045, "2026-10-04T23:05:00Z"),
  cantada("his_3", 16234, "2026-10-04T21:50:00Z"),
  cantada("his_2", 11890, "2026-09-27T22:30:00Z"),
  cantada("his_1", 10567, "2026-09-27T21:10:00Z"),
];
