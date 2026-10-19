import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { BackLink, Card, Chip, Screen } from "../../components";
import { findMusica } from "../../mocks/catalogo";

// Rota dinâmica: /musica/10234 → numero = "10234".
export default function _screen() {
  const { numero } = useLocalSearchParams<{ numero: string }>();
  const musica = findMusica(Number(numero));

  return (
    <Screen headerless>
      <BackLink fallback="/(auth)/fila" />

      {musica ? (
        <>
          <View className="gap-1">
            <Text className="titulo">{musica.titulo}</Text>
            <Text className="apoio">{musica.artista}</Text>
          </View>

          <Card>
            <Card.Title>Número no catálogo</Card.Title>
            <Text className="corpo">{musica.numero}</Text>
          </Card>

          <Chip label={musica.genero} active />
        </>
      ) : (
        <Text className="corpo">Música {numero} não encontrada no catálogo.</Text>
      )}
    </Screen>
  );
}
