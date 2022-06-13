import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerText: {
        //fontWeight: "bold",
        
        fontSize: 25,
        marginBottom: 2 + '%',
        //color: "#ff2626",
        color: "white",
        textAlign: "center",
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        backgroundColor: '#3E3636',
        //backgroundColor: '#7a0d36',
        //backgroundColor: '#64299e',
        marginTop:0,
        paddingBottom:5,
        paddingTop:5,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.76,
        shadowRadius: 5.14,
        
        elevation: 10,
    
      },

    date: {
        width: 90 + "%",
        borderColor: "lightgray",
        borderStyle: "solid",
        backgroundColor: '#ffffff',
        borderRadius: 7,
        paddingVertical: 8,
        paddingHorizontal: 10,
        color: 'black',
            // fontWeight: 'bold',
        fontSize:15,
        alignSelf: "center",
        borderColor:"purple",
        borderWidth:2,
    },
      
    container:{
        flex: 1, 
        width: 100 + '%', 
        height: 100 + '%' , 
        flex: 1,
        backgroundColor: '#DCD6F7'
    },
    back:{
        backgroundColor:"#c6c1de90",
        padding:5,
        margin:15,
        borderRadius:15,
        paddingBottom:10

    }
    ,
    counter:{
        flex: 1,
       // alignItems: "center",
        textAlignVertical:"center",
        justifyContent:"center",
        padding:5,
        //backgroundColor:"blue",
        borderWidth:1.5,
        borderRadius:15,
        borderColor:"#ebebeb80",
       // width:150,
        paddingBottom:10,
        marginBottom:5
    },
    postButton:{
        alignItems: 'center',
        borderColor: '#376A14',
        borderWidth: 2,
        flexDirection: 'row',
        padding: 4 + '%',
        justifyContent: 'center',
        borderRadius: 0,
        backgroundColor: '#73D62E',
        marginVertical: 0,
        marginHorizontal: 6 + '%',
        borderRadius: 10,
        marginBottom:10
    },

    postButtonText:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 18,
        
        
    },

    etiquetaCampo:{
        //backgroundColor: '#000000',
        marginBottom:0,
        marginTop: 10,
        marginHorizontal: 18 + '%',
        borderRadius: 0,
        
        padding: 10,
        fontWeight:'bold',
        color: 'black',
        paddingHorizontal: 5,
        fontSize:17,
        textAlign:"center",
        
        
    },

    text: {
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    FormRow: {
        marginTop: 10,
        marginLeft: 40,
        flexDirection: "row"
    },
    input: {
        borderColor: "lightgray",
        borderStyle: "solid",
        backgroundColor: '#ffffff',
        borderRadius: 7,
        paddingVertical: 8,
        paddingHorizontal: 10,
        color: 'black',
            //fontWeight: 'bold',
        fontSize:15,
        textAlign:"center",
        //marginVertical:5,
        marginHorizontal: 5 + '%',
        borderColor:"purple",
        borderWidth:2,
    },
    buttonContainer:{
        marginVertical: 5,
        borderRadius: 15,
        
    },
    button:{
        borderRadius: 15,
    },
    picker:{
        transform: [{ scaleX: 0.85 }, { scaleY: 0.9 }],
        marginVertical:0,
        borderRadius:10,
        backgroundColor:"#c3bfd9"
    },

    //----------------------------------
    general:{
        padding: 5,
        paddingVertical: 5,
        flexDirection: "row",
        backgroundColor:"black",
        borderRadius:15,
        alignSelf:"center",
        margin:5,
        marginTop:0, 
        justifyContent:"center",
        },
   // titulo:{textAlign:"center",color:"white", flex:1 ,  height:25, backgroundColor:"red"},
    datos:{backgroundColor: "#4e227a50" ,alignContent:"center",borderRadius:10,borderColor:"white", borderWidth:1 ,margin:2, margin:15,
    shadowColor:"#ffffff90",shadowOffset: {width: 1,height: 1,},shadowOpacity: 1.27,shadowRadius: 4.65,elevation: 1,},
    contenedordata2:{flexDirection: "row",backgroundColor: "#64299e70",margin:2,  borderWidth:1,borderRadius:10,alignItems:"center",borderColor:"white",marginTop:10 },
    contenedordatamedio2:{flexDirection: "row",backgroundColor: "#64299e70", margin:2, borderWidth:1,borderRadius:10,alignItems:"center",borderColor:"white"},
    touchablePerfil: {
        borderWidth: 1,
        color: "white",
       
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
       
        backgroundColor:"#ebdff0",
        borderColor:"#605463",
        width:130,height:25,borderRadius:5,marginTop:3,
        shadowColor:"black",shadowOffset: {width: 1,height: 1,},shadowOpacity: 1.27,shadowRadius: 4.65,elevation: 6,
      },
      //------------------------------------
      general2:{
        padding: 5,
        paddingVertical: 5,
        flexDirection: "column",
        backgroundColor:"#00000050",
        borderRadius:15,
        alignSelf:"center",
        margin:5,
        marginTop:0, 
        justifyContent:"center",
        },
        imagen:{width: 130, height: 130,borderRadius:10,borderColor:"white", borderWidth:1,margin:2 , backgroundColor:"#00000080"},
    datos2:{ width:130,height: 130,backgroundColor: "#4e227a90" ,alignSelf:"center",alignContent:"center",borderRadius:10,borderColor:"white", borderWidth:1 ,margin:2},
    contenedordata:{width:140,flexDirection: "row",backgroundColor: "#64299e",margin:2,  borderWidth:1,borderRadius:10,alignItems:"center",borderColor:"white",marginTop:10 },
    contenedordatamedio:{flexDirection: "row",backgroundColor: "#64299e", margin:2, borderWidth:1,borderRadius:10,alignItems:"center",borderColor:"white"},
    Text:{paddingHorizontal:5 , paddingTop: 5,paddingBottom: 5, color:"white",},
    Text2:{ paddingTop: 5,paddingBottom: 5, color:"white"},
    Text3:{  color:"white"}, 
    conte:{flexDirection:"row",  margin:2,alignItems:"center" },
    switch:{ flex:0,transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], margin:2, backgroundColor:"#708090", borderRadius:15},
    estado:{flex:0,alignContent:"center",width:80,textAlign:"center" ,color:"white", backgroundColor:"red", borderRadius:10,borderColor:"black",borderWidth:3},
        touch:{
            flexDirection: "row",  
            alignItems:"center",
            backgroundColor:"#64299e",
            alignSelf:"center",
            borderRadius:5,
            margin:10,
            transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],borderWidth:1.2,borderColor:"black"
        },
    popup:{backgroundColor:"#00000001",margin:50,padding:20, paddingTop:5,paddingRight:5,borderRadius:10,borderWidth:1,borderColor:"black",marginVertical:65, alignContent:"center",height:300},
    touchablePerfil2: {shadowColor:"black",shadowOffset: {width: 1,height: 1,},shadowOpacity: 1.27,shadowRadius: 2.65,elevation: 6,flexDirection:"row",borderWidth: 1,color: "white",borderRadius: 10,alignItems: "center",justifyContent: "center",backgroundColor:"#ebdff0",borderColor:"#605463",width:70,height:25,borderRadius:5,marginBottom:5},
    conte22:{flexDirection:"row",  margin:2,alignItems: "center",textAlignVertical:"center",justifyContent:"center",flex:1 },
    conte3:{flexDirection:"row",  margin:2,alignItems:"center" , textAlignVertical:"center",justifyContent:"center"},
    conte:{ height:80,width:90 , margin:10,marginBottom:5,justifyContent:"center", borderWidth:0, borderRadius:10,backgroundColor:"#ffffff10"},
    utext: {color:"white", fontWeight:"bold", fontSize:18,textAlign:'center', shadowColor: "white",shadowOffset: {width: 1,height: 1,},shadowOpacity: 1.27,shadowRadius: 4.65,elevation: 6,},
    //---------------tipo 2
    touchablePerfil3: {
        borderWidth: 1,
        color: "white",
       
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
       
        backgroundColor:"#ebdff0",
        borderColor:"#605463",
        width:150,height:25,borderRadius:5,marginTop:3,
        shadowColor:"black",shadowOffset: {width: 1,height: 1,},shadowOpacity: 1.27,shadowRadius: 4.65,elevation: 6,
      },
      imagen2:{width: 90, height: 90,borderRadius:10,borderColor:"white", borderWidth:1,margin:2 , backgroundColor:"#00000080"},
    });

export default styles;
