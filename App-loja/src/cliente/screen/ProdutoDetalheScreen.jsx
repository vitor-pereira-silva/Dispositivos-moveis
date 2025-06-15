import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function ProdutoDetalheScreen({ route }) {
  // Verifica se route.params existe antes de desestruturar
  // Se route.params for undefined, 'produto' será undefined, mas não causará um erro imediato aqui
  const { produto } = route.params || {}; 

  // Adiciona uma verificação para 'produto' antes de tentar acessar suas propriedades
  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Erro: Produto não encontrado ou dados inválidos.</Text>
        <Text style={styles.value}>Verifique se o produto está sendo passado corretamente para esta tela.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Produto</Text>

      {/* Verifica se produto.imagem existe antes de renderizar a imagem */}
      {produto.imagem ? (
        <Image source={{ uri: produto.imagem }} style={styles.imagem} />
      ) : (
        <Text style={styles.noImageText}>Sem imagem disponível</Text>
      )}

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{produto.nome || 'N/A'}</Text> {/* Fallback para 'N/A' */}

      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.value}>{produto.descricao || 'N/A'}</Text>

      <Text style={styles.label}>Data de Validade:</Text>
      <Text style={styles.value}>{produto.dataValidade || 'N/A'}</Text>

      <Text style={styles.label}>Valor:</Text>
      <Text style={styles.value}>R$ {produto.valor != null ? produto.valor.toFixed(2) : 'N/A'}</Text> {/* Formata valor e verifica null/undefined */}

      <Button mode="contained" onPress={() => console.log('Botão carinho pressionado')}>
        Carrinho
      </Button>
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
    textAlign: 'center', // Centraliza o título
  },
  imagem: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 8, // Adiciona bordas arredondadas à imagem
  },
  noImageText: {
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
    color: '#888',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
});
