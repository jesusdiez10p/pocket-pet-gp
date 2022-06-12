import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        container:{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#6400FF',
                paddingHorizontal: 15
        },
        button:{
                height: 40,
                width: 40,
                justifyContent: 'center'
        },
        title:{
                flex: 1,
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white'
        },
        
})

export default styles;