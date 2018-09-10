import React, { Component } from 'react';
import { 
    ImageBackground, 
    View, 
    Text,
    TextInput, 
    StyleSheet,
    Dimensions
} from 'react-native';
import CustomButton from './customButton'
const { width, height } = Dimensions.get( 'window' );

export default class login extends Component{
    render(){
        return (
            <ImageBackground 
                style = { styles.imageBackgroundContainer }
                source = { require ('../../assets/img/background.png')}
                >            
            <View style = { styles.usernameTextInputContainer }>
                 <TextInput 
                    style = {styles.textInput}
                    placeholder = 'Username'
                    placeholderTextColor = 'white'
                    underlineColorAndroid = 'white'
                />        
            </View>
            <View style = { styles.passwordTextInputContainer }>
                <TextInput 
                    style = {{ width : '50%', height : height*0.1 }}
                    placeholder = 'Password'
                    placeholderTextColor = 'white'
                    fontFamily =  'ARBERKLEY'
                    underlineColorAndroid = 'white'
                />
            </View>
            <View style = { styles.logInButtonContainer} >
                <CustomButton
                    style = {{width : '50%'}}
                    text = 'LOG IN'
                />
                <Text 
                    style = { styles.forgotPassword }>
                    {'Forgot password?'}
                </Text>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create ({
    imageBackgroundContainer : {
        flex : 1,
        flexDirection : 'column',
        width :  width,
        height : height
    },

    usernameTextInputContainer : {
        alignItems : 'flex-end',
       /* backgroundColor : 'pink',*/
        flex : 0.5,
        flexDirection : 'row',
       /* width : width * 0.7,
        height : height * 0.10,*/
        justifyContent : 'center',
    },

    passwordTextInputContainer : {
        alignItems : 'flex-start',
       /* backgroundColor: 'green',*/
        flex : 0.2,
        flexDirection : 'row', 
      /*  height : height * 0.10,*/
        justifyContent : 'center',
        /*width : width * 0.7,*/
    },

    logInButtonContainer : {
        alignItems : 'center',
        /*backgroundColor : 'purple',*/
        flex : 0.2,
        flexDirection : 'column',
        justifyContent : 'flex-start',
  
    },

    textInput : {
        color : 'white',   
        fontSize : 14,
        fontFamily :  'ARBERKLEY', 
        height : height * 0.1,    
        width : '50%',
        opacity : 0.6
    },

    forgotPassword : {
        fontSize : 10,
        fontFamily :  'ARBERKLEY', 
        color : 'white',
        marginTop : 20
    },

    button : {
        elevation : 8,
        color : '#004B55',
        borderRadius: 4

    }
});