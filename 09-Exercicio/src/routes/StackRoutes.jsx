//import telas
import HomeScreen from "../screen/HomeScreen"
import ReceitaScreen from "../screen/ReceitaScreen"

import{createStackNavigator} from "@react-navigation/stack"


const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen"component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="ReceitaScreen"component={ReceitaScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}
