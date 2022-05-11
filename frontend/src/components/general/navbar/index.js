import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Feather} from '@expo/vector-icons'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

export default function NavBarGeneral({title='EDITAR DATOS', leftButton={display: false}}) {
        const navigation = useNavigation()
        return (
        <View 
         style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Feather name='arrow-left' size={26} color='white'/> 
                </TouchableOpacity>

                <Text style={styles.title}>{title}</Text>

                <TouchableOpacity style={styles.button} onPress={() => leftButton.display ? leftButton.action(): null}>
                        <Feather name={leftButton.name} size={26} color={leftButton.display? 'yellow':'#6400FF'}/> 
                </TouchableOpacity>
        </View>
        )
}
