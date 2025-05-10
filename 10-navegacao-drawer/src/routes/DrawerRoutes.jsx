import React from 'react'

import {Ionicons} from '@expo/vector-icons'

import {createDrawerNavigator}from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ConfigScreen from '../screens/ConfigScreen'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

<Drawer.Screen
      name='HomeScreen'
      component={HomeScreen}
      options={{
        title: "Início",
        drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
      }}
      />

        
        <Drawer.Screen
      name='ProfileScreen'
      component={ProfileScreen}
        options={{
          title: "Usuário",
          drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name='ConfigScreen'
        component={ConfigScreen}
        options={{
          title: "Configurações",
          drawerIcon: ({ color, size }) => <Ionicons name='cog' color={color} size={size} />
        }}
        />
    </Drawer.Navigator>
   )
}

