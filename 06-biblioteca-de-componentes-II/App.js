import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button,FileList} from 'react-native-paper';
export default function App() {
  const lista =[
    { 
      titulo: "como sobreviver ao riect ",
      descricao: "quase loco ",
      imagem: "https://observatoriodocinema.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=904&height=508&format=.jpg&quality=91&imagick=/wp-content/uploads/2021/12/justiceiro-hq-1200x900-1.jpg"
    }
  ]
  return (
    <PaperProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FileList
      horizontal
      data={lista}
      renderItem={({item}) =>(
        <Card>
          <Card.Content>
            <Title>{item.titulo}</Title>
            
          </Card.Content>
        </Card>
      )} 
      />

    </View>
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
