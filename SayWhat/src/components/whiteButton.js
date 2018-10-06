import React, { Component } from 'react';
import { TouchableOpacity,
    Text,
    StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class WhiteButton extends Component {
    render()
    {
        const {
            text,
            onPress
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

WhiteButton.propTypes = {
    text : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired
};

const styles = StyleSheet.create ({
    buttonStyle: {
        padding : 10,
        backgroundColor : '#ffffff',
        borderRadius : 5,
        elevation : 20,
        width : 130,
        height : 40
    },

    textStyle : {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#004b55',
        textAlign : 'center'
    }
});
