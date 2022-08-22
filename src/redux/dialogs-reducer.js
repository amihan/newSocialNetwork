const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});

export const changeMessageActionCreator = (newMessage) => ({
    type: CHANGE_MESSAGE,
    newMessage: newMessage,
});

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = {
                id: 6,
                message: state.newMessage
            };
            state.messages.push(body);
            state.newMessage = '';
            return state;
        case CHANGE_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;