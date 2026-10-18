import type { ReactNode } from "react";
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from "react-native";
import { colors } from "../theme/colors";

interface CardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Root({ children, style }: CardProps) {
  return <View style={[styles.root, style]}>{children}</View>;
}

function Title({ children }: { children: ReactNode }) {
  return <Text style={styles.title}>{children}</Text>;
}

function Body({ children }: { children: ReactNode }) {
  return <View style={styles.body}>{children}</View>;
}

// Componente composto: <Card>, <Card.Title>, <Card.Body>.
export const Card = Object.assign(Root, { Title, Body });

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  title: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  body: {
    gap: 4,
  },
});
