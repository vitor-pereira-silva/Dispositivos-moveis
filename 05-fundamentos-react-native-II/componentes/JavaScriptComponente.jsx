import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

 export const JavaScriptComponente = () => {
    const Nome = 'Vitor'
    const Idade = 24

    function checarMaiorIdade(){
        if(Idade>= 18){
            return "maior de idade "
        }else{
            return "Menor de idade"
        }
    }
    function alerta(){
        console.log ('chamou a funçao alerta')
        alert('Clico no Butão')
    }
  return (
    <View>
      <Text>JavaScriptComponente</Text>
      <Text>Nome: {Nome}</Text>
      <Text>Idade: {Idade}</Text>
      <Text>Idade + 40 : {Idade + 40 }</Text>
      <Text>18+ : {checarMaiorIdade ()}</Text>
      <Button title='Clicar' onPress={alerta}/>
    </View>
  )
}

export default JavaScriptComponente

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#808080'
    }
})