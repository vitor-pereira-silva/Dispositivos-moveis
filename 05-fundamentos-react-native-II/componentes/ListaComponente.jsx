import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListaComponente = () => {

    const lista = [ maça, banana, Laranja]
  return (
    
    <View>
      {lista.map((fruta) => <Text >{fruta}</Text>)}
    </View>
  )
}

export default ListaComponente

const styles = StyleSheet.create({
    container:{
        borderLeftColor: "#000666",
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        fontSize: 20,
        fontWeight: 600
    }
})