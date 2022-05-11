import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userAuthStateListener } from "../../redux/actions";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../../screens/auth";
import HomeScreen from "../home";
import SavePostScreen from "../../screens/savePost";
import EditUserScreen from "../../screens/userEdit";
import EditUserFieldScreen from "../../screens/userEdit/field";
import UserScreen from "../../screens/user";
import Post from '../../components/presentation/Post'
import CameraScreen from "../../screens/camera";
import PetLost from "../../screens/petLost";
import ViewPetSolicitants from "../../components/pets/Solicitants";
import FavoriteScreen from "../../screens/favoritePosts";
const Stack = createStackNavigator();

export default function Route() {
  const currentUserObj = useSelector((state) => state.auth); //use selector allows us to access the data that comes from redux
  const dispatch = useDispatch();
  let useralbergue = true; //probando nueva interfaz del albergue
  useEffect(() => {
    dispatch(userAuthStateListener());
  }, []);
  //console.log(currentUserObj);

  if (!currentUserObj.loaded) {
    //cada que el usuario no haya cargado simplemente que no vaya a Route
    return <View></View>;
  }
  return (
    //CREACION DE CONTNEDOR PARA BARRITA
    <NavigationContainer>
      <Stack.Navigator>
        {currentUserObj.currentUser == null ? (
          <Stack.Screen
            //SE MUESTRA AUTENTICACION
            name="auth"
            component={AuthScreen}
            options={{ headerShown: false }}
            
          />
        ) : //SE MUESTRA HOME_SCREEN
        
          <>
            <Stack.Screen
              name="home"
              initialParams={{usuario:currentUserObj.currentUser}}
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="savepost"
              component={SavePostScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="edituser"
              component={EditUserScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="edituserfield"
              component={EditUserFieldScreen}
              options={{ headerShown: false }}
              
            />
            <Stack.Screen
              name="solicitantsview"
              component={ViewPetSolicitants}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="post"
              component={Post}
              options={{headerShown:true}}
            />
              
            <Stack.Screen
              name="camerapost"
              component={CameraScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="petpost"
              component={PetLost}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UsersProfile"
              component={UserScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="favorites"
              component = {FavoriteScreen}
              options = {{headerShown : true}}
            />
          </>
          
}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
