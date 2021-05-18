import {AppThunkType} from './store';
import {getAuthUserData} from './auth-reducer';

export enum USERS_ACTIONS {
    INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
}


const initialState = {
    initialized: false as boolean
}

export const appReducer = (state: authInitialStatePropsType = initialState, action: appActionsType): authInitialStatePropsType => {

    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state, initialized: true
            }
        default:
            return state
    }


}

// Action Creators
export const initializedSuccess = () => ({
        type: USERS_ACTIONS.INITIALIZED_SUCCESS,
    } as const
)

// Thunk Creators
export const initializeApp = (): AppThunkType => async dispatch => {
    const promise = await dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

// Types
export type authInitialStatePropsType = typeof initialState
export type initializedSuccessType = ReturnType<typeof initializedSuccess>

export type appActionsType =
    | initializedSuccessType
