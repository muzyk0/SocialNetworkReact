import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {Users} from './Users';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UsersInitialStatePropsType
} from '../../redux/users-reducer';

type MapStateToPropsType = {
    users: UsersInitialStatePropsType[]
    pageSize: number
    totalCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (state: UsersInitialStatePropsType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (page: number) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow(userID: number) {
            dispatch(followAC(userID))
        },
        unfollow(userID: number) {
            dispatch(unfollowAC(userID))
        },
        setUsers(state: UsersInitialStatePropsType[]) {
            dispatch(setUsersAC(state))
        },
        setCurrentPage(page: number) {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount(totalCount: number) {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)