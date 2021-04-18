import React from 'react';
import userPhoto from '../../assets/images/userPhoto.png'
import styles from './UsersContainer.module.css'
import {ResponseItemType} from './UsersContainer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type PropsType = {
    users: ResponseItemType[]
    totalCount: number,
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (page: number) => void
}

export const Users: React.FC<PropsType> = (props) => {

    const UsersEl = props.users.map((u) => {
        return (
            <div key={u.id}>
                <div>
                    <NavLink to={`profile/${u.id}`}><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                                         className={styles.userPhoto} alt={'Avatar'}/></NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '458be47a-15a2-43bc-bb9e-a21974e6a059'
                                    }
                                }
                            )
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })

                        }}>Unfollow</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                headers: {
                                    'API-KEY': '458be47a-15a2-43bc-bb9e-a21974e6a059'
                                }
                                }
                            )
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })

                        }}>Follow</button>}
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>
        )
    })

    // let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = []

    for (let i = 1; i <= 30; i++) {
        pages.push(i)
    }

    return <>

        <div>
            {pages.map(page => {
                return <span
                    key={page}
                    className={props.currentPage === page ? styles.selectedPage : ''}
                    onClick={() => {
                        props.onPageChanged(page)
                    }}
                >{page} </span>
            })}
            {UsersEl}
        </div>
    </>
}