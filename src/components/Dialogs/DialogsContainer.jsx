import React from 'react';
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (newMessage) => {
            dispatch(changeMessageActionCreator(newMessage));

        },
        onSendMessageClick: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default dialogsContainer;