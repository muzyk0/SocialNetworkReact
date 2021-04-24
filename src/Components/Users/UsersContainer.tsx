import React from 'react';
import {Users} from './Users';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow,
    UsersInitialStatePropsType
} from '../../redux/users-reducer';
import {Preloader} from '../common/Preloader/Preloader';


export class UsersContainerAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
        this.props.setCurrentPage(page)
    }

    onFollow = (id: number) => {
        this.props.follow(id)
    }
    onUnFollow = (id: number) => {
        this.props.unfollow(id)
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

const connector = connect(mapStateToProps, {
        setCurrentPage,
    getUsers,
    follow,
    unfollow
})

export type UsersPropsType = ConnectedProps<typeof connector>

export default connector(UsersContainerAPI)