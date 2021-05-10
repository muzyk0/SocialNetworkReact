import {authAPI} from '../API/api';
import {AppThunkType} from './store';

export enum USERS_ACTIONS {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_AUTH_ERROR = 'SET_AUTH_ERROR',
}


export type authInitialStatePropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    error: string | null
}

const initialState: authInitialStatePropsType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    error: null
}

export const authReducer = (state: authInitialStatePropsType = initialState, action: authActionsType): authInitialStatePropsType => {

    switch (action.type) {
        case USERS_ACTIONS.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case USERS_ACTIONS.SET_AUTH_ERROR:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }


}

// Action Creators
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: USERS_ACTIONS.SET_USER_DATA,
        payload: {
            id,
            login,
            email,
            isAuth,
        }
    } as const
}

export const setAuthError = (error: string | null) => {
    return {
        type: USERS_ACTIONS.SET_AUTH_ERROR,
        payload: {
            error
        }
    } as const
}
// Thunk Creators

export const getAuthUserData = (): AppThunkType => async dispatch => {
    try {
        const response = await authAPI.me()
        const {id, login, email} = response.data.data
        if (!response.data.resultCode) {
            dispatch(setAuthUserData(id, login, email, true))
        }

    } catch (e) {
        throw new Error()
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    try {
        const response = await authAPI.login(email, password, rememberMe)

        switch (response.data.resultCode) {
            case 0:
                return dispatch(getAuthUserData())
            case 1:
            case 10:
                return dispatch(setAuthError(response.data.messages[0]))
        }

    } catch (e) {
        throw new Error()
    }
}
export const logout = (): AppThunkType => async dispatch => {
    try {
        const response = await authAPI.logout()

        if (!response.data.resultCode) {
            dispatch(setAuthUserData(null, null, null, false))
        }

    } catch (e) {
        throw new Error()
    }
}

// Types
export type authActionsType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setAuthError>
