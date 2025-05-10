import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, PaperProvider, Text } from 'react-native-paper';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
};

export default function HomeScreen({ navigation }) {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card>
          <Card.Cover source={{ uri: time.escudo }} />
          <Card.Content>
            <Text variant="titleLarge">{time.nome}</Text>

            <Button
              mode='contained'
              style={styles.button}
              onPress={() => navigation.openDrawer()}
            >
              Abrir gaveta
            </Button>

            <Button
              mode='contained-tonal'
              style={styles.button}
              onPress={() => {
                navigation.openDrawer();
                setTimeout(() => navigation.closeDrawer(), 3000);
              }}
            >
              Abrir gaveta e fechar automático
            </Button>
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});
