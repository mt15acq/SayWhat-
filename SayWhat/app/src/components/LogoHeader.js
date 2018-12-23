import React, { Component } from 'react';
import { Image } from 'react-native';

export default class LogoHeader extends Component {
    render() {
        return (
            <Image
                source = { require ('../../assets/img/logo/SW.png')}
                style = {{ width : 50 , height : 50 }}
            />
        );
    }
}