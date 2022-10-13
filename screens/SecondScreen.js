import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../assets/colors/colors'
import StaticFooter from '../components/StaticFooter'

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.titleColor}}>SecondScreen</Text>
      <StaticFooter />
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.appBackground,
        paddingHorizontal: 20,
      },
})