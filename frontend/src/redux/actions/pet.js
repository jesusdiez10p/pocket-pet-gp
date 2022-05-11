import firebase from "firebase";
import { CURRENT_USER_PETS, USER_STATE_CHANGE,OTHER_USER_PETS } from "../constants";
import { saveMediaToStorage } from '../../services/random';
require('firebase/firestore')

export const showUserPets = (uid=firebase.auth().currentUser?.uid) => (dispatch) => {
    firebase.firestore()
    .collection('user')
    .doc(uid)
    .collection('Mascotas')
    .onSnapshot((snapshot)=>{
        let pets = snapshot.docs.map(doc=>{
            const data= doc.data()
            const id= doc.id    
            return{id, ...data}
        })

        if (uid==firebase.auth().currentUser?.uid) { //Si es el perfil del usuario
          dispatch({type: CURRENT_USER_PETS, currentUserPets: pets, otherUserPets:pets})
        }
        else {
          dispatch({type: OTHER_USER_PETS, otherUserPets:pets})
        }
    })
}


export const PetStateChange = (petid, estado) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
    .firestore()
    .collection('user')
    .doc(firebase.auth().currentUser?.uid)
    .collection('Mascotas')
    .doc(petid)
    .update({
        'Estado' : !estado ,
    })
    .then(() => {
        resolve();
      })
      .catch(() => {
          
        reject();
      });
  });


  
export const PetPostChange = (petid, estado) => (dispatch) =>
new Promise((resolve, reject) => {
  firebase
  .firestore()
  .collection('user')
  .doc(firebase.auth().currentUser.uid)
  .collection('Mascotas')
  .doc(petid)
  .update({
      'estado' : !estado ,
  })
  .then(() => {
      resolve();
    })
    .catch(() => {
        
      reject();
    });
});

export const createUserPet = async(Nombre,Raza,Edad,uid=firebase.auth().currentUser.uid) => 
{const response = await firebase.firestore()
  .collection('user')
  .doc(uid)
  .collection('Mascotas')
  .add({
    idOwner: uid,
    Nombre,
    Estado: false,
    Edad,
    Raza
  })
  return response
}

export async function signOut() {
  firebase.auth().signOut().then(() =>{
    this.setState({
     user:null
    })
    this.props.history.push("/");
    }).catch(function(error) {
    // An error happened.
    });
 }

export async function addSolicitud(uid, idMascota, nombre, mensaje){
  firebase
  .firestore()
  .collection('user')
  .doc(uid)
  .collection('Mascotas')
  .doc(idMascota)
  .collection('Solicitud')
  .add({
    idPropuesta: firebase.auth().currentUser.uid,
    nombre,
    mensaje
  })
}

/*export const editTipo = async(uid=firebase.auth().currentUser.uid) => 
{const response = await firebase.firestore()
  .collection('user')
  .doc(uid)
  .add({
    TipoUsuario: 'Albergue',
  })
  return response
}*/

