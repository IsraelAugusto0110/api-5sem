import React, { useEffect, useState } from "react";
import { Text, View, AsyncStorage } from "react-native";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { css } from "../../assets/css/Css";

export default function Historico({ navigation }) {
  return (
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="Historico" navigation={navigation} />
    </View>
  );
}
