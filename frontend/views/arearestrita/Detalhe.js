import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { css } from "../../assets/css/Css";

export default function Detalhe({ navigation }) {
  const [id, setId] = useState("");
  const [abertura, setAbertura] = useState("");
  const [encerramento, setEncerramento] = useState("");
  const [status, setStatus] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    setId("001");
    setAbertura("24/10/2022");
    setEncerramento("24/10/2022");
    setStatus("Resolvida");
    setDescricao(
      "Solicito a troca da lampada no poste da avenida adromeda, na altura do numero 430"
    );
  }, []);

  return (
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="Detalhes" navigation={navigation} />
      <View style={css.container}>
        <Text style={css.basicText}>Solicitação ID: {id}</Text>
        <Text style={css.basicText}>Aberta em: {abertura}</Text>
        <Text style={css.basicText}>Encerrada em: {encerramento}</Text>
        <Text style={css.basicText}>Status: {status}</Text>

        <Text style={[css.basicText]}>Descrição:</Text>
        <Text style={[css.basicText, css.txt_desc]}>{descricao}</Text>
      </View>
    </View>
  );
}
