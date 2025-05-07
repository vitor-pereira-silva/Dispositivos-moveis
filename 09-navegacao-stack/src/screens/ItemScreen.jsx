// Importando componentes básicos do React Native
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Importando o Card da biblioteca react-native-paper
import { Button, Card } from 'react-native-paper'

// Componente de tela para exibir os detalhes do carro
export default function ItemScreen({ navigation, route }) {
  // Recebe o objeto carro passado pela navegação
  const carro = route.params.item

  return (
    <View>
      {/* Cartão que exibe os dados do carro */}
      <Card>
        <Card.Content>
          <Text>Nome: {carro.nome}</Text>
          <Text>Fabricante: {carro.fabricante}</Text>
          <Text>Ano: {carro.ano}</Text>
          <Text>Cor: {carro.cor}</Text>
        </Card.Content>
        <Card.Actions>
            <Button 
            mode='contained-tonal'
            icon='arrowe-left'
            onPress={()=>navigation.goBack()}
            >

            </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

// Estilo vazio por enquanto (pode adicionar padding ou margem se quiser)
const styles = StyleSheet.create({})
