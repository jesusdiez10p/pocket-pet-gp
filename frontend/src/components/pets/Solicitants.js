import React, { useEffect,useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBarGeneral from '../general/navbar'
import { showPetRequests } from '../../redux/actions'
import { useSelector,useDispatch } from 'react-redux'

export default function ViewPetSolicitants({route}) {
    const pet= route.params.pet.item
    const dispatch = useDispatch()
    var petuid= pet.id

    const [quantitySol, setquantitySol] = useState(0)


    useEffect(() => {
        dispatch(showPetRequests(petuid))
    }, [])
    
    var currentShelterPetRequests= useSelector((state) => state.requests.currentShelterPetRequests);
    
    
    return (
            <SafeAreaView style={styles.container}>
                <NavBarGeneral title={'SOLICITUDES: '+pet.Nombre}/>
                <FlatList
                data={currentShelterPetRequests}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>{
                    return(
                        <View>
                            <View>
                                <View style={styles.InfoSolicitants}>
                                    <Text style={styles.DetalleSolicitante}>ID Solicitante: </Text>
                                    <Text >{item.idPropuesta}</Text>
                                    <Text style={styles.DetalleSolicitante}>Nombre: </Text>
                                    <Text >{item.nombre}</Text>
                                    <Text style={styles.DetalleSolicitante}>Mensaje: </Text>
                                    <Text>{item.mensaje}</Text>
                                    <Text style={styles.DetalleSolicitante}>Celular: </Text>
                                    <Text>{item.celular}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}

                />
            </SafeAreaView>
        
    )
}
