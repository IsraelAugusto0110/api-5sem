import React from "react";
import { View, Text } from "react-native";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { css } from "../../assets/css/Css";

export default function Detalhe({ navigation }) {
  return (
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="Detalhes" navigation={navigation} />
      <View style={css.container}>
        <Text style={css.basicText}>Solicitação ID: 001</Text>
        <Text style={css.basicText}>Aberta em: 24/10/2022</Text>
        <Text style={css.basicText}>Encerrada em: 24/10/2022</Text>
        <Text style={css.basicText}>Status: Ressolvida</Text>
        <Text style={css.basicText}>
          Descrição: Solicito a troca da lampada no poste da avenida adromeda,
          na altura do numero 430
        </Text>
      </View>
    </View>
  );
}
