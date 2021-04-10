import React from 'react';
import userPhoto from '../../assets/images/userPhoto.png'
import styles from './UsersContainer.module.css'
import {ResponseItemType} from './UsersContainer';
import {Preloader} from '../common/Preloader/Preloader';

type PropsType = {
    users: ResponseItemType[]
    totalCount: number,
    pageSize: number
    currentPage: number
    isFetching: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (page: number) => void
}

export const Users: React.FC<PropsType> = (props) => {

        const UsersEl = props.users.map((u) => {
            return (
                <div key={u.id}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                             className={styles.userPhoto} alt={'Avatar'}/>
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
            {props.isFetching && <Preloader/>}
            <div>
                {pages.map(page => {
                    return <span
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