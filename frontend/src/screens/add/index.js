import { useNavigation } from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {SafeAreaView, View, StyleSheet, StatusBar, Text, Image, TouchableWithoutFeedback, TouchableOpacity, Modal} from 'react-native'
import styles from './style'
import styles2  from './styles2'
import config from '../../config';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';

export default function AddScreen() {
    
    const currentUserPets = useSelector((state) => state.pets.currentUserPets);
    const navigation = useNavigation()
    const [tipoPost, settipoPost] = useState(0)
    const [petSelected, setpetSelected] = useState(currentUserPets[0]?.Nombre)
    const [cont, setCont] = useState(false)

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
                <TouchableOpacity style={styles.optionContainer} onPress={() => petSelected?navigation.navigate('petpost'):setCont(true)}>
                    <Text style={styles.postLostOption}>¡Se perdió mi perrito!</Text>
                    <View>
                        <Image style={styles.imagen} source={config.images.wanted}/>
                    </View>
                     
                </TouchableOpacity>
            </Animatable.View>
            <Modal transparent={true} visible={cont}>
                <View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={{
                        backgroundColor: "#a69dd1",
                        margin: 50,
                        padding: 30,
                        borderRadius: 20
                    }}>
                        <Text style={styles2.titulo}>No tiene mascotas registradas</Text>

                        <TouchableOpacity
                            style={{
                                backgroundColor: "#ffffff",
                                padding:10,
                                marginTop: 20,
                                alignSelf: "center",
                                borderRadius: 10}}
                                onPress={() => { setCont(false) }}
                        >
                            <Text style={{textAlign: "center", fontWeight: "bold"}}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView> 
    )

}
