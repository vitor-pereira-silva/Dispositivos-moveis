import React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreens from "./screens/HomeScreens";
import ProfileScreens from "./screens/ProfileScreens";
import SettingsScreens from "./screens/SettingsScreens";
import{Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreens}
            options={{
              title: "tela de inicio ",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: 'red'
              },
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: 'orange',
              tabBarIcon : ({color,size}) => <Ionicons name="home" color={color} size={size} />


            }}
          />
          <Tab.Screen
           name="ProfileScreen"
            component={ProfileScreens}
            options={{
              title: "tela de inicio ",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: 'red'
              },
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: 'orange',
              tabBarIcon : ({color,size}) => <Ionicons name="person" color={color} size={size} />


            }}
             />
          <Tab.Screen
           name="SettingsScreen"
            component={SettingsScreens}
            options={{
              title: "tela de inicio ",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: 'red'
              },
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: 'orange',
              tabBarIcon : ({color,size}) => <Ionicons name="cog" color={color} size={size} />


            }}
             />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
