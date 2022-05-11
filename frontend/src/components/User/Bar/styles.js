import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 2,
    borderTopWidth:2,
    borderColor: "#f0f3ff90",
  
  },
  icon: {
    color: "black",
  },
  separator: {marginVertical:1,marginHorizontal:0,borderBottomColor: 'black',
  width:1,height:25,borderWidth:1,backgroundColor:"red",},
});
export default styles;
