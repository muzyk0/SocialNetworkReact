import {createSelector} from 'reselect';
import {AppStateType} from '../store';

const getAllowedUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getAllowedUsers = createSelector(
    getAllowedUsersSelector,
    (users) => users.filter(u => true)
)

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}