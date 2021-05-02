import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Profile from './Profile';
import {AppStateType} from '../../redux/store';
import {getUserProfile, ProfileType} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

// Component own properties
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        // if (!this.props.isAuth) {
        //     return <Redirect to={'/login'}/>
        // }
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


type MapStateToPropsType = {
    profile: ProfileType | null
}
export type ProfilePropsType = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


const connector = connect(mapStateToProps, {
    getUserProfile
})

export default compose<React.ComponentType>(
    connector,
    withRouter,
    withAuthRedirect
)(ProfileContainer)