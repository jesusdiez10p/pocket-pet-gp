import React, { Component, userState } from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather, FontAwesome, Entypo } from "@expo/vector-icons";
import CameraScreen from "../../screens/camera";
import MainScreen from "../../screens/feed";
import MapScreen from "../../screens/selectLocation";
import PetScreen from "../../screens/pets";
import UserScreen from "../../screens/user";
import { useSelector } from "react-redux";
import AddScreen from "../../screens/add";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchUser,
  fetchUserPost,
  Initusuarios,
  clearData,
  fetchUserFav
} from "../../redux/actions";
const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
  return <View></View>;
};

export class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.clearData();
    this.props.fetchUser();
    this.props.fetchUserPost();
//    this.props.fetchUserFav();
    this.props.Initusuarios();
  }

  render() {
    TipoUsuario = this.props.route.params.usuario.TipoUsuario;
    return (
      //BARRA DE NAVEGACION
      <Tab.Navigator
        barStyle={{ backgroundColor: "black" }}
        initialRouteName="Feed"
      >
        {
          //BotonBarra - pantalla Feed
        }
        <Tab.Screen
          name="Feed"
          component={MainScreen} //ACA LE DECIMOS QUE PANTALLA QUIERO QUE MUESTRE
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        {
          //BotonBarra - pantalla Location
        }
        <Tab.Screen
          name="Location"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="location-pin" size={24} color={color} />
            ),
          }}
        />
        {
          //BotonBarra - pantalla de Tomar/Grabar Nuevo
        }

        {TipoUsuario == "Albergue" ? (
          <></>
        ) : (
          <Tab.Screen
            name="Add"
            component={AddScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="plus-square" size={24} color={color} />
              ),
            }}
          />
        )}
        {
          //BotonBarra - pantalla de Perros
        }
        <Tab.Screen
          name="Pets"
          component={PetScreen} //Usar este para visualizar
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="paw" size={24} color={color} />
            ),
          }}
        />
        {
          //BotonBarra - pantalla de Usuario
        }
        <Tab.Screen
          name="Me"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    { fetchUser, fetchUserPost, Initusuarios, clearData, fetchUserFav },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchProps)(HomeScreen);
