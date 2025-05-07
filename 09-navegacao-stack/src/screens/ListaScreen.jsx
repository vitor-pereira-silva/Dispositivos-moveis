// Importando os módulos necessários do React Native
import { StyleSheet, Text, View } from 'react-native'
// Importando o React (necessário para componentes funcionais)
import React from 'react'
// FlatList da biblioteca react-native-gesture-handler (pode usar do react-native também)
import { FlatList } from 'react-native-gesture-handler'
// Importando componentes visuais da biblioteca react-native-paper
import { Button, Card } from 'react-native-paper'


// Componente principal que será exportado
export default function ListaScreen({ navigation, route }) {
  // Lista de objetos representando carros
  const carros = [
    {
      nome: "Gol",
      ano: "2012",
      cor: "Azul",
      fabricante: "Volkswagen",
    },
    {
      nome: "Palio",
      ano: "2015",
      cor: "Vermelho",
      fabricante: "Fiat",
    },
    {
      nome: "Civic",
      ano: "2018",
      cor: "Preto",
      fabricante: "Honda",
    },
  ];

  // Renderização do componente
  return (
    <View>
      {/* FlatList é usada para exibir uma lista eficiente de itens */}
      <FlatList
        data={carros} // Fonte de dados da lista
        renderItem={({ item }) => ( // Define como cada item da lista será renderizado
          <Card style={styles.card}> {/* Cartão visual para cada carro */}
            <Card.Content>
              {/* Textos com informações do carro */}
              <Text>Carro: {item.nome}</Text>
            </Card.Content>
            <Card.Actions>
              {/* Botão que navega para a tela de detalhes passando o objeto item */}
              <Button
                mode='contained'
                icon='arrow-right'
                onPress={() => navigation.navigate('ItemScreen', { item })}
              >
                Ver detalhes
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

// Estilos para o componente
const styles = StyleSheet.create({
  card: {
    margin: 10, // Margem entre os cartões
  },
});
