import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  TextInput,
  View,
  Button,
  Separator,
  StyleSheet,
} from "react-native";

const ListIngredients = ({ ingredientes }) => {
  return (
    <View>
      <View>
        <Text style={styles.container}>INGREDIENTES:</Text>
      </View>
      <View>
        <SafeAreaView style={styles.container}>
          <FlatList
            ListEmptyComponent={<Text>sus ingredientes apareceran aqui</Text>}
            data={ingredientes}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ListIngredients;
