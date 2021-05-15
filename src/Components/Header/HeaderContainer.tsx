import React from 'react';
import {Header} from './Header';
import {connect, ConnectedProps} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/store';

export class HeaderContainer extends React.Component<HeaderPropsType> {

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
    logout,
})
export default connector(HeaderContainer);

// Types
export type HeaderPropsType = ConnectedProps<typeof connector>;
