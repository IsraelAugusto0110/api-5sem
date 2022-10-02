import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { css } from "../assets/css/Css";

export default function Home(props) {
  return (
    <View style={css.container}>
      <Text>Home</Text>
      <TouchableOpacity
        style={css.btn__Home}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={css.btn_HomeText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
