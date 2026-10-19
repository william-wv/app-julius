// Fontes do Figma: Inter (texto) e Oswald Bold (marca e números grandes).
// Import por peso: o import da raiz do pacote embutiria todos os pesos (~6 MB).
// No React Native cada peso é uma família separada, por isso não se usa font-bold/font-semibold.
import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_500Medium } from "@expo-google-fonts/inter/500Medium";
import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { Oswald_700Bold } from "@expo-google-fonts/oswald/700Bold";

export const fonts = {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Oswald_700Bold,
};
