import React from "react";
import { PostType } from "../../../../types/types";
import s from "./Post.module.css";

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avatar-2-story.jpg"
                alt="Logo with Profile"
            />
            <p>{props.message}</p>
            <p>Like {props.likesCount}</p>
        </div>
    );
};

export default Post;
