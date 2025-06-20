import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import produtosStorage from '../routes/produtosStorage';

export default function ProdutoDetalheScreen({ navigation, route }) {
  const produtoDetalhe = route.params?.produto;

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    const listarProdutos = await produtosStorage.listar();
    setProdutos(listarProdutos);
  }

  async function deletarProduto(id) {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza que deseja deletar este produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim',
          onPress: async () => {
            await produtosStorage.remover(id);
            navigation.goBack(); // volta para a lista após deletar
          },
        },
      ]
    );
  }

  async function salvarNoCarrinho() {
    await produtosStorage.salvar(produtoDetalhe); // salva o produto atual no carrinho
    navigation.navigate('Carrinho'); // vai para o carrinho
  }

  return (
    <View style={styles.container}>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          {produtoDetalhe.imagem && (
            <Card.Cover source={{ uri: produtoDetalhe.imagem }} />
          )}
          <Text>ID: {produtoDetalhe.id}</Text>
          <Text>NOME: {produtoDetalhe.nome}</Text>
          <Text>DESCRIÇÃO: {produtoDetalhe.descricao}</Text>
          <Text>DATA: {produtoDetalhe.dataValidade}</Text>
          <Text>VALOR: R$ {produtoDetalhe.valor}</Text>
        </Card.Content>

        <Card.Actions style={{ gap: 8 }}>
          <Button
            icon="pencil"
            mode="contained"
            onPress={() =>
              navigation.navigate('CadastroProdutosScreen', { produto: produtoDetalhe })
            }
          >
            Editar
          </Button>

          <Button
            icon="trash-can"
            mode="contained"
            onPress={() => deletarProduto(produtoDetalhe.id)}
          >
            Deletar
          </Button>
        </Card.Actions>

        <Button
          style={styles.botao}
          icon="cart"
          mode="contained"
          onPress={salvarNoCarrinho}
        >
          Salvar no carrinho
        </Button>

        <Button
          style={styles.botao}
          icon="checkmark"
          mode="contained"
          onPress={() => console.log('Finalizar compra')}
        >
          Finalizar compra
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  botao: {
    margin: 5,
    padding: 6,
  },
});
