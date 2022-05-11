import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./style";
import { useDispatch } from "react-redux";
import { register, login } from "../../../redux/actions";
export default function AuthDetails({ authPage, setdetailsPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorReg, seterrorReg] = useState(false)

  const dispatch = useDispatch(); //para llamar a redux

  const handleLogin = () => {
    dispatch(login(email, password))
      .then(() => {
        console.log("Inicio de sesión correcto");
      })
      .catch(() => {
        console.log("Inicio de sesión fallido");
      });
  };

  const handleRegister = () => {
    dispatch(register(email, password))
      .then(() => {
        console.log("Registro correcto");
      })
      .catch(() => {
        seterrorReg(true)
        console.log("Registro fallido");
      });
  };

  return (

    
    <View style={styles.container}>


      <TouchableOpacity onPress={() => setdetailsPage(false)}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>


      {errorReg? 
      <Text style={{ backgroundColor: "#f21b1b70"}}>No se cumple con los parámetros indicados.</Text>:
      <></>}
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.TextInput}
        placeholder="Email"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.TextInput}
        secureTextEntry
        placeholder="Contraseña"
      />

      <View >
        {authPage == 0? 
          <View>

          </View> : 
        <TextInput style={styles.TextInput}
          secureTextEntry
          placeholder = "Confirmar contrasena">
        </TextInput>}
      </View>

    
      <TouchableOpacity
        style={styles.button}
        onPress={() => (authPage == 0 ? handleLogin() : handleRegister())}
      >
        <Text style={styles.buttonText}>
          {" "}
          {authPage == 0 ? "Iniciar Sesión" : "Crear cuenta"}{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
