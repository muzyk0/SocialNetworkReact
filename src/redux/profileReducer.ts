import {ActionsType, PostType, ProfilePageType} from './store';

const initialState: ProfilePageType = {
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
    ],
}

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreator = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
}
export const updateNewPostTextAC = (postText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText} as const
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }


}