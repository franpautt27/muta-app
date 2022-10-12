import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SecondScreen</Text>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2c2c2c",
      },
})