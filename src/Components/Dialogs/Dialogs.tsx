import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Messages/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';


function Dialogs(props: DialogsPropsType) {

    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(dialogs => <DialogItem key={dialogs.id}
                                                                           name={dialogs.name}
                                                                           id={dialogs.id}/>)

    const messagesElements = state.messages.map(message => <Message key={message.id}
                                                                          message={message.message}/>)
    const newMessageBody = state.newMessageBody


    const onSendMessageClick = () => {
        props.onSendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        const messageText = e.currentTarget.value;
        props.updateNewMessageBody(messageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder={'Enter your message'}
                              value={newMessageBody}
                              onChange={onNewMessageChange}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>

        </div>
    );
}


export default Dialogs;
