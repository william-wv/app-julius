import { Input as RNEInput, type InputProps } from "@rneui/base";
import { useId } from "react";
import { InputAccessoryView, Keyboard, Platform, Pressable, Text, View } from "react-native";
import { colors } from "../theme/colors";

// Teclados numéricos do iOS não têm tecla de enter/concluído.
const NUMERIC = ["number-pad", "numeric", "decimal-pad", "phone-pad"];

// Input do RNE com o visual do Figma (rótulo acima, caixa com borda arredondada).
// Os estilos do RNE vão por props de style (não aceitam className do NativeWind).
export function Input(props: Omit<InputProps, "ref">) {
  const accessoryId = useId();
  const numericIOS = Platform.OS === "ios" && NUMERIC.includes(props.keyboardType ?? "");

  return (
    <>
      <RNEInput
        placeholderTextColor="rgba(42, 12, 13, 0.35)"
        returnKeyType="done"
        inputAccessoryViewID={numericIOS ? accessoryId : undefined}
        containerStyle={{ paddingHorizontal: 0 }}
        labelStyle={{
          fontFamily: "Inter_500Medium",
          fontWeight: "normal",
          fontSize: 12,
          color: colors.palco,
          opacity: 0.6,
          marginBottom: 6,
        }}
        inputContainerStyle={{
          borderWidth: 1,
          borderBottomWidth: 1,
          borderColor: colors.borda,
          borderRadius: 12,
          backgroundColor: colors.branco,
          paddingHorizontal: 14,
        }}
        inputStyle={{ fontFamily: "Inter_400Regular", fontSize: 14, color: colors.palco, minHeight: 47 }}
        errorStyle={{ fontFamily: "Inter_400Regular", color: colors.perigo, marginHorizontal: 0 }}
        {...props}
      />

      {/* Barra "Concluído" acima do teclado numérico do iPhone */}
      {numericIOS && (
        <InputAccessoryView nativeID={accessoryId}>
          <View className="items-end border-t border-divisor bg-superficie px-4 py-2">
            <Pressable accessibilityRole="button" hitSlop={8} onPress={Keyboard.dismiss}>
              <Text className="font-inter-semibold text-corpo text-vinho">Concluído</Text>
            </Pressable>
          </View>
        </InputAccessoryView>
      )}
    </>
  );
}
