import React, { Component, useState, useEffect } from "react";
import { Modal, View, Text, ScrollView, Button, Switch, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { showUserPets } from "../../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import styles from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as API from '../../../redux/actions/pet'
import { PetStateChange, PetPostChange } from '../../../redux/actions';
import * as Animatable from 'react-native-animatable';
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { saveUserPetImage } from "../../../services/user";

export default function Pets({ user, pets }) {

  const [count, setCount] = useState(false);
  const [cont, setCont] = useState(false);
  const [nnombre, changennombre] = React.useState(null);
  const [nraza, changenraza] = React.useState(null);
  const [nedad, changenedad] = React.useState(null);

  
  const auth = useSelector((state) => state.auth.currentUser);
  //INICIO|GESTION DE LA GALERIA Y SELECCION DE IMAGEN --------------------------

  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)
  const [galleryItems, setGalleryItems] = useState([])
  const [image, setImage] = useState(null)

  const [uriPetsImage, setUriPetsImage] = useState('')

  useEffect(() => { //Se carga cada vez que el componente es llamado
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync() //Pedimos permiso para acceder a la Galeria
      setHasGalleryPermissions(galleryStatus.status == 'granted')

      //Si logramos acceder a la galeria
      if (galleryStatus == 'granted') {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({ sortBy: ['creationTime'], mediaType: ['photo'] })    //Definimos cómo, y qué tipo de Media se puede importar 
      }
    })()
  }, [])

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })
    if (!result.cancelled) {
      setUriPetsImage(result.uri)
    }
  }

  // FIN | GESTION DE LA GALERIA Y SELECCION DE IMAGEN --------------------------

  var TipoUsuario = String(user?.TipoUsuario)
  if (TipoUsuario == 'Albergue') {
    var info = ['Invisible', 'En adopción']
  }
  else {
    var info = ['Perdido', 'A salvo']
  }


  const dispatch = useDispatch();

  const handlePetFunction = () => {
    if (nnombre == "" || nnombre == null || nraza == "" || nraza == null || nedad == "" || nedad == null) {
      setCont(true)
      console.log('Faltan datos')
      return
    }
    savePet()
  }

  const savePet = async () => {
    setCount(false)
    const response = await API.createUserPet(nnombre, nraza, nedad)
    saveUserPetImage(uriPetsImage, response)
    changennombre(null)
    changenraza(null)
    changenedad(null)
    setUriPetsImage('')
  }

  const Separator = () => (
    <View style={styles.separator} />
  );

  const handleStateChange = (id, Perdido) => {

    dispatch(PetStateChange(id, Perdido))
      .then(() => {
        dispatch(PetPostChange(id, Perdido))
          .then(() => {
            console.log("Se cambió el estado del Post (✿◡‿◡)");
          })
          .catch(() => {
            console.log("No se cambió el estado del Post (⓿_⓿)");
          });
      }).catch(() => { });


  };

  return (
    <>

    <Animatable.View animation="slideInLeft" style={{ marginVertical: 15, paddingVertical: 5, marginTop: 15 }} >
      {/* <Text>Aqui debería ir moka</Text> */}
      <FlatList style={styles.petsView}
        data={pets}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            // <View style={styles.petsView}>
            //   <Text>{item.Nombre}</Text>
            //   <Text> {item.Raza}</Text>
            //   <Text> {item.Edad}</Text>
            // </View>
            <View style={styles.general}>
              <Image
                //source={require('@expo/snack-static/react-native-logo.png')}
                style={styles.imagen}
                source = {{uri: item.Image}}
              />
              <View style={styles.datos}>
                <View style={styles.contenedordata}>
                  <Text style={styles.Text}> {"Nombre:"}
                  </Text>
                  <Text style={styles.Text2}>
                    {item.Nombre}
                  </Text>
                </View>
                <View style={styles.contenedordatamedio}>
                  <Text style={styles.Text}>
                    {"Raza:"}
                  </Text>
                  <Text style={styles.Text2}>
                    {item.Raza}
                  </Text>
                </View>
                <View style={styles.contenedordatamedio}>
                  <Text style={styles.Text}>
                    {"Edad:"}
                  </Text>
                  <Text style={styles.Text2}>
                    {item.Edad}
                  </Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center"}}>
                  <View style={styles.conte}>

                    <Switch
                      trackColor={{ true: "#708090", false: "#c94242" }}
                      thumbColor={item.Estado ? "#69c77f" : "#6b0a0a"}
                      style={styles.switch}
                      value={item.Estado}

                      onValueChange={() => {
                        //await setPetid(item.id)
                        //await setEstado(item.Perdido)
                        handleStateChange(item.id, item.Estado)
                      }}
                    />
                    <Text style={styles.estado}
                    >
                      {item.Estado ? info[1] : info[0]}
                    </Text>

                  </View>
                </View>
              </View>
            </View>
            ////----------------
          );
        }}
      />
    
    {String(user?.uid)!=String(auth?.uid)?
    <></>:
    pets.length<50? 
      <TouchableOpacity style={styles.touch} onPress={() => { setCount(true) }} >
        <View style={{ marginLeft: 5 }}>
          <MaterialCommunityIcons name="dog" size={20} color="white" />
        </View>
        <Text style={styles.Text3}> Nueva Mascota </Text>
        <View style={{ marginRight: 5 }}>
          <MaterialCommunityIcons name="dog" size={20} color="white" />
        </View>
      </TouchableOpacity>:
      
      <Text>*Máximo de mascotas alcanzado.</Text>
}
      <Modal transparent={true} visible={count} >
        <Modal transparent={true} visible={cont}>
          <Animatable.View style={{ backgroundColor: "#000000aa", flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Animatable.View 
                  style={{
                      backgroundColor: "#a69dd1",
                      margin: 50,
                      padding: 30,
                      borderRadius: 20
                  }}
                  animation="zoomIn"
              >
                  <Text>Complete todos los campos</Text>

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
              </Animatable.View>
          </Animatable.View>
        </Modal>

        <ScrollView style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <Animatable.View style={styles.popup} animation="zoomIn">
            <Text style={styles.titulo}>Registro Mascotas</Text>
            <Separator />
            <View>
              <Text style={styles.ingreso}>Nombre:</Text>
              <TextInput style={styles.escrito}
                //placeholder='ingresar nombre'
                onChangeText={changennombre}
              />
              <Text style={styles.ingreso}>Raza:</Text>
              <TextInput style={styles.escrito}
                //placeholder='ingresar nombre'
                onChangeText={changenraza}
              />
              <Text style={styles.ingreso}>Edad:</Text>
              <TextInput style={styles.escrito}
                //placeholder='ingresar nombre'
                keyboardType="numeric"
                onChangeText={changenedad}
              />
            </View>
            <Text style={styles.ingreso}>Imagen:</Text>

            <View style={{
              flexDirection: "column", alignItems: "center", alignContent: "center", alignSelf: "center", marginVertical: 7, borderRightColor: "white",
              borderBottomColor: "white", borderColor: "#735094", borderWidth: 1, padding: 15, width: 230
            }}>
              <TouchableOpacity
                onPress={() => chooseImage()}>
                <Image
                  style={{ width: 70, height: 70, borderRadius: 10, borderColor: "white", borderWidth: 1, margin: 2, backgroundColor: "black" }}
                  source={{uri: uriPetsImage}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchablePerfil} onPress={() => chooseImage()}>
                <Text style={{
                  textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center", flex: 1,
                  justifyContent: 'center', alignItems: 'center', paddingTop: 3
                }}>Subir Imagen</Text>
              </TouchableOpacity>
            </View>
            <Separator />
            <TouchableOpacity style={styles.poptouchsi} onPress={() => {handlePetFunction()}}>
              <View style={{ marginLeft: 5 }} >
                {/* <MaterialCommunityIcons name="dog" size={24} color="black" /> */}
              </View>
              <Text>  Registrar mascota </Text>
              <View style={{ marginRight: 5 }}>
                <MaterialCommunityIcons name="dog" size={24} color="#8cbf9f" />
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.poptouchno} onPress={() => { setCount(false) }}>
              <View style={{ marginLeft: 5 }}>
                {/* <MaterialCommunityIcons name="dog" size={24} color="black" /> */}
              </View>
              <Text> Cancelar  Registro </Text>
              <View style={{ marginRight: 5 }}>
                <MaterialCommunityIcons name="dog" size={24} color="#d66f6f" />
              </View>
            </TouchableOpacity>
          </Animatable.View>
        </ScrollView>
      </Modal>

    </Animatable.View>
  </>
  );
}
