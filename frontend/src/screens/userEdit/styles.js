import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        container:{
                flex: 1,
                backgroundColor: '#e4e1ed'
        },
        imageContainer:{
                alignItems: 'center',
                marginTop: 20,
        },
        image:{
                height: 160,
                width: 160,
                position: 'absolute',
                
        },
        imageViewContainer:{
                backgroundColor: '#6400FF',
                height: 160,
                width: 160,
                borderRadius: 30,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor:"#827e94",
                borderWidth:3
        },
        imageOverlay:{
                backgroundColor: 'rgba(0,0,0, 0.4)',
                ...StyleSheet.absoluteFill
        },
        fieldsContainer:{
                padding: 20,
                marginTop: 20,
                backgroundColor:"#DCD6F760",
                borderTopWidth:2,
                borderBottomColor:"#aba6bf",
                borderTopColor:"#aba6bf",
                borderBottomWidth:2

        },
        fieldItemContainer:{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:'center',

        },
        fieldValueContainer:{
                flexDirection: 'row',
                alignItems: 'center'

        },
        separator2: {
                marginVertical: 1,
                borderBottomColor: '#00000060',
                borderBottomWidth: StyleSheet.hairlineWidth,
                width:120,
                //borderWidth:5,
                alignContent:"center",
                alignSelf:"center",
                alignItems:"center",
                
        }
})

export default styles;