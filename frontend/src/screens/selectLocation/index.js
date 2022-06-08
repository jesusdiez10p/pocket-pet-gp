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


export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

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
      </View>
    );
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          

          
        </View>
        <View>
          
        </View>
      </View>
    );
  }
}
