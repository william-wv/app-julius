import { colors } from "./colors";

// Nenhuma tela usa o header nativo: a navegação é toda por elementos clicáveis do app
// (BottomNav, links e <BackLink>), igual em iPhone e Android. O `title` de cada
// Stack.Screen continua definido como metadado da rota.
export const stackScreenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: colors.branco },
};
