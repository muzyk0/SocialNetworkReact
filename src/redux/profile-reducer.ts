export enum PROFILE_ACTION_TYPE {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET_PROFILE_INFO-NEW-POST-TEXT',
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    'aboutMe': string | null
    'contacts': {
        'facebook': string | null
        'website': string | null
        'vk': string | null
        'twitter': string | null
        'instagram': string | null
        'youtube': string | null
        'github': string | null
        'mainLink': string | null
    },
    'lookingForAJob': string | null
    'lookingForAJobDescription': string | null
    'fullName': string | null
    'userId': number
    'photos': {
        'small': string | null
        'large': string | null
    }
}
const initialState = {
    newPostText: '',
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
}

export type ProfileReducerInitialStateType = typeof initialState


export const profileReducer = (state: ProfileReducerInitialStateType = initialState, action: ActionsType): ProfileReducerInitialStateType => {

    switch (action.type) {
        case PROFILE_ACTION_TYPE.ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            const trimmedText = newPost.message
            if (trimmedText) {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }

            return state
        case PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case PROFILE_ACTION_TYPE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }


}

type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => {
    return {type: PROFILE_ACTION_TYPE.ADD_POST} as const
}
export const updateNewPostTextAC = (postText: string) => {
    return {type: PROFILE_ACTION_TYPE.UPDATE_NEW_POST_TEXT, newText: postText} as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {type: PROFILE_ACTION_TYPE.SET_USER_PROFILE, profile} as const
}
