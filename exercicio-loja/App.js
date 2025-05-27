import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

import {PaperProvider} from 'react-native-paper'
import{NavigationContainer} from '@react-navigation/native'

//iporta a rota 
import StackNavigator from './src/routes/StackNavigator'
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
