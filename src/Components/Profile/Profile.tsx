import React from 'react';
import s from './Profile.module.css';
import ProfileLogo from './ProfileLogo/ProfileLogo';
import ProfileData from './ProfileData/ProfileData';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import {StoreType} from '../../redux/redux-store';

export type PropsType = {
    store: StoreType
}

function Profile(props: PropsType) {

    return (
        <div className={s.profile}>
            <ProfileLogo />
            <ProfileData />
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;