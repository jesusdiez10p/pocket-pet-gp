import { useNavigation } from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {SafeAreaView, View, StyleSheet, StatusBar, Text, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import styles from './style'
import config from '../../config';
import * as Animatable from 'react-native-animatable';

export default function AddScreen() {
    
    const navigation = useNavigation()
    const [tipoPost, settipoPost] = useState(0)

    return(
        <SafeAreaView style={styles.container}>

            <Animatable.View animation="pulse" iterationCount='infinite' duration={2000} style={styles.optSup}>
                <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('camerapost')}>
                    <Text style={styles.postPhotoOption}>¡Quiero tomar una Foto!</Text> 
                    <View>
                        <Image style={styles.imagen} source={config.images.pugfoto}/>
                    </View>               
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View animation="bounceIn" style={styles.back}>
                <View style={styles.counter}>
                    <Text style={styles.txtSize}>Elige un Tipo de Post</Text>
                </View>
            </Animatable.View>

            <Animatable.View animation="pulse" iterationCount='infinite' duration={2000} delay={1000} style={styles.optInf}>
                <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('petpost')}>
                    <Text style={styles.postLostOption}>¡Se perdió mi perrito!</Text>
                    <View>
                        <Image style={styles.imagen} source={config.images.wanted}/>
                    </View>
                     
                </TouchableOpacity>
            </Animatable.View>

        </SafeAreaView> 
    )

}
