import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';

import ProfileIcon from "../assets/icons/profile";
import ChatIcon from "../assets/icons/chat";

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ProfileIcon width={25} height={25}/>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <ChatIcon width={25} height={25}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 90,
        paddingTop: StatusBar.currentHeight,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderBottomColor: "#eeeeee",
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 75,
        height: 35
    }
});
