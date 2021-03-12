import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Messages/Message';
import {ActionsType, addMessageAC, DialogsPageType, updateNewMessageTextAC} from '../../redux/state';

type PropsType = {
    dialogPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: PropsType) {

    const dialogsElements = props.dialogPage.dialogs.map(dialogs => <DialogItem key={dialogs.id} name={dialogs.name}
                                                                                id={dialogs.id}/>)

    const messagesElements = props.dialogPage.messages.map(message => <Message key={message.id}
                                                                               message={message.message}/>)


    const addMessage = () => {
        props.dispatch(addMessageAC())
    }
    const updateNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewDialogMessage(e.currentTarget.value)

        const messageText = e.currentTarget.value;
        props.dispatch(updateNewMessageTextAC(messageText))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.dialogPage.newMessageText} onChange={updateNewMessage}/>
                </div>
                <div>

                    <button onClick={addMessage}>Push message</button>
                </div>
            </div>

        </div>
    );
}


export default Dialogs;
