import React, { Component } from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import RootStack from './config/route';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import homeReducer from './src/helper/homeReducer';

// Dimensions of the screen
const { width, height } = Dimensions.get( 'window' );
const store = createStore(homeReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <Provider store = { store }>
         <RootStack />
      </Provider>
    );
  }
}
   
const styles = StyleSheet.create({
  backgroundImg : {
    flex : 1,
    flexDirection : 'column',
    width,
    height,
 },
});
