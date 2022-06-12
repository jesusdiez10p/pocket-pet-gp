import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  TextInput: {
    borderColor: "lightgray",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20, //padding es para el interior del borde y margin es para afuera del borde
  },
  button: {
    marginTop: 80,
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default styles;
