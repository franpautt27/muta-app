import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Buenas tardes mutante,</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2c2c2c",
        alignItems: "center",
        justifyContent: "center",
      },
      subtitle: {
        color: "#8a8a8a"
      }
});
