import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Feather} from '@expo/vector-icons'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

export default function NavBarGeneral({title='EDITAR DATOS', leftButton={display: true}, rightButton={display: false, name: ''}}) {
        const navigation = useNavigation()
        return (
        <View 
         style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => leftButton.display ? navigation.goBack(): null}>
                        {leftButton.display &&
                                <Feather name='arrow-left' size={26} color='white'/> 
                        }
                </TouchableOpacity>

                <Text style={styles.title}>{title}</Text>

                <TouchableOpacity style={styles.button} onPress={() => rightButton.display ? rightButton.action(): null}>
                        {
                        rightButton.display &&
                                <Feather name={rightButton.name} size={26} color="white"/> 
                        }
                </TouchableOpacity>
        </View>
        )
}
