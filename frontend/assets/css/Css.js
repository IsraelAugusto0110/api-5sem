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
  area__tab: {
    backgroundColor: colors.mainColor,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  area__menu: {
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    backgroundColor: colors.mainColor,
    alignItems: "center",
    justifyContent: "center",
  },
  btn__home: {
    textAlign: "left",
  },
  area__title: {
    width: "80%",
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff",
    textAlign: "center",
  },
  btn__logout: {
    textAlign: "right",
  },
  containerTop: {
    justifyContent: "flex-start",
  },
  basicText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  desc__form: {
    marginTop: 30,
  },
  desc__input: {
    height: 150,
    padding: 10,
  },
  btn__upload: {
    width: 100,
    padding: 5,

    alignContent: "center",
    marginRight: 5,
    marginLeft: 10,
  },
  img__upload: {
    width: 75,
    height: 75,

    alignSelf: "center",
  },
  containerBtnLine: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",

    padding: 10,
    marginTop: 15,
  },
  enviar__btn: {
    padding: 10,
    backgroundColor: colors.mainColor,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 15,
    width: "80%",
  },
  containerBtnEnvia: {
    width: "50%",
  },
  enviar__btnText: {
    textAlign: "center",
  },
  card__solicitacao: {
    backgroundColor: colors.mainColor,
    padding: 10,
    width: "80%",
    marginTop: 15,
    borderRadius: 5,
  },
  card__text: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 5,
  },
  txt_desc: {
    textAlign: "center",
    fontWeight: "300",
  },
});

export { css };
