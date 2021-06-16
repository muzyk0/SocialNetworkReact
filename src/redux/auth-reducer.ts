import {authAPI, securityAPI} from '../API/api';
import {AppThunkType} from './store';
import {stopSubmit} from 'redux-form';

export enum USERS_ACTIONS {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_AUTH_ERROR = 'SET_AUTH_ERROR',
    GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS',
}


export type authInitialStatePropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    error: string | null
    /** if null, then captcha is not required*/
    captchaUrl: string | null
}

const initialState: authInitialStatePropsType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    error: null,
    captchaUrl: null,
}

export const authReducer = (state: authInitialStatePropsType = initialState, action: authActionsType): authInitialStatePropsType => {

    switch (action.type) {
        case USERS_ACTIONS.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case USERS_ACTIONS.SET_AUTH_ERROR:
        case USERS_ACTIONS.GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: USERS_ACTIONS.GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl
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
        if (!response.data.resultCode) {
            const {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    } catch (e) {
        throw new Error()
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType => async dispatch => {
    try {
        const response = await authAPI.login(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            return dispatch(getAuthUserData())
        } else {// return dispatch(setAuthError(response.data.messages[0]))
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            return dispatch(stopSubmit('Login', {_error: message}))
        }

    } catch (e) {
        throw new Error()
    }
}
export const getCaptchaUrl = (): AppThunkType => async dispatch => {
    try {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url

        dispatch(getCaptchaUrlSuccess(captchaUrl))
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
    | ReturnType<typeof getCaptchaUrlSuccess>
    | ReturnType<typeof setAuthError>
