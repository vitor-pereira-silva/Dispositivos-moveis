import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import produtosStorage from '../routes/produtosStorage';

export default function ProdutosScreen({ navigation }) {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    const listarProdutos = await produtosStorage.listar();
    setProduto(listarProdutos);
  }

  if (!produto || produto.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nenhum produto encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={produto}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProdutoDetalheScreen', { produto: item })}>
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.row}>
                  {item.imagem ? (
                    <Image source={{ uri: item.imagem }} style={styles.produtoImagem} />
                  ) : (
                    <Text style={styles.noImageText}>Imagem não disponível</Text>
                  )}
                  <View style={styles.textContainer}>
                    <Text style={styles.value}>NOME: {item.nome}</Text>
                    <Text style={styles.value}>VALOR: {item.valor}</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    margin: 10,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  produtoImagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  noImageText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888',
    marginVertical: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});
