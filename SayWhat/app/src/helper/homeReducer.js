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
        email : "",
        state: "initial",
        fetching : false,
        errorCode : "",
        errorMessage : ""
};

/**
 * Reducer for the Home screen.
 * @param {Previous state of the application} state 
 * @param {Action to be executed in the Home screen (e.g. LogIn, SignUp)} action 
 */
const homeReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.FETCHING_LOGIN:{
            return Object.assign({}, state, {
                fetching: true,
                errorCode : "",
                errorMessage : ""
            })
        }
        case actions.FETCHING_LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                fetching: false,
                loginState: true,
                username: action.username,
                errorCode : "",
                errorMessage : ""
            }) 
        }
        case actions.FETCHING_LOGIN_FAILURE:{
            return Object.assign({}, state, {
                fetching: false,
                errorCode : action.errorCode,
                errorMessage : action.Message
            })
        }
        
        case actions.GET_INITIAL_STATE:
            return Object.assign({}, state, {
                loginState : false,
                signupState : false,
                forgotPasswordState : false
            })
        case actions.LOG_IN:
            return Object.assign({}, state, {
                loginState : action.changeState,
                username: action.username
            })    
        case actions.ENTER_USERNAME:
            return Object.assign({}, state, {
                username : actions.username
            })        
        case actions.ENTER_PASSWORD:
            return Object.assign({}, state, {
             password: action.password
            })      
        case actions.ENTER_EMAIL :
            return Object.assign({}, state, {
                email : actions.email
            })
        case actions.SIGN_UP:
            return Object.assign({}, state, {
                loginState : false,
                signupState : action.changeState
            })   
        case actions.RECOVER_FORGOT_PASSWORD:
            return Object.assign({}, state, {
                loginState : false,
                signupState : false,
                forgotPasswordState : action.changeState,
            })  
        default:
            return state;    
    }
};

export default homeReducer 
    