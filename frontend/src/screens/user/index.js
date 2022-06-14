import React, { Component, useEffect, useState } from "react";
import {
  Text,
  View,
} from "react-native";
import Icon from "react-native-ico-material-design";
import styles from "./styles";
import UserInfo from "../../components/User/Info";
import UserCount from "../../components/User/Count";
import UserPosts from "../../components/User/Posts";
import UserBar from "../../components/User/Bar";
import UserPets from "../../components/User/Pets";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPost, showUserPets } from "../../redux/actions";

export default function UserScreen({route}) {

 const dispatch= useDispatch()
 
  const posts = useSelector((state)=>state.userState.posts)
  const [userPosts, setuserPosts] = useState(false);
  var currentUser = useSelector((state) => state.auth.currentUser);

  if (route.params!=null) {
    currentUser=route.params.OtherUser
    useEffect(() => {
    dispatch(showUserPets(currentUser.uid))

  }, []);
  var currentUserPets = useSelector((state) => state.pets.otherUserPets);
  }
  else{
    

    var currentUserPets = useSelector((state) => state.pets.currentUserPets);
  }
  
 

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <UserInfo user={currentUser} />
        <UserCount user={currentUser} pets={currentUserPets} />
      </View>
      {String(currentUser?.TipoUsuario) == 'Albergue' ?
        <></> :
        <UserBar setuserPosts={setuserPosts} style={styles.Bar} />}

      <View style={styles.PPContainer}>

        {userPosts ? <UserPosts posts={posts}/> : <UserPets user={currentUser} pets={currentUserPets} />}
      </View>
    </View>
  );


}