import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { css } from "../assets/css/Css";

export default function Login() {
  const [display, setDisplay] = useState("none");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={css.container}
    >
      <View style={css.login__logomarca}>
        <Image source={require("../assets/img/logo.png")} />
      </View>

      <View>
        <Text style={css.login_msg(display)}>Usuário ou senha invalidos</Text>
      </View>

      <View style={css.login__form}>
        <TextInput style={css.login__input} placeholder="Email" />
        <TextInput
          style={css.login__input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => setDisplay("flex")}
          style={css.login__btn}
        >
          <Text style={css.login__btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
