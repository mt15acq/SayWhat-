import React, { Component } from 'react';
import { TouchableOpacity,
    Text,
    StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/* White button component */
export default class WhiteButton extends Component {
    render()
    {
        const {
            text,
            onPress,
        } = this.props;

        return(
            <TouchableOpacity
                style = { styles.buttonStyle } 
                onPress = { () => onPress() }>

                <Text style = { styles.textStyle }>
                    {text}
                </Text>    
            </TouchableOpacity> 
        );
    }
}

/* Component properties types */
WhiteButton.propTypes = {
    text : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired
};

/* Styles of components */
const styles = StyleSheet.create ({
    
    /* Button style */
    buttonStyle: {
        padding : 10,
        backgroundColor : 'transparent',
        borderRadius : 5,
        shadowRadius: 5,
        elevation : 4,
        width : 172,
        height : 44
    },

    /* Button's text style */
    textStyle : {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#ffffff',
        textAlign : 'center'
    }
});
