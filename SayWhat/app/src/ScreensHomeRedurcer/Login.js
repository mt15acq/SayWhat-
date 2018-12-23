import React, { Component } from 'react';
import { 
    BackHandler,
    Dimensions,
    KeyboardAvoidingView,
    Image,
    Text,
    TextInput, 
    ScrollView,
    StyleSheet,
    View,  
} from 'react-native';

import { connect } from 'react-redux';
import { enterUsername, recoverPassword, getInitalState } from './../helper/homeAction';
import { enterPassword } from './../helper/homeAction';

import ForgotPassword from './ForgotPassword';
import WhiteButton from '../components/WhiteButton';


/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

/* Screen to enter login credentials { username, password } */
class Login extends React.Component{
    constructor(props) { 
        super(props) 
    }

    /* Handle to set username */
    handleUsername = (text) => { 
        this.setState( { username: text })
    }

    /* Handle to set password */
    handlePassword = (text) => {
        this.setState( { password: text })
    }

    /* Handle to configure the back button */
    handleBackPress = () => {
        this.props.onPressBack();
        return true;
    }
        
     /* */
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    render(){

        if (this.props.home.forgotPasswordState){
            return (
                <ForgotPassword style = { styles.backgroundContainer }/>
            )
        }

        if (this.props.home.loginState){            
            return (
                <ScrollView>
                    <KeyboardAvoidingView
                        style = { styles.backgroundContainer }
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
                                onChangeText = { this.props.onChangeUsername() }                   
                            />                
                        </View>

                        {/* Password text input */}
                        <View style = { styles.textView }>
                            <TextInput style = { styles.textInput}
                                placeholder = 'Password'
                                placeholderTextColor = '#e0e0e0'
                                underlineColorAndroid = '#ffffff' 
                                secureTextEntry = { true }
                                onChangeText = { this.props.onChangePassword() }
                            />
                        </View>

                        {/* Login button */}
                        <View style = { styles.loginView }>
                            <WhiteButton 
                                text = 'LOG IN'
                                onPress = {() => { 
                                    alert('Go to main');                        
                            }} /> 
                        </View>

                        {/* Forgot password link */}
                        <View style = { styles.forgotLinkView }>
                            <Text style = { styles.forgotlinkText }
                                onPress = { () => {
                                    alert("Go To Forget")
                                    this.props.onClickForgotLiknk(true)                          
                                }}>
                                Forgot password?
                            </Text>
                        </View>

                    </KeyboardAvoidingView>
               </ScrollView>                
            )
        }

        /* When show = false, do not render the Login componenent */
        return null;
    }
}

const styles = StyleSheet.create ({
    backgroundContainer : {
        flex : 1,
        flexDirection : 'column',
        width,
        height,
        alignItems : 'center',
        justifyContent : 'center',
        //backgroundColor : 'purple'
        //padding = 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);