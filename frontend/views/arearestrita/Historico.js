import React, { useEffect, useState } from "react";
import { Text, View, AsyncStorage, TouchableOpacity } from "react-native";
import Card from "../../assets/components/Card";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { css } from "../../assets/css/Css";

export default function Historico({ navigation }) {
  return (
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="Historico" navigation={navigation} />
      <Card
        id="001"
        data="07/10/2022"
        status="Resolvido"
        navigation={navigation}
      />
      <Card
        id="002"
        data="08/10/2022"
        status="Resolvido"
        navigation={navigation}
      />
    </View>
  );
}
