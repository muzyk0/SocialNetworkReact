import React, {ChangeEvent} from 'react';
import s from './Posts.module.css'
import Post from './Post/Post';
import {ActionsType, PostType} from '../../../redux/state';

export type ProfilePostType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


const Posts = (props: ProfilePostType) => {

    const postsElements = props.posts.map(post =>
        <Post id={post.id}
              message={post.message}
              likesCount={post.likesCount}/>)

    const addPost = () => {
        props.dispatch({type: 'ADD-POST', postText: props.newPostText})
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value

        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})

    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;