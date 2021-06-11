import React from "react";
import {connect, ConnectedProps} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../redux/store";
import {
    getStatus,
    getUserProfile,
    ProfileType,
    savePhoto,
    updateProfileInfo,
    updateStatus
} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

// Component own properties
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.PureComponent<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId ? this.props.authorizedUserId.toString() : ""
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(Number(userId))
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
                        updateProfileInfo={this.props.updateProfileInfo}
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
    savePhoto,
    updateProfileInfo
})

export default compose<React.ComponentType>(
    connector,
    withRouter,
)(ProfileContainer)