import React, {useState} from 'react';
import styles from './ProfileData.module.css'
import {ContactsType, ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import defaultUserPhoto from '../../../assets/images/userPhoto.png'
import EditableSpan from '../../common/EditableSpan/EditableSpan';
import {ProfileForm} from './ProfileForm';


const buildInitialFormValues = (data: Partial<ProfileType> | null): ProfileType => {
    const initialValues: ProfileType = {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        },
        aboutMe: '',
        ...data
    };
    return initialValues;
}

type PropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    updateProfileInfo: (values: ProfileType) => void
}

const ProfileData = (props: PropsType) => {
    const {
        profile,
        status,
        updateStatus,
        isOwner,
        updateProfileInfo,
    } = props

    const [editMode, setEditMode] = useState<boolean>(false)


    const initialValues = buildInitialFormValues(profile)

    const onSubmitForm = (values: ProfileType) => {
        alert(JSON.stringify(values))
        updateProfileInfo(values)
        setEditMode(false)
    }

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.profileData}>
            <img src={profile.photos.small ? profile.photos.small : defaultUserPhoto} alt="profile avatar"/>
            {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <EditableSpan title={status} onChange={updateStatus}/>
            {editMode
                ? <ProfileForm
                    initialValues={initialValues}
                    onSubmit={onSubmitForm}/>

                : <ProfileBlock
                    profile={profile}
                    isOwner={isOwner}
                    setEditMode={() => setEditMode(true)}/>}
        </div>
    )
}

export default ProfileData;

interface ProfileBlockType {
    profile: ProfileType
    isOwner: boolean
    setEditMode: () => void
}

const ProfileBlock: React.FC<ProfileBlockType> = props => {
    const {profile, isOwner, setEditMode} = props

    return (
        <div>
            {isOwner && <div>
                <button onClick={setEditMode}>
                    Edit Profile
                </button>
            </div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>


            <div>
                <p><b>Looking for a job</b>: {props.profile.lookingForAJob ? `I am looking for a job` : `I'm working.`}
                </p>
                <p><b>My professional skills</b>: {props.profile.lookingForAJobDescription}</p>
            </div>


            <div>
                <h3>About me:</h3>
                <span>{props.profile.aboutMe}</span>
            </div>
            <div>
                <h3>My contacts:</h3>
                <div className={styles.contacts}>
                    {props.profile && Object.keys(props.profile.contacts)
                        .map(key => <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key as keyof ContactsType]}
                        />)}
                </div>
            </div>
        </div>
    )
}


type ProfileContactsType = {
    contactTitle: string
    contactValue: string | null
}

export const Contact: React.FC<ProfileContactsType> = props => {
    const {contactTitle, contactValue} = props
    return (
        <div><b>{contactTitle}</b>: {contactValue ? contactValue : 'No contact'}</div>
    )
}