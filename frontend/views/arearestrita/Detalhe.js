import React from "react";
import { View, Text } from "react-native";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { css } from "../../assets/css/Css";

export default function Detalhe({ navigation }) {
  return (
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="Detalhes" navigation={navigation} />
      <Text>Tela detalhes da solicitação</Text>
    </View>
  );
}
