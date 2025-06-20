import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import produtosStorage from '../routes/produtosStorage';

export default function CarrinhoScreen() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    const lista = await produtosStorage.listar();
    setProdutos(lista);
  }

  async function limparCarrinho() {
    for (const produto of produtos) {
      await produtosStorage.remover(produto.id);
    }
    setProdutos([]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>

      {produtos.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={({ item }) => (
              <Card style={styles.card}>
                <Card.Content style={styles.content}>
                  {item.imagem && (
                    <Image source={{ uri: item.imagem }} style={styles.imagem} />
                  )}
                  <View style={styles.info}>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text style={styles.valor}>R$ {item.valor.toFixed(2)}</Text>
                  </View>
                </Card.Content>
              </Card>
            )}
          />

          <Button mode="contained" onPress={limparCarrinho} style={styles.botao}>
            Limpar Carrinho
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  empty: { fontSize: 16, textAlign: 'center', color: '#666', marginTop: 50 },
  card: { marginBottom: 12 },
  content: { flexDirection: 'row', alignItems: 'center' },
  imagem: { width: 80, height: 80, marginRight: 10, borderRadius: 8 },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: 'bold' },
  valor: { fontSize: 14, color: '#555' },
  botao: { marginTop: 20 },
});
