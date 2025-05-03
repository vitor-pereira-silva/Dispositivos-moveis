// import das telas
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";
// import do stack
import { createStackNavigator } from "@react-navigation/stack";


// criar stack
const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="{ConfigScreen" component={ConfigScreen} />
    </Stack.Navigator>
  );
}

