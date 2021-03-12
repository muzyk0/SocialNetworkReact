import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Messages/Message';
import {ActionsType, sendMessageAC, DialogsPageType, updateNewMessageBodyAC} from '../../redux/state';

type PropsType = {
    dialogPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: PropsType) {

    const dialogsElements = props.dialogPage.dialogs.map(dialogs => <DialogItem key={dialogs.id}
                                                                                name={dialogs.name}
                                                                                id={dialogs.id}/>)

    const messagesElements = props.dialogPage.messages.map(message => <Message key={message.id}
                                                                               message={message.message}/>)
    const newMessageBody = props.dialogPage.newMessageBody


    const onSendMessage = () => {
        props.dispatch(sendMessageAC())
    }
    const updateNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {

        const messageText = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyAC(messageText))
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
                              onChange={updateNewMessage}/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>

        </div>
    );
}


export default Dialogs;
