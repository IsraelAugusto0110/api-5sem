import { Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Login } from "./views/index";
import AreaRestrita from "./views/arearestrita/AreaRestrita";

import { colors } from "./assets/colors/Colors";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Bem vindo",
            headerStyle: {
              backgroundColor: colors.mainColor,
            },
            headerTintColor: "#333",
            headerTitleStyle: {
              fontWeight: "bold",
              justifyContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="AreaRestrita"
          options={{ headerShown: false }}
          component={AreaRestrita}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
