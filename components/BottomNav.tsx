import { Image } from "expo-image";
import type { BottomTabBarProps } from "expo-router/js-tabs";
import { Pressable, Text, View } from "react-native";

// Ícones do Figma (assets/figma). A aba Home usa vinho; as outras, palco.
const icons = {
  home: { ativo: require("../assets/figma/nav-home-ativo.svg"), inativo: require("../assets/figma/nav-home-inativo.svg") },
  outra: { ativo: require("../assets/figma/nav-ativo.svg"), inativo: require("../assets/figma/nav-inativo.svg") },
};

const labelClass = {
  home: { ativo: "font-inter-semibold text-mini text-vinho", inativo: "font-inter-semibold text-mini text-vinho opacity-45" },
  outra: { ativo: "font-inter text-mini text-palco", inativo: "font-inter text-mini text-palco opacity-45" },
};

// BottomNav do Figma: substitui a tab bar padrão (prop `tabBar` do <Tabs>).
export function BottomNav({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  return (
    <View
      className="flex-row items-center justify-between border-t border-divisor bg-branco px-6 pt-2.5"
      style={{ height: 72 + insets.bottom, paddingBottom: 10 + insets.bottom }}
    >
      {state.routes.map((route, index) => {
        const ativo = state.index === index;
        const tipo = route.name === "(home)" ? "home" : "outra";
        const estado = ativo ? "ativo" : "inativo";
        const label = descriptors[route.key].options.title ?? route.name;

        const onPress = () => {
          const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
          if (!ativo && !event.defaultPrevented) navigation.navigate(route.name, route.params);
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: ativo }}
            onPress={onPress}
            className="items-center gap-1"
          >
            <Image source={icons[tipo][estado]} style={{ width: 22, height: 22 }} />
            <Text className={labelClass[tipo][estado]}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
