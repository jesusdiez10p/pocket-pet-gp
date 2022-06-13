import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React, {Component, useEffect, useState} from 'react'
import { Picker } from '@react-native-picker/picker'
import { View, Text, TextInput, Image, Alert,ActivityIndicator, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import {Feather} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBarGeneral from '../../components/general/navbar'
import {Divider} from 'react-native-paper'
import {useDispatch} from 'react-redux'
import { createPost } from '../../redux/actions/post'
import * as Animatable from 'react-native-animatable';
export default function SavePostScreen(props){

    const navigation = useNavigation()

    const [description, setDescription] = useState('')
    const [fecha, setFecha] = useState('')
    const [situacion, setSituacion] = useState('')
    const [estatura, setEstatura] = useState('')
    const [accesorios, setAccesorios] = useState('')
    const [collar, setCollar] = useState('')
    const [tipo, setTipo] = useState(1)

    const [requestRunning, setRequestRunning] = useState(false)

    const dispatch = useDispatch()
    const handleSavePost = () => {
        setRequestRunning(true)
        dispatch(createPost(description, props.route.params.source, fecha, situacion, estatura, accesorios, collar, tipo))
        .then(() => navigation.dispatch(StackActions.popToTop())) //Vamos a la primer ventana
        .catch(() => setRequestRunning(false))
        navigation.navigate('Feed')
    }

    if(requestRunning){
        return(
        <View style={styles.uploadingContainer}>
            <ActivityIndicator color='red' size='large' />
        </View>
        )
    } 
    

    return(
        
        <SafeAreaView style={styles.container}>

            <NavBarGeneral title={'CREAR POST'}/>
            <Divider />

        <ScrollView>

            <Animatable.View animation="zoomInUp" delay={1000} style={styles.formContainer}>
                <TextInput
                 style={styles.inputTextMultiline}
                 maxLength={180}
                 multiline
                 onChangeText={(text) => setDescription(text)}
                 placeholder= "DESCRIPCIÓN"
                 />
                
                 <Animatable.Image
                  animation="flipInX"
                  delay={1500}
                  style={styles.mediaPreview}
                  source= {{uri:props.route.params.source}}
                />
            </Animatable.View>
            
            <Animatable.View animation="slideInDown" delay={1000}>
                
                <Animatable.Text animation="fadeInLeft" delay={1200} style={styles.etiquetaCampo}>Ingrese Fecha:</Animatable.Text>
                <TextInput
                 style={styles.inputText}
                 onChangeText={(text) => setFecha(text)}
                 placeholder="FECHA"/>

                <Animatable.Text animation="fadeInLeft" delay={1200} style={styles.etiquetaCampo}>Ingrese Situacion:</Animatable.Text>
                <TextInput
                 style={styles.inputText}
                 maxLength={180}
                 multiline
                 onChangeText={(text) => setSituacion(text)}
                 placeholder="SITUACION"/>

                <Animatable.Text animation="fadeInLeft" delay={1200} style={styles.etiquetaCampo}>Indique Accesorios:</Animatable.Text>
                <TextInput
                 style={styles.inputText}
                 onChangeText={(text) => setAccesorios(text)}
                 placeholder="¿ACCESORIOS?"/>

                <Animatable.Text animation="fadeInLeft" delay={1200} style={styles.etiquetaCampo}>Indique estatura:</Animatable.Text>
                <Picker
                    style={styles.picker}
                    selectedValue={estatura}
                    onValueChange={(itemValue, itemIndex) => setEstatura(itemValue)}
                >
                    <Picker.Item label="Pequeño" value="Pequeño" />
                    <Picker.Item label="Mediano" value="Mediano" />
                    <Picker.Item label="Grande" value="Grande" />
                </Picker>

                 <Animatable.Text animation="fadeInLeft" delay={1200} style={styles.etiquetaCampo}>¿El perro tenia collar?:</Animatable.Text>
                 <Picker
                    style={styles.picker}
                    selectedValue={collar}
                    onValueChange={(itemValue, itemIndex) => setCollar(itemValue)}
                >
                    <Picker.Item label="Si" value="si" />
                    <Picker.Item label="No" value="No" />
                </Picker>

            </Animatable.View>

            <View>
                <Animatable.Text animation="fadeInLeft" delay={1200} style={styles.etiquetaCampo}>Ingrese Ubicación</Animatable.Text>
                <MaterialCommunityIcons name="map-legend" size={100} color="white" style={{alignSelf: 'center'}}/>
            </View>

            </ScrollView>

            <View style={styles.spacer}/>

            <Animatable.View animation="pulse" iterationCount="infinite" style={styles.buttonsContainer}>

                <TouchableOpacity
                 onPress={()=> navigation.goBack()}
                 style={styles.cancelButton}>
                     <Feather name="x" size={24} color="white" />
                     <Text style={styles.cancelButtonText}>CANCELAR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => handleSavePost()}
                 style={styles.postButton}>
                     <Feather name="corner-left-up" size={24} color="white" />
                     <Text style={styles.postButtonText}>PUBLICAR</Text>
                </TouchableOpacity>
                

            </Animatable.View>

            

        </SafeAreaView>

    )
}
