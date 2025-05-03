import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen() {
  return (
   <View>
    <Text>HomeScreen</Text>
    <Button mode='contained'
    onPress={()=>navigator.navigate('ProfilScreen')}
    ></Button>
   </View>
  )
}

const styles = StyleSheet.create({})