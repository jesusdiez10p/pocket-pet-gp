import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Count({ user, pets }) {
  const navigation = useNavigation();

  return (
    <View style={styles.countercontainer}>
      <View style={styles.counterPet}>
        <Text style={styles.counterNumberText}>{pets.length}</Text>
        <Text style={styles.counterLabelText}>Mascotas Albergadas</Text>
      </View>
      <View style={styles.counterPet}>
        {user?.BuscaMascota ? (
          <Text style={styles.counterNumberText}>Si</Text>
        ) : (
          <Text style={styles.counterNumberText}>No</Text>
        )}
        <Text style={styles.counterLabelText}>
          Se Aceptan Peticiones de Adopción
        </Text>
      </View>

      <TouchableOpacity
        style={styles.touchablePerfil}
        onPress={() => navigation.navigate("edituser")}
      >
        <Text>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
