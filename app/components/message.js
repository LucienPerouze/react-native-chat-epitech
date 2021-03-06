import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Avatar from "./avatar";

export default class Message extends Component {


    render() {

        const message = this.props.item;

        if (message.me) {
            return (
                <View style={[styles.container, styles.myContainer]}>
                    <View style={[styles.content, styles.myContent]}>
                        <Text style={[styles.text, styles.myText]}>{message.content}</Text>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={[styles.container, styles.otherContainer]}>
                    <Avatar width={25} height={25} name={message.avatar}/>
                    <View style={[styles.content, styles.otherContent]}>
                        <Text style={[styles.text, styles.otherText]}>{message.content}</Text>
                    </View>
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    content: {
        flexDirection: 'row'
    },
    text: {
        padding: 10,
        borderRadius: 5,
    },

    // My Styles
    myContainer: {
        justifyContent: 'flex-end',
        marginLeft: 40
    },
    myContent: {
    },
    myText: {
        backgroundColor: "#b3e0ff"
    },

    // Other's Styles
    otherContainer: {
        justifyContent: 'flex-start',
        marginRight: 40
    },
    avatar: {
        paddingLeft: 20,
        flex: 2
    },
    otherContent: {
        marginLeft: 20,
        flex: 2
    },
    otherText: {
        backgroundColor: "#e4e4e4",
    }
});
