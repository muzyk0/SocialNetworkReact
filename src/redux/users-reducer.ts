import {Dispatch} from 'redux';
import {usersAPI} from '../API/api';

export enum USERS_ACTIONS {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS',
}


export type UsersInitialStatePropsType = {
    'name': string
    'id': number
    'uniqueUrlName': string | null
    'photos': {
        'small': string | null
        'large': string | null
    },
    'status': string | null
    'followed': boolean
}

export type UsersInitialStateType = typeof initialState

const initialState = {
    users: [] as UsersInitialStatePropsType[],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsType): UsersInitialStateType => {

    switch (action.type) {
        case USERS_ACTIONS.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case USERS_ACTIONS.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case USERS_ACTIONS.SET_USERS:
            return {...state, users: [...action.users]}
        case USERS_ACTIONS.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case USERS_ACTIONS.SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalCount}
        case USERS_ACTIONS.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case USERS_ACTIONS.TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollow
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }


}


export type ActionsType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


// Action Creators
export const followSuccess = (userID: number) => {
    return {type: USERS_ACTIONS.FOLLOW, userID} as const
}
export const unfollowSuccess = (userID: number) => {
    return {type: USERS_ACTIONS.UNFOLLOW, userID} as const
}
export const setUsers = (users: UsersInitialStatePropsType[]) => {
    return {type: USERS_ACTIONS.SET_USERS, users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: USERS_ACTIONS.SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: USERS_ACTIONS.SET_TOTAL_USERS_COUNT, totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: USERS_ACTIONS.TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleFollowingProgress = (isFollow: boolean, userId: number) => {
    return {type: USERS_ACTIONS.TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFollow, userId} as const
}

// Thunk Creator
export const getUsers = (page: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize)
        .then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}
export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
                dispatch(toggleFollowingProgress(false, userId))
            }
        })
}
export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
                dispatch(toggleFollowingProgress(false, userId))
            }
        })
}