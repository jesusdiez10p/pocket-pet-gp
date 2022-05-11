import React, { Component } from "react";
import {
  View,
  Image,
  Button,
  StyleSheet,
  ToastAndroid,
  Dimensions,
  Platform,
} from "react-native";
import { API_KEY } from "../../config/index";
import MapView from "react-native-maps";
import Geocoder from "react-native-geocoder";

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        latitude: -12.08475657076254,
        longitude: -76.9710151910233,
        latitudeDelta: 0.0122,
        longitudeDelta:
          (Dimensions.get("window").width / Dimensions.get("window").height) *
          0.0122,
      },
      locationChosen : false,
      marginBottom : 1,
      currentAddress : '',
      mapType: 'standard',
    }
  }

  componentDidMount() {
    this.handleUserLocation();
    setTimeout(() => this.setState({ marginBottom: 0 }), 100);
  }

  handleUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // alert(JSON.stringify(pos));
        this.map.animateToRegion({
          ...this.state.initialRegion,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });

        this.setState({
          initialRegion: {
            ...this.state.initialRegion,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
          locationChosen: true,
        });
        this.getAddress(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        console.log(err);
        alert("Ha pasao algo malo con tu ubicacion");
      }
    );
  };

  getAddress = async (lat, lng) => {
    await Geocoder.fallbackToGoogle(API_KEY);
    try {
      let res = await Geocoder.geocodePosition({ lat, lng });
      let addr = res[0].formattedAddress;

      this.setState({
        currentAddress: addr,
      });
      {
        this.mark.showCallout();
      }
    } catch (err) {
      alert(err);
    }
  };
  onChangeValue = (initialRegion) => {
    ToastAndroid.show(
      JSON.stringify(initialRegion),ToastAndroid.SHORT)
    this.setState({
      initialRegion
    });
  };

  render() {
    let marker = (
      <View
        style={{
          left: "50%",
          top: "50%",
          marginLeft: -24,
          marginTop: -48,
          position: "absolute",
        }}
      >
        <MapView.Marker
          style={{ height: 48, width: 48 }}
          coordinate={this.state.initialRegion}
          title={this.state.currentAddress}
          ref={(ref) => (this.mark = ref)}
        >
          <Image
            style={{ height: 48, width: 48 }}
            source={require("../../../assets/pin.png")}
          />
        </MapView.Marker>
      </View>
    );
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1, marginBottom: this.state.marginBottom }}
            showsMyLocationButton={true}
            showsPointsOfInterest={true}
            showsUserLocation={true}
            followsUserLocation={true}
            mapType={this.state.mapType}
            initialRegion={this.state.initialRegion}
            onRegionChangeComplete={this.onChangeValue}
            ref={(ref) => (this.map = ref)}
          >
            {marker}
          </MapView>

          <View
            style={{
              left: "50%",
              top: "50%",
              marginLeft: -24,
              marginTop: -48,
              position: "absolute",
            }}
          >
            <Image
              style={{ height: 48, width: 48 }}
              source={require("../../../assets/pin.png")}
            />
          </View>
        </View>
        <View>
          <Button title="Vista de Satélite" onPress={()=> this.setState({ mapType: 'satellite'})} />
          <Button title="Vista Estándar" onPress={()=> this.setState({mapType: 'standard'})} />

        </View>
      </View>
    );
  }
}
