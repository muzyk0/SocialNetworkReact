import React from 'react';
import Users from './Users';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {follow, getUsers, unfollow, UsersInitialStatePropsType} from '../../redux/users-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import {
    getAllowedUsers,

    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount
} from '../../redux/reselectors/users-selectors';


export class UsersContainerAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (page: number) => {
        const {getUsers, pageSize} = this.props
        getUsers(page, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
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
        users: getAllowedUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

const connector = connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow
})

export type UsersPropsType = ConnectedProps<typeof connector>

export default connector(UsersContainerAPI)