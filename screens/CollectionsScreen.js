import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../assets/colors/colors'
import StaticFooter from '../components/StaticFooter'

const CollectionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.titleColor}}>CollectionsScreen</Text>
      <StaticFooter />
    </View>
  )
}

export default CollectionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appBackground,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
      },
})