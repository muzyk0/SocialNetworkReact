import {profileAPI} from "../API/api";
import {AppThunkType} from "./store";

export enum PROFILE_ACTION_TYPE {
    ADD_POST = "APP/PROFILE/ADD-POST",
    SET_USER_PROFILE = "APP/PROFILE/SET_PROFILE_INFO-NEW-POST-TEXT",
    SET_STATUS = "APP/PROFILE/SET_STATUS",
    DELETE_POST = "APP/PROFILE/DELETE_POST",
    SAVE_PHOTO_SUCCESS = "APP/PROFILE/SAVE_PHOTO_SUCCESS",
}


let initialState = {
    posts: [
        {
            id: 1,
            message: "Good this site",
            likesCount: 10
        },
        {
            id: 2,
            message: "Good this site",
            likesCount: 10
        }
    ] as PostType[],
    profile: null as ProfileType | null,
    status: "",
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
        case PROFILE_ACTION_TYPE.SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state
    }


}

export type ProfileActionsType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

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
export const savePhotoSuccess = (photos: { small: string | null, large: string | null }) => {
    return {type: PROFILE_ACTION_TYPE.SAVE_PHOTO_SUCCESS, photos} as const
}

// Thunk Creator
export const getUserProfile = (userId: number): AppThunkType => async dispatch => {
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
export const savePhoto = (file: File): AppThunkType => async dispatch => {
    try {
        const response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    } catch (e) {
        throw new Error(e)
    }
}
export const updateProfileInfo = (values: ProfileType): AppThunkType => async (dispatch,  getState) => {
    try {
        const userId = getState().auth.id
        const response = await profileAPI.saveProfile(values)
        if (response.data.resultCode === 0) {
            if (userId) {
                dispatch(getUserProfile(userId))
            }
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


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}