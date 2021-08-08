import React from "react";
import { UserType } from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    users: UserType[];
    totalCount: number;
    pageSize: number;
    currentPage: number;
    followingInProgress: number[];
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    onPageChanged: (page: number) => void;
};

const Users: React.FC<PropsType> = (props) => {
    const {
        currentPage,
        onPageChanged,
        totalCount,
        pageSize,
        users,
        follow,
        unfollow,
        followingInProgress,
    } = props;

    const UsersEl = users.map((u) => {
        return (
            <User
                key={u.id}
                users={u}
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow}
                onPageChanged={onPageChanged}
            />
        );
    });

    return (
        <>
            <div>
                <Paginator
                    onPageChanged={onPageChanged}
                    pageSize={pageSize}
                    totalItemsCount={totalCount}
                    currentPage={currentPage}
                />
                {UsersEl}
            </div>
        </>
    );
};

export default Users;
