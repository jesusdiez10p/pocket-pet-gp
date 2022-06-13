
import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView, ActivityIndicator,Modal,Switch,Image,StyleSheet, FlatList} from "react-native";
import {Picker} from '@react-native-picker/picker'
import styles from '././styles';
import {Feather} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import {useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Requests({pets}) {
    const [show, setShow] = useState(false);
    const [item1, setItem1] = useState('')

    const navigation = useNavigation();
    return (
        <View>
            {/*Mostrar listado de mascotas EN ADOPCIÓN*/}
            {/* inicia solicitud de adopcion para tipo se usuario 2 ---------------  */}
            
            
            <FlatList
                data={pets}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>{
                    
                    return (
                        <View  style={styles.back}>      
                    <View style={styles .counter}>
                        <View style={styles.general2}>
                        <View   style={{ flexDirection: "row",}}>   
                        <Image
                            //source={require('@expo/snack-static/react-native-logo.png')}
                            style={styles.imagen}
                        />
                        <View style={styles.datos2}>
                        <View  style={{alignItems: "center",textAlignVertical:"center",justifyContent:"center",flex:1 }}>
                            <View style={styles.conte}>                      
                                <Text style={styles.utext}> {item.Nombre}</Text>
                            </View>
                            <View style={styles.conte3}>                      
                                <TouchableOpacity style={styles.touchablePerfil2} onPress={() =>{setShow(true), setItem1(item)}}>
                                    <MaterialCommunityIcons name="book-open" size={20} color="black" />
                                    <Text style={{marginHorizontal:1}}>
                                    Info
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                        </View>
                        </View>
                        <View style={styles.conte22}>
                            {item.Estado? 
                                <TouchableOpacity style={styles.touchablePerfil3} 
                                    onPress={()=>{navigation.navigate('solicitantsview',{pet: {item}})}}>
                                <Text>
                                    Ver Solicitudes
                                </Text>
                                </TouchableOpacity>: 
                                <View style={styles.NoAdopcion}>
                                    <Text> No en Adopción</Text></View>}                      
                            
                        </View>
                    </View>
                    
                    </View>
                    </View>
                                      
                    );
                }}                
                />
                    <Modal transparent={true} visible={show} >
                        <Animatable.View  style={{backgroundColor:"#000000aa",flex:1,justifyContent:'center'}}> 
                        <Animatable.View /*style={styles.popup}*/   animation="zoomIn">
                            <View style={styles.datos}>
                                    <View style={{flexDirection:"row"}}>
                                        <View style={{alignItems: "center",textAlignVertical:"center",justifyContent:"center",flex:1, paddingTop:3}}>
                                        <Text style={styles.utext}>Detalle de la Mascota</Text>
                                        </View>
                                        <TouchableOpacity style={{alignItems:"flex-end", margin:0, paddingTop:3}} onPress={() =>{setShow(false)}}>
                                            <Feather name="x"  size={20} color="white" />                
                                        </TouchableOpacity>
                                    </View>   
                                    <View style={{alignItems: "center",textAlignVertical:"center",justifyContent:"center", paddingTop:3}}>
                                    <Image style={styles.imagen2}/>    
                                    </View>
                                    
                                    <View style={styles.contenedordata2}>
                                        <Text style={styles.Text}> { "Nombre: "+ item1.Nombre}
                                        </Text>
                                        <Text style={styles.Text2}>  
                                        </Text>
                                    </View>
                                    <View style={styles.contenedordatamedio2}>
                                        <Text style={styles.Text}>
                                            { "Edad: "+ item1.Edad}
                                        </Text>
                                        <Text style={styles.Text2}>
                                        </Text>
                                    </View>
                                    <View style={styles.contenedordatamedio2}>
                                        <Text style={styles.Text}>
                                            { "Raza: " + item1.Raza}
                                        </Text>
                                        <Text style={styles.Text2}></Text>
                                    </View>
                                   
                            </View>



                        </Animatable.View>            
                        </Animatable.View>          
                    </Modal>
                </View>
    )
}
