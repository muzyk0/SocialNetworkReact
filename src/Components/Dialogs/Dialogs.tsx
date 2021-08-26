import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Messages/Message";
import { DialogsPropsType } from "./DialogsContainer";
import AddMessageForm, { MessageFormDataType } from "./AddMessageForm";

function Dialogs(props: DialogsPropsType) {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((dialogs) => (
    <DialogItem key={dialogs.id} name={dialogs.name} id={dialogs.id} />
  ));

  const messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  const addNewMessage = (formData: MessageFormDataType) => {
    props.onSendMessage(formData.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

export default Dialogs;
