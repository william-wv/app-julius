import { Stack } from "expo-router";
import React from "react";
import { stackScreenOptions } from "../../../theme/navigation";

// Pilha dentro da aba Home (estrutura do modelo da disciplina).
export default function _layout() {
  return (
    <Stack screenOptions={stackScreenOptions}>
      <Stack.Screen name="home" options={{ title: "Julius" }} />
    </Stack>
  );
}
