import React from 'react'
import { View, Text, TextInput } from 'react-native'
import {Divider} from 'react-native-paper'
import NavBarGeneral from '../../../components/general/navbar'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { saveUserField } from '../../../services/user'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import * as Animatable from 'react-native-animatable';
export default function EditUserFieldScreen({route}){
    
    const {title, field, value} = route.params
    const [textInputValue, setTextInputValue] = useState(value) //al comienzo sera el nombre inicial del usuario
    const navigation = useNavigation()
    
    const onSave = () =>{
        saveUserField(field, textInputValue)
        .then(() => navigation.goBack())
    }

    return(
        <SafeAreaView style={styles.container}>
            <NavBarGeneral  title="                                    SAVE ➤➤ " leftButton={{display: true, name: 'save', action: onSave}}/>
            <Divider />
            <View style={styles.mainContainer}>
                <Animatable.Text animation="fadeInLeft" style={styles.title}>{title}</Animatable.Text>
                <TextInput 
                 style={styles.textInput} 
                 onChangeText={setTextInputValue} 
                 value={textInputValue}
                />
            </View>
            
        </SafeAreaView>
    )
}