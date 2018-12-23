import React, { Component } from 'react';
import { 
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
import { enterUsername, recoverPassword, getInitalState } from './../helper/homeAction';
import { enterPassword } from './../helper/homeAction';

import WhiteButton from '../components/WhiteButton';
import { findUser } from '../../api/user/findUser';


/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

/* 
 * Screen to enter login credentials { username, password } 
 */
class Login extends React.Component{
    constructor(props) { 
        super(props) 
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
                            />                
                        </View>

                        {/* Password text input */}
                        <View style = { styles.textView }>
                            <TextInput style = { styles.textInput}
                                placeholder = 'Password'
                                placeholderTextColor = '#e0e0e0'
                                underlineColorAndroid = '#ffffff' 
                                secureTextEntry = { true }
                            />
                        </View>

                        {/* Login button */}
                        <View style = { styles.loginView }>
                            <WhiteButton 
                                text = 'LOG IN'
                                onPress = { () => { 
                                    const user = {
                                        userName : "",
                                        password: ""
                                    }
                                    findUser(PARAMETROS).then(result =>{

                                        if(result){
                                            const navigateAction = NavigationActions.navigate({
                                                routeName : 'MainScreen'                      
                                             });
                                             this.props.navigation.dispatch(navigateAction); 
                                        }
                                             else{
                                                 return alert('mensaje ')
                                             }              
                                
                                    })
                                     }} /> 
                        </View>

                        {/* Forgot password link */}
                        <View style = { styles.forgotLinkView }>
                            <Text style = { styles.forgotlinkText }
                                onPress = { () => {
                                    const navigateAction = NavigationActions.navigate({
                                        routeName : 'ForgotScreen'                      
                                     });
                                     this.props.navigation.dispatch(navigateAction);                          
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
    onLogIn : (user) => dispatch(getUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);