import usersReducer, { actions, InitialState } from "./users-reducer";

let state: InitialState;

beforeEach(() => {
    state = {
        users: [
            {
                id: 1,
                name: "Vlad",
                followed: false,
                photos: { small: null, large: null },
                status: "Status 1",
            },
            {
                id: 2,
                name: "Vlad 2",
                followed: false,
                photos: { small: null, large: null },
                status: "Status 2",
            },
            {
                id: 3,
                name: "Vlad 3",
                followed: true,
                photos: { small: null, large: null },
                status: "Status 3",
            },
            {
                id: 4,
                name: "Vlad 3",
                followed: true,
                photos: { small: null, large: null },
                status: "Status 4",
            },
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    };
});

test("following the user should be success", () => {
    const result = usersReducer(state, actions.followSuccess(2));

    expect(result.users[0].followed).toBeFalsy();
    expect(result.users[1].followed).toBeTruthy();
});

test("unfolowing the user should be success", () => {
    const result = usersReducer(state, actions.unfollowSuccess(3));

    expect(result.users[2].followed).toBeFalsy();
    expect(result.users[3].followed).toBeTruthy();
});
