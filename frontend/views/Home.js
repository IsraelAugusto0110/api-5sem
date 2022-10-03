import React from "react";
import { Button, Text, TouchableOpacity, View, Image } from "react-native";
import { css } from "../assets/css/Css";

export default function Home(props) {
  return (
    <View style={css.container}>
      <View style={css.login__logomarca}>
        <Image source={require("../assets/img/logo.png")} />
      </View>
      <View style={css.login__form}>
        <TouchableOpacity
          style={css.login__btn}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={css.login__btnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
