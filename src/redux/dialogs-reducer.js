const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});

export const changeMessageActionCreator = (newMessage) => ({
    type: CHANGE_MESSAGE,
    newMessage:newMessage,
});

const dialogsReducer = (state, action) => {
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