import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Avatar extends Component {

    constructor() {

        super();

        this.loaded = {
            ben:        require('../assets/images/ben.png'),
            bill:       require('../assets/images/bill.png'),
            claire:     require('../assets/images/claire.png'),
            david:      require('../assets/images/david.png'),
            jane:       require('../assets/images/jane.png'),
            joey:       require('../assets/images/joey.png'),
            lou:        require('../assets/images/lou.png'),
            nicolas:    require('../assets/images/nicolas.png'),
            sophie:     require('../assets/images/sophie.png')
        };
    }

    render() {
        return (
            <Image style={{width: this.props.width, height: this.props.height}} source={this.loaded[this.props.name]} />
        );
    }
}
