import { StyleSheet, Text } from "react-native";
import { Button, Card, Screen } from "../components";
import { colors } from "../theme/colors";

export default function Home() {
  return (
    <Screen>
      <Text style={styles.title}>JULIUS</Text>

      <Card>
        <Card.Title>Em construção</Card.Title>
        <Card.Body>
          <Text style={styles.text}>Componentes base prontos: Screen, Card e Button.</Text>
        </Card.Body>
      </Card>

      <Button label="Entrar na fila" disabled />
      <Button label="Ver minha fila" variant="ghost" disabled />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.accent,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },
  text: {
    color: colors.text,
    fontSize: 14,
  },
});
