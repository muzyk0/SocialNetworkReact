import React from 'react';
import s from './Profile.module.css';
import ProfileData from './ProfileData/ProfileData';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import {ProfilePropsType} from './ProfileContainer';

interface Props {
    isOwner: boolean
    savePhoto: (photo: File) => void
}

const Profile: React.FC<ProfilePropsType & Props> = props => {
    return (
        <div className={s.profile}>
            {/*<ProfileLogo />*/}
            <ProfileData
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;