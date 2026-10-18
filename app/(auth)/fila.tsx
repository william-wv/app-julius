import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button, Hero, QueueCard, Screen } from "../../components";
import useNavigationExitOnBack from "../../hooks/useNavigationExitOnBack";
import { filaInicial } from "../../mocks/fila";
import { perfilAtual } from "../../mocks/perfil";

export default function _screen() {
  useNavigationExitOnBack();

  const router = useRouter();
  const minha = filaInicial.find((e) => e.perfil.id === perfilAtual.id);

  const abrirDetalhes = (numero: number) => {
    router.push({ pathname: "/musica/[numero]", params: { numero } });
  };

  return (
    <Screen
      scroll
      className="gap-2.5 pt-6"
      hero={
        <Hero align="center">
          <Text className="font-inter-semibold text-corpo text-texto-claro opacity-80">Sua posição na fila</Text>
          <Text className="numero">{minha ? `${minha.posicao}ª` : "—"}</Text>
          <Hero.Pill tone="branco">{minha ? `Aguardando — ${minha.musica.titulo}` : "Você não está na fila"}</Hero.Pill>
        </Hero>
      }
    >
      <Text className="secao opacity-60">Fila agora</Text>

      <View className="gap-2.5">
        {filaInicial.map((entry) => (
          <QueueCard
            key={entry.id}
            entry={entry}
            voce={entry.perfil.id === perfilAtual.id}
            onPress={() => abrirDetalhes(entry.musica.numero)}
          />
        ))}
      </View>

      {minha && <Button label="Cancelar minha entrada" variant="outline" />}
    </Screen>
  );
}
