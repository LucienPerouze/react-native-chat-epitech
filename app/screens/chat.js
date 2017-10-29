import React, { Component } from 'react';
import Expo from 'expo';
import {FlatList, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';

import MainMenu from "../components/menu";
import messageStore from "../stores/messageStore";
import Message from "../components/message";
import EpitechChatAPI from "../stores/epitechChatAPI";
import profileStore from "../stores/profileStore";

export default class ChatScreen extends Component {

    constructor() {
        super();
        this.state = {
            messages: messageStore.getMessages(),
            input: ""
        };
        this.messagesList = null;
        this.epitechChatAPI = new EpitechChatAPI();
        this.uid = Expo.Constants.deviceId;
    }

    componentDidMount() {
        messageStore.addListener("NEW_MESSAGES", () => {
            this.setState({
                messages: messageStore.getMessages()
            });
            setTimeout(() => {
                if (this.messagesList) {
                    this.messagesList.scrollToEnd();
                }
            }, 50)
        });
        this.epitechChatAPI.fetchNewMessages(this.uid);
    }

    sendMessage() {
        this.epitechChatAPI.addMessage(this.uid, profileStore.getCurrentAvatar(), this.state.input);
        this.setState({
            input: ""
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <MainMenu />
                <KeyboardAvoidingView style={styles.stream} behavior={'padding'}>
                    <FlatList
                        ListHeaderComponent={() => <View style={{height:20}}/>}
                        data={this.state.messages}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({item}) => <Message item={item}/>}
                        ref={(elm) => this.messagesList = elm}
                    />
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={this.state.input}
                            onChangeText={(input) => this.setState({input})}
                            onSubmitEditing={() => this.sendMessage()}
                            underlineColorAndroid='transparent'
                            selectionColor={'#c8c8c8'}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eeeeee',
    },
    stream: {
        flex: 1,
    },
    inputContainer: {
        height: 60,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopColor: "#d8d8d8",
        borderTopWidth: 1,
    },
    input: {
        borderRadius: 60,
        borderWidth: 0,
        paddingLeft: 20,
        color: '#000',
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: "#f1f1f1",
    }
});
