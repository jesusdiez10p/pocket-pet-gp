import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        container:{
                flex: 1,
                backgroundColor: '#b6ace3',

                
                backgroundColor: '#DCD6F7'
        },
        textInput:{
            borderColor: "lightgray",
            borderBottomWidth: 1,
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
            borderTopColor:"#36363670",
            borderTopWidth:2,
            borderBottomColor:"#36363670",
            borderBottomWidth:2,
            marginHorizontal:7

        },
        mainContainer:{
            padding: 15,
            backgroundColor:'#ffffff20',
            paddingTop:30,            
            borderColor:"#ebebeb50",
            borderRadius:15,
            borderWidth:1.5,
            margin:15,
            paddingBottom:25
        },
        title:{
            marginBottom:10,
            fontWeight:'bold',
            color: 'black',
            paddingHorizontal: 5,
            fontSize:20,
            textAlign:"center",
            
        }


})

export default styles;