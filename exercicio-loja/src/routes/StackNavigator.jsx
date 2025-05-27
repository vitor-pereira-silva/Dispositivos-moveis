import React from 'react'
import { StyleSheet } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screen/HomeScreen'
import ListaProdutosScreen from '../screen/ListaProdutosScreen'
import ProdutosScreen from '../screen/ProdutoScreen'

const Stack = createStackNavigator()

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{
          title: 'Lista de Categorias',
          headerTitleAlign: 'center'
        }} 
      />

      <Stack.Screen 
        name='ListaProdutosScreen' 
        component={ListaProdutosScreen} 
        options={{
          title: 'Produtos da Categoria',
          headerTitleAlign: 'center'
        }} 
      />

      <Stack.Screen 
        name='ProdutosScreen' 
        component={ProdutosScreen} 
        options={{
          title: 'Detalhes do Produto',
          headerTitleAlign: 'center'
        }} 
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
