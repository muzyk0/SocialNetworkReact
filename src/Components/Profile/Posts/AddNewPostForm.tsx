import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type NewPostFormDataType = {
    pastText: string
}
type Props = {}

const AddNewPostForm: React.FC<InjectedFormProps<NewPostFormDataType, Props>> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'pastText'} placeHolder={'Write new post'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const NewPostReduxForm = reduxForm<NewPostFormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default NewPostReduxForm;