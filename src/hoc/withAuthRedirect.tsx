import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/store";

type MapStatePropsType = {
    isAuth: boolean;
};

const mapStateToPropsForRedirect = (
    state: AppStateType
): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
});

function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        const { isAuth, ...restProps } = props;

        if (!props.isAuth) return <Redirect to={"/login"} />;

        return <Component {...(restProps as T)} />;
    };

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export default withAuthRedirect;
