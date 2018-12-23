import React, { Component } from 'react';
import {  
    Dimensions,
    Header,
    ImageBackground,
    StyleSheet,
    Text,
    View } from 'react-native';

 /* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

export default class ImageHeader extends Component {
    render() {
        return(
            <ImageBackground source = { require ('../../assets/img/header/header.png') }
                style = { styles.backgroundImg }>
                <View source = { require ('../../assets/img/logo/SW.png')}
                    style = { styles.backgroundImg2}>
                </View>               
            </ImageBackground>
        );
    }
}

/*
 * Style components 
 */
const styles = StyleSheet.create({
    backgroundImg :{
        flex : 1,
        width,
        height : height * 0.5,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'yellow'
    },
    backgroundImg2 :{
        flex : 1,
        //width ,
        //height : height * 0.25 ,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'blue'
    }
})