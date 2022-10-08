import React, { useEffect, useState } from "react";
import { Text, View, AsyncStorage, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { css } from "../css/Css";

export default function MenuAreaRestrita(props) {
  async function logout() {
    await AsyncStorage.clear();
    props.navigation.navigate("Login");
  }
  return (
    <View style={css.area__menu}>
      <TouchableOpacity
        style={css.btn__home}
        onPress={() => props.navigation.navigate("Inicio")}
      >
        <Icon name="home" size={20} color="#fff" />
      </TouchableOpacity>
      <Text style={css.area__title}> {props.title} </Text>
      <TouchableOpacity style={css.btn__logout} onPress={() => logout()}>
        <Icon name="sign-out" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
