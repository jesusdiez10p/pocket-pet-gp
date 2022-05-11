import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import {Feather} from '@expo/vector-icons'
import NavBarGeneral from '../../components/general/navbar'
import * as ImagePicker from 'expo-image-picker'
import { saveMediaToStorage } from '../../services/random'
import { saveUserProfileImage } from '../../services/user'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

export default function EditUserScreen() {


        const Separator2 = () => (
                <View style={styles.separator2} />
              );
        const navigation = useNavigation()
        const auth = useSelector(state => state.auth)

        const chooseImage = async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [1,1],
                        quality: 1
                })
                if(!result.cancelled){
                        saveUserProfileImage(result.uri)
                }}

        return (
        
        <SafeAreaView style={styles.container}>
                <NavBarGeneral/>
                <Animatable.View animation="jello" iterationCount="infinite" duration={1500}
                 style={styles.imageContainer}>
                         <TouchableOpacity 
                          style={styles.imageViewContainer}
                          onPress={() => chooseImage()}>
                                 <Image
                                  style={styles.image}
                                  source = {{uri: auth.currentUser.Image}}/>

                                  <View style={styles.imageOverlay}/>
                                  <Feather name='camera' size={26} color='white'/>
                         </TouchableOpacity>

                         
                </Animatable.View>

                <Animatable.View animation="fadeInUpBig" style={styles.fieldsContainer}>
                        <TouchableOpacity 
                         style={styles.fieldItemContainer}
                         onPress={()=>navigation.navigate('edituserfield', {title: 'Cambiar Nombre', field: 'FullName', value: auth.currentUser.FullName})}>
                                <Text style={{fontWeight:'bold'}}>Nombre</Text>
                                <View style={styles.fieldValueContainer}>
                                        <Text>{auth.currentUser.FullName}</Text>
                                        <Feather name='chevron-right' size={20} color='gray' />
                                </View>
                        </TouchableOpacity>
                </Animatable.View>

                <Animatable.View animation="fadeInUpBig" delay={500} style={styles.fieldsContainer}>
                        <TouchableOpacity 
                         style={styles.fieldItemContainer}
                         onPress={()=>navigation.navigate('edituserfield', {title: 'Cambiar Descripcion ', field: 'Description', value: auth.currentUser.Description})}>
                                <Text style={{fontWeight:'bold'}}>Descripcion</Text>
                                <View style={styles.fieldValueContainer}>
                                        <Text>{auth.currentUser.Description}</Text>
                                        <Feather name='chevron-right' size={20} color='gray' />
                                </View>
                        </TouchableOpacity>
                      
                </Animatable.View>
                {String(auth.currentUser?.TipoUsuario)=='Albergue'? //Albergue no tiene edad, asi que no se muestra
                <></>:
                <Animatable.View animation="fadeInUpBig" delay={1000} style={styles.fieldsContainer}>
                        <TouchableOpacity 
                         style={styles.fieldItemContainer}
                         onPress={()=>navigation.navigate('edituserfield', {title: 'Cambiar Edad', field: 'Age', value: auth.currentUser.Age})}>
                                <Text style={{fontWeight:'bold'}}>Edad</Text>
                                <View style={styles.fieldValueContainer}>
                                        <Text>{auth.currentUser.Age}</Text>
                                        <Feather name='chevron-right' size={20} color='gray' />
                                </View>
                        </TouchableOpacity>
                </Animatable.View>}
                

        </SafeAreaView>
        )
}
