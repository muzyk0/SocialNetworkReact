import {profileAPI} from '../API/api';
import {AppThunkType} from './store';

export enum PROFILE_ACTION_TYPE {
    ADD_POST = 'APP/PROFILE/ADD-POST',
    SET_USER_PROFILE = 'APP/PROFILE/SET_PROFILE_INFO-NEW-POST-TEXT',
    SET_STATUS = 'APP/PROFILE/SET_STATUS',
    DELETE_POST = 'APP/PROFILE/DELETE_POST',
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: string | null
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}
let initialState = {
    posts: [
        {
            id: 1,
            message: 'Good this site',
            likesCount: 10
        },
        {
            id: 2,
            message: 'Good this site',
            likesCount: 10
        }
    ] as PostType[],
    profile: null as ProfileType | null,
    status: '',
}

export type ProfileReducerInitialStateType = typeof initialState


export const profileReducer = (state: ProfileReducerInitialStateType = initialState, action: ProfileActionsType): ProfileReducerInitialStateType => {

    switch (action.type) {
        case PROFILE_ACTION_TYPE.ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
            }


        case PROFILE_ACTION_TYPE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case PROFILE_ACTION_TYPE.SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case PROFILE_ACTION_TYPE.DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        default:
            return state
    }


}

export type ProfileActionsType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

// Action Creators
export const addPostActionCreator = (newPostText: string) => {
    return {type: PROFILE_ACTION_TYPE.ADD_POST, newPostText} as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {type: PROFILE_ACTION_TYPE.SET_USER_PROFILE, profile} as const
}
export const setStatus = (status: string) => {
    return {type: PROFILE_ACTION_TYPE.SET_STATUS, status} as const
}
export const deletePost = (postId: number) => {
    return {type: PROFILE_ACTION_TYPE.DELETE_POST, postId} as const
}

// Thunk Creator
export const getUserProfile = (userId: string): AppThunkType => async dispatch => {
    try {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    } catch (e) {
        console.warn(e)
    }
}
export const getStatus = (userId: string): AppThunkType => async dispatch => {
    try {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    } catch (e) {
        console.warn(e)
    }
}
export const updateStatus = (status: string): AppThunkType => async dispatch => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        throw new Error(e)
    }
}


// const handlers = {
//     [LOADING]: (state) => {
//         return {...state, isLoading: true}
//     },
//     DEFAULT: (state) => state,
// }
//
// export const userReducer = (state, action) => {
//     const handler = handlers[action.type] || handlers.DEFAULT
//     return handler(state, action)
// }