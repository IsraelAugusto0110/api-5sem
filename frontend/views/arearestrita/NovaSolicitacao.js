import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  AsyncStorage,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { css } from "../../assets/css/Css";

export default function NovaSolicitacao({ navigation }) {
  const [descricao, setDescricao] = useState("");

  function sendForm() {
    alert(descricao);
  }

  return (
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="Nova solicitação" navigation={navigation} />
      <KeyboardAvoidingView style={[css.login__form, css.desc__form]}>
        <TextInput
          style={[css.login__input, css.desc__input]}
          placeholder="Sua solicitação"
          numberOfLines={15}
          textAlignVertical={"top"}
          multiline
          onChangeText={(text) => setDescricao(text)}
        />
      </KeyboardAvoidingView>
      <View style={[css.containerBtnLine]}>
        <TouchableOpacity style={css.btn__upload}>
          <Image
            source={require("../../assets/img/iconUpload.png")}
            style={css.img__upload}
          />
        </TouchableOpacity>
        <TouchableOpacity style={css.btn__upload}>
          <Image
            source={require("../../assets/img/iconLocal.png")}
            style={css.img__upload}
          />
        </TouchableOpacity>
      </View>
      <View style={css.containerBtnEnvia}>
        <TouchableOpacity style={css.enviar__btn} onPress={() => sendForm()}>
          <Text style={[css.login__btnText, css.enviar__btnText]}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
