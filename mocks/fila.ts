import type { FilaEntry, Musica, Perfil, StatusFila } from "../types";
import { findMusica } from "./catalogo";
import { outrosPerfis, perfilAtual } from "./perfil";

const [carlos, bia, joao, lu, rafa] = outrosPerfis;

function entry(posicao: number, perfil: Perfil, numero: number, status: StatusFila): FilaEntry {
  const musica = findMusica(numero) as Musica;
  return { id: `fila_${posicao}`, perfil, musica, status, posicao };
}

export const filaInicial: FilaEntry[] = [
  entry(1, carlos, 10567, "tocando"),
  entry(2, bia, 17001, "aguardando"),
  entry(3, joao, 15780, "aguardando"),
  entry(4, perfilAtual, 10234, "aguardando"),
  entry(5, lu, 11890, "aguardando"),
  entry(6, rafa, 16234, "aguardando"),
  entry(7, bia, 14520, "aguardando"),
];
