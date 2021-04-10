export enum USERS_ACTIONS {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
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
        case USERS_ACTIONS.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }


}

export type UsersInitialStateType = typeof initialState


export type ActionsType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

export const follow = (userID: number) => {
    return {type: USERS_ACTIONS.FOLLOW, userID} as const
}
export const unfollow = (userID: number) => {
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
