import { Camera } from 'expo-camera'
import React, {useEffect, useState} from 'react'
import { View, Text, ImagePickerIOS, TouchableOpacity, Image, Button, TouchableOpacityComponent } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import styles from './style'
import { Feather } from '@expo/vector-icons'

export default function CameraScreen() {
    
    //Permite cambiar o actualizar cada vez que este estado (variable cambie)
    const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
    const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)

    //Almacenamos la imagen obtenida de la galeria AQUI
    const [galleryItems, setGalleryItems] = useState([])

    const [cameraRef, setCameraRef] = useState(null)
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
    const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off)

    const [image, setImage] = useState(null)

    const [isCameraReady, setIsCameraReady] = useState(false)

    //Determinamos que el componente forma parte d ela View, o no
    const isFocused = useIsFocused()


    const navigation = useNavigation()

    //Se carga cada vez que el componente es llamado
    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestPermissionsAsync() //Pedimos permiso  usar la camara
            setHasCameraPermissions(cameraStatus.status == 'granted')

            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync() //Pedimos permiso para acceder a la Galeria
            setHasGalleryPermissions(galleryStatus.status == 'granted')

            //Si logramos acceder a la galeria
            if(galleryStatus=='granted'){
                const userGalleryMedia = await MediaLibrary.getAssetsAsync({sortBy: ['creationTime'], mediaType: ['photo']})    //Definimos cómo, y qué tipo de Media se puede importar
                setGalleryItems(userGalleryMedia.assets)   //Asignamos el arreglo de Media al Estado  
            }

        })() //Retorna una promesa, pero no la usamos <- ignoralo
        }, [])

        const takePicture = async() => {
            if(cameraRef){  //Si hay una camara en uso
                try{
                    const options = {quality: 1, base64: true}
                    const photoTookPromise = await cameraRef.takePictureAsync(options)
                    if(photoTookPromise){
                        const data = await photoTookPromise
                        const source = data.uri

                        navigation.navigate('savepost',{ source })

                        console.log(source)
                        setImage(source)
                    }

                } catch (error) {
                    console.log(error)
                }
            }
        }

        const pickFromGallery = async () =>{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                aspect: [16, 9],
                quality: 1
            })
            if(!result.cancelled){
                navigation.navigate('savepost',{ source: result.uri})
            }
        }

        if(!hasCameraPermissions || !hasGalleryPermissions){
            return(
                <View></View>
            )
        }

        //console.log(galleryItems)

        return (

        <View style={styles.container}>
            {isFocused ? 
            <Camera
             ref={ref => setCameraRef(ref)}
             style = {styles.camera}
             ratio={'16:9'}
             type={cameraType}
             flashMode={cameraFlash}
             onCameraReady={() => setIsCameraReady(true)}
            />
            : null}


            <View style={styles.sideBarContainer}>

                 <TouchableOpacity 
                  style={styles.sideBarButton}
                  onPress={() => setCameraType(
                      cameraType === Camera.Constants.Type.back 
                      ? Camera.Constants.Type.front 
                      : Camera.Constants.Type.back
                      )}>
                     <Feather name="refresh-ccw" size={24} color={'purple'}/>
                     <Text style={styles.iconText}>Flip</Text>
                 </TouchableOpacity>

                 <TouchableOpacity 
                  style={styles.sideBarButton}
                  onPress={() => setCameraFlash(
                    cameraType === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.torch
                    : Camera.Constants.FlashMode.off
                    )}>
                     <Feather name="zap" size={24} color={'yellow'}/>
                     <Text style={styles.iconText}>Flash</Text>
                 </TouchableOpacity>

            </View>


            <View style={styles.bottomBarContainer}>
                <View style={{flex : 1}}></View>
                <View style={styles.takePhotoButtonContainer}>
                    <TouchableOpacity
                     style={styles.takePhotoButton}
                     disabled={!isCameraReady}
                     onPress={() => takePicture()}
                    />

                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity 
                     style={styles.galleryButton}
                     onPress={() => pickFromGallery()}>
                         {galleryItems[0] == undefined ? 
                         <></>
                        :
                        <Image
                         style={styles.galleryButtonImage}
                         source={{uri: galleryItems[0].uri}}
                         />}

                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
