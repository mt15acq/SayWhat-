import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import { connect } from 'react-redux';
import WhiteButton from './../components/WhiteButton';
import { showLogInScreen, enterEmail } from './../helper/homeAction';
import { NavigationActions } from 'react-navigation';

/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

class ForgotPassword extends React.Component {
    constructor(props) { 
        super(props) 
        this.state = { 
        };
    }
    render (){
        if(this.props.home.forgotPasswordState){
            return (
            <View style = { styles.mainView }>

                 <View style = { styles.logoView }>
                    {/* SW Logo */}
                    <Image source = { require ('../../assets/img/logo/SayWhatLogo.png')} />
                </View>

                {/* Username text input */}
                <View style = {  styles.textView }>
                    <TextInput style =  { styles.textInputStyle }
                        placeholder = 'Username'
                        placeholderTextColor = '#e0e0e0'
                        underlineColorAndroid = '#ffffff'
                        onChangeText = { onChangeUsername }                   
                    />                
                </View>

                {/* Security code text input */}
                <View style = { styles.textView }>
                    <TextInput style =  { styles.textInputStyle }
                        placeholder = 'Email'
                        placeholderTextColor = '#e0e0e0'
                        underlineColorAndroid = '#ffffff'
                        onChangeText = { onChangeEmail }                   
                    />                
                </View>

                {/* Send button */}
                <View style = { styles.buttonView }>
                    <WhiteButton 
                        text = 'SEND'
                        onPress = {() => { 
                        alert('Sending details...');   
                        this.setState({ sendPassword : true })                     
                    }} /> 
                </View>
              
                {/* Forgot security code text */}
                <View style = { styles.forgotView }>
                    <Text style = { styles.forgotText }>
                            Forgot password?
                    </Text>
                    <Text style = {styles.forgotText } 
                        textDecorationLine = 'underline' >
                            CONTACT US:
                    </Text>                    
                </View>

                {/* Email link */}
                <View style = { styles.forgotView }>
                    <Text style = { styles.forgotText }
                        textDecorationLine = 'underline'
                        onPress = {() => { Linking.openURL('mailto:mariagtome@gmail.com?subject=Request Security Code & body=body')
                        }} >
                            mariagtome@gmail.com
                    </Text>              
                </View>

            </View>
        )}

        return null;
    }
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
        //backgroundColor : 'green'
    },

    logoView : {
        flex : 0.4,
        width : width,
        flexDirection : "row",
        alignItems : 'center',
        justifyContent : 'center',
        //backgroundColor : 'pink'
    },

    textView : {
        flex : 0.13,
        alignItems : 'center',
        justifyContent : 'flex-start',
        width : width,
        //backgroundColor : 'red',  
    },

    buttonView : {
        flex : 0.1,
        alignItems : 'center',
        justifyContent : 'center',
        width,
        //backgroundColor : 'grey',
    },

    textInputStyle : {
        flex : 0.5,
        flexDirection : 'row',
        height : height * 0.3,
        width : width * 0.7,
        color : '#ffffff',
        //backgroundColor : 'blue',   
    },

    forgotView : {
        flex : 0.2,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'flex-start',
        //backgroundColor : 'yellow',  
    },

    forgotText : {
        flex : 0.2,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent :'center',
        textAlign : 'center',
        //backgroundColor : 'blue',  
    },

    overlayingView : {
        flex : 0.5,
        height: height * 0.5,
        width : width * 0.8,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent :'center',
        //backgroundColor : 'blue',  
    }
})

const mapStateToProps = (state) => {
    const { home } = state
    return { home }
}

const mapDispatchToProps = (dispatch) => (
{
    onChangeUsername : (text) => dispatch(enterUsername(text)),
    onChangeEmail : (text) => dispatch(enterEmail(text)),
    onClickForgotLiknk : (show) => dispatch(recoverPassword(show)),
    onPressBack : () => dispacth(showLogInScreen(true)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);