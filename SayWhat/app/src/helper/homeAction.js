import * as actions from './actionTypes.js';
import findUser  from '../../api/user/findUser';

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

    export function fetchLogging () {
        return {
            type: actions.FETCHING_LOGIN
        } 
    }

    export function fetchLoggingSuccess(result){
        return {
            type: actions.FETCHING_LOGIN_SUCCESS,
            username: result.userName
        }
    }

    export function fetchLoggingFailure(err){
        return {
            type: actions.FETCHING_LOGIN_FAILURE,
            errorCode: err.errorCode,
            errorMessage: err.errorMessage
        }
    }
    
    export const getUser = attemptingUser => dispatch => {
        dispatch(fetchLogging());
        findUser(attemptingUser)
            .then(result => {
                if (result) {
                    return dispatch(fetchLoggingSuccess(result))
                } else {
                    return dispatch(fetchLoggingFailure('bhjbbjb'))
                }
           })
      }