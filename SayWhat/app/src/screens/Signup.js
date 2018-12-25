import React, { Component } from 'react';
import {
    Alert, 
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
import { createUser } from '../helper/homeAction';


/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

/* Screen to enter sign up details { username, password, security code } */
class Signup extends React.Component{
    constructor(props) { 
        super(props);
        this.state ={
            name:" ",   
            email:" ",
            userName:" ",
            password:" ",
            access_token:" "
        }
    
    }

    /* Check the last state of Redux props and will compare it with the previous state and will take the proper action*/ 
    componentWillReceiveProps(nextProps){
        if (nextProps.homeReducer.loginState != this.props.homeReducer.loginState) {
            nextProps.homeReducer.loginState ? this._navigateTo('MainScreen') : null;
        }
    } 
    
    /* Navigate to other screens using react-navigation */
     _navigateTo = (routeScreen) =>{
        const navigateAction = NavigationActions.navigate({
            routeName : routeScreen                
        });
        return this.props.navigation.dispatch(navigateAction);  
    }

    _validate = () => {
        debugger;
        // if (typeof this.state.name != isNullOrUndefined || typeof this.state.email != isNullOrUndefined || 
        //     typeof this.state.userName != isNullOrUndefined|| typeof this.state.password != isNullOrUndefined 
        //     || typeof this.state.access_token != isNullOrUndefined )
        // {
        //     alert('Please make sure all the required(*) information is entered.')
        // }  
        
        // if (this.state.email.length === 0){
        //     debugger
        //     alert('Please make sure all the required(*) information is entered.')                              
        // }
        
        const newUser = {
            name : this.state.name,
            userName : this.state.userName,
            password: this.state.password,
            email: this.state.email,
            access_token: this.state.access_token                               
        }
        this.props.onSignup(newUser)
    }
    render(){
        return (
            <ImageBackground source = { require ('../../assets/img/background/imgBackground.png') }
            style = { styles.backgroundImg }>
        
                {/* Name text input*/}          
                <View style = { styles.textInputView }>
                    <TextInput style =  { styles.textInputStyle }
                        placeholder = 'Name*'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff' 
                        onChangeText = { text => { this.setState({ name : text })}}
                     />                
                </View>

                {/* Email text input*/}
                <View style = { styles.textInputView }>
                    <TextInput style = { styles.textInputStyle}
                        placeholder = 'Email*'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff' 
                        onChangeText = { text => { this.setState({ email : text  }) }}
                    />
                </View>

                {/* Username text input*/}
                <View style = { styles.textInputView }>
                    <TextInput style = { styles.textInputStyle}
                        placeholder = 'Username*'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff' 
                        onChangeText = { text => { this.setState({ userName : text })}}                       
                    />
                </View>

                {/* Password text input*/}
                <View style = { styles.textInputView }>
                    <TextInput style = { styles.textInputStyle}
                        placeholder = 'Password*'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff' 
                        secureTextEntry = { true }
                        onChangeText = { text => { this.setState({ password : text })}}
                    />
                </View>

                {/* Authorization token text input*/}
                <View style = { styles.textInputView }>
                    <TextInput style = { styles.textInputStyle}
                        placeholder = 'Access code*'
                        placeholderTextColor = '#ffffff'
                        underlineColorAndroid = '#ffffff'
                        onChangeText = { text => { this.setState({ access_token : text })}}
                    />
                </View>

                {/* Signup button */}
                <View style = { styles.signupContainer }>
                    <WhiteButton 
                        text = 'SIGN UP'
                        onPress = {() => { 
                            debugger
                            this._validate()
                        }}                       
                    /> 
                </View>
            </ImageBackground>
        )
    }
}

/*
 * Mapping To Props.
 */ 
const mapStateToProps = (state) => {
    const { homeReducer } = state
    return { homeReducer }
}

const mapDispatchToProps = (dispatch) => (
{
   onChangeUsername : (text) => dispatch(enterUsername(text)),
   onChangePassword : (text) => dispatch(enterPassword(text)),
   onClickForgotLiknk : (show) => dispatch(recoverPassword(show)),
   onPressBack : () => dispacth(getInitalState()),
   onSignup: (newUser) => dispatch(createUser(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);


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
