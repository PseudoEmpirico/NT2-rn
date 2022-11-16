import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Separator,
  StyleSheet,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 4,
    borderColor: "black",
    borderWidth: 2,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const Receta = ({ receta }) => {
  return (
    <View style={styles.container}>
      <Text>{receta.title}</Text>
      <Image
        source={{ uri: receta.images.THUMBNAIL.url }}
        style={styles.logo}
      />
      {receta.ingredients.map((ingredient) => {
        return <Text>{ingredient.food}</Text>;
      })}
    </View>
  );
};

export default Receta;
