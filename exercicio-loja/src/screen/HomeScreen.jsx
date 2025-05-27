import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "react-native-paper";

export default function HomeScreen({ navigation, route }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((resposta) => {
        console.log(resposta.data);
        setCategorias(resposta.data);  // resposta é um array de strings
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <View>
      <FlatList
        style={{ marginBottom: 45 }}
        data={categorias}
        renderItem={({ item }) => (
          <Card style={{ margin: 5, padding: 10 }}
          onPress={()=>navigation.navigate('ProdutosScreen', item.id)}
          >
            <Text>{item}</Text>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
