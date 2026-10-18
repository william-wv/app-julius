import { Pressable, Text, View } from "react-native";
import type { FilaEntry, StatusFila } from "../types";

interface QueueCardProps {
  entry: FilaEntry;
  // Entrada do perfil atual: fundo pêssego e nome "Você".
  voce?: boolean;
  onPress?: () => void;
}

const statusLabel: Record<StatusFila, string> = {
  aguardando: "Aguardando",
  tocando: "Tocando",
  concluida: "Concluída",
};

// Item da lista "Fila agora" do Figma: posição, quem canta, música e status.
export function QueueCard({ entry, voce = false, onPress }: QueueCardProps) {
  const tocando = entry.status === "tocando";

  return (
    <Pressable
      accessibilityRole="button"
      disabled={!onPress}
      onPress={onPress}
      className={`fila-item active:opacity-80 ${voce ? "fila-item-voce" : ""}`}
    >
      <View className={`fila-posicao ${tocando ? "fila-posicao-tocando" : ""}`}>
        <Text className={`font-inter-semibold text-rotulo ${tocando ? "text-palco" : "text-texto-claro"}`}>
          {entry.posicao}
        </Text>
      </View>

      <View className="flex-1 gap-0.5">
        <Text className="font-inter-semibold text-apoio text-palco">{voce ? "Você" : entry.perfil.nome}</Text>
        <Text className="font-inter text-rotulo text-palco opacity-60">{entry.musica.titulo}</Text>
      </View>

      <Text className={`font-inter-medium text-mini ${tocando ? "text-luz" : "text-palco opacity-50"}`}>
        {statusLabel[entry.status]}
      </Text>
    </Pressable>
  );
}
