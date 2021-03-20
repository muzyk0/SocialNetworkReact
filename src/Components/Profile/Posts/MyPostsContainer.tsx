import React from 'react';
import {ActionsType, PostType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {StoreType} from '../../../redux/redux-store';


export type ProfilePostType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const state =  props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))

    }


    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
    />
}