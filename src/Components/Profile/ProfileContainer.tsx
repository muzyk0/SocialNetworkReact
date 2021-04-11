import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import axios from 'axios';
import Profile from './Profile';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter } from 'react-router-dom';


type ResponseType = {
    data: ProfileType
}
type PathParamsType = {
    userId: string
}

// Component own properties
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        debugger
        // if (!userId) {
        //     userId = '2'
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

const connector = connect(mapStateToProps, {
    setUserProfile
})
export type ProfilePropsType = ConnectedProps<typeof connector>;

export default connector(WithUrlDataContainerComponent);