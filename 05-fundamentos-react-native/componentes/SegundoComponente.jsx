 import React from "react";
import {View, StyleSheet, Text } from "react-native";

export default function SegundoComponente() {
  return (
    <View>
        <Text style={styles.textoGrande}>Segundo Componente</Text>
    </View>
  
);
}

const styles = StyleSheet.create({
    textoGrande:{
        fontSize: 40,
        fontWeight:500,
      
    }
})
