export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number
    message: string
    likesCount: number
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
            id: 1,
            message: 'Good this site',
            likesCount: 10
        }
    ] as PostType[],
}

export type ProfileReducerInitialStateType = typeof initialState


type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextAC>

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (postText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText} as const
}

export const profileReducer = (state: ProfileReducerInitialStateType = initialState, action: ActionsType): ProfileReducerInitialStateType => {

    switch (action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state
    }


}