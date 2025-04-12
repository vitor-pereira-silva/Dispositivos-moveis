import { StyleSheet,  View } from 'react-native'
import { Text,Card, PaperProvider } from 'react-native-paper'
import React from 'react'

const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    };
export default function EscudoScreen() {
  return (
    <PaperProvider>
        <Card>
            <Text>
                {time.nome}
            </Text>
            <Card.Cover source={{uri:time.escudo}}/>
        </Card>
       
    
    </PaperProvider>
    
  )
}

const styles = StyleSheet.create({})