import * as actions from './actionTypes.js';
import findUser  from '../../api/user/findUser';
import postUser from '../../api/user/postUser';
import * as errors from '../error/errorMessage';

/*
 * Action creators.
 */

    /* Log in actions */
    export const getUser = attemptingUser => dispatch => {
        dispatch(fetchLogging());
        findUser(attemptingUser)
            .then(result => {
                if (result) {
                    return dispatch(fetchLoggingSuccess(result))
                } else {
                    return dispatch(fetchLoggingFailure({err:{ errorCode : '404', errorMessage: errors.invalidUserNameOrPassword }})
                )}
            })
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
        debugger;
        return {
            type: actions.FETCHING_LOGIN_FAILURE,
            errorCode: err.err.errorCode,
            errorMessage: err.err.errorMessage
        }
    }
    

    /* Sign up actions */
    export const createUser = newUser => dispatch => {
        debugger
        dispatch(fetchSignup());

        //if(validateUser(newUser)){
            postUser(newUser)
            .then(result => {
                if(result){
                    return dispatch(fetchSignupSuccess())
                }
                else {
                    //return dispatch(fetchSignupFailure({err : { errorCode: '404' , errorMessage: "Sign up didnt work" }}))
                    return dispatch(fetchSignupFailure({err : { errorCode: '404' , errorMessage: "Sign up didnt work" }}))

                }
            })
        // } else {
        //     return dispatch(fetchSignupFailure({err : { errorCode: '404' , errorMessage: "Sign up didnt work" }}))
        // }  
    }

    export function fetchSignup (){
        return {
            type: actions.FETCHING_SIGNUP
        }
    }

    export function fetchSignupSuccess(){
        return {
            type: actions.FETCHING_SIGNUP_SUCCESS
        }
    }

    export function fetchSignupFailure(err){
        return {
            type: actions.FETCHING_SIGNUP_FAILURE,
            errorCode: err.err.errorCode,
            errorMessage: err.err.errorMessage
        }
    }

    