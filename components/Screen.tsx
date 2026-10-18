import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { colors } from "../theme/colors";

interface ScreenProps {
  children: ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
}

// Container padrão de toda tela: fundo do tema, espaçamento e rolagem opcional.
export function Screen({ children, scroll = false, style }: ScreenProps) {
  if (scroll) {
    return (
      <ScrollView style={styles.base} contentContainerStyle={[styles.content, style]}>
        {children}
      </ScrollView>
    );
  }

  return <View style={[styles.base, styles.content, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    gap: 16,
  },
});
