import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { BackLink, Button, Chip, Input, Screen } from "../components";
import { findMusica, generos } from "../mocks/catalogo";
import { perfilAtual } from "../mocks/perfil";

// Layout do Figma com a regra do README: o cliente informa o número de catálogo
// e o gênero é resolvido pelo catálogo (chips só exibem, não são escolhidos).
// Fica na pilha raiz: abre por cima das abas, sem BottomNav (igual ao Figma).
export default function _screen() {
  const router = useRouter();
  const [nome, setNome] = useState(perfilAtual.nome);
  const [numero, setNumero] = useState("");

  const musica = numero ? findMusica(Number(numero)) : undefined;
  const naoEncontrada = numero.length > 0 && !musica;

  const handleConfirmar = () => {
    // Fecha esta tela e cai na aba Minha Fila, sem empilhar outra cópia das abas.
    router.dismissTo("/(auth)/fila");
  };

  return (
    <Screen headerless className="flex-1 gap-5">
      <BackLink fallback="/(auth)/(home)/home" />
      <Text className="titulo">Entrar na fila</Text>

      <Input label="Seu nome" placeholder="Ex: Duda e Marina" value={nome} onChangeText={setNome} autoCapitalize="words" />

      <View className="gap-1.5">
        <Input
          label="Número da música"
          placeholder="Ex: 10234"
          value={numero}
          onChangeText={(texto) => setNumero(texto.replace(/\D/g, ""))}
          keyboardType="number-pad"
          maxLength={6}
          errorMessage={naoEncontrada ? "Número não encontrado no catálogo" : undefined}
          renderErrorMessage={naoEncontrada}
        />
        {musica && (
          <Text className="apoio">
            {musica.titulo} — {musica.artista}
          </Text>
        )}
      </View>

      <View className="gap-1.5">
        <Text className="rotulo">Gênero</Text>
        <View className="flex-row flex-wrap gap-2">
          {generos.map((genero) => (
            <Chip key={genero} label={genero} active={musica?.genero === genero} />
          ))}
        </View>
      </View>

      <View className="flex-1" />

      <Button label="Confirmar entrada" onPress={handleConfirmar} disabled={!musica || !nome.trim()} />
      <Text className="nota">Máx. 2 músicas ativas por pessoa. Não é permitido repetir posição consecutiva.</Text>
    </Screen>
  );
}
