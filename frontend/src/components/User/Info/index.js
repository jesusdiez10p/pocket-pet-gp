import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "./styles";
import * as Animatable from 'react-native-animatable';

const Separator = () => (
  <View style={styles.separator} />
);
const Separator2 = () => (
  <View style={styles.separator2} />
);

export default function UserInfo({ user }) {
  var Tipo = String(user?.TipoUsuario)
  return (
    <View style={styles.container}>

      <TouchableOpacity>

        <View>
          <Animatable.View animation="bounceIn" style={styles.imageViewContainer}>
            <Animatable.Image animation="bounceIn" style={styles.image} source={{ uri: user?.Image }} />
          </Animatable.View>
        </View>

      </TouchableOpacity>
      <Separator />
      <Animatable.View animation="fadeInLeftBig" style={styles.infocontainer}>
        <Text style={styles.infotext}>{user?.FullName}</Text>
        <Separator2 />
        {Tipo == 'Albergue' ?
          <></> :
          <>
            <Text style={styles.infotext}>Edad: {user?.Age}</Text>
            <Separator2 />
          </>}
        <Text style={styles.infotext}>{user?.Description}</Text>
      </Animatable.View>
    </View>
  );
}
