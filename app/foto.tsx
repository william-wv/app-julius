import React from "react";
import { Text, View } from "react-native";
import { BackLink, Button, Screen } from "../components";

// Upload de Foto do Figma. Câmera/galeria (expo-image-picker) ficam para a sprint de upload;
// por enquanto a tela mostra o estado vazio e miniaturas mockadas.
const miniaturas = ["bg-pessego", "bg-luz", "bg-luz opacity-40"];

export default function _screen() {
  return (
    <Screen headerless scroll className="gap-5">
      <BackLink label="Voltar ao perfil" fallback="/(auth)/profile" />

      <View className="gap-1">
        <Text className="titulo">Foto do momento</Text>
        <Text className="font-inter text-apoio text-palco opacity-60">Opcional — mostra você no palco pra galera</Text>
      </View>

      <View className="foto-vazia">
        <Text className="text-[32px]">📷</Text>
        <Text className="font-inter-medium text-apoio text-palco opacity-55">Nenhuma foto ainda</Text>
      </View>

      <Button label="Tirar foto" />
      <Button label="Escolher da galeria" variant="secondary" />

      <Text className="rotulo">Fotos enviadas nesta música</Text>
      <View className="flex-row gap-2.5">
        {miniaturas.map((cor) => (
          <View key={cor} className={`foto-miniatura ${cor}`} />
        ))}
      </View>
    </Screen>
  );
}
