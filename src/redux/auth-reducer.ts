import {authAPI} from '../API/api';
import {AppThunkType} from './store';
import {FormDataType} from '../Components/Login/LoginForm';

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

export const authReducer = (state: authInitialStatePropsType = initialState, action: authActionsType): authInitialStatePropsType => {

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

// Action Creators
export type authActionsType = ReturnType<typeof setAuthUserData>

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

// export const getAuthUserData = () => (dispatch: Dispatch<authActionsType>) => {
//     authAPI.me()
//         .then((response: ResponseType) => {
//             const {id, login, email} = response.data.data
//             if (!response.data.resultCode) {
//                 dispatch(setAuthUserData(id, login, email))
//             }
//         })
// }

export const getAuthUserData = (): AppThunkType => async dispatch => {
    try {
        const response = await authAPI.me()
        const {id, login, email} = response.data.data
        if (!response.data.resultCode) {
            dispatch(setAuthUserData(id, login, email))
        }

    } catch (e) {
        throw new Error()
    }

}
export const loginTC = (formData: FormDataType): AppThunkType => async dispatch => {
    try {
        const {login, password, rememberMe} = formData
        const response = await authAPI.login(login, password, rememberMe)

        if (!response.data.resultCode) {
            dispatch(getAuthUserData())
        }

    } catch (e) {
        throw new Error()
    }

}