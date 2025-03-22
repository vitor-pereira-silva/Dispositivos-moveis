import { StatusBar } from "expo-status-bar";
import { StyleSheet,View } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import SegundoComponente from "./componentes/SegundoComponente";
import TerceiroComponente from "./componentes/TerceiroComponente";
import JavascriptComponente from "./componentes/JavascriptComponente";
import Perfil from "./componentes/Perfil";



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PrimeiroComponente />
      <SegundoComponente />
      <TerceiroComponente/>
      <JavascriptComponente/>
      <Perfil/>
    
     
      

    </View>
  );
}

const styles = StyleSheet.create({container: {
    flex: 1,
    backgroundColor: "#008896",
    alignItems: "center",
    justifyContent: "center",
  },
});
