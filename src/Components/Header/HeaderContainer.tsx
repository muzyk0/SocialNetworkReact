import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {authInitialStatePropsType, setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/store';

type ResponseType = {
    data: AuthResponseType
}
type AuthResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    'messages': [],
    'fieldsErrors': [],
    'resultCode': 0
}

export class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: ResponseType) => {
                const data = response.data.data
                if (!response.data.resultCode) {
                    this.props.setAuthUserData(data.id, data.login, data.email)
                }
            })
    }

    render() {

        return (<Header {...this.props}/>);
    }
}

type MapStateToProps = {
    isAuth: boolean
    login: string | null
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


const connector = connect(mapStateToProps, {
    setAuthUserData
})
export type HeaderPropsType = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);