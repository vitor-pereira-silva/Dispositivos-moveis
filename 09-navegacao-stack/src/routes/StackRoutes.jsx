// Importa as telas que serão usadas no Stack Navigator
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";

// Importa a função para criar um Stack Navigator do React Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Cria o objeto Stack que será usado para definir as rotas empilhadas (tipo "pilha de telas")
const Stack = createStackNavigator();

// Função que define as rotas da navegação do tipo Stack
export default function StackRoutes() {
  return (
    // Define o componente Stack.Navigator que agrupa todas as rotas (telas)
    <Stack.Navigator>
      
      {/* Rota para a tela HomeScreen, que será acessada com o nome "HomeScreen" */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      
      {/* Rota para a tela ProfileScreen, acessada com o nome "ProfileScreen" */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      
      {/* Rota para a tela ConfigScreen, acessada com o nome "ConfigScreen" */}
      <Stack.Screen name="ConfigScreen" component={ConfigScreen} />

    </Stack.Navigator>
  );
}
