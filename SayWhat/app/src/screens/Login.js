import React, { Component } from 'react';
import { 
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    Image,
    ImageBackground,
    Text,
    TextInput, 
    ScrollView,
    StyleSheet,
    View,  
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { enterUsername, recoverPassword, getInitalState, getUser } from './../helper/homeAction';
import { enterPassword } from './../helper/homeAction';

import WhiteButton from '../components/WhiteButton';

/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

/* 
 * Screen to enter login credentials { username, password } 
 */
class Login extends React.Component{
    constructor(props) { 
        super(props) 
    }

    /* Component that will check the last state of Redux props and will compare it with the previous state and will take the proper action*/
    componentWillReceiveProps(nextProps){
        debugger;
        if(nextProps.homeReducer.loginState !== this.props.homeReducer.loginState){
            nextProps.homeReducer.loginState ? this._navigateTo('MainScreen') : null;
        }
        if(nextProps.homeReducer.errorCode !==  this.props.homeReducer.errorCode){
            nextProps.homeReducer.error === true ? Alert.alert('Failed login attempt', nextProps.homeReducer.errorMessage, [{ text : 'Try agan'}], {cancelable : false }) : null;
        }
    }

    /* Component to navigate to other screens using react-navigation */
    _navigateTo = (routeScreen) =>{
        const navigateAction = NavigationActions.navigate({
            routeName : routeScreen                
        });
        return this.props.navigation.dispatch(navigateAction);  
    }
    
    render(){
        return (
            <ImageBackground source = { require ('../../assets/img/background/imgBackground.png') }
                style = { styles.backgroundImg }>

                <ScrollView>
                    <KeyboardAvoidingView
                        style = { styles.backgroundImg }
                        behavior = 'position'
                        keyboardVerticalOffset = { 0 }>

                        {/* SW Logo */}               
                        <View style = { styles.logoView }>
                            <Image source = { require ('./../../assets/img/logo/SayWhatLogo.png') } />
                        </View>

                        {/* Username text input*/}
                        <View style = { styles.textView }>
                            <TextInput style =  { styles.textInput }
                                placeholder = 'Username'
                                placeholderTextColor = '#e0e0e0'
                                underlineColorAndroid = '#ffffff' 
                                onChangeText = { text => { this.setState({ userName : text })} }              
                            />                
                        </View>

                        {/* Password text input */}
                        <View style = { styles.textView }>
                            <TextInput style = { styles.textInput}
                                placeholder = 'Password'
                                placeholderTextColor = '#e0e0e0'
                                underlineColorAndroid = '#ffffff' 
                                secureTextEntry = { true }
                                onChangeText = { text => { this.setState({ password : text })}}
                            />
                        </View>

                        {/* Login button */}
                        <View style = { styles.loginView }>
                            <WhiteButton 
                                text = 'LOG IN'
                                onPress = { () => { 
                                    const user = {
                                        userName : this.state.userName,
                                        password: this.state.password
                                    }
                                    this.props.onLogin(user)
                                }} /> 
                        </View>

                        {/* Forgot password link */}
                        <View style = { styles.forgotLinkView }>
                            <Text style = { styles.forgotlinkText }
                                onPress = { () => {
                                    this._navigateTo('ForgotScreen');                        
                                }}>
                                Forgot password?
                            </Text>
                        </View>
                    </KeyboardAvoidingView>
               </ScrollView>   
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

const mapDispatchToProps = (dispatch) => 
{
    return{
        onChangeUsername : (text) => dispatch(enterUsername(text)),
        onChangePassword : (text) => dispatch(enterPassword(text)),
        onClickForgotLiknk : (show) => dispatch(recoverPassword(show)),
        onPressBack : () => dispatch(getInitalState()),
        onLogin : (user) => dispatch(getUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
        //backgroundColor : 'purple'
    },

    contentStyle : {
        flex : 1,
        width : width,
        height : height * 0.2,
        alignItems : 'center',
        justifyContent : 'center',
    },

    logoView : {
        flex : 0.4,
        flexDirection : 'row',
        width, 
        //backgroundColor : 'red',
        alignItems : 'center',
        justifyContent : 'center'
    },

    textView : {
        flex : 0.13,
        //backgroundColor : 'green',
        width : width,
        alignItems : 'center',
        justifyContent : 'flex-start',
    },

    loginView : {
        flex : 0.1,
        //backgroundColor : 'pink',
        width : width,    
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },

    forgotLinkView : {
        flex : 0.2,
        flexDirection : 'row',
        //backgroundColor : 'yellow',
        width : width,    
        alignItems : 'flex-start',
        justifyContent : 'center'
    },

    forgotlinkText : {
        flex : 0.5,
        //backgroundColor : 'blue',
        flexDirection : 'row',
        height : height * 0.05,
        width : width * 0.7,
        textAlign : 'center',
        color : '#ffffff'
    },

    textInput : {
        flex : 0.5,
        //backgroundColor : 'blue',
        flexDirection : 'row',
        height : height * 0.3,
        width : width * 0.7,
        color : '#ffffff'
   },
 });
