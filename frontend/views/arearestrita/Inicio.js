import React, { useEffect, useState } from "react";
import { Text, View, AsyncStorage, TouchableOpacity } from "react-native";
import { css } from "../../assets/css/Css";
import Icon from "react-native-vector-icons/FontAwesome";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Inicio({ navigation }) {
  return (
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="inicio" navigation={navigation} />
    </View>
  );
}
