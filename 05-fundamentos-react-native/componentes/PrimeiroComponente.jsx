// inport
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PrimeiroComponente() {
  return (
    <View>
      <Text style={styles.texteGrande}>Primeiro Componente</Text>
    </View>
  );
}
const styles =  StyleSheet.create({
  texteGrande:{
    fontSize: 40,
    fontWeight:500
  }
})
