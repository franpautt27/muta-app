import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SecondScreen from "./screens/SecondScreen";
import CollectionsScreen from "./screens/CollectionsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
} from "@expo-google-fonts/inter";
import Colors from "./assets/colors/colors";
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Main") {
              iconName = "home";
            } else if (route.name === "Second") {
              iconName = "wallet";
            } else if (route.name === "Collections") {
              iconName = "calendar";
            } else if (route.name === "Profile") {
              iconName = "user";
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.selectedColor,
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            height: 80,
            backgroundColor: Colors.tabColor,
          },
          tabBarLabelStyle: {
            marginBottom: 20,
          },
        })}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Inicio",
          }}
          name="Main"
          component={MainScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Billetera" }}
          name="Second"
          component={SecondScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Recolecciones" }}
          name="Collections"
          component={CollectionsScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Perfil" }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

