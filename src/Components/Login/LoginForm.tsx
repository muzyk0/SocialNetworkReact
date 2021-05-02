import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

interface Props {}

const LoginForm: React.FC<InjectedFormProps <FormDataType, Props>> = props => {
    console.log('render')
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'input'} name={'login'} placeholder={'Login'}/>
                </div>
                <div>
                    <Field component={'input'} name={'password'} placeholder={'Password'}/>
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