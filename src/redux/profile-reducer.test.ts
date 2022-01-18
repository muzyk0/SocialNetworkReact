import { ProfileType } from "../types/types";
import profileReducer, { actions, InitialStateType } from "./profile-reducer";

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        posts: [
            {
                id: 1,
                message: "Good this site",
                likesCount: 10,
            },
            {
                id: 2,
                message: "Good this site",
                likesCount: 10,
            },
        ],
        profile: null,
        status: "",
    } as InitialStateType;
});

test("New post should be added", () => {
    const postMessage = `it it's good`;
    const action = actions.addPostActionCreator(postMessage);
    let newState = profileReducer(startState, action);

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe(postMessage);
    expect(newState.posts[2].likesCount).toBe(0);
});

test("User profile is updated", () => {
    const UserProfile: ProfileType = {
        aboutMe: "Super man",
        contacts: {
            facebook: "facebook",
            website: "website",
            vk: "vk",
            twitter: "twitter",
            instagram: "instagram",
            youtube: "youtube",
            github: "github",
            mainLink: "mainLink",
        },
        lookingForAJob: true,
        lookingForAJobDescription: "lookingForAJobDescription",
        fullName: "fullName",
        userId: 10,
        photos: {
            small: "photos",
            large: "large",
        },
    };

    const action = actions.setUserProfile(UserProfile);
    let newState = profileReducer(startState, action);

    expect(newState.profile).toEqual(UserProfile);
});

test("New status should be set", () => {
    const statue: string = "I am a Man";

    const action = actions.setStatus(statue);
    let newState = profileReducer(startState, action);

    expect(newState.status).toEqual(statue);
});

test("After deleting length of posts should be decrement", () => {
    const postId: number = 1;

    const action = actions.deletePost(postId);
    let newState = profileReducer(startState, action);

    expect(newState.posts.length).toBe(1);
});

test(`After deleting length shouldn't be decrement if id incorrect`, () => {
    const postId: number = 1000;

    const action = actions.deletePost(postId);
    let newState = profileReducer(startState, action);

    expect(newState.posts.length).toBe(2);
});
