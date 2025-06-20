import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if (email === 'usuario@exemplo.com' && senha === '123456') {
      Alert.alert('Login realizado com sucesso!');
      navigation.navigate('Produtos'); // ou qualquer tela principal que quiser
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {/* Botão para navegar para tela de cadastro */}
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('CadastroUsuarioScreen')}
        style={{ marginBottom: 20 }}
      >
        Faça seu cadastro
      </Button>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
