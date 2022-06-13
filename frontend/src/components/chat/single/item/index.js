import React from 'react'
import { View, Text, Image } from 'react-native'
import { useUser } from '../../../../hooks/useUser'
import styles from './style'
import firebase from 'firebase'
import generalStyles from '../../../../styles/generalStyles'
const ChatSingleItem = ({ item }) => {
    const { data: userData, isLoading } = useUser(item.creator)

    if (isLoading) {
        return <></>
    }

    const isCurrentUser = item.creator === firebase.auth().currentUser.uid
    return (
        <View style={isCurrentUser ? styles.containerCurrent : styles.containerOther}>
            <Image style={generalStyles.avatarSmall} source={{ uri: userData.Image }} />
            <View style={isCurrentUser ? styles.containerTextCurrent : styles.containerTextOther}>
                <Text style={styles.text}>{item.message}</Text>
            </View>
        </View>
    )
}

export default ChatSingleItem