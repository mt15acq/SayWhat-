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
    