import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

export default function CadastroUsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('cliente'); // ou 'funcionario'

  function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function handleCadastrar() {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert('Erro', 'Email inválido.');
      return;
    }

    // Aqui você pode salvar os dados no AsyncStorage, backend, etc.
    Alert.alert('Sucesso', `Usuário ${nome} cadastrado como ${cargo}.`);
    
    // Após cadastro, você pode navegar para outra tela, ex:
    navigation.goBack();
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.label}>Tipo de Usuário</Text>
      <View style={styles.cargoContainer}>
        <Button
          mode={cargo === 'cliente' ? 'contained' : 'outlined'}
          onPress={() => setCargo('cliente')}
          style={styles.cargoButton}
        >
          Cliente
        </Button>
        <Button
          mode={cargo === 'funcionario' ? 'contained' : 'outlined'}
          onPress={() => setCargo('funcionario')}
          style={styles.cargoButton}
        >
          Funcionário
        </Button>
      </View>

      <Button mode="contained" onPress={handleCadastrar} style={styles.submitButton}>
        Cadastrar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  cargoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  cargoButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  submitButton: {
    paddingVertical: 8,
  },
});
