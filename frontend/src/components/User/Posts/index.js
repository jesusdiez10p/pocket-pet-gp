import React from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Post } from '../../presentation'



export default function Posts({ posts }) {
    const navigation = useNavigation()
    const currentUser = useSelector((state) => state.userState.currentUser)
    const vista = React.createRef();
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
                                user: currentUser.FullName,
                                tipo: item.tipo,
                                fecha: parseInt(item.creation.seconds),
                                image: item.downloadUrl,
                                info: item.description,
                                userimage: currentUser.Image ,
                                data:[item.description, item.collar, item.estatura, item.accesorios]
                            }
                            
                            //console.log(data)
                            
                            navigation.navigate('post',{data})
                            
                            //console.log(item)

                        }}>
                            <Image style={styles.image}
                                source={{ uri: item.downloadUrl }}
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