import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";



export default function FavoriteScreen() {
    const posts = useSelector((state) => state.userState.favs)
    const navigation = useNavigation()
    
    return (
        
        <View style={styles.containerGallery}>
            <FlatList
                numColumns={3}
                horizontal={false}
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <View style={styles.containerImage}>
                        <TouchableOpacity onPress={() => {
                            
                            const data = {
                                user: item.user,
                                fecha: parseInt(item.fecha),
                                image: item.image,
                                info: item.info,
                                userimage: item.userImage,
                                data: [item.description, item.collar, item.estatura, item.accesorios]
                            }
                            
                            //console.log(data)

                            navigation.navigate('post', { data })

                            //console.log(item)

                        }}>
                            <Image style={styles.image}
                                source={{ uri: item.image }}
                            />
                        </TouchableOpacity>
                    </View>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerGallery: {
        flex: 1
    },
    containerImage: {
        flex: 1 / 3
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    }
})