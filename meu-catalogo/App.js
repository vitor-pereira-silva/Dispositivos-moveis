import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Filme from "./componentes/Filme";
import Series from "./componentes/Series";

export default function App() {
  const listaFilmes = [
    {
      nome: "A Doce Vida",
      ano: 1960,
      diretor: "Federico Fellini",
      tipo: "Drama",
      capa: "https://i.pinimg.com/236x/f3/c6/1c/f3c61cedf30d5212ba7a6885a55c71fc.jpg",
    },
    {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: "https://i.pinimg.com/236x/e4/84/72/e484729535437d2e79882c359111db56.jpg",
    },
    {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: "https://i.pinimg.com/236x/f3/e3/3f/f3e33fdd1dfae7368226acf14fac51ee.jpg",
    },
    {
      nome: "Poltergeist - O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: "https://i.pinimg.com/236x/e2/5e/0f/e25e0f9e904895e5365b8ca7aa991076.jpg",
    },
  ];

  const listaSeries = [
    {
    "nome": "Buffy, a Caça-Vampiros",
    "ano": 1997,
    "diretor": "Joss Whedon",
    "temporadas": 7,
    "capa": "https://i.pinimg.com/236x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg"
    },
    {
    "nome": "Desperate Housewives",
    "ano": 2004,
    "diretor": "Marc Cherry",
    "temporadas": 8,
    "capa": "https://i.pinimg.com/236x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg"
    },
    {
    "nome": "Sons of Anarchy",
    "ano": 2008,
    "diretor": "Kurt Sutter",
    "temporadas": 7,
    "capa": "https://i.pinimg.com/474x/79/2e/1e/792e1e398b6349dd3713eb74a5cf2bc2.jpg"
    }
    ];

  return (
    <ScrollView >
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Filmes</Text>
        {listaFilmes.map((filme) => (
          <Filme
            nome={filme.nome}
            ano={filme.ano}
            diretor={filme.diretor}
            tipo={filme.tipo}
            capa={filme.capa}
          
          />
          
        ))}
        
        <Text style={styles.titulo}>Lista de Series</Text >
        {listaSeries.map((serie) => (
          <Series
            nome={serie.nome}
            ano={serie.ano}
            diretor={serie.diretor}
            temporadas={serie.temporadas}
            capa={serie.capa}
          
          />
          
        ))}
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderWidth: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },titulo:{
    color: '#0000FF',
    fontSize: 20,
    fontWeight: 600,
    borderWidth: 5 ,
    padding: 20
  }


});