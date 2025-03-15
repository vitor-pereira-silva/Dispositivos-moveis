// inports

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
// Função que define o componente
// retronar 
export default function App() {
  
  const nome = " vitor"
  function alerta(){
    alert("clicou no botão")
  }
  return (
    
    <View style={styles.container}>
      
 <Button title='Clicar'onPress={alerta}></Button>
      <StatusBar style="auto" />

      <Image
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbirLXRJtVpzOpUbkRkcm2-NZKRY-fvXBjg&s"
        
      }}
      style={{
          height: 400,
          width :400
        }}
      />

<Text>{2+2}</Text>
<Text>Bem vindo {nome}</Text>
    

    </View>
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