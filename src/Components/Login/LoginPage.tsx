import React from 'react';
import LoginReduxForm from './LoginForm';

type Props = {}

const LoginPage: React.FC<Props> = props => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default LoginPage