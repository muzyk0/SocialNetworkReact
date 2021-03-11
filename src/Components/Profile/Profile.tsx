import React from 'react';
import s from './Profile.module.css';
import ProfileLogo from './ProfileLogo/ProfileLogo';
import ProfileData from './ProfileData/ProfileData';
import Posts from './Posts/Posts';
import {ActionsType, ProfilePostType} from '../../redux/state';

export type ProfilePageType = {
    profilePage: ProfilePostType
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePageType) {

    return (
        <div className={s.profile}>
            <ProfileLogo />
            <ProfileData />
            <Posts posts={props.profilePage.posts}
                   newPostText={props.profilePage.newPostText}
                   dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;