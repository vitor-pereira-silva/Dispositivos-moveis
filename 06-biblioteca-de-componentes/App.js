import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,  } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button } from 'react-native-paper';

export default function App() {
  return (
   <PaperProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button mode='contained' onPress={()=> alert("Clicou")}>Clique Aqui!</Button>
      <Button mode='contained-tonal'>Clique Aqui!</Button>
      <Divider/>
      <Button mode='elevated'>Clique Aqui!</Button>
      <Divider/>
      <Button mode='outlined'>Clique Aqui!</Button>
      <Button mode='text'>Clique Aqui!</Button>
      
      <Text>Uva</Text>
      <Divider/>
      <Text>Maça</Text>
      <Divider/>
      <Text>Banana</Text>
      <Divider/>
      <Text>Laranga</Text>
      <Divider/>
      <Text>Limao</Text>
      <Divider/>
      <Text variant='titleLarge'> um texto qualquer</Text>
      <Divider/>
      <Text variant='titleMedium'>um texto qualquer</Text>
      <Divider/>
      <Text variant='titleSmall'>um texto qualquer</Text>
      <Divider/>
     <Card>
      <Card.Content>
        <Title>The Punisher</Title>
          <Paragraph>
          Frank Castle, also known as “The Punisher”, believes he has exacted revenge on the criminals responsible 
          for the tragic murder of his family. However, he soon uncovers a larger, deeper conspiracy behind the events 
          that occurred, involving his time serving in the Marine Corps.  Alongside run-ins with law enforcement,
           his ex-best friend Billy Russo, and former NSA analyst Micro,
           Frank seeks to uncover the truth once and for all.
          </Paragraph>
        
      </Card.Content>
      <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpWrOmTKljIN1TUgjKNq8kqjlxKVaprN1QQ&s' }}/>
     </Card>
      
    </View></PaperProvider>
    
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
