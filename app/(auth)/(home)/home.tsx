import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { Button, Hero, Screen } from "../../../components";
import useNavigationExitOnBack from "../../../hooks/useNavigationExitOnBack";

export default function _screen() {
  useNavigationExitOnBack();

  return (
    <Screen
      scroll
      hero={
        <Hero>
          <Text className="marca">JULIUS</Text>
          <Text className="texto-claro">Videokê — fila em tempo real</Text>
          <Hero.Pill>● Aberto agora — até 02h</Hero.Pill>
        </Hero>
      }
    >
      <Link href="/entrar" asChild>
        <Button label="Entrar na fila" />
      </Link>

      <Link href="/(auth)/fila" asChild>
        <Text className="link">Já tá na fila? Ver status →</Text>
      </Link>

      <Text className="secao">Como funciona</Text>
      <Text className="apoio">
        Entre na fila com seu nome e música, acompanhe sua posição e ganhe insígnias por gênero cantado.
      </Text>
    </Screen>
  );
}
