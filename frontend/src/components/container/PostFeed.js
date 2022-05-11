import React, { Component, useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Post } from "../presentation"
import firebase from 'firebase';
import moment from 'moment'
//import { ActivityIndicator } from 'react-native-paper';
import { connect, useDispatch } from "react-redux";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Initusuarios, clearData } from '../../redux/actions/post'
import { bindActionCreators } from 'redux';





//contenedor de todos los posts creados
function PostFeed(props) {
    const dispatch = useDispatch()
    const navigation= useNavigation()
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false)

    const fetchData = () => {
        dispatch(clearData());
        dispatch(Initusuarios());
        setIsFetching(false);
    }
    const onRefresh = () => {
        setIsFetching(true);
        fetchData()
    } 

    useEffect(() => {
        let posts = [];

        for (let i = 0; i < props.loadeds.length; i++) {
            const user = props.users[i]//.find(el=>el.uid==props.loadeds[i]);

            if (user !== undefined && user.posts !== undefined) {
                try {
                    posts = [...posts, ...user.posts]
                } catch (error) {
                    console.log("null post managed")
                }
            }
        }
        posts.sort(function (x, y) {
            return y.creation - x.creation;
        })
        //console.log(posts[0])
        setPosts(posts);

    }, [props.usersLoaded])

    //FullName
    //image

    //{moment(item.timestamp).fromNow}
    //me sirve para saber cuanto tiempo paso desde la publicacion hasta ahora
    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => (

                <Post
                    id={item.id}
                    user={item.user} //cambié esto para tener al usuario, si quieres el nombre del usuario le pones .FullName
                    tipo={item.tipo}
                    fecha={parseInt(item.creation.seconds)}
                    image={item.downloadUrl}
                    info={item.description}
                    userimage={item.user.Image}
                    navigation={navigation} //Para ir a otros perfiles
                    data={[item.description,item.collar,item.estatura,item.accesorios]}
                    
                />
            )}
            keyExtractor={item => item.id}
            extraData={posts}
            onRefresh={onRefresh}
            refreshing={isFetching}
        //showsVerticalScrollIndicator={false}
        />

    )
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    users: store.usersState.users,
    usersLoaded: store.usersState.usersLoaded,
    loadeds: store.loadeds.users
})

export default connect(mapStateToProps,null)(PostFeed);

