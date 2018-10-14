import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import WhiteButton from './../components/WhiteButton';

/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

export default class ForgotPassword extends React.Component {
    constructor(props) { 
        super(props) 
        this.state = { 
            sendPassword : false,
        };
    }
    render (){
            return (
            <View style = { styles.mainView }>

                 <View style = { this.state.sendPassword ? nul : styles.logoView }>
                    {/* SW Logo */}
                    <Image source = { require ('../../assets/img/logo/SayWhatLogo.png')} />
                </View>

                {/* Username text input */}
                <View style = { this.state.sendPassword ? null : styles.textView }>
                    <TextInput style =  { this.state.sendPassword ? null : styles.textInputStyle }
                        placeholder = 'Username'
                        placeholderTextColor = '#e0e0e0'
                        underlineColorAndroid = '#ffffff'
                        onChangeText = { this.handleUsername }                   
                    />                
                </View>

                {/* Security code text input */}
                <View style = { this.state.sendPassword ? null : styles.textView }>
                    <TextInput style =  { this.state.sendPassword ? null : styles.textInputStyle }
                        placeholder = 'Security code'
                        placeholderTextColor = '#e0e0e0'
                        underlineColorAndroid = '#ffffff'
                        onChangeText = { this.handleUsername }                   
                    />                
                </View>

                {/* Send button */}
                <View style = { this.state.sendPassword ? null : styles.buttonView }>
                    <WhiteButton 
                        text = 'SEND'
                        onPress = {() => { 
                        alert('Sending details...');   
                        this.setState({ sendPassword : true })                     
                    }} /> 
                </View>
              
                {/* Forgot security code text */}
                <View style = { this.state.sendPassword ? null : styles.forgotView }>
                    <Text style = { this.state.sendPassword ? null : styles.forgotText }>
                            Forgot password?
                    </Text>
                    <Text style = { this.state.sendPassword ? null : styles.forgotText } 
                        textDecorationLine = 'underline' >
                            CONTACT US:
                    </Text>                    
                </View>

                {/* Email link */}
                <View style = { this.state.sendPassword ? null : styles.forgotView }>
                    <Text style = { this.state.sendPassword ? null : styles.forgotText }
                        textDecorationLine = 'underline'
                        onPress = {() => { Linking.openURL('mailto:mariagtome@gmail.com?subject=Request Security Code & body=body')
                        }} >
                            mariagtome@gmail.com
                    </Text>              
                </View>

                {/**/}
                <View style = { this.state.sendPassword ? styles.overlayingView : null}>
                    <Text>
                        This is your password
                    </Text>
                </View>

            </View>
    )}
}

/* Components styles */
const styles = StyleSheet.create ({
    mainView : {
        flex : 1,
        flexDirection : 'column',
        width,
        height,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'green'
    },

    logoView : {
        flex : 0.4,
        width : width,
        flexDirection : "row",
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'pink'
    },

    textView : {
        flex : 0.13,
        backgroundColor : 'red',  
        alignItems : 'center',
        justifyContent : 'flex-start',
        width : width
    },

    buttonView : {
        flex : 0.1,
        backgroundColor : 'grey',
        alignItems : 'center',
        justifyContent : 'center',
        width
    },

    textInputStyle : {
        flex : 0.5,
        flexDirection : 'row',
        height : height * 0.3,
        width : width * 0.7,
        color : '#ffffff',
        backgroundColor : 'blue',   
    },

    forgotView : {
        flex : 0.2,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'flex-start',
        backgroundColor : 'yellow',  
    },

    forgotText : {
        flex : 0.2,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent :'center',
        backgroundColor : 'blue',  
        textAlign : 'center',
    },

    overlayingView : {
        flex : 0.5,
        height: height * 0.5,
        width : width * 0.8,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor : 'blue',  
    }
})
