import React from 'react';
import s from './Profile.module.css';
import ProfileLogo from './ProfileLogo/ProfileLogo';
import ProfileData from './ProfileData/ProfileData';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import {ProfilePropsType} from './ProfileContainer';
import {ProfileType} from '../../redux/profile-reducer';

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            {/*<ProfileLogo />*/}
            <ProfileData profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;