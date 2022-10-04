import React, { useEffect, useState } from "react";
import { Text, View, AsyncStorage } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import { Inicio, Cadastro, Historico } from "../index";
import { css } from "../../assets/css/Css";
import { colors } from "../../assets/colors/Colors";

export default function AreaRestrita() {
  const Tab = createMaterialBottomTabNavigator();

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setUser(json.email);
    }
    getUser();
  }, []);

  return (
    <Tab.Navigator
      activeColor={colors.second}
      inactiveColor="#ffff"
      barStyle={css.area__tab}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="home" size={25} color="#fff" />,
        }}
        name="Inicio"
        component={Inicio}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="file" size={25} color="#fff" />,
        }}
        name="Cadastro"
        component={Cadastro}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="search" size={25} color="#fff" />,
        }}
        name="Historico"
        component={Historico}
      />
    </Tab.Navigator>
  );
}
