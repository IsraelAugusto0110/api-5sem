import React, { useEffect, useState } from "react";
import { Text, View, AsyncStorage } from "react-native";

export default function AreaRestrita() {
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
    <View>
      <Text>Area do usuário, seja bem vindo</Text>
      <Text>{user}</Text>
    </View>
  );
}
