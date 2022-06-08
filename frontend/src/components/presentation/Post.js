import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Share, Modal, FlatList, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import config from '../../config';
import {connect, useDispatch} from 'react-redux'
import moment from 'moment'
import { FontAwesome } from '@expo/vector-icons';
import { createFavorite } from '../../redux/actions';
import { bindActionCreators } from "redux";
const deviceHeight = Dimensions.get('window').height

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screenWidth: Dimensions.get("window").width,
            show: false,

        };
        

    }
    
    renderSeparator = () => {
        return (
            <View
                style={{
                    opacity: 0.1,
                    backgroundColor: '#182E44',
                    height: 1
                }} />
        )
    }
    handleFavorite = () => {  
        ToastAndroid.show('Guardado en Favoritos', ToastAndroid.SHORT);
        this.props.createFavorite(this.props.id,this.props.user.FullName,
            this.props.userimage,this.props.image, this.props.fecha,
            this.props.info,this.props.data[0],this.props.data[1],
            this.props.data[2],this.props.data[3])
        
    }

    render() {
        
        try {
            const params = this.props.route.params.data
            this.props = params
        } catch (error) {
            console.log()
        }
        const imagePubUri = this.props.image
        const data = this.props.data
        //crear referencia al popup      
        const onShare = async () => {
            try {
                const result = await Share.share({
                    message:
                        this.props.image,
                });
                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                        // shared with activity type of result.activityType
                    } else {
                        // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
            } catch (error) {
                alert(error.message);
            }

        };

        let { show } = this.state

        
        
        return (
            <View style={{ flex: 1, width: 100 + '%' }} >
                {/*esto es la barrita del usuario*/}
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={styles.userPic}
                            source={{
                                uri:
                                    this.props.userimage
                            }} />
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('UsersProfile', { OtherUser: this.props.user })}>
                            <Text style={{ marginLeft: 10 }} >{this.props.user.FullName}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }} >
                        {/*aqui se encuentra el estado de la publicacion PERDIDO o EN ADOPCION*/}

                        <Text style={{ paddingTop: 15, marginRight: 5 }} >{moment.utc(this.props.fecha * 1000).fromNow()}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onLongPress={() => {
                        alert("ubicación");
                    }}
                >
                    <Image
                        style={{ width: this.state.screenWidth, height: 400 }}
                        source={{
                            uri: imagePubUri
                        }}
                    />
                </TouchableOpacity>

                <View style={styles.iconBar}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ show: true })
                        }}>
                        <Image resizeMode="stretch" style={[styles.icons, { height: 35, width: 35 }]} source={config.images.dogIcon} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={() => {
                            alert("Comentarios");
                        }}>
                        <Image resizeMode="stretch" style={[styles.icons, { height: 35, width: 35 }]} source={config.images.chatIcon} />
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => {
                            onShare()
                        }}>
                        <Image resizeMode="stretch" style={[styles.icons, { height: 35, width: 35 }]} source={config.images.arrowIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 5 }}
                        onPress={() => {
                            this.handleFavorite()
                        }}>
                        <FontAwesome name="bookmark-o" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.commentBar}>
                    <Text style={{ marginRight: 10, marginLeft: 10 }} >{this.props.info}</Text>
                </View>

                <Modal animationType={'fade'}
                    transparent={true}
                    visible={show}
                    onRequestClose={() => { this.setState({ show: false }) }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            flex: 1,
                            backgroundColor: '#000000AA',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPressOut={() => { this.setState({ show: false }) }}
                    >
                        <View style={{
                            backgroundColor: '#FFFFFF',
                            width: '90%',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            paddingHorizontal: 10,
                            maxHeight: deviceHeight * 0.45
                        }} >
                            <TouchableWithoutFeedback>
                                <View>
                                    <View style={{ alignItems: 'center' }} >
                                        <Text style={{
                                            color: '#182E44',
                                            fontSize: 25,
                                            fontWeight: '500',
                                            marginTop: 15,
                                            marginBottom: 30
                                        }}>
                                            Información
                                        </Text>
                                    </View>
                                    <View>
                                        <FlatList
                                            style={{ marginBottom: 20 }}
                                            showsVerticalScrollIndicator={false}
                                            data={data}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View
                                                        style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20 }}>
                                                        <Text style={{
                                                            fontSize: 18, fontWeight: 'normal', color: '#182E44'
                                                        }}>{item}</Text>
                                                    </View>
                                                )
                                            }}
                                            extraData={data}
                                            keyExtractor={(item, index) => index.toString()}
                                            ItemSeparatorComponent={this.renderSeparator}
                                            contentContainerStyle={{
                                                paddingBottom: 40
                                            }}
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56,
        marginTop: 20,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    userBar: {
        width: 100 + '%',
        height: config.styleConstants.rowHeight,
        backgroundColor: "#b6ace3",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"

    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "#DCD6F7",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5
    },
    icon: {
        marginLeft: 5
    },
    commentBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,

    }
});
const mapDispatchProps=(dispatch)=>
bindActionCreators(
    { createFavorite },
    dispatch
  );

export default connect(null, mapDispatchProps)(Post);