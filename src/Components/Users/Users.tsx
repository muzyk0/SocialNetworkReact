import React from 'react';
import userPhoto from '../../assets/images/userPhoto.png'
import styles from './UsersContainer.module.css'
import {ResponseItemType} from './UsersContainer';
import { NavLink } from 'react-router-dom';

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
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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