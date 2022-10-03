import { StyleSheet } from "react-native";
import { colors } from "../colors/Colors";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  login_msg: (text = "none") => ({
    display: text,
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  }),
  login__form: {
    width: "80%",
  },
  login__input: {
    fontSize: 20,
    padding: 5,
    marginBottom: 15,
    borderColor: colors.mainColor,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  login__btn: {
    padding: 10,
    backgroundColor: colors.mainColor,
    alignSelf: "center",
    borderRadius: 5,
  },
  login__btnText: {
    fontWeight: "bold",
    color: colors.second,
    fontSize: 20,
  },
  login__logomarca: {
    marginBottom: 15,
  },
});

export { css };
