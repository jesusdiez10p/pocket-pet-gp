import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { PostFeed } from '../../components/container';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import {useRef} from 'react'

export default function MainScreen() {

    const viewRef = useRef();
    const sacudirColaPress = () => {
        viewRef.current.rubberBand()
    }

        return (
            <SafeAreaView style={styles.container}>
                <Animatable.View ref={viewRef} style={styles.tempNav}>
                    <TouchableOpacity onPress={sacudirColaPress}>
                        <Animatable.Text animation="pulse" iterationCount="infinite" duration={3000} style={styles.pocketpet}>Pocket-Pet</Animatable.Text>
                    </TouchableOpacity>
                </Animatable.View>
                <PostFeed />
                
            </SafeAreaView>
            
        );
    
}


