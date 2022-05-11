import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#DCD6F7'
    },

    txtSize:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
        
    },

    postPhotoOption:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    postLostOption:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    optionContainer:{
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#64299e',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: "#5500FF",
        borderWidth: 3
    },
    optSup:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optInf:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter:{
       // alignItems: "center",
        textAlignVertical:"center",
        justifyContent:"center",
        padding:5,
        //backgroundColor:"blue",
        borderWidth:1.8,
        borderRadius:15,
        borderColor:"#000000",
       // width:150,
        paddingVertical:8,
    },
    back:{
        backgroundColor:"#B7A5FA",
        padding:8,
        margin:15,
        borderRadius:15,
    },
    imagen:{
        marginTop: 10,
        height: 160,
        width: 160,
        borderRadius:  15,
        borderColor: 'yellow',
        borderWidth: 2
    }

})

export default styles;        