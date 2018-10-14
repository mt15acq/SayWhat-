import { combineReducers } from 'redux';

const initialState = {
        initialState : true,
        loginState : false,
        signupState : false,
        username :  ''
};

const homeReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type){
        case 'LOG_IN':
            return loginState = action.changeState;
        case 'SIGN_UP':
            return state;
        default:
            return state;    
    }
};

export default combineReducers ({
    home : homeReducer
});
    