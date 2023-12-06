// This excercise of Redux is related to sending the data that the user is interacting with the website and sending it through action to the store of Redux
const ADD_NOTE = 'ADD_NOTE';

// Now creating a reducer to handle the state and action of the notes taking app
const noteReducer = (state = 'Initial State', action) => {
    switch (action.type) {
        case ADD_NOTE: return action.text;
        default: return state;
    }
}

// First creating the action which has a property of text which will be sent to the store
const addNoteText = (note) => {
    return {
        type: ADD_NOTE,
        text: note
    }
}

// In order to send this data to the store of Redux
const store = Redux.createStore(noteReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());