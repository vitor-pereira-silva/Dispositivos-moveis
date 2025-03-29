import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filme(props) {

    const {nome, ano, diretor, tipo, capa}= props

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:{nome}</Text>
      <Text style={styles.texto}>Ano de lançamento:{ano}</Text>
      <Text style={styles.texto}>Diretor:{diretor} </Text>
      <Text style={styles.texto}>Tipo:{tipo}</Text>
      

      <Image
        source={{
          uri: capa
        }}
        style={{
          height: 300,
          width: 300
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      borderWidth: 10,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    texto: {
        color: '#0000FF',
      fontSize: 20,
      fontWeight: 600,
      borderWidth: 5,
      padding: 5
    }
  })