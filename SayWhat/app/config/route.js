import React from 'react';
import { Dimensions, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation';

/* Screens */
import Home  from '../src/screens/Home';
import Login from '../src/screens/Login';
import Main from '../src/screens/Main'
import Signup from '../src/screens/Signup';
import ForgotPassword from '../src/screens/ForgotPassword';

/* Styles */
import ImageHeader from '../src/components/ImageHeader';

/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

/* 
 * Stack navigation to gain access to the application. 
 */
const authStack = createStackNavigator ({

    // Home screen is the first screen loaded when the application is launched
    HomeScreen : {
        screen : Home             
    },
    // Login screen
    LoginScreen :{
        screen : Login             
    },
    // Signup Screen
    SignupScreen :{
        screen : Signup             
    },
    // Forgot password screen
    ForgotScreen :{
        screen : ForgotPassword             
    }},
        {
        initialRouteName : 'HomeScreen',
        navigationOptions : 
        {
            header : null
        }        
});

/* 
 * Stack navigation for screens inside the application.
 */
const securedStack = createStackNavigator ({

    // Main screen is the main menu, the screen user is redirected after a successful login
    MainScreen :{
        screen: Main
    }},
    {
        initialRouteName : 'MainScreen',
        navigationOptions : 
        {
            //headerStyle : {  width, height : height * 0.25, backgroundColor : 'red'  },
            //headerLeft : <ImageHeader />
            //headerLeft : <Image source = { require ('../assets/img/header/header.png') } />            
            headerTitle : <ImageHeader />
        }
});

/* 
 * Stack navigation that contains all the screens 
 */
const RootStack = createStackNavigator ({
    Auth :{
        screen: authStack
    },

    Secured :{
        screen: securedStack
    }},
    {
        initialRouteName : 'Auth',
        navigationOptions : 
        {
            header : null
        }
}); 

export default RootStack;