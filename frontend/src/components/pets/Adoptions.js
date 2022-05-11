import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView, ActivityIndicator,Modal,Switch,Image,StyleSheet} from "react-native";
import styles from './styles';
import {Feather} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import { FlatList } from 'react-native';
import { connect,useDispatch,useSelector } from 'react-redux';
import * as API from '../../redux/actions/pet'


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Initusuarios } from '../../redux/actions/post';

function Adoptions(props) {

    const [nnombre, changennombre] = React.useState(null);
    const [nmensaje, changemensaje] = React.useState(null);

    const [count, setCount] = useState(false);
    const [show, setShow] = useState(false);
    const [item1, setItem1] = useState('')
    

    const dispatch = useDispatch()
    const [petsOnAdoption, setpetsOnAdoption] = useState([]);
    const [isFetching, setIsFetching] = useState(false)

    //const petsOnAdoption=[1,4,5,2]

    const onRefresh = () => {
        setIsFetching(true);
        fetchData()
        nuevopets=[]
    } 
    const fetchData = () => {
        dispatch(clearData());
        dispatch(Initusuarios());
        setIsFetching(false);
    }

    const Separator = () => (
        <View style={styles.separator} />
      );

    var nuevopets=[]

    const handlePetRequest = async (item) => {
        const response = await API.addSolicitud(item.idOwner,item.id,nnombre,nmensaje)
        console.log("hola " + item.idOwner )
        console.log("hola2 " + item.id )
    }

    var pets= useSelector((state)=>state.requests.pets)
    
    for (let x=0; x<pets.length; x++){
        for (let y=0; y<pets[x].length;y++){
            nuevopets.push(pets[x][y])
        }
    }
console.log(nuevopets)
    return (
        <View style={styles.back}>

            <FlatList
            data={nuevopets}
            renderItem={({ item }) => {
                return(   
                    <View style={styles.counter}>

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
                                    info... 
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                        </View>
                        </View>
                        <View style={styles.conte22}>                      
                            <TouchableOpacity style={styles.touchablePerfil}  onPress = {() => {setCount(true),setItem1(item)}}>
                            <Text>
                                Solicitar Adopcion 
                            </Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                        </View>)}}   
            keyExtractor={item => item.id}
            extraData={petsOnAdoption}
            onRefresh={onRefresh}
            refreshing={isFetching}
            //showsVerticalScrollIndicator={false}
            />
                    <Modal transparent={true} visible={show}  >
                        <Animatable.View  style={{backgroundColor:"#000000aa",flex:1,justifyContent:'center'}}> 
                        <Animatable.View /*style={styles.popup}*/   animation="zoomIn">
                            <View style={styles.datos}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{alignItems: "center",textAlignVertical:"center",justifyContent:"center",flex:1, paddingTop:3}}>
                                <Text style={styles.utext}>Datos mascotas</Text>
                                </View>
                                <TouchableOpacity style={{alignItems:"flex-end", margin:0, paddingTop:3}} onPress={() =>{setShow(false)}}>
                                    <Feather name="x"  size={20} color="white" />                
                                </TouchableOpacity>
                            </View>       
                                    <View style={styles.contenedordata2}>
                                    <Text style={styles.Text}> { "Nombre: "+item1.Nombre}
                                    </Text>
                                    <Text style={styles.Text2}>
                                        
                                    </Text>
                                </View>
                                    <View style={styles.contenedordatamedio2}>
                                    <Text style={styles.Text}>
                                        { "Raza: "+ item1.Raza}
                                    </Text>
                                    <Text style={styles.Text2}>
                                    
                                    </Text>
                                </View>
                                    <View style={styles.contenedordatamedio2}>
                                    <Text style={styles.Text}>
                                        { "Edad: "+item1.Edad}
                                    </Text>
                                    <Text style={styles.Text2}>
                                        
                                    </Text>
                                </View>
                                
                                </View>



                        </Animatable.View>            
                        </Animatable.View>          
                    </Modal>

                    <Modal transparent={true} visible={count} >
                        <Animatable.View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                        <Animatable.View style={styles.popup} animation="zoomIn">
                            <Text style={styles.titulo}>Adopcion Mascotas</Text>
                            <Separator />
                            <View>
                            <Text style={styles.ingreso}>Nombre:</Text>
                            <TextInput style={styles.escrito}
                                placeholder='Nombre'
                                onChangeText={changennombre}
                                value={nnombre}
                                
                            />
                            <Text style={styles.ingreso}>Mensaje:</Text>
                            <TextInput style={styles.escrito}
                                placeholder='Mensaje'
                                onChangeText={changemensaje}
                                value={nmensaje}
                                
                            />
                            </View>

                            <TouchableOpacity style={styles.poptouchsi} onPress = {() => {handlePetRequest(item1,setCount(false))}} >
                            <View style={{ marginLeft: 5 }} >
                                {/* <MaterialCommunityIcons name="dog" size={24} color="black" /> */}
                            </View>
                            <Text>  Registro </Text>
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
                        </Animatable.View>
                    </Modal>


{/*  termina pop up  */}
                    
                    </View>

    )
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    pets: store.requests.pets
})

export default connect(mapStateToProps,null)(Adoptions);