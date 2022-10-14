import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import React from "react";
import Colors from "../assets/colors/colors";
import StaticFooter from "../components/StaticFooter";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>Buenas tardes mutante,</Text>
        <Text style={styles.title}>Jeffrey Saavedra</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={{ flex: 1 }}
          source={{
            uri: "https://suricatalabs.com/wp-content/uploads/2022/09/equipo-muta.jpg",
          }}
        >
          <View style={styles.innerContainer}>
            <View style={styles.innerImage}>
              <Text style={styles.innerImageText}>
                Conoce nuestra{"\n"}FUERZA MUTANTE{" "}
              </Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.playButton}>
                <Entypo name="controller-play" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.loNuevoText}>Lo Nuevo</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle1}>$15.000 EN TOM NOODLESHOP</Text>
        <Text style={styles.cardSubtitle1}>
          Muestra este cupón y obtén tu beneficio
        </Text>
        <Text style={styles.cardTitle2}>25D1-WCLU-EX9F - UTILIZADO</Text>
        <Text style={styles.cardSubtitle2}>
          * Tendrás 60 días para redimirlo - Válido sólo presencial
        </Text>
      </View>

      {/* //! HERE COMES THE STATIC FOOTER */}
      <StaticFooter />

    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    paddingHorizontal: 20,
  },
  subtitle: {
    color: Colors.subtitleColor,
    fontFamily: "Inter_400Regular",
    fontSize: 18,
  },
  title: {
    color: Colors.titleColor,
    fontFamily: "Inter_500Medium",
    fontSize: 22,
  },
  textContainer: {
    marginTop: "15%",
  },
  imageContainer: {
    marginTop: "8%",
    borderRadius: 16,
    overflow: "hidden",
    width: "100%",
    height: 200,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.50)",
  },
  innerImage: {
    marginTop: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  innerImageText: {
    color: "#fff",
    fontFamily: "Inter_700Bold",
    fontSize: 22,
  },
  playButton: {
    backgroundColor: "#ccc",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  loNuevoText: { color: "#fff", fontFamily: "Inter_500Medium", fontSize: 16 },
  cardContainer: { backgroundColor: "#1c1c1c", padding: 20, borderRadius: 16 },
  cardTitle1: {
    color: Colors.selectedColor,
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
  },
  cardSubtitle1: { color: "#fff", marginBottom: 8 },
  cardTitle2: {
    color: Colors.titleColor,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
  },
  cardSubtitle2: { color: "#fff" },
});
