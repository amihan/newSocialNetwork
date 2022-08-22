import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.store.dispatch(changeMessageActionCreator(newMessage));
        console.log(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onNewMessageChange} value={state.newMessage}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;