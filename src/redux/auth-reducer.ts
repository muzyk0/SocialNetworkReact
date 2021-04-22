import {usersAPI} from '../API/api';
import {Dispatch} from 'redux';

export enum USERS_ACTIONS {
    SET_USER_DATA = 'SET_USER_DATA',
}


export type authInitialStatePropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState: authInitialStatePropsType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: authInitialStatePropsType = initialState, action: ActionsType): authInitialStatePropsType => {

    switch (action.type) {
        case USERS_ACTIONS.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }


}

export type ActionsType = ReturnType<typeof setAuthUserData>

// Action Creators
export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: USERS_ACTIONS.SET_USER_DATA,
        payload: {
            id,
            login,
            email
        }
    } as const
}

// Thunk Creator
type ResponseType = {
    data: AuthResponseType
}
type AuthResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    'messages': [],
    'fieldsErrors': [],
    'resultCode': 0
}

export const getUserData = () => (dispatch: Dispatch) => {
    usersAPI.setAuthUserData()
        .then((response: ResponseType) => {
            const data = response.data.data
            if (!response.data.resultCode) {
                dispatch(setAuthUserData(data.id, data.login, data.email))
            }
        })
}