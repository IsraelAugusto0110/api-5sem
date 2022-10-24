import React, { useEffect, useState } from "react";
import { Text, View, AsyncStorage } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import { Perfil, NovaSolicitacao, Historico, Detalhe } from "../index";
import { css } from "../../assets/css/Css";
import { colors } from "../../assets/colors/Colors";

export default function AreaRestrita(props) {
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
          tabBarIcon: () => <Icon name="user" size={25} color="#fff" />,
        }}
        name="Perfil"
        component={Perfil}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="edit" size={25} color="#fff" />,
        }}
        name="Nova"
        component={NovaSolicitacao}
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
