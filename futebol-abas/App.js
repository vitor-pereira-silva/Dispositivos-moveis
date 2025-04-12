import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EscudoScreen from "./screens/EscudoScreen";
import JogadoresScreen from "./screens/JogadoresScreen";
import TitulosScreen from "./screens/TitulosScreen"


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="EscudoScreen" component={EscudoScreen} />

          <Tab.Screen name="JogadoresScreen" component={JogadoresScreen} />

          <Tab.Screen 
          name="TitulosScreen"
           component={TitulosScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
