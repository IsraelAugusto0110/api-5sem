import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn__Home: {
    backgroundColor: "lightblue",
    width: "50%",
    padding: 5,
    alignItems: "center",
    borderRadius: 15,
  },
  btn_HomeText: {
    color: "yellow",
    fontWeight: "900",
    fontSize: 25,
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
    borderColor: "lightblue",
    borderWidth: 1,
    borderRadius: 5,
  },
  login__btn: {
    padding: 10,
    backgroundColor: "lightblue",
    alignSelf: "center",
    borderRadius: 5,
  },
  login__btnText: {
    fontWeight: "bold",
    color: "#ffff",
    fontSize: 20,
  },
  login__logomarca: {
    marginBottom: 15,
  },
});

export { css };
