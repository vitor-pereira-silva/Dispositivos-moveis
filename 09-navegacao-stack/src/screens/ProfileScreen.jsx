// Importa os componentes de interface do React Native
import { StyleSheet, Text, View } from 'react-native'

// Importa o componente Button da biblioteca react-native-paper
import { Button } from 'react-native-paper'

// Importa o React (necessário para criar componentes funcionais)
import React from 'react'

// Componente da tela Profile
export default function ProfileScreen(props) {

  // Desestrutura os objetos navigation e route dos props (passados automaticamente pelo React Navigation)
  const { navigation, route } = props

  return (
    // View é como uma "div" do HTML, usada para agrupar elementos
    <View>
      {/* Título da tela */}
      <Text>ProfileScreen</Text>

      {/* Botão para ir para a tela de configurações */}
      <Button
        mode='contained' // botão com fundo preenchido
        onPress={() => navigation.navigate('ConfigScreen')} // navega para a tela "ConfigScreen"
      >
        Ir para Tela Config
      </Button>

      {/* Botão para voltar para a tela anterior */}
      <Button
        mode='contained-tonal' // botão com estilo mais leve
        onPress={() => navigation.goBack()} // função que volta para a tela anterior
      >
        Voltar
      </Button>
    </View>
  )
}

// Objeto para definir estilos com StyleSheet (atualmente vazio)
const styles = StyleSheet.create({})
