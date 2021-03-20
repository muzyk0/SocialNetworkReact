import React from 'react';
import {ActionsType, PostType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {StoreType} from '../../../redux/redux-store';
import {StoreContext} from '../../../redux/StoreContext';


export type ProfilePostType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = () => {




    return (
        <StoreContext.Consumer>
            {store => {

                const state =  store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.newPostText))
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))

                }

                return <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}