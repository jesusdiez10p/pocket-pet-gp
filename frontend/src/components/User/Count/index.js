import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import { Feather } from '@expo/vector-icons';
import styles from "./styles";
import * as API from '../../../redux/actions/pet'
import firebase from "firebase";
import { register, login } from "../../../redux/actions";
import { logout } from "../../../redux/actions";
import { fetchUserFav } from "../../../redux/actions";

export default function Count({ user, pets }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch(); //para llamar a redux

  const [count, setCount] = useState(false);
  const [nnombre, changennombre] = React.useState(null);
  const [nraza, changenraza] = React.useState(null);
  const [nedad, changenedad] = React.useState(null);


  // INICIO | GESTION DE LA GALERIA Y SELECCION DE IMAGEN --------------------------

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        console.log("Cierre de sesión correcto");
      })
      .catch(() => {
        console.log("Cierre de sesión fallido");
      });
  };

  const handleRegister = () => {
    dispatch(register(email, password))
      .then(() => {
        console.log("Registro correcto");
      })
      .catch(() => {
        console.log("Registro fallido");
      });
  };
  const favoritos =()=>{
    dispatch(fetchUserFav())
  }


  const navigation = useNavigation();
  const Separator = () => <View style={styles.separator} />;
  const auth = useSelector((state) => state.auth.currentUser);

  var Tipo = String(user?.TipoUsuario);
  if (Tipo == "Albergue") {
    var info = ["Animales Albergados", "Adopciones"];
  } else if (Tipo == "admin") {
    var info = ["Editar admin ", "Prueba 2"]
  }
  else {
    var info = ["Mascotas Totales", "Buscando Mascotas"];
  }

  if (pets == null) { // Hay error si se quita
    pets = []
  }

  return (
    <View style={styles.countercontainer}>
      <Animatable.View animation="fadeInRightBig" style={styles.counterPet}>
        <Text style={styles.counterNumberText}>{pets.length}</Text>
        <Text style={styles.counterLabelText}>{info[0]}</Text>
      </Animatable.View>
      <Separator />

      <Animatable.View animation="fadeInRightBig" style={styles.counterPet}>
        {user?.BuscaMascota ? (
          <Text style={styles.counterNumberText}>Si</Text>
        ) : (
          <Text style={styles.counterNumberText}>No</Text>
        )}

        <Text style={styles.counterLabelText}>{[info[1]]}</Text>
      </Animatable.View>
      <Separator />
      {String(user?.uid) == String(auth?.uid) ? ( //Que solo muestre el panel de edición si es el usuario dueño del perfil (falta probar)
        <TouchableOpacity
          style={styles.touchablePerfil}
          onPress={() => navigation.navigate("edituser")}
        >
          <Animatable.Text
            animation="flash"
            iterationCount="infinite"
            duration={8000}
          >
            Editar
          </Animatable.Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <View>
        {Tipo == "admin" ?
          <View>
            <TouchableOpacity
              style={styles.touchablePerfil}
              onPress={() => {
                setCount(true)
              }}
            >
              <Animatable.Text
                animation="flash"
                iterationCount="infinite"
                duration={8000}
              >
                Crear Albergue
              </Animatable.Text>
            </TouchableOpacity>
          </View> :
          <View >
          </View>}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
        <TouchableOpacity
          style={styles.touchablePerfil}
          onPress={() => {
            API.signOut()
          }}
        >
          <Animatable.Text
            animation="flash"
            iterationCount="infinite"
            duration={8000}
          >
            Cerrar Sesion
          </Animatable.Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: "center" }}
          onPress={()=>{
            favoritos()
            navigation.navigate('favorites')
          }}
        >
          <Feather name="save" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Modal transparent={true} visible={count} >
        <Animatable.View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <Animatable.View style={styles.popup} animation="zoomIn">
            <Text style={styles.titulo}>Registrar Albergue</Text>
            <Separator />
            <View>
              <Text style={styles.ingreso}>Correo:</Text>
              <TextInput style={styles.escrito}
                //placeholder='ingresar nombre'
                onChangeText={(text) => setEmail(text)}
              />
              <Text style={styles.ingreso}>Contrasena:</Text>
              <TextInput style={styles.escrito}
                //placeholder='ingresar nombre'
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <Separator />
            <TouchableOpacity style={styles.poptouchsi}
              onPress={() => handleRegister()}>

              <View style={{ marginLeft: 5 }} >
                {/* <MaterialCommunityIcons name="dog" size={24} color="black" /> */}
              </View>
              <Text> Confirmar Registro </Text>
              <View style={{ marginRight: 5 }}>
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.poptouchno} onPress={() => { setCount(false) }}>
              <View style={{ marginLeft: 5 }}>
                {/* <MaterialCommunityIcons name="dog" size={24} color="black" /> */}
              </View>
              <Text> Cancelar  Registro </Text>
              <View style={{ marginRight: 5 }}>

              </View>
            </TouchableOpacity>
          </Animatable.View>
        </Animatable.View>
      </Modal>
    </View>
  );
}
