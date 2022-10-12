import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CollectionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CollectionsScreen</Text>
    </View>
  )
}

export default CollectionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2c2c2c",
        alignItems: "center",
        justifyContent: "center",
      },
})