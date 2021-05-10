import React from 'react';
import LoginReduxForm, {FormDataType} from './LoginForm';
import {login} from '../../redux/auth-reducer';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/store';

const LoginPage: React.FC<Props> = props => {

    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    if(props.isAuth.isAuth) {
        return <Redirect to={`/profile/${props.isAuth.id}`} />
    }
    return (
        <div>
            <h1>Login</h1>
            <div>{props.isAuth.error}</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth
})
const connector = connect(mapStateToProps, {login})

export default connector(LoginPage)

// Types
type Props = ConnectedProps<typeof connector>
