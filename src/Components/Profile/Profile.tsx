import React from 'react';
import s from './Profile.module.css';
import ProfileLogo from './ProfileLogo/ProfileLogo';
import ProfileData from './ProfileData/ProfileData';
import Posts from './Posts/Posts';
import {ProfilePostType} from '../../redux/state';

export type ProfilePageType = {
    profilePage: ProfilePostType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function Profile(props: ProfilePageType) {

    return (
        <div className={s.profile}>
            <ProfileLogo />
            <ProfileData />
            <Posts posts={props.profilePage.posts}
                   newPostText={props.profilePage.newPostText}
                   addPost={props.addPost}
                   updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;