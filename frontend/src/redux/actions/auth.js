import firebase from "firebase";
import { showUserPets } from ".";
import { USER_STATE_CHANGE } from "../constants";
require("firebase/firebase-auth");

export const userAuthStateListener = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    //comprobar si esta logeado
    if (user) {
      dispatch(getCurrentUserData());
      dispatch(showUserPets(firebase.auth().currentUser?.uid));
    } else {
      dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true });
    }
  });
};

export const getCurrentUserData = () => (dispatch) => {
  firebase
    .firestore()
    .collection("user")
    .doc(firebase.auth().currentUser?.uid)
    .onSnapshot((res) => {
      if (res.exists) {
        return dispatch({
          type: USER_STATE_CHANGE,
          currentUser: res.data(),
          loaded: true,
        });
      }
    });
};

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });

export const logout = () => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => resolve());
  }).catch(() => {
    reject();
  });
export const register = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
