import "../global.css";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
import { fonts } from "../theme/fonts";
import { stackScreenOptions } from "../theme/navigation";

export default function _layout() {
  // Inter e Oswald precisam estar carregadas antes do primeiro texto.
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={stackScreenOptions}>
      <Stack.Screen name="index" options={{ title: "Identificação" }} />
      <Stack.Screen name="register" options={{ title: "Criar perfil" }} />
      <Stack.Screen name="(auth)" options={{ title: "Julius" }} />
      {/* Telas cheias por cima das abas (sem BottomNav), com "‹ Voltar" no conteúdo */}
      <Stack.Screen name="entrar" options={{ title: "Entrar na fila" }} />
      <Stack.Screen name="musica/[numero]" options={{ title: "Detalhes da música" }} />
      <Stack.Screen name="foto" options={{ title: "Foto do momento" }} />
    </Stack>
  );
}
