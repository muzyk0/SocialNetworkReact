import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

interface Props {}

const LoginForm: React.FC<InjectedFormProps <FormDataType, Props>> = props => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'input'} name={'login'} placeholder={'Login'}/>
                </div>
                <div>
                    <Field component={'input'} name={'password'} placeholder={'Password'} type={'password'}/>
                </div>
                <div>
                    <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'}) (LoginForm)

export default LoginReduxForm;