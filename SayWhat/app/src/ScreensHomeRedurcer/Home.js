import React, { Component } from 'react';
import { 
    BackHandler,
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    View } from 'react-native';

import { connect } from 'react-redux';

import { showLogInScreen } from './../helper/homeAction';
import { getInitalState } from './../helper/homeAction';
import { showSignUpScreen } from './../helper/homeAction';
import Login from './Login';
import Signup from './Signup';
import TrasparentButton from '../components/TransparentButton';
import WhiteButton from '../components/WhiteButton';

/* Determine screen dimension */
const { width, height } = Dimensions.get( 'window' );

/* This component represents the initial screen of the app */
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    /* Handle to configure the back button */
    handleBackPress = () => {
        this.props.onPressBack();
        return true;
    }
    
    /* */
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {

        return (          
            <View style = { defaultStyle.backgroundImg }>

                {/* Log  in component to render the fields for user to enter the app */}
                <Login show = { this.props.home.loginState }/>
                
                {/* Sign up component to render the fields for user to register and enter the app */}
                <Signup show = { this.props.home.sigunpState }/>
             
                {/* SW Logo */}
                <View style = { !this.props.home.loginState && !this.props.home.sigunpState ? defaultStyle.logoView : null }>
                    <Image source = { !this.props.home.loginState && !this.props.home.sigunpState ? require ('../../assets/img/logo/SayWhatLogo.png'): null } />   
                </View>

                {/* Sign up button that renders the sign up component */}
                <View style = { !this.props.home.loginState && !this.props.home.sigunpState ? defaultStyle.signUpView : null }>
                    
                    { !this.props.home.loginState && !this.props.home.sigunpState ? 
                        <WhiteButton 
                            text = "SIGN UP"
                            onPress = { () => {
                                //alert("Hi there!!!"); 
                                //const navigateAction = NavigationActions.navigate({
                                //    routeName : 'SignupScreen'                      
                                //});
                                //this.props.navigation.dispatch(navigateAction);
                                //this.setState({ initialState : false , loginState : false, sigunpState : true });
                                this.props.onPressSignUp(true);
                            }} 
                        /> 
                    : null }
                </View>

                {/* Log in button that renders the log in component */}
                <View style = { !this.props.home.loginState && !this.props.home.sigunpState ? defaultStyle.signUpView : null }>
                    
                    { !this.props.home.loginState && !this.props.home.sigunpState ? 
                        <TrasparentButton 
                            text = "LOG IN"
                            onPress = { () => { 
                                //const navigateAction = NavigationActions.navigate({
                                 //   routeName : 'LoginScreen'                      
                                //});
                                //this.setState({ initialState : false , loginState : true, sigunpState : false });
                                this.props.onPressLogIn(true);
                                //this.props.navigation.dispatch(navigateAction);
                        }} />
                    : null }    
                </View>
            </View>
        );
    }
}


/* Style components */
const defaultStyle = StyleSheet.create ({
    backgroundImg : {
       flex : 1,
       flexDirection : 'column',
       width,
       height,
    },

    logoView : {
        flex : 0.5,
        flexDirection : 'row',
       // backgroundColor : 'red',
        alignItems : 'center',
        justifyContent : 'center',
    },

    signUpView : {
        flex : 0.2,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'center',
       // backgroundColor : 'pink'
    },

    loginView : {
        flex : 0.3,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'center',
       // backgroundColor : 'red's
    },
})

const mapStateToProps = (state) => {
    const { home } = state
    return { home }
}

const mapDispatchToProps = (dispatch) => 
({
    onPressBack : () => dispatch(getInitalState()),
    onPressLogIn : (show) => dispatch(showLogInScreen(show)),
    onPressSignUp : (show) => dispatch(showSignUpScreen(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);