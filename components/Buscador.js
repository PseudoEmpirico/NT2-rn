import React, { useState } from "react";
import ListIngredients from "./ListIngredients";
import {
  Text,
  TextInput,
  View,
  Button,
  Separator,
  StyleSheet,
} from "react-native";

const Buscador = () => {
  const [ingredientes, setIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState("");

  const agregarIngrediente = () => {
    if (ingrediente !== "") {
      setIngredientes([ingrediente, ...ingredientes]);
      setIngrediente("");
    }
  };

  return (
    <View>
      <TextInput
        value={ingrediente}
        style={styles.input}
        placeholder="Que tenes para cocinar hoy?"
        onChangeText={(newText) => setIngrediente(newText)}
      ></TextInput>
      <Button title="Agregar" onPress={() => agregarIngrediente()} />
      <ListIngredients ingredientes={ingredientes} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Buscador;
