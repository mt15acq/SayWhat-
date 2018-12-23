import React, { Component } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

/* Get dimensions of the current mobile device screen */
const { width, height } = Dimensions.get( 'window' );

export default class Main extends React.Component {
    render(){

        return (
            <View style = { styles.backgroundImg }>
                <ScrollView>
                    <View >
                        <Text>This is the main screen babe!! </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

/*
 * Style components 
 */
const styles = StyleSheet.create({
    backgroundImg :{
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#c5d4d6'
    }
})