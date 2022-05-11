import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56,
        backgroundColor: "black",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    pocketpet:{
        color: 'red', 
        backgroundColor: 'black', 
        fontWeight: 'bold', 
        fontSize: 30, 
        borderColor: 'white',
        paddingHorizontal: 25,
        borderRadius: 22,
        textShadowColor:'white',
        textShadowOffset:{width: 2, height: 0},
        textShadowRadius:3,

    },
    container:{
        flex: 1, 
        width: 100 + '%', 
        height: 100 + '%', 
        backgroundColor: '#DCD6F7'
    }
});

export default styles;