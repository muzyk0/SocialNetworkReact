import React from 'react';
import userPhoto from '../../assets/images/userPhoto.png'
import styles from './UsersContainer.module.css'
import {NavLink} from 'react-router-dom';
import {ResponseItemType} from '../../API/api';

type PropsType = {
    users: ResponseItemType
    followingInProgress: number[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (page: number) => void
}

export const Users: React.FC<PropsType> = props => {
    const {
        users,
        followingInProgress,
        follow,
        unfollow,
    } = props

    return <>

        <div key={users.id}>
            <div>
                <NavLink to={`profile/${users.id}`}>
                    <img
                        src={users.photos.small !== null ? users.photos.small : userPhoto}
                        className={styles.userPhoto} alt={'Avatar'}/>
                </NavLink>
            </div>
            <div>
                {users.followed
                    ? <button disabled={followingInProgress.some(id => id === users.id)}
                              onClick={() => {
                                  unfollow(users.id)
                              }}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === users.id)}
                              onClick={() => {
                                  follow(users.id)
                              }}>Follow</button>}
            </div>
            <div>
                <div>{users.name}</div>
                <div>{users.status}</div>
            </div>
            <div>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </div>
        </div>

    </>
}

export default Users