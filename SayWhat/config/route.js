import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from './../src/screens/welcome';
import Login from './../src/screens/login';
import Home from './../src/screens/home';

// Stack navigation to gain access to the application.
const authStack = createStackNavigator ({
    WelcomeScreen :{
        screen : Welcome             
    },

    LoginScreen :{
        screen: Login 
    }}, 
    {
        initialRouteName : 'WelcomeScreen'
});

// Stack navigation for screens inside the application.
const securedStack = createStackNavigator ({
    HomeScreen :{
        screen: Home
    }},
    {
        initialRouteName : 'HomeScreen'
});

const RootStack = createStackNavigator ({
    Auth :{
        screen: authStack
    },

    Secured :{
        screen: securedStack
    }},
    {
        initialRouteName : 'Auth'
});

export default RootStack;