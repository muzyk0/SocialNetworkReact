import React, {ChangeEvent} from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';
import {StoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {StoreContext} from '../../redux/StoreContext';

type PropsType = {
    store: StoreType
}

export function DialogsContainer () {
    return (<StoreContext.Consumer>
        {store => {
            const state = store.getState().dialogsPage

            const sendMessage = () => {
                store.dispatch(sendMessageAC())
            }

            const updateNewMessage = (body: string) => {
                store.dispatch(updateNewMessageBodyAC(body))
            }
            return <Dialogs state={state}
                     updateNewMessageBody={updateNewMessage}
                     onSendMessage={sendMessage}
            />
        }}
    </StoreContext.Consumer>)
}