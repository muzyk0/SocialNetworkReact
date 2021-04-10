export enum USERS_ACTIONS {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    IS_FETCHING = 'IS_FETCHING',
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

const initialState = {
    users: [] as UsersInitialStatePropsType[],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case USERS_ACTIONS.IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }


}

export type UsersInitialStateType = typeof initialState


type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof setIsFetchingAC>

export const followAC = (userID: number) => {
    return {type: USERS_ACTIONS.FOLLOW, userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: USERS_ACTIONS.UNFOLLOW, userID} as const
}
export const setUsersAC = (users: UsersInitialStatePropsType[]) => {
    return {type: USERS_ACTIONS.SET_USERS, users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: USERS_ACTIONS.SET_CURRENT_PAGE, currentPage} as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {type: USERS_ACTIONS.SET_TOTAL_USERS_COUNT, totalCount} as const
}
export const setIsFetchingAC = (isFetching: boolean) => {
    return {type: USERS_ACTIONS.IS_FETCHING, isFetching} as const
}
