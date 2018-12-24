import * as actions from './actionTypes.js';
import { combineReducers } from 'redux';

/*
 * Initial state that shows only the SignUp or LogIn button. 
 */
const initialState = {
        loginState : false,
        signupState : false,
        forgotPasswordState : false,
        username : "",
        password : "",
        fetching : false,
        errorCode : "",
        errorMessage : "",
        error : false,


        email : "",
        state: "initial",

};

/**
 * Reducer for the Home screen.
 * @param {Previous state of the application} state 
 * @param {Action to be executed in the Home screen (e.g. LogIn, SignUp)} action 
 */
const homeReducer = (state = initialState, action) => {
    switch (action.type){

        /* Log in states */
        case actions.FETCHING_LOGIN:{
            return Object.assign({}, state, {
                error: true,
                errorCode : "",
                errorMessage : "",
                fetching: true,
                loginState : false,
            })
        }
        case actions.FETCHING_LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                error: true,
                errorCode : "",
                errorMessage : "",
                fetching: false,
                loginState: true,
                username: action.username,
            }) 
        }
        case actions.FETCHING_LOGIN_FAILURE:{
            return Object.assign({}, state, {
                error: true,
                errorCode : action.errorCode,
                errorMessage : action.errorMessage,          
                fetching: false,
                loginState : false,
            })
        }

        /* Sign up states */
        case actions.FETCHING_SIGNUP: {
            return Object.assign({}, state, {
                error: false,
                errorCode: "" ,
                errorMessage: "",
                fetching: true,
                loginState: false
            })
        }
        case actions.FETCHING_SIGNUP_FAILURE: {
            return Object.assign({}, state, {
                error: true,
                errorCode: action.errorCode,
                errorMessage: action.errorMessage,
                fetching: false,
                loginState: false
            })
        }
        case actions.FETCHING_SIGNUP_SUCCESS: {
            return Object.assign({}, state, {
                error: false,
                errorCode: "",
                errorMessage: "",
                fetching: false,
                loginState: true
            })
        }

        default:
            return state;    
    }
};

export default homeReducer 
    