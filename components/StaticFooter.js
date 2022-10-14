import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../assets/colors/colors";

import React from "react";

const StaticFooter = () => {
  return (
    <View style={styles.staticFooterContainer}>
      <Pressable
        android_ripple={{ color: "#000" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
      >
        <View style={styles.footerInnerContainer}>
          <FontAwesome name="recycle" size={24} color="black" />
          <Text style={{ fontFamily: "Inter_700Bold", fontSize: 15 }}>
            Solicitar recolección
          </Text>
          <FontAwesome name="arrow-right" size={24} color="black" />
        </View>
      </Pressable>
    </View>
  );
};

export default StaticFooter;

const styles = StyleSheet.create({
  staticFooterContainer: {
    position: "absolute",
    bottom: 25,
    backgroundColor: Colors.selectedColor,
    alignSelf: "center",
    width: "90%",
    borderRadius: 50,
    overflow: "hidden",
  },
  footerInnerContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.5 : 1,
  },
  buttonContainer: { paddingHorizontal: 15, paddingVertical: 20 },
});
