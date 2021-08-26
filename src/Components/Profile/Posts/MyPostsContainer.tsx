import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/store";
import { Dispatch } from "redux";
import { PostType } from "../../../types/types";
import { actions } from "../../../redux/profile-reducer";

type MapStateToPropsType = {
  posts: Array<PostType>;
};
type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void;
};

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost(newPostText: string) {
      dispatch(actions.addPostActionCreator(newPostText));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
