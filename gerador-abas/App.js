import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen'; // ✅ import necessário

export default function App() {
  return (
    <View style={styles.container}>
      <JogoDoBichoScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
