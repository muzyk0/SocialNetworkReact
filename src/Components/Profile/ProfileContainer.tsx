import React from "react";
import { connect, ConnectedProps } from "react-redux";
import Profile from "./Profile";
import { AppStateType } from "../../redux/store";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    updateStatus,
    saveProfile,
} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { ProfileType } from "../../types/types";

type PathParamsType = {
    userId: string;
};

// Component own properties
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

class ProfileContainer extends React.PureComponent<PropsType> {
    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        if (!userId) {
            console.error(
                "ID should exists in URI params or in state ('authorizedUserId')"
            );
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(
        prevProps: Readonly<PropsType>,
        prevState: Readonly<{}>,
        snapshot?: any
    ) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                getUserProfile={this.props.getUserProfile}
            />
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null;
    status: string;
    authorizedUserId: number | null;
    auth: boolean;
};
export type ProfilePropsType = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        auth: state.auth.isAuth,
    };
};

const connector = connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
});

export default compose<React.ComponentType>(
    connector,
    withRouter
)(ProfileContainer);
