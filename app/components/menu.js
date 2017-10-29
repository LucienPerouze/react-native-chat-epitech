import React, { Component } from 'react';
import {StyleSheet, View, StatusBar, Image, TouchableHighlight} from 'react-native';

import ChatIcon from "../assets/icons/chat";
import Avatar from "./avatar";
import profileStore from "../stores/profileStore";

export default class Menu extends Component {

    constructor() {
        super();
        this.state = {
            avatar: "ben",
        };
    }

    componentDidMount() {
        profileStore.addListener("AVATAR_CHANGED", () => {
            this.setState({
                avatar: profileStore.getCurrentAvatar()
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ChatIcon color={"#000"} width={25} height={25}/>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <TouchableHighlight onPress={() => profileStore.toggleAvatar()} underlayColor="white">
                    <View>
                        <Avatar width={25} height={25} name={this.state.avatar}/>
                    </View>
                </TouchableHighlight>
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
        borderBottomColor: "#d8d8d8",
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 75,
        height: 35
    }
});
