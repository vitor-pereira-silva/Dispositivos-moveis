
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import StackRoutes from './src/routes/StackRoutes';


export default function App() {
  return (

    <PaperProvider>

      <NavigationContainer>

        <StackRoutes/>

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
