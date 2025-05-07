import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native' // Importar Image daqui
import { Button, Card } from 'react-native-paper'

export default function ReceitaScreen({ navigation, route }) {
  console.log("RECEITA RECEBIDA =>", route.params.item)

  const receita = route.params.item

  return (
    <View>
      <Card style={{ margin: 10 }}>
        <Card.Content>
          <Image 
            source={{ uri: receita.imagem }}
            style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }}
          />
<Text>Nome: {receita.nome}</Text>
<Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
<Text>Porções: {receita.porcoes}</Text>

<Text style={{ marginTop: 10, fontWeight: 'bold' }}>Ingredientes:</Text>
<Text>{receita.ingredientes.join('\n')}</Text>

<Text style={{ marginTop: 10, fontWeight: 'bold' }}>Modo de Preparo:</Text>
<Text>{receita.modoPreparo.join('\n')}</Text>

        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})
