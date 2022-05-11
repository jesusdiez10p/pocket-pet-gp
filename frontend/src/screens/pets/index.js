import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';
import { View, ScrollView, ActivityIndicator} from "react-native";
import styles from './styles';
import {useDispatch} from 'react-redux'
import { createPost } from '../../redux/actions/post'
import { useSelector } from "react-redux";
import NavBarGeneral from '../../components/general/navbar'
import {Divider} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Adoptions from '../../components/pets/Adoptions';
import Requests from '../../components/pets/PetRequest';
export default function PetScreen() {
    
    
    const navigation = useNavigation()
    const currentUserPets = useSelector((state) => state.pets.currentUserPets);
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
                    <NavBarGeneral title={'ADOPCIONES'}/>
                    <Divider />
                {/*Si el usuario es Albergue mostrar vista Requests (solicitudes por mascota)*/}
                {String(auth?.TipoUsuario)=='Albergue'?
                <Requests pets={currentUserPets}/>:
                <Adoptions/>
            }      
                </ScrollView>
            </SafeAreaView>
        );
}

