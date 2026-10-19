import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text } from "react-native";
import { Button, Hero, Input, Screen } from "../components";
import useNavigationExitOnBack from "../hooks/useNavigationExitOnBack";

// Identificação simples: só o nome, sem senha.
export default function _screen() {
  useNavigationExitOnBack();

  const router = useRouter();
  const [nome, setNome] = useState("");

  const handleLogin = () => {
    router.replace("/(auth)/(home)/home");
  };

  return (
    <Screen
      hero={
        <Hero>
          <Text className="marca">JULIUS</Text>
          <Text className="texto-claro">Videokê — fila em tempo real</Text>
        </Hero>
      }
    >
      <Text className="titulo">Quem vai cantar?</Text>

      <Input
        label="Seu nome"
        placeholder="Ex: Duda e Marina"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words"
      />

      <Button label="Entrar" onPress={handleLogin} disabled={!nome.trim()} />

      <Link href="/register" asChild>
        <Text className="link">Ainda não tem perfil? Criar perfil →</Text>
      </Link>
    </Screen>
  );
}
