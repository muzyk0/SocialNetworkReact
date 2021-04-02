import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.png'

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render () {
        const UsersEl = this.props.users.map((u) => {
            return (
                <div key={u.id}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} style={{width: '100ps', height: '100px'}} alt={'Avatar'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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

        return <div>
            {UsersEl}
        </div>
    }

}