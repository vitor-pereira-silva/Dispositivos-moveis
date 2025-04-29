import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, PaperProvider, Title } from 'react-native-paper';

const Copa2022Screens = () => {
  const copa = [{
    nome: "Copa do Mundo FIFA 2022",
    imagem: 'https://i.pinimg.com/236x/00/63/15/00631561f4895a630508c2b0d0bdb4d1.jpg',
    local: "Qatar",
    organizacao: "FIFA",
    mascote: "La'eeb",
    edicao: 22,
    ano: 2022,
    campeao: "Argentina",
    viceCampeao: "França",
  }];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          data={copa}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.imagem }} />
              <Title>{item.nome}</Title>
              <Title>Local: {item.local}</Title>
              <Title>Organização: {item.organizacao}</Title>
              <Title>Mascote: {item.mascote}</Title>
              <Title>Edição: {item.edicao}</Title>
              <Title>Ano: {item.ano}</Title>
              <Title>Campeão: {item.campeao}</Title>
              <Title>Vice-campeão: {item.viceCampeao}</Title>
            </Card>
          )}
        />
      </View>
    </PaperProvider>
  );
};

export default Copa2022Screens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
     backgroundColor:"#FFA07A",
  },
  card: {
    marginBottom: 10,
    backgroundColor:"#DC143C"
  },
});
