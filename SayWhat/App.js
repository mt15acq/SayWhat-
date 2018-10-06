import React, { Component } from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Welcome from './src/screens/welcome';
import Login from './src/screens/login';
import { RootStack } from './config/route';

// Dimensions of the screen
const { width, heigth } = Dimensions.get( 'window' );


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
       <RootStack />
    );
  }
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
