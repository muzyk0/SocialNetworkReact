import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.png'
import styles from './UsersContainer.module.css'

type ResponseItemType = {
    'name': string
    'id': number
    'uniqueUrlName': null | string
    'photos': {
        'small': null | string
        'large': null | string
    },
    'status': null | string
    'followed': boolean
}
type ServerData = {
    'items': ResponseItemType[]
    'totalCount': number
    'error': null | string
}
type ResponseType = {
    data: ServerData
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<ServerData>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: ResponseType) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)

        axios.get<ServerData>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response: ResponseType) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        const UsersEl = this.props.users.map((u) => {
            return (
                <div key={u.id}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                             className={styles.userPhoto} alt={'Avatar'}/>
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

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {pages.map(page => {
                return <span
                    className={this.props.currentPage === page ? styles.selectedPage : ''}
                    onClick={() => {this.onPageChanged(page)}}
                >{page}</span>
            })}
            {UsersEl}
        </div>
    }

}