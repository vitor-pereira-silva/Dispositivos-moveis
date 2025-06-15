import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import produtosStorage from '../../routes/produtosStorage';

export default function CadastroProdutosScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState(null);
  const [mensagemErro, setMensagemErro] = useState('');

  async function escolherImagem() {
    setMensagemErro('');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      setMensagemErro('Permissão para acessar a galeria é necessária!');
      return;
    }

    let resulto = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resulto.canceled) {
      setImagem(resulto.assets[0].uri);
    }
  }

  async function salvar() {
    setMensagemErro('');
    if (!nome || !descricao || !dataValidade || !valor) {
      setMensagemErro('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const produto = {
      nome,
      descricao,
      dataValidade,
      valor: parseFloat(valor.replace(',', '.')),
      imagem,
    };

    try {
      await produtosStorage.salvar(produto); // <-- Salva no AsyncStorage
      navigation.navigate('DetalhesDoProduto', { produto }); // <-- Vai para a tela de detalhes

      // Limpa os campos
      setNome('');
      setDescricao('');
      setDataValidade('');
      setValor('');
      setImagem(null);
      setMensagemErro('Produto salvo com sucesso!');
    } catch (error) {
      console.error(error);
      setMensagemErro('Erro ao salvar o produto.');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleLarge" style={styles.headerTitle}>Cadastro de Produto</Text>

      {mensagemErro ? <Text style={styles.errorMessage}>{mensagemErro}</Text> : null}

      <TextInput
        label="Nome do Produto"
        mode="outlined"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        label="Descrição"
        mode="outlined"
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />

      <TextInput
        label="Data de Validade (DD/MM/AAAA)"
        mode="outlined"
        style={styles.input}
        placeholder="DD/MM/AAAA"
        value={dataValidade}
        onChangeText={setDataValidade}
        keyboardType="numeric"
      />

      <TextInput
        label="Valor (R$)"
        mode="outlined"
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        keyboardType="decimal-pad"
      />

      <Button mode="contained" onPress={escolherImagem} style={styles.imageButton}>
        Escolher imagem da galeria
      </Button>

      {imagem && (
        <Image
          source={{ uri: imagem }}
          style={styles.previewImage}
        />
      )}

      <Button mode="contained" onPress={salvar} style={styles.saveButton}>
        Salvar Produto
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  headerTitle: {
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  imageButton: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#007bff',
    width: '100%',
  },
  previewImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    width: '100%',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
