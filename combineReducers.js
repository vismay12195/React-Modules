// This excercise of Redux is related to handling multiple reducers inside of a root reducer with the help of combineReducers() method of Redux and passing it to the store to handle the state of multiple actions of each reducer function.

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// Handling the Authentication part and creating its reducer
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const handleAuthReducer = (state: { authenticated: false }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }
        default: return state;
    }
}

// Now combining the reducer to handle the state and action of the Counter as well as the Authentication part
const rootReducer = Redux.combineReducer({
    count: counterReducer,
    auth: handleAuthReducer
});

// Passing the combined Reducer to the store to handle the states together
const store = Redux.createStore(rootReducer);