import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text } from "react-native";
import { BackLink, Button, Input, Screen } from "../components";

export default function _screen() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");

  const handleRegister = () => {
    router.replace("/(auth)/(home)/home");
  };

  return (
    <Screen headerless>
      <BackLink fallback="/" />
      <Text className="titulo">Criar perfil</Text>

      <Input label="Nome" placeholder="Ex: Duda e Marina" value={nome} onChangeText={setNome} autoCapitalize="words" />
      <Input
        label="Apelido (opcional)"
        placeholder="Ex: Duda"
        value={apelido}
        onChangeText={setApelido}
        autoCapitalize="words"
      />
      <Button label="Criar perfil" onPress={handleRegister} disabled={!nome.trim()} />
    </Screen>
  );
}
