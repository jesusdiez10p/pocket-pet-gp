import { saveMediaToStorage } from './random'
import firebase from 'firebase'
export const saveUserProfileImage = (image) => new Promise((resolve,reject) => {
    saveMediaToStorage(image, `profileImage/${firebase.auth().currentUser.uid}`).then((res) =>{
        firebase.firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .update({
            Image: res
        })
        .then(() => resolve())
        .catch(() => reject())
    })
})

export const saveUserField = (field, value) => new Promise((resolve,reject) => {

    let obj = {}
    obj[field] = value
    firebase.firestore()
    .collection('user')
    .doc(firebase.auth().currentUser.uid)
    .update(obj)
    .then(() => resolve())
    .catch(() => reject())
})

export const getUserById = (id) => new Promise((resolve,reject) => {
    firebase.firestore()
    .collection('user')
    .doc(id)
    .get()
    .then((snapshot) => {
        resolve(snapshot.exists?snapshot.data():null)
    })
    .catch(() => reject())
})