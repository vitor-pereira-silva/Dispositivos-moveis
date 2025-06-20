import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProdutosScreen from '../screen/ProdutosScreen';
import ProdutoDetalheScreen from '../screen/ProdutoDetalheScreen';
import CadastroProdutosScreen from '../screen/CadastroProdutosScreen'; 
import CadastroUsuarioScreen from '../screen/CadastroUsuarioScreen';
import CarrinhoScreen from '../screen/CarrinhoScreen'; 

const Stack = createStackNavigator();

export default function ProdutosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos"
        component={ProdutosScreen}
        options={{ title: 'Lista de Produtos' }}
      />
      <Stack.Screen
        name="ProdutoDetalheScreen"
        component={ProdutoDetalheScreen}
        options={{ title: 'Detalhes do Produto' }}
      />
      <Stack.Screen
        name="CadastroProdutosScreen"
        component={CadastroProdutosScreen}
        options={{ title: 'Editar Produto' }}
      />
      <Stack.Screen
        name="Carrinho" 
        component={CarrinhoScreen}
        options={{ title: 'Carrinho de Compras' }}
      />
      <Stack.Screen
        name="CadastroUsuarioScreen"
        component={CadastroUsuarioScreen}
        options={{ title: 'Cadastro de Usuário' }}
      />
    </Stack.Navigator>
  );
}
