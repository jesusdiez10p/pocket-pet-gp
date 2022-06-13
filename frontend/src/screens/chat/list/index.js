//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import NavBarGeneral from '../../../components/general/navbar';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context'
import {Divider} from 'react-native-paper'
import ChatListItem from '../../../components/chat/list/item';
import { useSelector } from 'react-redux';
// create a component
const ChatScreen = () => {
  const chats = useSelector(state => state.chat.list)

  console.log(chats)
  const renderItem = ({item}) => {
    return(<ChatListItem chat={item} />)
  }

  return (
    <SafeAreaView style={styles.container} >
      <NavBarGeneral title={'CHATS'} leftButton={{display: false}}/>
      <Divider />
      <FlatList
        data ={chats}
        removeClippedSubviews
        renderItem={renderItem}
        keyExtractor={item => item.id}
        >
        <Text></Text>
      </FlatList>
    </SafeAreaView>
  );
};

//make this component available to the app
export default ChatScreen
;
