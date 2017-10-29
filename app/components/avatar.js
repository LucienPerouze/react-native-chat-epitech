import React, { Component } from 'react';
import { Image } from 'react-native';

import profileStore from "../stores/profileStore";

export default class Avatar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Image style={{width: this.props.width, height: this.props.height}} source={profileStore.getAvatarAsset(this.props.name)} />
        );
    }
}
