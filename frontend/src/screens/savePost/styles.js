import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: 100 + '%', 
        height: 100 + '%' , 
        flex: 1,
        backgroundColor: '#DCD6F7'
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 2 + '%',
        color: "white",
        textAlign: "center",
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        backgroundColor: '#64299e',
      },
      spacer:{
        flex: 1
    },
    formContainer:{
        margin:20,
        flexDirection: 'row'
    },
    formContainer2:{
        marginHorizontal:20,
    },
    inputTextMultiline:{
        paddingVertical: 10,
        marginRight: 20,
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'purple',
        borderWidth: 2,
        fontSize:15,
        textAlign:"center",
        borderRadius: 10
    },
    inputText:{
        borderColor: "lightgray",
        borderStyle: "solid",
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        color: 'black',
            //fontWeight: 'bold',
        fontSize:15,
        textAlign:"center",
        marginVertical:5,
        marginHorizontal:20,
        borderColor:"purple",
        borderWidth:2,
    },
    mediaPreview:{
        aspectRatio: 1,
        backgroundColor: 'black',
        width: 120,
        borderColor: 'yellow',
        borderWidth: 3
    },
    buttonsContainer:{
        flexDirection: 'row',
        margin: 20,
        alignSelf: 'center'
    },
    cancelButton:{
        alignItems: 'center',
        flex: 1,
        borderColor: 'lightgray',
        borderWidth: 2,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10,
        backgroundColor: '#FF5A5A'
    },
    postButton:{
        alignItems: 'center',
        flex: 1,
        borderColor: 'lightgray',
        borderWidth: 2,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10,
        backgroundColor: '#14CC65'
    },
    
    cancelButtonText:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    postButtonText:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    picker:{
        height: 40,
        marginHorizontal: 20
    },
    etiquetaCampo:{
        marginBottom:10,
        marginTop: 20,
        marginHorizontal: 15 + '%',
        fontWeight:'bold',
        backgroundColor: 'black',
        borderRadius: 15,
        color: 'white',
        padding: 5,
        fontSize:15,
        textAlign:"center",
    },
    uploadingContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

    


});

export default styles;