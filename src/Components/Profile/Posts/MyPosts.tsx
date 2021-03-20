import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostType} from '../../../redux/store';


export type MyPostsPropsType = {
    newPostText: string
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (value: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(post =>
        <Post id={post.id}
              message={post.message}
              likesCount={post.likesCount}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.new_post}>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
