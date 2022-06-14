import firebase from 'firebase'
import { saveMediaToStorage } from '../../services/random';
require('firebase/firebase-auth')
require('firebase/firestore')
import uuid from 'uuid-random'
import { USERS_DATA_STATE_CHANGE, USERS_POSTS_STATE_CHANGE, USER_POST_STATE_CHANGE, USER_STATE_CHANGES, CLEAR_DATA, CURRENT_USERS, USER_FAV_STATE_CHANGE, CLEAR_FAVS } from '../constants';
import { fetchPetsData } from '.';

export const createPost = (description, picture, fecha, situacion, estatura, accesorios, collar, tipo, petSelected) => dispatch => new Promise((resolve, reject) => {
    if (picture != null) {
        saveMediaToStorage(picture, `post/${firebase.auth()
            .currentUser.uid}/${uuid()}`)
            .then((downloadUrl) => {
                firebase.firestore()
                    .collection('posts')
                    .doc(firebase.auth().currentUser.uid)
                    .collection('userPosts')
                    .add({
                        //creator: firebase.auth().currentUser.uid,
                        downloadUrl,
                        description,
                        fecha,
                        situacion,
                        estatura,
                        accesorios,
                        collar,
                        tipo,
                        commentsCount: 0,
                        creation: firebase.firestore.FieldValue.serverTimestamp() //Esto recuperará el "momento" del Firebase
                    })
                    .then(() => resolve())
                    .catch(() => reject())
            })
            .catch(() => reject())
    }
    //ESTGO ES SOLO PARA PROBAR EL POST2 --< SE MODIFICARA LUEGO
    else {
        firebase.firestore()
            .collection('posts')
            .doc(firebase.auth().currentUser.uid)
            .collection('userPosts')
            .add({
                //creator: firebase.auth().currentUser.uid,
                downloadUrl: '',
                description,
                fecha,
                situacion,
                estatura,
                accesorios,
                collar,
                tipo,
                commentsCount: 0,
                petSelected,
                creation: firebase.firestore.FieldValue.serverTimestamp() //Esto recuperará el "momento" del Firebase
            })
            .then(() => resolve())
            .catch(() => reject())
    }
}
);
//--------------------------------------------//
export const createFavorite = (id, user, userImage, image, fecha, info, descripcion, collar, estatura, accesorios) => dispatch => new Promise((resolve, reject) => {
    firebase.firestore()
        .collection('posts')
        .doc(firebase.auth().currentUser.uid)
        .collection('userFavorites')
        .doc(id)
        .set({
            user,
            userImage,
            image,
            fecha,
            info,
            descripcion,
            collar,
            estatura,
            accesorios
        })
        .then(() => resolve())
        .catch(() => reject())
}
);

//--------------------------------------------//
export function clearData() {
    return ((dispatch) => {
        dispatch({ type: CLEAR_DATA })
    })
}
///-------------------------------------------//
export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("user")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispatch({ type: USER_STATE_CHANGES, currentUser: snapshot.data() })
                } else {
                    console.log('doesnt exist')
                }
            })
    })
}
//funcion para obtener las publicaciones del usuario actual
export function fetchUserPost() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("posts")
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                console.log("posts;",posts)
                dispatch({ type: USER_POST_STATE_CHANGE, posts })
            })
    })
}
//----------------------------------------------------------------------//
export function fetchUserFav() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("posts")
            .doc(firebase.auth().currentUser.uid)
            .collection("userFavorites")
            .get()
            .then((snapshot) => {
                let favs = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                //console.log(favs)
                //dispatch({ type: CLEAR_FAVS })
                dispatch({ type: USER_FAV_STATE_CHANGE, favs })
            })
    })
}
//----------------------------------------------------------------------//
export function Initusuarios() {
    return ((dispatch) => {
        firebase.firestore()
            .collection('user')
            .onSnapshot((snapshot) => {
                let users = snapshot.docs.map(doc => {
                    const id = doc.id;
                    return id
                })

                dispatch({ type: CURRENT_USERS, users })
                for (let i = 0; i < users.length; i++) {
                    dispatch(fetchUsersData(users[i], true))                    
                }
            });
        firebase.firestore()
            .collection('user')
            .where('TipoUsuario','==','Albergue')
            .onSnapshot((snapshot) => {
                let users = snapshot.docs.map(doc => {
                    const id = doc.id;
                    return id
                })
                
                for (let i = 0; i < users.length; i++) {
                    dispatch(fetchPetsData(users[i]))
                    
                }
        })
    })
}


//--------------------------------------------------------------------//
export function fetchUsersData(uid, getPosts) {
    return ((dispatch, getState) => {
        const found = getState().usersState.users.some(el => el.uid == uid);
        if (!found) {

            firebase.firestore()
                .collection('user')
                .doc(uid)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        let user = snapshot.data();
                        user.uid = snapshot.id;
                        dispatch({ type: USERS_DATA_STATE_CHANGE, user });
                    } else {
                        console.log('doesnt exist')
                    }
                })
            if (getPosts) {
                dispatch(fetchUsersPosts(uid))
            }
        }
    })

}

export function fetchUsersPosts(uid) {

    return ((dispatch, getState) => {
        firebase.firestore()
            .collection('posts')
            .doc(uid)
            .collection('userPosts')
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                const uid = snapshot.docs[0].ref.path.split('/')[1];
                const user = getState().usersState.users.find(el => el.uid == uid)
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data()
                    const id = doc.id
                    return { id, ...data, user }
                })

                //console.log(posts)
                dispatch({ type: USERS_POSTS_STATE_CHANGE, posts, uid })
            }).catch((error) => {

            })
    })
}
