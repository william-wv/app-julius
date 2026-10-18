import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import type { ReactNode } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, View } from "react-native";

interface ScreenProps {
  children: ReactNode;
  scroll?: boolean;
  // Faixa escura do topo (<Hero>).
  hero?: ReactNode;
  // Tela sem header e sem hero (Entrar na fila, Foto): conteúdo desce abaixo da status bar.
  headerless?: boolean;
  // Classes extras para a área de conteúdo (ex: "flex-1" para fixar botão no rodapé).
  className?: string;
}

// Container padrão de toda tela: fundo branco, hero opcional e conteúdo com o padding do Figma.
// Teclado: tocar fora de um campo fecha o teclado, e o conteúdo sobe para não ficar coberto.
export function Screen({ children, scroll = false, hero, headerless = false, className = "" }: ScreenProps) {
  const top = headerless ? { paddingTop: Constants.statusBarHeight + 16 } : undefined;

  const body = (
    <>
      {hero}
      <View className={`screen-content ${className}`} style={top}>
        {children}
      </View>
    </>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <StatusBar style={hero ? "light" : "dark"} />
      {scroll ? (
        <ScrollView
          className="screen"
          contentContainerClassName="grow"
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {body}
        </ScrollView>
      ) : (
        <Pressable className="screen" onPress={Keyboard.dismiss} accessible={false}>
          {body}
        </Pressable>
      )}
    </KeyboardAvoidingView>
  );
}
