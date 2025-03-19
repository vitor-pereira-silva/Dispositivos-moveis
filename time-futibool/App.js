// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// Função que representa o componente
export default function App() {
  // Lógica do componente
  const nome = "Flamengo"

  function alerta() {
    alert("Gool do Flamengo!")
  }

  // retorno dessa função com o template do que vai ser
  // renderizado na tela (JSX)
  return (
    // ScrollView permite que o conteudo vá até depois da barra de rolagem
    // não pode ser usado sozinho, tem que ter uma View dentro
    // // ele só envolve o conteudo
    <ScrollView>
      <View style={styles.container}>
     
      <Image
          source={{
            uri: 'https://imgsapp.df.superesportes.com.br/app/noticia_127116951798/2017/05/29/61813/20170529192244926000a.png'
          }}
          style={{
            height: 150,
            width: 150
          }}
        />
        <Text style={styles.textGrande}>{nome}</Text>
        
        <Button title='GOL' onPress={alerta}></Button>
        {/* Imagem de fora com link */}
        <Image
          source={{
            uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/flamengo-carioca.jpg?w=1200&h=1200&crop=1'
          }}
          style={{
            height: 350,
            width: 350
          }}
        />
        <Text style={styles.textNoticia}>Rubro-Negro tem dois gols anulados, aproveita vantagem do jogo de ida e conquista 39º título estadual de sua história</Text>

<Image
          source={{
            uri: 'https://lncimg.lance.com.br/uploads/2025/03/Dirigente-do-Flamengo-Boto-posa-ao-lado-do-titulo-do-Campeonato-Carioca-2025-scaled-aspect-ratio-512-320.jpg'
          }}
          style={{
            height: 350,
            width: 350
          }}
        />
        <Text style={styles.textNoticia}>O Flamengo conquistou, neste sábado, o seu 39° título do Campeonato Carioca, ampliando sua vantagem sobre o Fluminense, que tem 33 títulos</Text>
       
        <Image
          source={{
            uri: 'https://conteudo.imguol.com.br/c/esporte/c2/2021/12/31/taca-do-campeonato-carioca-2021-1640983462882_v2_450x600.jpg'
          }}
          style={{
            height: 350,
            width: 350
          }}
        />
        <Text style={styles.textNoticia}> A taça e feita de madeira nobre e feito de metal banhado a ouro</Text>
       
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpj_Jtmi1K2wFJSXIWjOGRWn3Tuo7a6_cfHg&s'
          }}
          style={{
            height: 350,
            width: 350
          }}
        />
        <Text style={styles.textNoticia}>Clube apresenta projeto para os sócios nesta sexta-feira e prevê receita de R$ 2,5 bilhões - sendo R$ 1,5 bilhão de naming rights por 20 anos</Text>
       
        <Image
          source={{
            uri: 'https://i0.wp.com/maquinadoesporte.com.br/wp-content/uploads/2024/10/adidas_flamengo_diamantes.jpg?fit=1229%2C614&ssl=1'
          }}
          style={{
            height: 350,
            width: 350
          }}
        />
        <Text style={styles.textNoticia}>Tecido AEROREADY antitranspirante mantém os torcedores confortáveis, seja para torcer nas arquibancadas ou assistir ao jogo na TV. O escudo bordado ajuda a ...
        R$ 399,99</Text>
       
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGrande: {
    fontSize: 40,
    fontWeight: 900,
    backgroundColor: '#fff'
  },
  textNoticia :{
    fontSize: 25,
    fontWeight: 900,
    backgroundColor: '#fff' ,
 }
  
});