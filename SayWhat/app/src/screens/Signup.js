import React, { Component } from 'react';
import { 
    Dimensions,
    ImageBackground,
    TextInput, 
    StyleSheet,
    View,  
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WhiteButton from '../components/WhiteButton';


/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

/* Screen to enter sign up details { username, password, security code } */
class Signup extends React.Component{
    constructor(props) { 
        super(props) 
        this.state = { 
        };
    }
   
    render(){
        return (
            <ImageBackground source = { require ('../../assets/img/background/imgBackground.png') }
            style = { styles.backgroundImg }>
        
                {/* Name text input*/}          
                <View style = { styles.textInputView }>
                    <TextInput style =  { styles.textInputStyle }
                        placeholder = 'Name'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff' 
                    />                
                </View>

                {/* Email text input*/}
                <View style = { styles.textInputView }>
                    <TextInput style = { styles.textInputStyle}
                        placeholder = 'Email'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff' 
                        secureTextEntry = { true }
                    />
                </View>

                {/* Username text input*/}
                <View style = { styles.textInputView }>
                    <TextInput style = { styles.textInputStyle}
                        placeholder = 'Username'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff' 
                        secureTextEntry = { true }
                    />
                </View>

                {/* Password text input*/}
                <View style = { styles.textInputView }>
                    <TextInput style = { styles.textInputStyle}
                        placeholder = 'Password'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff' 
                    />
                </View>

                {/* Signup button */}
                <View style = { styles.signupContainer }>
                    <WhiteButton 
                        text = 'SIGN UP'
                        onPress = {() => { 
                            const navigateAction = NavigationActions.navigate({
                                routeName : 'MainScreen'                      
                             });
                            this.props.navigation.dispatch(navigateAction);                        
                    }} /> 
                </View>
            </ImageBackground>
        )
    }
}

/* 
 * Style components 
 */
const styles = StyleSheet.create ({
    backgroundImg : {
        flex : 1,
        flexDirection : 'column',
        width,
        height,
        alignItems : 'center',
        justifyContent : 'center',
    },

    textInputView : {
        flex : 0.15,
        //backgroundColor : 'green',
        width,
        alignItems : 'center',
        justifyContent : 'flex-start',
    },

    signupContainer : {
        flex : 0.2,
        //backgroundColor : 'orange',
        width,
        alignItems : 'center',
        justifyContent : 'center'
    },

    textInputStyle : {
        flex : 0.5,
        //backgroundColor : 'blue',
        flexDirection : 'row',
        height : height * 0.3,
        width : width * 0.6,
        color : '#ffffff'
   },
});

/*
 * Mapping To Props.
 */ 
 const mapStateToProps = (state) => {
     const { home } = state
     return { home }
}

 const mapDispatchToProps = (dispatch) => (
{
    onChangeUsername : (text) => dispatch(enterUsername(text)),
    onChangePassword : (text) => dispatch(enterPassword(text)),
    onClickForgotLiknk : (show) => dispatch(recoverPassword(show)),
    onPressBack : () => dispacth(getInitalState()),
})

 export default connect(mapStateToProps)(Signup);