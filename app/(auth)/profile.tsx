import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button, Hero, InsigniaBadge, Screen } from "../../components";
import useNavigationExitOnBack from "../../hooks/useNavigationExitOnBack";
import { generos } from "../../mocks/catalogo";
import { historico } from "../../mocks/historico";
import { insignias } from "../../mocks/insignias";
import { perfilAtual } from "../../mocks/perfil";

const avatar = require("../../assets/figma/avatar.svg");

// "set/26" a partir da música mais antiga do histórico.
function membroDesde(): string {
  const primeira = new Date(historico[historico.length - 1].cantadaEm);
  const mes = primeira.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
  return `${mes}/${String(primeira.getFullYear()).slice(2)}`;
}

export default function _screen() {
  useNavigationExitOnBack();

  const router = useRouter();

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <Screen
      scroll
      className="gap-3.5 pt-6"
      hero={
        <Hero tone="vinho" align="center">
          <Image source={avatar} style={{ width: 64, height: 64 }} />
          <Text className="font-inter-semibold text-destaque text-texto-claro">{perfilAtual.nome}</Text>
          <Text className="font-inter text-rotulo text-texto-claro opacity-75">
            {historico.length} músicas cantadas · membro desde {membroDesde()}
          </Text>
        </Hero>
      }
    >
      <Text className="font-inter-semibold text-corpo text-palco">Insígnias por gênero</Text>

      <View className="flex-row flex-wrap gap-3">
        {generos.map((genero) => {
          const insignia = insignias.find((i) => i.genero === genero);
          const cantadas = historico.filter((h) => h.musica.genero === genero).length;
          return (
            <InsigniaBadge
              key={genero}
              genero={genero}
              nivel={insignia?.nivel}
              quantidade={insignia?.quantidade ?? cantadas}
            />
          );
        })}
      </View>

      <Link href="/foto" asChild>
        <Text className="link">Foto do momento →</Text>
      </Link>

      <Button label="Sair" variant="outline" onPress={handleLogout} />
    </Screen>
  );
}
