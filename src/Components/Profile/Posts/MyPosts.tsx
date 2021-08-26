import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";
import AddNewPostForm, { NewPostFormDataType } from "./AddNewPostForm";

export const MyPosts = React.memo((props: MyPostsPropsType) => {
  const postsElements = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likesCount={post.likesCount}
    />
  ));

  const onAddPost = (formData: NewPostFormDataType) => {
    props.addPost(formData.pastText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div className={s.new_post}>
        <AddNewPostForm onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});
