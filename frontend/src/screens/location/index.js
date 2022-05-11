import styles from "./styles";
import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import NavBarGeneral from "../../components/general/navbar";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MapScreens() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBarGeneral title={"MAPA"} />
      <Divider />

      <View style={styles.mapacontainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -12.08475657076254,
            longitude: -76.9710151910233,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: -12.08475657076254,
              longitude: -76.9710151910233,
            }}
            title="Perrito Perdido"
            description="Se me ha vuelto a perder el perro"
          >
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  {/* Necesito obtener el nombre del usuario que ha hecho la publicación, la descripción 
                    y la foto del perro */}
                  <Text style={styles.name}> Alejandro Arias</Text>
                  <Text> Se me ha perdio el perro otra ve</Text>
                  <Image
                    style={styles.imagebubble}
                    source={require("../../../assets/nd.png")}
                  />
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
}
