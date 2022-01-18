import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
    getAllowedUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
} from "../../redux/reselectors/users-selectors";
import { AppStateType } from "../../redux/store";
import {
    follow,
    requestUsers,
    unfollow,
    FilterUserType,
} from "../../redux/users-reducer";
import { UserType } from "../../types/types";
import { Preloader } from "../common/Preloader/Preloader";
import Users from "./Users";
import { getFilter as getUserFilter } from "../../redux/reselectors/users-selectors";

export class UsersContainerAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        const { currentPage, pageSize, filter } = this.props;
        this.props.getUsers(currentPage, pageSize, filter);
    }

    onPageChanged = (page: number) => {
        const { getUsers, pageSize, filter } = this.props;
        getUsers(page, pageSize, filter);
    };

    onFilterChanged = (filter: FilterUserType) => {
        const { pageSize } = this.props;

        this.props.getUsers(1, pageSize, filter);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}

                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    onPageChanged={this.onPageChanged}
                    onFilterChanged={this.onFilterChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

type MapStateToPropsType = {
    users: Array<UserType>;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
    filter: FilterUserType;
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getAllowedUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUserFilter(state),
    };
};

const connector = connect(mapStateToProps, {
    getUsers: requestUsers,
    follow,
    unfollow,
});

export type UsersPropsType = ConnectedProps<typeof connector>;

export default connector(UsersContainerAPI);
