import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Copa2022Screens from './screens/Copa2022Screens';
import EstadiosScreens from './screens/EstadidosScreens';
import BrasilScreens from './screens/BrasilScrens';
import EstatisticasScreens from './screens/EstatisticasScreens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Copa 2022"
            component={Copa2022Screens}
            options={{
              tabBarLabel: 'Copa',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Estadios"
            component={EstadiosScreens}
            options={{
              tabBarLabel: 'Estádios',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="basketball-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Brasil"
            component={BrasilScreens}
            options={{
              tabBarLabel: 'Brasil',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="flag-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Estatisticas"
            component={EstatisticasScreens}
            options={{
              tabBarLabel: 'Estatísticas',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="stats-chart-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
