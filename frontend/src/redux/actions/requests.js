import firebase from "firebase";
import { combineReducers } from "redux";
import { CURRENT_SHELTER_PET_REQUESTS,USERS_PETS_DATA} from "../constants";
require('firebase/firestore')

export const showPetRequests= (petuid, uid=firebase.auth().currentUser.uid )=>(dispatch)=>{
    firebase.firestore()
    .collection('user')
    .doc(uid)
    .collection('Mascotas')
    .doc(petuid)
    .collection('Solicitud')
    .onSnapshot((snapshot)=>{
        let requests = snapshot.docs.map(doc=>{
            const data= doc.data()
            const id= doc.id    
            return{id, ...data}
        })

         //Si es el perfil del usuario
        dispatch({type: CURRENT_SHELTER_PET_REQUESTS, currentShelterPetRequests: requests})
        
    })
}

export function fetchPetsData(uid){
    return((dispatch,getState)=>{
        const found = getState().usersState.users.some(el => el.uid == uid);
        if (!found) {
        firebase.firestore()
        .collection('user')
        .doc(uid)
        .collection('Mascotas')
        .get()
        .then((snapshot)=>{
            
            let pets = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }   
            
                });
            dispatch({type: USERS_PETS_DATA, pets:pets})
            
    })}
})}

