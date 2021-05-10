import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type MessageFormDataType = {
    newMessageBody: string
}

interface Props {
}

const AddMessageForm: React.FC<InjectedFormProps <MessageFormDataType, Props>> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeHolder={'Enter your message'}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
};
const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMessageFormRedux;