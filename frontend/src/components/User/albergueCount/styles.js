import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  countercontainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  counterPet: {
    flex: 1,
    alignItems: "center",
  },

  counterNumberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  counterLabelText: {
    color: "gray",
    fontSize: 14,
  },
  touchablePerfil: {
    borderWidth: 2,
    color: "black",
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
});

export default styles;
