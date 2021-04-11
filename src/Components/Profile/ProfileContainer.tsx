import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import axios from 'axios';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';


type ResponseType = {
    data: ProfileType
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response: ResponseType) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


type MapStateToPropsType = {
    profile: ProfileType | null
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


const connector = connect(mapStateToProps, {
    setUserProfile
});

export type ProfilePropsType = ConnectedProps<typeof connector>;

export default connector(ProfileContainer);