import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Messages/Message';
import {DialogsPageType} from '../../redux/state';

type PropsType = {
    dialogPage: DialogsPageType
    newMessageText: string
    addMessage: () => void
    updateNewDialogMessage: (newText: string) => void
}

function Dialogs(props: PropsType) {

    const dialogsElements = props.dialogPage.dialogs.map(dialogs => <DialogItem key={dialogs.id} name={dialogs.name}
                                                                                id={dialogs.id}/>)

    const messagesElements = props.dialogPage.messages.map(message => <Message key={message.id}
                                                                               message={message.message}/>)


    const addMessage = () => {
        props.addMessage()
    }
    const updateNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewDialogMessage(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.newMessageText} onChange={updateNewMessage}/>
                </div>
                <div>

                    <button onClick={addMessage}>Push message</button>
                </div>
            </div>

        </div>
    );
}


export default Dialogs;
