// Importa os componentes básicos do React Native
import { StyleSheet, Text, View } from 'react-native'

// Importa o botão da biblioteca react-native-paper
import { Button } from 'react-native-paper'

// Importa o React para usar JSX e componentes funcionais
import React from 'react'

// Componente principal da tela de Configurações
export default function ConfigScreen(props) {

  // Extrai os objetos de navegação e rota passados automaticamente pelo React Navigation
  const { navigation, route } = props

  return (
    <View>
      {/* Título da tela */}
      <Text>ConfigScreen</Text>

      {/* Botão para voltar à tela anterior */}
      <Button
        mode='contained-tonal' // estilo do botão (versão tonal do contained)
        onPress={() => navigation.goBack()} // chama a função para voltar à tela anterior
      >
        Voltar
      </Button>
    </View>
  )
}

// Objeto de estilos (atualmente vazio, pode ser usado para personalizar visualmente a tela)
const styles = StyleSheet.create({})
