import * as actions from './actionTypes.js';
import { findUser } from '../../api/user/findUser';

/*
 * Action creators.
 */
    export function enterUsername (detail) {
        return {
            type : actions.ENTER_USERNAME,
            username : detail
        }
    }

    export function enterPassword (detail) {
        return {
            type : actions.ENTER_PASSWORD,
            password : detail
        }
    }

    export function recoverPassword (show) {
        return {
            type : actions.RECOVER_FORGOT_PASSWORD,
            changeState : show
        }
    }

    export function getInitalState () {
        debugger
        return {
            type : actions.GET_INITIAL_STATE,
        }
    }

    /**
     * LOG_IN action.
     * @param {Whether or not the login screen should be displayed} showScreen 
     */
    export function showLogInScreen (showScreen) {
        debugger
        return {
            type : actions.LOG_IN,
            changeState : showScreen
        }
    }

    /**
     * SIGN_UP action.
     * @param {Whether or not the signUp screen should be displayed} showSignUpScreen 
     */
    export function showSignUpScreen (showScreen) {
        return {
            type : actions.SIGN_UP,
            changeState : showScreen
        }
    }

    export function enterEmail (detail) {
        return {
            type: actions.ENTER_EMAIL,
            email : detail
        }
    }

    export function getUser (attemptingUser)
    {
        findUser(attemptingUser).then(result => {
            if (result) {
                const navigateAction = NavigationActions.navigate({
                    routeName : 'MainScreen'                      
                });
                this.props.navigation.dispatch(navigateAction); 
            } else {
                return alert('mensaje ')
            }})
        return {
            type: actions.LOG_IN,
            userName: "",
            changeState : "logged_in"
        }
    }
