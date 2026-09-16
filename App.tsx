import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { getDb } from "./src/db/client";

export default function App() {
  const [status, setStatus] = useState("Abrindo banco local...");

  useEffect(() => {
    getDb()
      .then(() => setStatus("Banco SQLite pronto (perfil, fila, insígnias, catálogo)."))
      .catch((err) => setStatus("Erro ao abrir banco: " + err.message));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>JULIUS</Text>
      <Text style={styles.status}>{status}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A0C0D",
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
  status: {
    color: "#F5E4DA",
    fontSize: 13,
  },
});
