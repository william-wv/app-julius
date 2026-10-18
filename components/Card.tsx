import type { ReactNode } from "react";
import { Text, View } from "react-native";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Root({ children, className = "" }: CardProps) {
  return <View className={`card ${className}`}>{children}</View>;
}

function Title({ children }: { children: ReactNode }) {
  return <Text className="secao">{children}</Text>;
}

function Body({ children }: { children: ReactNode }) {
  return <View className="gap-1">{children}</View>;
}

// Componente composto: <Card>, <Card.Title>, <Card.Body>.
export const Card = Object.assign(Root, { Title, Body });
