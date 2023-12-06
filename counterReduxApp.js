// This exercise of Redux, creating the counter App's logic using the core concepts of Redux.


// creating the constants for action's type key assignment
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Creating the store's reducer function that is handling the action creator functions 
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

// Action Creator for the Increment action
const incAction = () => {
    return {
        type: INCREMENT
    }
}

// Action Creator for the decrement action
const decAction = () => {
    return {
        type: DECREMENT
    }
}

// Creating the store to handle the actions and state
const store = Redux.createStore(counterReducer);
console.log(store.getState());