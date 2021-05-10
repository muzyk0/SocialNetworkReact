import React from 'react';
import LoginReduxForm, {FormDataType} from './LoginForm';
import {loginTC} from '../../redux/auth-reducer';
import {connect, ConnectedProps} from 'react-redux';

const LoginPage: React.FC<Props> = props => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type Props = ConnectedProps<typeof connector>

const connector = connect(null, {loginTC})


export default connector(LoginPage)