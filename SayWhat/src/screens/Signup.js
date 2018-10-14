import React, { Component } from 'react';
import { 
    Dimensions,
    TextInput, 
    StyleSheet,
    View,  
} from 'react-native';

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
            username : '',
            password : '',
            password2 : '',
            securityCode: ''
        };
    }

    /* Method to set username */
    handleUsername = (text) => { 
        this.setState( { username: text })
    }

    /* Method to set password */
    handlePassword = (text) => {
        this.setState( { password: text })
    }
    
    render(){

        if (this.props.show) {        
            return (

                <View style = { styles.backgroundView }>
                
                    {/* Name text input*/}          
                    <View style = { styles.textInputView }>
                        <TextInput style =  { styles.textInputStyle }
                            placeholder = 'Name'
                            placeholderTextColor = '#ffffff'
                            underlineColorAndroid = '#ffffff'
                            onChangeText = { this.handleUsername }                   
                        />                
                    </View>

                    {/* Email text input*/}
                    <View style = { styles.textInputView }>
                        <TextInput style = { styles.textInputStyle}
                            placeholder = 'Email'
                            placeholderTextColor = '#ffffff'
                            underlineColorAndroid = '#ffffff' 
                            secureTextEntry = { true }
                            onChangeText = { this.handlePassword }
                        />
                    </View>

                    {/* Username text input*/}
                    <View style = { styles.textInputView }>
                        <TextInput style = { styles.textInputStyle}
                            placeholder = 'Username'
                            placeholderTextColor = '#ffffff'
                            underlineColorAndroid = '#ffffff' 
                            secureTextEntry = { true }
                            onChangeText = { this.handlePassword }
                        />
                    </View>

                    {/* Password text input*/}
                    <View style = { styles.textInputView }>
                        <TextInput style = { styles.textInputStyle}
                            placeholder = 'Password'
                            placeholderTextColor = '#ffffff'
                            underlineColorAndroid = '#ffffff' 
                            onChangeText = { this.handlePassword }
                        />
                    </View>

                    {/* Login button */}
                    <View style = { styles.signupContainer }>
                        <WhiteButton 
                            text = 'SIGN UP'
                            onPress = {() => { 
                                alert('Me again');                        
                            }} /> 
                    </View>
                </View>
            )
        }
        return null;
    }
}

/* Component properties types */
Signup.propTypes = {
    show : PropTypes.bool.isRequired,
}

/* Style components */
const styles = StyleSheet.create ({
    backgroundView : {
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
        width : width,
        alignItems : 'center',
        justifyContent : 'flex-start',
    },

    signupContainer : {
        flex : 0.4,
        //backgroundColor : 'orange',
        width : width,
        alignItems : 'center',
        justifyContent : 'center'
    },

    textInputStyle : {
        flex : 0.5,
       // backgroundColor : 'blue',
        flexDirection : 'row',
        height : height * 0.3,
        width : width * 0.6,
        color : '#ffffff'
   },
});

 const mapStateToProps = (state) => {
     const { home } = state
     return { home }
 }

 export default connect(mapStateToProps)(Signup);