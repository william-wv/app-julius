import type { Genero, Musica } from "../types";

// Ordem de exibição dos gêneros (chips e grade de insígnias).
export const generos: Genero[] = ["Sertanejo", "Rock", "Pop", "Funk", "MPB", "Forró"];

export const catalogo: Musica[] = [
  { id: "mus_10234", numero: 10234, titulo: "Evidências", artista: "Chitãozinho & Xororó", genero: "Sertanejo" },
  { id: "mus_10567", numero: 10567, titulo: "Tempo Perdido", artista: "Legião Urbana", genero: "Rock" },
  { id: "mus_11890", numero: 11890, titulo: "Garota de Ipanema", artista: "Tom Jobim", genero: "MPB" },
  { id: "mus_12045", numero: 12045, titulo: "Ai Se Eu Te Pego", artista: "Michel Teló", genero: "Sertanejo" },
  { id: "mus_13311", numero: 13311, titulo: "Exagerado", artista: "Cazuza", genero: "Rock" },
  { id: "mus_14520", numero: 14520, titulo: "Asa Branca", artista: "Luiz Gonzaga", genero: "Forró" },
  { id: "mus_15002", numero: 15002, titulo: "Show das Poderosas", artista: "Anitta", genero: "Pop" },
  { id: "mus_15780", numero: 15780, titulo: "Baile de Favela", artista: "MC João", genero: "Funk" },
  { id: "mus_16234", numero: 16234, titulo: "Bohemian Rhapsody", artista: "Queen", genero: "Rock" },
  { id: "mus_17001", numero: 17001, titulo: "Shallow", artista: "Lady Gaga", genero: "Pop" },
  { id: "mus_18456", numero: 18456, titulo: "Xote dos Milagres", artista: "Falamansa", genero: "Forró" },
  { id: "mus_20110", numero: 20110, titulo: "Fico Assim Sem Você", artista: "Adriana Calcanhotto", genero: "MPB" },
];

// Simula a consulta ao catálogo no banco: número → música (gênero incluso).
export function findMusica(numero: number): Musica | undefined {
  return catalogo.find((m) => m.numero === numero);
}
