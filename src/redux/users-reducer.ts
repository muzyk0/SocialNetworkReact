export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'


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
    users: [] as UsersInitialStatePropsType[]
}

export type UsersInitialStateType = typeof initialState


type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof seUsersAC>

export const followAC = (userID: number) => {
    return {type: FOLLOW, userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
export const seUsersAC = (users: UsersInitialStatePropsType[]) => {
    return {type: SET_USERS, users} as const
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
            return {...state, users: [ ...state.users, ...action.users]}
        default:
            return state
    }


}