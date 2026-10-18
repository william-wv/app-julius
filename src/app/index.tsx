import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JULIUS</Text>
      <Text style={styles.subtitle}>Expo Router configurado.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  title: {
    color: "#E7B24C",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  subtitle: {
    color: "#F5E4DA",
    fontSize: 13,
  },
});
