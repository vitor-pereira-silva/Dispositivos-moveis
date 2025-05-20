import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function NomeNumero() {
    const[nome, setNome]= useState('?????')
  
    let numero ='????'

    function mostraNomeNumero(){
      setNome("Lucas")
        numero = "122"
        console.log(nome)
        console.log(numero)

    }
    function auteraNome(){
        setNome("Pedro")
    }
  return (
    <View>
     <Card>
        <Card.Content>

        <Card.Title title="Componente NomeNumero"/>
        <Text variant='displayMedium'>Nome: {nome}</Text>
        <Text variant='displayMedium'>Número: {numero}</Text>
        <Card.Actions>
            <Button onPress={mostraNomeNumero}>Monstra</Button>
             <Button onPress={auteraNome}>Altera Nome</Button>
        </Card.Actions>
        
        </Card.Content>
     </Card>
    </View>
  )
}

