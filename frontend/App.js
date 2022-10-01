import { Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./views/Home";
import Login from "./views/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "App",
            headerStyle: {
              backgroundColor: "lightblue",
            },
            headerTintColor: "#333",
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
