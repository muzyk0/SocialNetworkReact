import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UsersInitialStatePropsType
} from '../../redux/users-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import {ServerData, usersAPI} from '../../API/api';



export class UsersContainerAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data: ServerData) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    onFollow = (id: number) => {
        this.props.toggleFollowingProgress(true, id)
        usersAPI.follow(id)
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.follow(id)
                    this.props.toggleFollowingProgress(false, id)
                }
            })
    }
    onUnFollow = (id: number) => {
        this.props.toggleFollowingProgress(true, id)
        usersAPI.unfollow(id)
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.unfollow(id)
                    this.props.toggleFollowingProgress(false, id)
                }
            })
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   onPageChanged={this.onPageChanged}
                   follow={this.onFollow}
                   unfollow={this.onUnFollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}


type MapStateToPropsType = {
    users: UsersInitialStatePropsType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

const mapDispatchToProps2 = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
}

export type UsersPropsType = MapStateToPropsType & typeof mapDispatchToProps2

export default connect(mapStateToProps, mapDispatchToProps2)(UsersContainerAPI)