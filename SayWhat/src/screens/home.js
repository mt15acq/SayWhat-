import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    View
} from 'react-native';
const { width, height } = Dimensions.get( 'window' );

export default class Home extends Component {
    render(){
        return (
            <ImageBackground style = { styles.backgroundContainer }
                source = { require ('./../../assets/img/background/imgBackground.png') }>

                <View style = { styles.logoContainer }
                    source = { require ('./../../assets/img/logo/SayWhatLogo.png')}>

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer : {
        flex : 1,
        flexDirection : 'column',
        width,
        height
    },

    logoContainer: {
        flex : 0.5,
        flexDirection : 'row',
        width
    }

})