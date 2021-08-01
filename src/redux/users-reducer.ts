import { Dispatch } from "redux";
import { ResponseType, usersAPI } from "../API/api";
import { AppThunkType, InferActionsTypes } from "./store";
import { updateObjectInArray } from "../utils/object-helpers";

export enum USERS_ACTIONS {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS",
}

const initialState = {
    users: [] as UsersInitialStatePropsType[],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
};

export const usersReducer = (
    state: UsersInitialStateType = initialState,
    action: UserReducerActions
): UsersInitialStateType => {
    switch (action.type) {
        case USERS_ACTIONS.FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {
                    followed: true,
                }),
            };
        case USERS_ACTIONS.UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {
                    followed: false,
                }),
            };
        case USERS_ACTIONS.SET_USERS:
            return { ...state, users: [...action.users] };
        case USERS_ACTIONS.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case USERS_ACTIONS.SET_TOTAL_USERS_COUNT:
            return { ...state, totalCount: action.totalCount };
        case USERS_ACTIONS.TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case USERS_ACTIONS.TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollow
                    ? [...state.followingInProgress, action.userId]
                    : [
                          ...state.followingInProgress.filter(
                              (id) => id !== action.userId
                          ),
                      ],
            };
        default:
            return state;
    }
};

export const actions = {
    followSuccess: (userID: number) => {
        return { type: USERS_ACTIONS.FOLLOW, userID } as const;
    },
    unfollowSuccess: (userID: number) => {
        return { type: USERS_ACTIONS.UNFOLLOW, userID } as const;
    },
    setUsers: (users: UsersInitialStatePropsType[]) => {
        return { type: USERS_ACTIONS.SET_USERS, users } as const;
    },
    setCurrentPage: (currentPage: number) => {
        return { type: USERS_ACTIONS.SET_CURRENT_PAGE, currentPage } as const;
    },
    setTotalUsersCount: (totalCount: number) => {
        return {
            type: USERS_ACTIONS.SET_TOTAL_USERS_COUNT,
            totalCount,
        } as const;
    },
    toggleIsFetching: (isFetching: boolean) => {
        return { type: USERS_ACTIONS.TOGGLE_IS_FETCHING, isFetching } as const;
    },
    toggleFollowingProgress: (isFollow: boolean, userId: number) => {
        return {
            type: USERS_ACTIONS.TOGGLE_IS_FOLLOWING_IN_PROGRESS,
            isFollow,
            userId,
        } as const;
    },
};

const followUnfollowFlow = async (
    dispatch: Dispatch,
    userId: number,
    apiMethod: (userId: number) => Promise<ResponseType>,
    actionCreator: (userId: number) => UserReducerActions
) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
};

// Thunk Creator
export const getUsers =
    (page: number, pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);

        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    };
export const follow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        const apiMethod = usersAPI.follow.bind(usersAPI);

        await followUnfollowFlow(
            dispatch,
            userId,
            apiMethod,
            actions.followSuccess
        );
    };
export const unfollow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        const apiMethod = usersAPI.unfollow;

        await followUnfollowFlow(
            dispatch,
            userId,
            apiMethod,
            actions.unfollowSuccess
        );
    };

// Types
export type UserReducerActions = InferActionsTypes<typeof actions>;
export type ThunkType = AppThunkType<UserReducerActions>;

export type UsersInitialStateType = typeof initialState;

export type UsersInitialStatePropsType = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
};
