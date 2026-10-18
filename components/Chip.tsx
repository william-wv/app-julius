import { Pressable, Text } from "react-native";

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

// Chip de gênero do Figma: preenchido em vinho quando ativo, contorno quando não.
export function Chip({ label, active = false, onPress }: ChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      disabled={!onPress}
      onPress={onPress}
      className={`chip ${active ? "chip-ativo" : ""}`}
    >
      <Text className={active ? "chip-texto chip-texto-ativo" : "chip-texto"}>{label}</Text>
    </Pressable>
  );
}
