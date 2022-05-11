import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  general:{
    padding: 5,
    paddingVertical: 5,
    flexDirection: "row",
    backgroundColor:"black",
    borderRadius:15,
    alignSelf:"center",
    margin:5,
    marginTop:0},
imagen:{width: 150, height: 150,borderRadius:10,borderColor:"white", borderWidth:1,margin:2 },
datos:{height: 150,backgroundColor: "#4e227a" ,alignSelf:"center",alignContent:"center",borderRadius:10,borderColor:"white", borderWidth:1 ,margin:2},
contenedordata:{flexDirection: "row",backgroundColor: "#64299e",margin:2,  borderWidth:1,borderRadius:10,alignItems:"center",borderColor:"white",marginTop:10 },
contenedordatamedio:{flexDirection: "row",backgroundColor: "#64299e", margin:2, borderWidth:1,borderRadius:10,alignItems:"center",borderColor:"white"},
Text:{paddingHorizontal:5 , paddingTop: 5,paddingBottom: 5, color:"white"},
Text2:{ paddingTop: 5,paddingBottom: 5, color:"white"},
Text3:{  color:"white"}, 
conte:{flexDirection:"row",  margin:2,alignItems:"center" },
switch:{ flex:0,transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], margin:2, backgroundColor:"#708090", borderRadius:15},
estado:{flex:0,alignContent:"center",width:80,textAlign:"center" ,color:"white"},
    touch:{
        flexDirection: "row",  
        alignItems:"center",
        backgroundColor:"#64299e",
        alignSelf:"center",
        borderRadius:5,
        margin:10,
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],borderWidth:1.2,borderColor:"black"
    },
popup:{backgroundColor:"#a69dd1",margin:50,padding:20,borderRadius:10,flex:1,borderWidth:1,borderColor:"white",marginVertical:65, alignContent:"center",},
titulo:{textAlign:"center", fontWeight:"bold", fontSize:22, marginBottom:5,

shadowColor: "white",
shadowOffset: {
    width: 1,
    height: 1,
},
shadowOpacity: 1.27,
shadowRadius: 4.65,
elevation: 6,},

ingreso:{textAlign:"left",marginTop:7,fontSize:18,color:"white"},
escrito:{ color:"#eae4f0",marginTop:3,borderWidth: 1,borderRightColor:"white",
        borderBottomColor:"white",borderColor:"#735094",height:25, textAlign:"center",alignContent:"center",paddingBottom:0},
poptouch: {flexDirection: "row",  alignItems:"center",backgroundColor:"#d1a4fc",alignSelf:"center",borderRadius:12,margin:10},
separator: {marginVertical: 8,borderBottomColor: 'black',borderBottomWidth: StyleSheet.hairlineWidth},
poptouchsi: {flexDirection: "row",  alignItems:"center",backgroundColor:"#ebdff0",alignSelf:"center",borderRadius:7,margin:10, borderWidth:1,borderColor:"#605463",width:165},
poptouchno: {flexDirection: "row",  alignItems:"center",backgroundColor:"#ebdff0",alignSelf:"center",borderRadius:7,margin:1, borderWidth:1,borderColor:"#605463",width:165},
touchablePerfil: {
    
    borderWidth: 1,
    color: "white",
   
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
   
    backgroundColor:"#ebdff0",
    borderColor:"#605463",
    width:110,height:25,borderRadius:5,marginTop:3
  },
  counterPet: {
    
    flex: 1,
    alignItems: "center",
    textAlignVertical:"center",
    justifyContent:"center",
    padding:5,
    //backgroundColor:"blue",
    borderWidth:1.5,
    borderRadius:15,
    borderColor:"#ebebeb80",
    width:150,
    paddingBottom:10
  },

  counterNumberText: {
    fontWeight: "bold",
    fontSize: 16,
    
    margin:5
  },
  counterLabelText: {
    color: "gray",
    fontSize: 14,
    
  },
  touchablePerfil: {
    marginTop:0,
    marginBottom:2,
    borderWidth: 1,
    color: "white",
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor:"#ebebeb80",
    borderColor:"#919bc7"
  },
  separator: {marginVertical: 8,borderBottomColor: '#00000050',
  borderBottomWidth: StyleSheet.hairlineWidth,width:70},
  

});

export default styles;
