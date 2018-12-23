import React, { Component } from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';

import RootStack from './app/config/route.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './app/src/helper/homeReducer.js';
import getStore from './app/config/store';

// Dimensions of the screen
const { width, height } = Dimensions.get( 'window' );
const store = getStore();

/*
 * Start point of the application 
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      
      <Provider store = { store } >
         <RootStack />
      </Provider>
      
  )}
}
   
/* 
 * Style components 
 */
const styles = StyleSheet.create({
   backgroundImg : {
    flex : 1,
    flexDirection : 'column',
    width,
    height,
 },
});
