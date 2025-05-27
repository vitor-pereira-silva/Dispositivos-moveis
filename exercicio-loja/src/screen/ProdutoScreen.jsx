import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "react-native-paper";

export default function ProductsScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoria}`)
      .then((res) => {
        console.log(res.data.products);
        setProdutos(res.data.products);
      })
      .catch((err) => {
        console.log("Erro ao buscar produtos:", err);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ margin: 5, padding: 10 }}>
            <Text>{item.title}</Text>
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: 100, height: 100 }}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
