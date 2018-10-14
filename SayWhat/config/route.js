import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home  from '../src/screens/Home';
import Login from '../src/screens/Login';
import Main from '../src/screens/Main'
import Signup from '../src/screens/Signup';


/* Stack navigation to gain access to the application. */
const authStack = createStackNavigator ({

    /* Home screen is the first screen that load when the application is launched */
    HomeScreen :{
        screen : Home             
    }},
        {
        initialRouteName : 'HomeScreen',
        navigationOptions : 
        {
            header : null
        }        
});

/* Stack navigation for screens inside the application. */
const securedStack = createStackNavigator ({

    /* Main screen is the main menu, the screen user is redirected after a successful login */
    MainScreen :{
        screen: Main
    }},
    {
        initialRouteName : 'MainScreen',
        navigationOptions : 
        {
            header : null
        }
});

/* Stack navigation that contains all the screens */
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