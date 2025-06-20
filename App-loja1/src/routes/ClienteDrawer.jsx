import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import ProdutosStack from './ProdutosStack';
import CadastroProdutosScreen from '../screen/CadastroProdutosScreen';
import LoginScreen from '../screen/LoginScreen';

const Drawer = createDrawerNavigator();

export default function ClienteDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Produtos"
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#32CD32',
        drawerInactiveTintColor: '#333',
      }}
    >
      <Drawer.Screen
        name="Produtos"
        component={ProdutosStack}  // Usando o Stack que inclui detalhes
        options={{
          title: 'Produtos',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="pricetags-outline" size={size} color={color} />
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

      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
