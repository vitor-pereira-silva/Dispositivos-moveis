import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-native-paper";

export default function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/`)
      .then((res) => {
        setProduto(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setErro("Erro ao carregar o produto.");
        setLoading(false);
        console.log(err);
      });
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando detalhes do produto...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.center}>
        <Text>{erro}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>{produto.title}</Text>
        <Image source={{ uri: produto.thumbnail }} style={styles.image} />
        <Text style={styles.description}>{produto.description}</Text>
        <Text style={styles.price}>Preço: R$ {produto.price.toFixed(2)}</Text>
        <Text>Marca: {produto.brand}</Text>
        <Text>Categoria: {produto.category}</Text>
        <Text>Rating: {produto.rating}</Text>
        <Text>Estoque: {produto.stock}</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    padding: 15,
    alignItems: "center"
  },
  card: {
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
