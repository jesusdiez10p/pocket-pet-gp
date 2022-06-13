import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  
  container: {
    height: 100 + "%",
    marginTop: 30,
    backgroundColor:"#b6ace3",
  },
  
  top: {
    height: 40 + "%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor:"#DCD6F7",
    borderWidth:3,
    borderColor:"#d6d3f0"
  },
  
  Bar: {backgroundColor:"pink"},

  PPContainer: {
    padding: 0,
    backgroundColor: "#958cbf",
    flexGrow: 1,
  },
});

export default styles;
