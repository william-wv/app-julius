import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#2A0C0D" },
          headerTintColor: "#E7B24C",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: "#2A0C0D" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Julius" }} />
      </Stack>
    </>
  );
}
