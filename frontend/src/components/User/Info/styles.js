import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
  },
  infocontainer: {
    paddingTop: 15,
    paddingBottom:10,
    //backgroundColor:"#FFFFFF50",
    alignItems: "center",
    textAlign:"justify",
    borderColor:"#ebebeb50",
    borderRadius:15,
    borderWidth:1.5
  },
  infotext: {
    fontSize: 14,
    padding: 3,
    width:150,
    textAlign:"center"
  },
  image:{
    height: 110,
    width: 110,
    
  },
  imageViewContainer:{
    backgroundColor: '#6400FF',
    height: 110,
    width: 110,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth:2,
    borderColor:"#919bc7",
    
    
},
  separator: {marginVertical: 5,borderBottomColor: '#00000050',
  borderBottomWidth: StyleSheet.hairlineWidth,width:0},
  separator2: {marginVertical: 1,borderBottomColor: '#00000020',
  borderBottomWidth: StyleSheet.hairlineWidth,width:120},
});

export default styles;
