// src/routes/ClienteStack.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CadastroProdutosScreen from '../Funcionario/screen/CadastroProdutosScreen';
import ProdutoDetalheScreen from '../cliente/screen/ProdutoDetalheScreen';

const Drawer = createDrawerNavigator();

export default function ClienteStack() {
  return (
    <Drawer.Navigator
    
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#f4511e',
        drawerInactiveTintColor: '#333',
      }}
    >
    <Drawer.Screen
  name="DetalhesDoProduto" // Nome da rota mais descritivo para ProdutoDetalheScreen
  component={ProdutoDetalheScreen}
  options={{
    title: 'Detalhes do Produto', // Título que corresponde ao componente
    drawerIcon: ({ color, size }) => (
      <Ionicons name="information-circle-outline" size={size} color={color} />
    ),
  }}
/>
     
    
      <Drawer.Screen
        name="CadastroProdutos"
        component={CadastroProdutosScreen}
        options={{
          title: 'Cadastro de Produtos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
        }}
      />
     
    </Drawer.Navigator>
  );
}
