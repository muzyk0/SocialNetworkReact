import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

interface Props {}

const LoginForm: React.FC<InjectedFormProps <FormDataType, Props>> = props => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input}
                           name={'email'}
                           placeholder={'Email'}
                           validate={required}
                    />
                </div>
                <div>
                    <Field component={Input}
                           name={'password'}
                           placeholder={'Password'}
                           type={'password'}
                           validate={required}
                    />
                </div>
                <div>
                    <Field component={Input}
                           name={'rememberMe'}
                           type={'checkbox'}
                    />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'}) (LoginForm)

export default LoginReduxForm;