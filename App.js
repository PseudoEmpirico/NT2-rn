import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Buscador from "./components/Buscador";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2EBD6B" barStyle="light-content" />
      <View style={styles.buscador}>
        <Buscador></Buscador>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcba03",
  },
  buscador: {
    flex: 1,
    backgroundColor: "#fcba03",
    margin: 60,
  },
});
