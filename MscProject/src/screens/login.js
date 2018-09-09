import React, { Component } from 'react';
import { 
    ImageBackground, 
    View, 
    TextInput, 
    StyleSheet,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get( 'window' );

export default class login extends Component{
    render(){
        return (
            <ImageBackground style = { styles.imageBackgroundContainer }>
            <View style = { styles.usernameTextInputContainer }>
                 <TextInput style = {styles.textInputFont}/>        
            </View>
            <View style = { styles.passwordTextInputContainer }>
                <TextInput style = {{ width : '50%', height : height*0.1 }}/>
            </View>
        </ImageBackground>
        )
    }
}

const styles = StyleSheet.create ({
    imageBackgroundContainer : {
        flex : 1,
        flexDirection : 'column'
    },

    usernameTextInputContainer : {
        flex : 1,
        backgroundColor : 'yellow',
        flexDirection : 'row',
        width : width * 0.7,
        height : height * 0.10,
        alignItems : 'flex-end',
        justifyContent : 'center',
    },

    passwordTextInputContainer : {
        flex : 1,
        backgroundColor: 'green',
        flexDirection : 'row', 
        width : width * 0.7,
        height : height * 0.10,
        alignItems : 'flex-start',
        justifyContent : 'center'
    },

    textInputFont : {
        fontSize : 14,
        fontFamily :  'Ubuntu-Regular', 
        width : '50%',
        height : height * 0.1
    }
});