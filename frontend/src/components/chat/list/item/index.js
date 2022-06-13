import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useUser } from '../../../../hooks/useUser'
import firebase from 'firebase'
import styles from '../item/style'
import { useNavigation } from '@react-navigation/native'

const ChatListItem = ({chat}) => {
    const {data: userData, isLoading} = useUser(chat.members[0] === firebase.auth().currentUser.uid? chat.members[1]: chat.members[0])
    if (isLoading) {
      return <></>
  }
    const navigation = useNavigation()
    return (
    <TouchableOpacity style={styles.container}
      onPress={() => navigation.navigate('chatSingle',{chatId: chat.id})}>
        <Image style={styles.image} source={{uri: userData?userData.Image:''}}></Image>
        <View style={{flex:1}}>
          <Text style={styles.userDisplayName}>{userData?userData.FullName:''}</Text>
          <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
        </View>
          <Text style={styles.date}>{chat.lastUpdate? new Date(chat.lastUpdate.seconds * 1000).toISOString().slice(0,10): 'Now'}</Text>
    </TouchableOpacity>
  )
}

export default ChatListItem