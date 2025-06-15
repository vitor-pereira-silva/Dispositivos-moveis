// Importa o React, necessário para criar componentes.
import React from 'react'

// Importa a função para criar a navegação tipo Drawer (menu lateral).
import { createDrawerNavigator } from '@react-navigation/drawer'

// Importa as rotas de navegação em abas (Tabs).
import TabRoutes from './TabRoutes'

// Importa as rotas de navegação em pilha (Stack) para usuários.
import StackRoutes from './StackRoutes'

// Importa as rotas de navegação em pilha (Stack) para lista.
import ListaStackRoutes from './ListaStackRoutes'

// Importa ícones da biblioteca Ionicons, para utilizar no menu lateral.
import { Ionicons } from '@expo/vector-icons'

// Importa o componente de Configurações.
import Configuracoes from '../screens/configuracoes/Configuracoes'

// Cria uma instância do Drawer Navigator.
const Drawer = createDrawerNavigator()

// Define e exporta o componente que configura as rotas do Drawer.
export default function DrawerRoutes() {
  return (
    // Configura o Drawer Navigator.
    <Drawer.Navigator>

      {/* Define a primeira tela do Drawer: Home */}
      <Drawer.Screen
        name="Home"  // Nome interno da rota.
        component={TabRoutes}  // Componente que será exibido nesta rota.
        options={{
          title: 'Home',  // Título exibido no Drawer.
          // Ícone exibido ao lado do título no Drawer.
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Define a segunda tela: Usuário */}
      <Drawer.Screen
        name="Usuario"
        component={StackRoutes}
        options={{
          title: 'Usuários',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Define a terceira tela: Configurações */}
      <Drawer.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{
          title: 'Configurações',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Define a quarta tela: Lista */}
      <Drawer.Screen
        name="Lista"
        component={ListaStackRoutes}
        options={{
          title: 'Lista',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="car-outline" size={size} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>
  )
}
