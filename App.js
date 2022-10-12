import { StatusBar } from "expo-status-bar";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SecondScreen from "./screens/SecondScreen";
import CollectionsScreen from "./screens/CollectionsScreen";
import ProfileScreen from "./screens/ProfileScreen";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Main") {
              iconName = "home";
            } else if (route.name === "Second") {
              iconName = "wallet";
            } else if(route.name === "Collections"){
              iconName = "calendar"
            } else if(route.name === "Profile"){
              iconName = "user"
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#C6CE00",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            height: 80,
            backgroundColor: "#1c1c1c",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
