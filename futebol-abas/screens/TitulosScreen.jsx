import { StyleSheet, FlatList, View } from 'react-native';
import { Text, Card, PaperProvider, Title } from 'react-native-paper';
import React from 'react';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
  },
];

export default function TitulosScreen() {
  return (
    <PaperProvider>
      <FlatList
        data={titulos}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.nome}</Title>
              <Text>Anos: {item.anos.join(', ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});
