import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    TouchableOpacity, 
    Text, 
    StyleSheet 
} from 'react-native';

export default class customButton extends Component {
    render(){
        const { 
            text,
            onPress 
        } = this.props;

        return (
            <TouchableOpacity 
                style = { styles.buttonStyle }
                onPress = {() => onPress() }>
                <Text style = { styles.textStyle }>
                    { text }
                </Text>
            </TouchableOpacity>
        );
    }
}

customButton.propTypes = {
    text : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    buttonStyle : {
        alignItems : 'center',
        backgroundColor : 'white',
        borderRadius : 10,
        elevation : 10,
        height : 40,
        padding : 10,
        width : 120       
    },

    textStyle : {
        color : '#004B55',
        fontFamily : 'Ubuntu Regular',
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 16        
    }

})