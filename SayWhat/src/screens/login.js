import React, { Component } from 'react';
import { 
    Dimensions,
    Image,
    ImageBackground, 
    TextInput, 
    StyleSheet,
    View,  
} from 'react-native';
import WhiteButton from './../components/whiteButton';

const { width, height } = Dimensions.get( 'window' );

export default class Login extends React.Component{
    constructor(props) { 
        super(props) 
        this.state = { 
            username : '',
            password : ''
        };
    }

    handleUsername = (text) => { 
        this.setState( { username: text })
    }

    handlePassword = (text) => {
        this.setState( { password: text })
    }
    
    render(){
        return (
         <ImageBackground style = { styles.backgroundContainer } 
            source = { require ('../../assets/img/background/imgBackground.png') }>
            <View style = { styles.logoContainer }>
                <Image source = { require ('./../../assets/img/logo/SayWhatLogo.png') } />
            </View>

            <View style = { styles.usernameContainer }>
                <TextInput style =  { styles.textInputStyle }
                    placeholder = 'Username'
                    placeholderTextColor = '#ffffff'
                    underlineColorAndroid = '#ffffff'
                    onChangeText = { this.handleUsername }                   
                />                
            </View>

            <View style = { styles.passwordContatiner }>
                <TextInput style = { styles.textInputStyle}
                    placeholder = 'Password'
                    placeholderTextColor = '#ffffff'
                    underlineColorAndroid = '#ffffff' 
                    secureTextEntry = { true }
                    onChangeText = { this.handlePassword }
                />
            </View>

            <View style = { styles.loginContainer }>
                <WhiteButton 
                    text = 'LOG IN'
                    onPress = {() => { 
                        alert('Me again');                        
                    }} /> 
            </View>
        </ImageBackground>
        )
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
    },

    logoContainer : {
        flex : 0.5,
        flexDirection : 'row',
        width, 
        //backgroundColor : 'red',
        alignItems : 'center',
        justifyContent : 'center'
    },

    usernameContainer : {
        flex : 0.2,
        //backgroundColor : 'green',
        width : width,
        alignItems : 'center',
        justifyContent : 'flex-start',
    },

    passwordContatiner : {
        flex : 0.2,
        //backgroundColor : 'yellow',
        width : width,
        alignItems : 'center',
        justifyContent : 'flex-start',
    },

    loginContainer : {
        flex : 0.3,
        //backgroundColor : 'pink',
        width : width,
        alignItems : 'center',
        justifyContent : 'center'
    },

    textInputStyle : {
        flex : 0.5,
        //backgroundColor : 'blue',
        flexDirection : 'row',
        height : height * 0.3,
        width : width * 0.5,
        color : '#ffffff'
   },

 });