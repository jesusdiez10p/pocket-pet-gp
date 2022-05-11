import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import styles from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
const Separator = () => (
  <View style={styles.separator} />
);



export default function Bar({ setuserPosts }) {
  return (
    <Animatable.View animation="flipInY" style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() =>
            setuserPosts(true)
          }

        >
          <AntDesign name="plussquare" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            setuserPosts(false)
          }
        >
          <FontAwesome name="paw" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  )
}
