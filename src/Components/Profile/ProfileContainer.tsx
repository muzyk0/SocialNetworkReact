import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Profile from './Profile';
import {AppStateType} from '../../redux/store';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
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
            userId = this.props.authorizedUserId ? this.props.authorizedUserId.toString() : ''
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
    }
}


type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    auth: boolean
}
export type ProfilePropsType = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        auth: state.auth.isAuth,
    }
}


const connector = connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
})

export default compose<React.ComponentType>(
    connector,
    withRouter,
    withAuthRedirect
)(ProfileContainer)