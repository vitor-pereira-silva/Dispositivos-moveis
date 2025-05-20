import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function Pessoa() {
  const [pessoa, setPessoa] = useState({})

  function revelar() {
    const novaPessoa = {
      nome: "Lucas",
      idade: "29",
      imagem: "https://i.pinimg.com/236x/84/7d/bb/847dbb9200ac3a0254686e7d83643e87.jpg"
    }
    setPessoa(novaPessoa)
  }
   function revelar2() {
    const novaPessoa = {
      nome: "Pedro ",
      idade: "22",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLSJGuR9hqxMOx-WbJn8a2bt3CYen4kP1Eg&s"
    }
    setPessoa(novaPessoa)
  }

  return (
    <View style={{ padding: 20 }}>
      <Card>
        <Card.Content>
          <Text variant='displaySmall'>Componente Pessoa</Text>
          <Text variant='displaySmall'>Nome: {pessoa.nome}</Text>
          <Text variant='displaySmall'>Idade: {pessoa.idade}</Text>
        </Card.Content>
        {pessoa.imagem && (
          <Card.Cover source={{ uri: pessoa.imagem }} />
        )}
        <Card.Actions>
          <Button onPress={revelar}>Revelar</Button>
          <Button onPress={revelar2}>Revelar2</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}
