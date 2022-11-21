import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AsyncStorage,
} from "react-native";

import { css } from "../assets/css/Css";

export default function Login({ navigation }) {
  const [display, setDisplay] = useState("none");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function sendForm() {
    let response = await fetch("http://192.168.15.7:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    let json = await response.json();
    console.log(json);
    if (json === "error") {
      setDisplay("flex");
      setTimeout(() => {
        setDisplay("none");
      }, 3500);
      await AsyncStorage.clear();
    } else {
      let userData = await AsyncStorage.setItem(
        "userData",
        JSON.stringify(json)
      );
      navigation.navigate("AreaRestrita");
    }
    /* if (email === "123@gmail" && password === "123") {
      navigation.navigate("AreaRestrita");
    } else {
      setDisplay("flex");
      setTimeout(() => {
        setDisplay("none");
      }, 3500);
    } */
  }

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
        <TextInput
          style={css.login__input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={css.login__input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => sendForm()} style={css.login__btn}>
          <Text style={css.login__btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
