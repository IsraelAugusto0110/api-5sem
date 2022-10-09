import React, { useEffect, useState } from "react";
import { Text, View, AsyncStorage, TouchableOpacity } from "react-native";
import { css } from "../../assets/css/Css";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Perfil({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    /* async function getUser() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setUser(json.email);
    }
    getUser(); */
    setUser("123@gmail");
  }, []);
  return (
    <View style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="Perfil" navigation={navigation} />
      <View style={css.container}>
        <Text style={css.basicText}>Bem vindo</Text>
        <Text style={css.basicText}>{user}</Text>
      </View>
    </View>
  );
}
