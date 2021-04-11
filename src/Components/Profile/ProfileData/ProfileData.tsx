import React from 'react';
import styles from './ProfileData.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import defaultUserPhoto from '../../../assets/images/userPhoto.png'

type PropsType = {
    profile: ProfileType | null
}
const ProfileData = (props: PropsType) => {
    const {profile} = props

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.profileData}>
            <img src={profile.photos.small ? profile.photos.small : defaultUserPhoto} alt="profile avatar"/>
            <div>
                <h3>{profile.fullName}</h3>
            </div>
            <div>
                <h3>About me:</h3>
                <span>{profile.aboutMe}</span>
            </div>
            <div>
                <h3>My contacts:</h3>
                <ProfileContacts contacts={profile.contacts}/>
            </div>
            {profile.lookingForAJob && <div>
                <h3>Ищу работу</h3>
                {profile.lookingForAJobDescription}
            </div>}
        </div>
    )
}

export default ProfileData;

type ProfileContactsType = {
    contacts: {
        'facebook': string | null
        'website': string | null
        'vk': string | null
        'twitter': string | null
        'instagram': string | null
        'youtube': string | null
        'github': string | null
        'mainLink': string | null
    }
}

const ProfileContacts = (props: ProfileContactsType) => {

    const netWork = Object.keys(props.contacts)
    const netWorkLinks = Object.values(props.contacts)

    netWork.map(key => (<div>{key}</div>))

    return (
        <div className={styles.wrapperContacts}>

            <div className={styles.contacts}>{netWork.map(key => {
                return (
                    <div>
                        {key}
                    </div>
                )
            })}
            </div>

            <div className={styles.contacts}>{netWorkLinks.map(value => {
                return (
                    <div>
                        {value ? value : 'Не заполнено'}
                    </div>
                )
            })
            }</div>
        </div>
    )
}