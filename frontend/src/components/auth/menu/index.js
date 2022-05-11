import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

export default function AuthMenu({
  authPage,
  setAuthPage,
  detailsPage,
  setdetailsPage,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.headerText}>
          {authPage == 0 ? "Iniciar Sesión" : "Registrarse"}{" "}
        </Text>
        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => setdetailsPage(true)}
        >
          <Feather name="user" size={24} color="black" />
          <Text style={styles.providerButtonText}>Use Email</Text>
          <View />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.containerBottomButton}
        onPress={() => (authPage == 0 ? setAuthPage(1) : setAuthPage(0))}
        // ^^ nos va a permitir saber si estamos en el modo iniciar sesion o crear cuenta ^^
      >
        {authPage == 0 ? (
          <Text>
            ¿No tienes una cuenta?
            <Text style={styles.bottomButtonText}> Creala Aqui</Text>
          </Text>
        ) : (
          <Text>
            ¿Ya tienes una cuenta?
            <Text style={styles.bottomButtonText}> Inicia Sesión Aqui</Text>
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
