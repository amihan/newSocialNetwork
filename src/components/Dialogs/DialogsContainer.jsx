import React from 'react';
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const dialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onNewMessageChange = (newMessage) => {
        let action = changeMessageActionCreator(newMessage)
        props.store.dispatch(action);
    }

    return (
        <Dialogs onNewMessageChange={onNewMessageChange}
                 onSendMessageClick={onSendMessageClick}
                 dialogs={state.dialogs}
                 messages={state.messages}
                 newMessage={state.newMessage}
        />
    )
}

export default dialogsContainer;