import firebase from 'firebase'
require('firebase/firebase-storage')

// media -> uri de la (FOTO)
// path -> Ruta en FireStorage
export const saveMediaToStorage = (media, path) => new Promise((resolve, reject) => {
    
    //fileRed --> donde se guardara el archivo Media
    const fileRef = firebase.storage().ref().child(path)
    fetch(media) //descargamos el archivo multimedia del dispositivo del usuario
    .then(response => response.blob())  //blob = forma binaria del formato en que depslegamos una imagen.
    .then(blob => fileRef.put(blob))    //enviamos el archivo a fstorage  (Se craga)
    .then(task => task.ref.getDownloadURL())  // obtenemos el URL de descarga
    .then(downloadUrl => resolve(downloadUrl)) // Resolvemos la promesa uilizando el URL <-- Lo recibimos del Res de Post.js
    .catch(() => reject())
});