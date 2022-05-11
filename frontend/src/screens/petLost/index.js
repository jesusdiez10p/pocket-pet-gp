import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Picker, Button, TouchableOpacity, Alert, ScrollView, ActivityIndicator,Modal,Switch,Image,StyleSheet} from "react-native";
import styles from './styles';
import {useDispatch} from 'react-redux'
import { createPost } from '../../redux/actions/post'
import { useSelector } from "react-redux";
import {Feather} from '@expo/vector-icons'
import NavBarGeneral from '../../components/general/navbar'
import {Divider} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';

export default function PetLost() {
    
    
    const navigation = useNavigation()

    const currentUserPets = useSelector((state) => state.pets.currentUserPets);

    const [description, setDescription] = useState('')
    const [fecha, setFecha] = useState('')
    const [situacion, setSituacion] = useState('')
    const [estatura, setEstatura] = useState('')
    const [accesorios, setAccesorios] = useState('')
    const [collar, setCollar] = useState('')
    const [tipo, setTipo] = useState(2)
    const [petSelected, setpetSelected] = useState(currentUserPets[0]?.Nombre)

    const [requestRunning, setRequestRunning] = useState(false)

    const dispatch = useDispatch()
    const handleSavePost = () => {
        setRequestRunning(true)
        dispatch(createPost(description, null, fecha, situacion, estatura, accesorios, collar, tipo, petSelected))
        .then(() => navigation.dispatch(StackActions.popToTop())) //Vamos a la primer ventana
        .catch(() => setRequestRunning(false))
    }


    const auth = useSelector((state) => state.auth.currentUser);
    if(requestRunning){
        return(
        <View style={styles.uploadingContainer}>
            <ActivityIndicator color='red' size='large' />
        </View>
        )
    } 

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <NavBarGeneral title={'REPORTAR PÉRDIDA DE MASCOTA'}/>

                <Divider />

                    <View  style={styles.back}>
     
                        <View style={styles .counter}>
                            <Animatable.Text animation="flipInY" delay={200} style={styles.etiquetaCampo}>FECHA DE PÉRDIDA</Animatable.Text>
                                <TextInput
                                style={styles.input}
                                placeholder='FECHA'
                                onChangeText={(text) => setFecha(text)}/>
                        </View>

                        <View style={styles .counter}>
                        <Animatable.Text animation="flipInY" delay={300} style={styles.etiquetaCampo}>INFORMACION SOBRE PÉRDIDA</Animatable.Text>
                        <TextInput
                            style={styles.input}
                            maxLength={180}
                            multiline
                            onChangeText={(text) => setDescription(text)}
                            placeholder='DESCRIPCION'/>
                        </View>

                        <View style={styles .counter}>
                            <Animatable.Text animation="flipInY" delay={400} style={styles.etiquetaCampo}>SITUACION ACTUAL</Animatable.Text>
                            <TextInput
                                style={styles.input}
                                placeholder='SITUACION'
                                onChangeText={(text) => setSituacion(text)}/>
                        </View>

                        <View style={styles .counter}>
                            <Animatable.Text animation="flipInY" delay={500} style={styles.etiquetaCampo}>PERFIL DE MASCOTA</Animatable.Text>

                            <Picker style={styles.picker}
                            mode="dialog" 
                            selectedValue={petSelected}
                            onValueChange={(itemValue) => {setpetSelected(itemValue); console.log(petSelected)}}
                            >
                        
                            {currentUserPets.map((item, index) => {
                            return (<Picker.Item label={item.Nombre} value={item.Nombre} key={index}/>)   })}
                            </Picker> 
                        </View>

                        <View style={styles .counter}>
                            <Animatable.Text animation="flipInY" delay={600} style={styles.etiquetaCampo}>UBICACION REFERENCIAL</Animatable.Text>
                            <TextInput
                                style={styles.input}
                                placeholder=' MAPA VA AQUI'/>
                        </View>

                    </View>

                   <TouchableOpacity
                    onPress={() => handleSavePost()}
                    style={styles.postButton}>
                        <Feather name="corner-left-up" size={20} color="white" />
                        <Animatable.Text animation="pulse" iterationCount='infinite' style={styles.postButtonText}>  Reportar perdida de:"{petSelected}"</Animatable.Text>
                </TouchableOpacity>
                            
                </ScrollView>

            </SafeAreaView>
        );
}

