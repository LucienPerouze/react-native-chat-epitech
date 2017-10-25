import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';


export default class ProfileScreen extends Component {

    static navigationOptions = { title: 'Profile', header: null };

    render() {
        return (
            <View style={styles.container}>
                <MainMenu navigation={this.props.navigation} page={'profile'}/>
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

});
