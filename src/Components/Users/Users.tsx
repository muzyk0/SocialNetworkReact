import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {UsersInitialStatePropsType} from '../../redux/users-reducer';

export const Users = (props: UsersPropsType) => {
    const state: UsersInitialStatePropsType[] = [
        {
            id: 1,
            photoUrl: 'https://avatars.githubusercontent.com/u/1764616?s=400&v=4',
            followed: false,
            fullName: 'Vlad',
            status: 'I am a boss',
            location: {city: 'Cheboksary', country: 'Russia'},
        },
        {
            id: 2,
            photoUrl: 'https://avatars.githubusercontent.com/u/1764616?s=400&v=4',
            followed: true,
            fullName: 'Dimych',
            status: 'I am not a boss',
            location: {city: 'Cheboksary', country: 'Russia'},
        },
    ]
    if (props.users.length === 0) {
        debugger
        props.setUsers(state)
    }

    const UsersEl = props.users.map((u) => {
        return (
            <div key={u.id}>
                <div>
                    <img src={u.photoUrl} style={{width: '100ps', height: '100px'}} alt={'Avatar'}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>
        )
    })

    return <div>
        {UsersEl}
    </div>
}