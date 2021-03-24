import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {Users} from './Users';
import {followAC, seUsersAC, unfollowAC, UsersInitialStatePropsType} from '../../redux/users-reducer';

type MapStateToPropsType = {
    users: UsersInitialStatePropsType[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (state: UsersInitialStatePropsType[]) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
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
            dispatch(seUsersAC(state))
        },
    }
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)