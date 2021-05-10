import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';


export type NewPostFormDataType = {
    pastText: string
}
type Props = {}

const maxLength10 = maxLength(10)

const AddNewPostForm: React.FC<InjectedFormProps<NewPostFormDataType, Props>> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'pastText'}
                    placeHolder={'Enter new post'}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const NewPostReduxForm = reduxForm<NewPostFormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default NewPostReduxForm;