import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';
import {StoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';

type PropsType = {
    store: StoreType
}

export function DialogsContainer (props: PropsType) {
    const state = props.store.getState().dialogsPage

    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    const updateNewMessage = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs state={state}
        updateNewMessageBody={updateNewMessage}
        onSendMessage={sendMessage}
    />
}