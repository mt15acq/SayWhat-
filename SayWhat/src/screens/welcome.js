import React, { Component } from 'react';
import { Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View } from 'react-native';
import WhiteButton from './../components/whiteButton';

// Determine screen dimension
const { width, height } = Dimensions.get( 'window' );

// This component represents the initial screen of the app
export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
      }
    render() {
        return (
          
            <ImageBackground source = { require ('../../assets/img/background/imgBackground.png') }
                style = { styles.backgroundImg }>
                    
                <View style = { styles.logoView }>
                    <Image source = { require ('../../assets/img/logo/SayWhatLogo.png')} />   
                </View>
                    
                <View style = { styles.signUpView }>
                    <WhiteButton 
                        text = "SIGN UP"
                        onPress = { () => { alert("Hi there!!!"); }} />
                </View>

                <View style = { styles.loginView }>
                    <WhiteButton 
                        text = "LOG IN"
                        onPress = { () => { alert("Hi!!!"); }} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create ({
    backgroundImg : {
       flex : 1,
       flexDirection : 'column',
       width,
       height,
       //opacity : 0.4 
    },

    logoView : {
        flex : 0.7,
        flexDirection : 'row',
        //oopacity : 1,
        //backgroundColor : 'red',
        alignItems : 'center',
        justifyContent : 'center',
    },

    signUpView : {
        flex : 0.2,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'center',
        //backgroundColor : 'purple'
    },

    loginView : {
        flex : 0.4,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'center',
        //backgroundColor : 'green'
    }
})