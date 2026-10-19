import { Text, View } from "react-native";
import type { Genero, Nivel } from "../types";

interface InsigniaBadgeProps {
  genero: Genero;
  // Sem nível = insígnia ainda bloqueada.
  nivel?: Nivel;
  quantidade: number;
}

const emoji: Record<Nivel, string> = { ouro: "🥇", prata: "🥈", bronze: "🥉" };
const nivelLabel: Record<Nivel, string> = { ouro: "Ouro", prata: "Prata", bronze: "Bronze" };

// BadgeCard do Figma: dourado quando conquistada, cinza translúcido quando bloqueada.
export function InsigniaBadge({ genero, nivel, quantidade }: InsigniaBadgeProps) {
  const musicas = `· ${quantidade} ${quantidade === 1 ? "música" : "músicas"}`;

  return (
    <View className={`insignia ${nivel ? "" : "insignia-bloqueada"}`}>
      <Text className="text-[22px]">{nivel ? emoji[nivel] : "🔒"}</Text>
      <Text className="font-inter-semibold text-corpo text-palco">{genero}</Text>
      <View className="flex-row gap-1.5">
        <Text className="font-inter-semibold text-mini text-palco opacity-70">{nivel ? nivelLabel[nivel] : "Bloqueada"}</Text>
        <Text className="font-inter text-mini text-palco opacity-55">{musicas}</Text>
      </View>
    </View>
  );
}
