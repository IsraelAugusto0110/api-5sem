import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { css } from "../css/Css";

export default function Card(props) {
  return (
    <TouchableOpacity
      style={css.card__solicitacao}
      onPress={() => props.navigation.navigate("Detalhe")}
    >
      <Text style={css.card__text}>ID: {props.id}</Text>
      <Text style={css.card__text}>Data: {props.data}</Text>
      <Text style={css.card__text}>Status: {props.status} </Text>
    </TouchableOpacity>
  );
}
