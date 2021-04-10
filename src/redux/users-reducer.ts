export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


export type UsersInitialStatePropsType = {
    "name": string
    "id": number
    "uniqueUrlName": string | null
    "photos": {
        "small": string | null
        "large": string | null
    },
    "status": string | null
    "followed": boolean
}

const initialState = {
    users: [] as UsersInitialStatePropsType[],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsType): UsersInitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [ ...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalCount}
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

export const followAC = (userID: number) => {
    return {type: FOLLOW, userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
export const setUsersAC = (users: UsersInitialStatePropsType[]) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}

export const setUsersTotalCountAC = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount} as const
}
