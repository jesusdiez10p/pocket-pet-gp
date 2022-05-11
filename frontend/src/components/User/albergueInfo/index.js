import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "./styles";

export default function UserInfo({ user }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.avatar}>
          <Avatar.Icon style={{ height: 100, width: 100 }} icon={"account"} />
        </View>
      </TouchableOpacity>

      <View style={styles.infocontainer}>
        <Text style={styles.infotext}>{user?.FullName}</Text>
        <Text style={styles.infotext}>{user?.Description}</Text>
      </View>
    </View>
  );
}
