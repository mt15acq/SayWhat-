import React, { Component } from 'react';
import { 
    BackHandler,
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    View } from 'react-native';

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { showLogInScreen } from './../helper/homeAction';
import { getInitalState } from './../helper/homeAction';
import { showSignUpScreen } from './../helper/homeAction';
import TrasparentButton from '../components/TransparentButton';
import WhiteButton from '../components/WhiteButton';



/* Determine screen dimension */
const { width, height } = Dimensions.get( 'window' );

/* 
 * This component represents the initial screen of the app 
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (          
            <ImageBackground source = { require ('../../assets/img/background/imgBackground.png') }
                style = { defaultStyle.backgroundImg }>

                {/* SW Logo */}
                <View style = { defaultStyle.logo }>
                    <Image source = { require ('../../assets/img/logo/SayWhatLogo.png') } />   
                </View>

                {/* Sign up button that renders the sign up component */}
                <View style = { defaultStyle.button }>
                    <WhiteButton 
                        text = "SIGN UP"
                        onPress = { () => {
                        const navigateAction = NavigationActions.navigate({
                            routeName : 'SignupScreen'                      
                        });
                        this.props.navigation.dispatch(navigateAction);                                
                    }} /> 
               </View>

                {/* Log in button that renders the log in component */}
                <View style = { defaultStyle.button }>
                    <TrasparentButton 
                        text = "LOG IN"
                        onPress = { () => { 
                        const navigateAction = NavigationActions.navigate({
                           routeName : 'LoginScreen'                      
                        });
                        this.props.navigation.dispatch(navigateAction);
                        }}/>  
                </View>
            </ImageBackground>
        );
    }
}


/* 
 * Style components 
 */
const defaultStyle = StyleSheet.create ({
    backgroundImg : {
       flex : 1,
       flexDirection : 'column',
       width,
       height,
    },

    logo : {
        flex : 0.5,
        flexDirection : 'row',
       // backgroundColor : 'red',
        alignItems : 'center',
        justifyContent : 'center',
    },

    button : {
        flex : 0.2,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'center',
       // backgroundColor : 'pink'
    }
})

/*
 * Mapping To Props.
 */
const mapStateToProps = (state) => {
    const { home } = state
    return { home }
}

const mapDispatchToProps = (dispatch) => 
({
    onPressBack : () => dispatch(getInitalState()),
    onPressLogIn : (show) => dispatch(showLogInScreen(show)),
    onPressSignUp : (show) => dispatch(showSignUpScreen(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);