import Constants from "expo-constants";
import type { ReactNode } from "react";
import { Text, View } from "react-native";

type Tone = "palco" | "vinho";
type Align = "start" | "center";

interface HeroProps {
  children: ReactNode;
  tone?: Tone;
  align?: Align;
}

// Nomes completos (sem template string) para o Tailwind encontrar as classes.
const tones: Record<Tone, string> = { palco: "", vinho: "hero-vinho" };
const aligns: Record<Align, string> = { start: "", center: "hero-center" };

// Faixa escura do topo das telas sem header (Home, Minha Fila, Perfil).
function Root({ children, tone = "palco", align = "start" }: HeroProps) {
  // Figma: 72px (alinhado à esquerda) / 56px (centralizado) a partir do topo do aparelho.
  const top = Constants.statusBarHeight + (align === "start" ? 28 : 12);

  return (
    <View className={`hero ${tones[tone]} ${aligns[align]}`} style={{ paddingTop: top }}>
      {children}
    </View>
  );
}

type PillTone = "luz" | "branco";
const pillTones: Record<PillTone, string> = { luz: "bg-luz", branco: "bg-branco" };

function Pill({ children, tone = "luz" }: { children: ReactNode; tone?: PillTone }) {
  return (
    <View className={`pilula ${pillTones[tone]}`}>
      <Text className="pilula-texto">{children}</Text>
    </View>
  );
}

// Componente composto: <Hero>, <Hero.Pill>.
export const Hero = Object.assign(Root, { Pill });
