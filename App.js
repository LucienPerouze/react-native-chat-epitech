import React, { Component } from 'react';

import ProfileScreen from "./app/screens/profile";
import ChatScreen from "./app/screens/chat";
import { StackNavigator } from 'react-navigation';

const RootNavigator = StackNavigator({
    Chat: {
        screen: ChatScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
},{
    headerMode: 'screen',
});

export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}