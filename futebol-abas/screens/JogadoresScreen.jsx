import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Title, PaperProvider } from 'react-native-paper';

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
  },
  {
    nome: "David Luiz",
    numero: 23,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
  },
  {
    nome: "Pedro",
    numero: 21,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
  },
];

export default function JogadoresScreen() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          data={jogadores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={{width:'100%'}}>
              <Card.Cover source={{ uri: item.imagem }} />
              <Card.Content>
                <Title>{item.nome}</Title>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  
});
