import { Tabs } from "expo-router";
import React from "react";
import { BottomNav } from "../../components";

export default function _layout() {
  return (
    <Tabs tabBar={(props) => <BottomNav {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(home)" options={{ title: "Home" }} />
      <Tabs.Screen name="fila" options={{ title: "Minha Fila" }} />
      <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
