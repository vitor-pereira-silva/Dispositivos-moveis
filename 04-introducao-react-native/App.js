// inports

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// Função que define o componente

export default function App() {
  // Lógica do componente 
  const nome = " vitor"
  function alerta() {
    alert("clicou no botão")
  }
  // retronar
  return (
    <ScrollView>
      <View style={styles.container}>


        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbirLXRJtVpzOpUbkRkcm2-NZKRY-fvXBjg&s"

          }}
          //css
          style={{
            height: 400,
            width: 400
          }}
        />
        {/* imagem da web */}
        <Image
          source={{
            uri: "https://bandalheira.cdn.magazord.com.br/img/2021/06/produto/4659/13-justiceiro-1-1.jpg?ims=fit-in/1200x1200"

          }}
          //css
          style={{
            height: 400,
            width: 400
          }}
        />

        {/* imagem baixada  */}
        <Image
          source={require('./imagens/imagem.png')}
          //css
          style={{
            height: 400,
            width: 400
          }}
        />
        <Button title='Clicar' onPress={alerta}></Button>
        <StatusBar style="auto" />

        <Text>{2 + 2}</Text>

        <Text>Bem vindo {nome}</Text >


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});