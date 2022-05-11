import React from 'react'
import { View, Text } from 'react-native'

export default function PetList(pets) {
    return (
        <View>
            <FlatList style={styles.petsView}
                data={pets}
                vertical
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
                        />
                        <View style={styles.datos}>
                            <View style={styles.contenedordata}>
                            <Text style={styles.Text}> { "Nombre:"}
                            </Text>
                            <Text style={styles.Text2}>
                                { item.Nombre}
                            </Text>
                        </View>
                            <View style={styles.contenedordatamedio}>
                            <Text style={styles.Text}>
                                { "Raza:"}
                            </Text>
                            <Text style={styles.Text2}>
                                { item.Raza}
                            </Text>
                        </View>
                            <View style={styles.contenedordatamedio}>
                            <Text style={styles.Text}>
                                { "Edad:"}
                            </Text>
                            <Text style={styles.Text2}>
                                { item.Edad}
                            </Text>
                        </View>
                        <View  style={{alignItems:"center"}}>
                            <View style={styles.conte}>

                                <Switch 
                                trackColor={{ true: "#708090", false: "#c94242" }}
                                thumbColor={item.Estado ?  "#69c77f":"#6b0a0a" }
                                style={styles.switch}
                                value={item.Estado}
                                
                                onValueChange={  () =>{
                                    //await setPetid(item.id)
                                    //await setEstado(item.Perdido)
                                    handleStateChange(item.id, item.Estado)}}
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
                </View>
    )
}
