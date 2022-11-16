import React, { useState } from "react";
import ListIngredients from "./ListIngredients";
import Receta from "./Receta";
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
  const [recetas, setRecetas] = useState([]);

  const RECIPES_URL_NO_AUTH = `http://localhost:3001/api/recipes?food=${ingredientes}&page=1&pageSize=9&auth=false`;

  const requestNoAuth = new Request(RECIPES_URL_NO_AUTH, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const agregarIngrediente = () => {
    if (ingrediente !== "") {
      setIngredientes([ingrediente, ...ingredientes]);
      setIngrediente("");
    }
  };

  const buscarRecetas = () => {
    fetch(requestNoAuth)
      .then((response) => response.json())
      .then((data) => setRecetas(data))
      .catch((error) => console.error(error));
    setIngredientes([]);
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
      {ingredientes.length > 0 ? (
        <Button title="Buscar" onPress={() => buscarRecetas()} />
      ) : null}
      {recetas.length > 0
        ? recetas.map((receta) => {
            return (
              <View style={styles.container}>
                <Receta receta={receta} />
              </View>
            );
          })
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Buscador;
