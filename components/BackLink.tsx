import { useRouter, type Href } from "expo-router";
import { Pressable, Text } from "react-native";

interface BackLinkProps {
  label?: string;
  // Para onde ir se não houver tela anterior (ex: app aberto direto nesta rota por link).
  fallback: Href;
}

// "‹ Voltar" do Figma: navegação clicável dentro do app, sem depender do botão/gesto do aparelho.
export function BackLink({ label = "Voltar", fallback }: BackLinkProps) {
  const router = useRouter();

  const handlePress = () => {
    if (router.canGoBack()) router.back();
    else router.replace(fallback);
  };

  return (
    <Pressable accessibilityRole="link" hitSlop={12} onPress={handlePress} className="self-start active:opacity-60">
      <Text className="font-inter-medium text-apoio text-vinho">‹ {label}</Text>
    </Pressable>
  );
}
