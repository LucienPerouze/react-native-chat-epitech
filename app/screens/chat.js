import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MainMenu from "../components/menu";
import MessageStore from "../stores/messageStore";
import Message from "../components/message";

export default class ChatView extends Component {

    constructor() {
        super();
        this.state = {
            messages: MessageStore.getMessages()
        };
    }

    componentWillMount() {
        MessageStore.addListener("NEW_MESSAGE", () => {
            this.setState({
                messages: MessageStore.getMessages()
            });
        });
    }

    render() {
        this.messagesList.scrollToEnd();
        return (
            <View>
                <MainMenu/>
                <FlatList
                    data={this.state.messages}
                    renderItem={({item}) => <Message item={item}/>}
                    ref={(elm) => this.messagesList = elm}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
