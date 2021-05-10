import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, required} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControls/FormsControls';

export type MessageFormDataType = {
    newMessageBody: string
}

interface Props {
}
const maxLength100 = maxLength(100)

const AddMessageForm: React.FC<InjectedFormProps <MessageFormDataType, Props>> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageBody'}
                    placeHolder={'Enter your message'}
                    validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
};
const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMessageFormRedux;