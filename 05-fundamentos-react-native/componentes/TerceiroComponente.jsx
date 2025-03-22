import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TerceiroComponente() {
  return (
    <View>
      <Text style={styles.textoGande}>TerceiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textoGande:{
        fontSize: 40,
        fontWeight: 500

    }
})