// Espelham as collections do PocketBase descritas no README.
// Relations aparecem já "expandidas" (objeto em vez de id), como no `expand` do SDK.

export type StatusFila = "aguardando" | "tocando" | "concluida";
export type Nivel = "bronze" | "prata" | "ouro";
export type Genero = "Sertanejo" | "Rock" | "Pop" | "Funk" | "MPB" | "Forró";

export interface Perfil {
  id: string;
  nome: string;
}

export interface Musica {
  id: string;
  numero: number; // até 6 dígitos, único no catálogo
  titulo: string;
  artista: string;
  genero: Genero;
}

export interface FilaEntry {
  id: string;
  perfil: Perfil;
  musica: Musica;
  status: StatusFila;
  posicao: number;
}

export interface HistoricoMusica {
  id: string;
  musica: Musica;
  cantadaEm: string; // ISO 8601
}

export interface Insignia {
  id: string;
  genero: Genero;
  nivel: Nivel;
  quantidade: number;
  conquistadaEm: string; // ISO 8601
}
