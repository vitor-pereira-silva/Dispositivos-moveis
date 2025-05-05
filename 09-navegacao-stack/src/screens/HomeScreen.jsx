// Importa os módulos necessários do React Native
import { StyleSheet, Text, View } from "react-native";
// Importa o React (necessário para usar componentes)
import React from "react";
// Importa o componente Button da biblioteca react-native-paper
import { Button } from "react-native-paper";

// Função principal que representa a tela HomeScreen
export default function HomeScreen(props) {
  // Extrai os objetos navigation e route das propriedades recebidas pela tela
  const { navigation, route } = props;

  // Exibe no console o objeto navigation (usado para navegar entre telas)
  console.log("NAVIGATION =>", navigation);

  // Exibe no console o objeto route (usado para acessar dados passados pela rota)
  console.log("ROUTE =>", route);

  // Retorna a interface visual (JSX) da tela
  return (
    <View>
      {/* Título da tela */}
      <Text>HomeScreen</Text>

      {/* Botão que, ao ser pressionado, navega para a tela ProfileScreen */}
      <Button
        mode="contained" // estilo do botão: preenchido
        onPress={() => navigation.navigate("ProfileScreen")} // ação ao clicar
      >
        Ir para tela Profile
      </Button>
    </View>
  );
}

// Estilos da tela (atualmente está vazio, mas pode ser usado para customizar o layout)
const styles = StyleSheet.create({});
