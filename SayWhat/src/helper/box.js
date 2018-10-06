import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { colorBox : 'yellow' };
    }
        
    componentDidMount(){
        let myColor = this.props.color ? 'green' : 'orange';
        this.setState({ colorBox : myColor })
    }
    render(){
        return <View style = {{ width : 100, height : 100, backgroundColor : this.state.colorBox }} />
    }
}