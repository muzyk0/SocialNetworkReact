import React from 'react';
import s from './Profile.module.css';
import ProfileLogo from './ProfileLogo/ProfileLogo';
import ProfileData from './ProfileData/ProfileData';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import {AppStateType} from '../../redux/redux-store';

export type PropsType = {
    store: AppStateType
}

function Profile() {

    return (
        <div className={s.profile}>
            <ProfileLogo />
            <ProfileData />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;